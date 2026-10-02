// SPDX-License-Identifier: MIT
// Copyright (c) 2026 Trinsic Technologies, Inc.

import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const failures = [];

const expected = {
  icons: [
    "age-verification.svg",
    "bank-based-ids.svg",
    "biometric-registries.svg",
    "database-check.svg",
    "eidas-1-0.svg",
    "eid-cards.svg",
    "eudi-wallets.svg",
    "mobile-drivers-licenses.svg",
    "national-id-wallets.svg",
    "reusable-ids.svg",
  ],
  components: [
    "eu-dots.svg",
    "person.svg",
    "registry.svg",
    "sign-in.svg",
    "wallet.svg",
  ],
};

function fail(file, message) {
  failures.push(`${file}: ${message}`);
}

function drawableElements(svg) {
  return svg.match(/<(?:path|circle|ellipse|rect)\b[^>]*\/>/g) ?? [];
}

function checkTagBalance(file, svg) {
  const stack = [];
  const tokens = svg.match(/<!--[\s\S]*?-->|<[^>]+>/g) ?? [];

  for (const token of tokens) {
    if (token.startsWith("<!--") || token.startsWith("<?")) continue;
    if (token.startsWith("</")) {
      const name = token.match(/^<\/\s*([\w:-]+)/)?.[1];
      const open = stack.pop();
      if (name !== open) fail(file, `closing <${name}> does not match <${open}>`);
      continue;
    }
    if (token.endsWith("/>")) continue;
    const name = token.match(/^<\s*([\w:-]+)/)?.[1];
    if (name) stack.push(name);
  }

  if (stack.length) fail(file, `unclosed tags: ${stack.join(", ")}`);
}

function validateSvg(file, svg) {
  if (!svg.endsWith("\n")) fail(file, "file must end with a newline");
  if (/\t| +$/m.test(svg)) fail(file, "use spaces and no trailing whitespace");
  if (!svg.includes("Digital ID Icons by Trinsic Technologies, Inc. | CC BY 4.0")) {
    fail(file, "missing artwork copyright/license notice");
  }
  if (!/<svg\b[^>]*xmlns="http:\/\/www\.w3\.org\/2000\/svg"/.test(svg)) {
    fail(file, "missing SVG namespace");
  }
  if (!/<svg\b[^>]*viewBox="0 0 24 24"/.test(svg)) fail(file, "viewBox must be 0 0 24 24");
  if (!/<svg\b[^>]*width="24"/.test(svg) || !/<svg\b[^>]*height="24"/.test(svg)) {
    fail(file, "source dimensions must be 24 by 24");
  }
  if (!svg.includes("currentColor")) fail(file, "must use currentColor");
  if (/#[0-9a-f]{3,8}\b|\brgba?\(|\bhsla?\(/i.test(svg)) fail(file, "hard-coded color found");
  if (/\b(?:fill|stroke)="(?!none"|currentColor")[^"]+"/.test(svg)) {
    fail(file, "fill and stroke values must be none or currentColor");
  }
  if (/<(?:script|foreignObject|image|style|metadata)\b/i.test(svg)) fail(file, "unsafe or nonportable element found");
  if (/\son[a-z]+\s*=|\b(?:href|xlink:href)\s*=|\burl\s*\(|\bdata:/i.test(svg)) {
    fail(file, "event handler or external reference found");
  }
  if (/\b(?:role|aria-label|aria-labelledby)\s*=|<title\b/i.test(svg)) {
    fail(file, "raw assets must leave accessible naming to the embedding context");
  }
  checkTagBalance(file, svg);
}

async function listSvgDirectory(name) {
  const entries = (await readdir(path.join(root, name)))
    .filter((entry) => entry.endsWith(".svg"))
    .sort();
  const wanted = [...expected[name]].sort();
  if (JSON.stringify(entries) !== JSON.stringify(wanted)) {
    fail(name, `expected [${wanted.join(", ")}], found [${entries.join(", ")}]`);
  }
  return entries;
}

const svgByRelativePath = new Map();
for (const directory of ["icons", "components"]) {
  for (const filename of await listSvgDirectory(directory)) {
    const relative = `${directory}/${filename}`;
    const svg = await readFile(path.join(root, relative), "utf8");
    svgByRelativePath.set(relative, svg);
    validateSvg(relative, svg);
  }
}

const componentUse = {
  "components/wallet.svg": [
    "icons/national-id-wallets.svg",
    "icons/mobile-drivers-licenses.svg",
    "icons/eudi-wallets.svg",
  ],
  "components/sign-in.svg": [
    "icons/reusable-ids.svg",
    "icons/bank-based-ids.svg",
    "icons/eidas-1-0.svg",
  ],
  "components/person.svg": [
    "icons/reusable-ids.svg",
    "icons/biometric-registries.svg",
  ],
  "components/eu-dots.svg": [
    "icons/eudi-wallets.svg",
    "icons/eidas-1-0.svg",
  ],
  "components/registry.svg": ["icons/database-check.svg"],
};

for (const [componentPath, iconPaths] of Object.entries(componentUse)) {
  const elements = drawableElements(svgByRelativePath.get(componentPath));
  for (const iconPath of iconPaths) {
    const icon = svgByRelativePath.get(iconPath);
    for (const element of elements) {
      if (!icon.includes(element)) fail(iconPath, `does not preserve ${componentPath}: ${element}`);
    }
  }
}

// The combining registry form has no component file; it must stay exactly as documented.
const combiningRegistry = [
  '<ellipse cx="12" cy="17" rx="7" ry="2"/>',
  '<path d="M5 17v2c0 1.1 3.13 2 7 2s7-.9 7-2v-2"/>',
];
for (const iconPath of ["icons/biometric-registries.svg"]) {
  for (const element of combiningRegistry) {
    if (!svgByRelativePath.get(iconPath).includes(element)) {
      fail(iconPath, `does not preserve the combining registry form: ${element}`);
    }
  }
}

for (const file of ["components/eu-dots.svg", "icons/eudi-wallets.svg", "icons/eidas-1-0.svg"]) {
  const circles = svgByRelativePath.get(file).match(/<circle\b/g)?.length ?? 0;
  if (circles !== 7) fail(file, `EU-related cue must contain seven dots, found ${circles}`);
}

const iconFingerprints = new Map();
for (const iconPath of [...svgByRelativePath.keys()].filter((file) => file.startsWith("icons/"))) {
  const fingerprint = drawableElements(svgByRelativePath.get(iconPath)).join("");
  const duplicate = iconFingerprints.get(fingerprint);
  if (duplicate) fail(iconPath, `duplicates canonical geometry from ${duplicate}`);
  iconFingerprints.set(fingerprint, iconPath);
}

const readme = await readFile(path.join(root, "README.md"), "utf8");
const relativeLinks = [
  ...readme.matchAll(/(?:\]\(|src=")((?:\.\/)?(?!https?:)[^\)"#]+)(?:#[^\)"]*)?[\)"]/g),
].map((match) => match[1]);
for (const link of relativeLinks) {
  try {
    await stat(path.resolve(root, link));
  } catch {
    fail("README.md", `broken relative link: ${link}`);
  }
}

if (failures.length) {
  console.error(`Digital ID Icons validation failed (${failures.length}):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(JSON.stringify({
  verdict: "pass",
  canonicalIcons: expected.icons.length,
  publicComponents: expected.components.length,
  checkedSvgFiles: svgByRelativePath.size,
  componentRelationshipsChecked: Object.values(componentUse).flat().length,
  accessibilityPolicy: "embedding-context",
  licenseMap: {
    artworkAndDocumentation: "CC-BY-4.0",
    codeAndTooling: "MIT",
  },
}, null, 2));
