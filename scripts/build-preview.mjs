// SPDX-License-Identifier: MIT
// Copyright (c) 2026 Trinsic Technologies, Inc.
//
// Builds the README preview sheets in docs/. The icons use currentColor, which an SVG loaded through
// <img> cannot inherit, so they would render black on GitHub's dark theme. The sheets bake in a color
// per theme. Run `npm run preview` after changing an icon; `npm run check` fails if a sheet is stale.

import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

export const sets = {
  categories: { directory: "icons", columns: 5, cell: [190, 112], size: 40, label: 13, icons: [
  ["national-id-wallets", "National ID Wallets"],
  ["mobile-drivers-licenses", "Mobile Driver's Licenses"],
  ["eudi-wallets", "EUDI Wallets"],
  ["reusable-ids", "Reusable IDs"],
  ["bank-based-ids", "Bank-based IDs"],
  ["eidas-1-0", "eIDAS 1.0"],
  ["database-check", "Database Check"],
  ["biometric-registries", "Biometric Registries"],
  ["eid-cards", "eID Cards"],
  ["age-verification", "Age Verification"],
  ] },
  attributes: { directory: "attributes", columns: 6, cell: [150, 84], size: 28, label: 12, icons: [
  ["name", "Name"],
  ["date-of-birth", "Date of birth"],
  ["place-of-birth", "Place of birth"],
  ["sex", "Sex"],
  ["nationality", "Nationality"],
  ["phone", "Phone"],
  ["email", "Email"],
  ["address", "Address"],
  ["personal-number", "Personal number"],
  ["physical-description", "Physical description"],
  ["personal-status", "Personal status"],
  ["family", "Family"],
  ["document", "Document"],
  ["document-number", "Document number"],
  ["issue-date", "Issue date"],
  ["document-status", "Document status"],
  ["expiration-date", "Expiration date"],
  ["issuing-country", "Issuing country"],
  ["issuing-authority", "Issuing authority"],
  ["vehicle", "Vehicle"],
  ["legal-status", "Legal status"],
  ["match", "Data match"],
  ["face-check", "Face check"],
  ["image-authenticity", "Image authenticity"],
  ["screening", "Screening"],
  ["assurance", "Assurance level"],
  ["authentication", "Authentication"],
  ["selfie", "Selfie"],
  ["document-back", "Document back"],
  ["portrait", "Portrait"],
  ["signature", "Signature"],
  ["report", "Report"],
  ["file", "File"],
  ["identifier", "Identifier"],
  ["timestamp", "Timestamp"],
  ["status", "Status"],
  ["raw-data", "Raw data"],
  ["note", "Note"],
  ["certificate", "Certificate"],
  ["organization", "Organization"],
  ["device", "Device"],
  ["language", "Language"],
  ["location", "Location"],
  ["provider", "Identity provider"],
  ] },
};

const themes = {
  light: { ink: "#171a20", muted: "#596170", background: "#ffffff" },
  dark: { ink: "#f3f5f7", muted: "#a7afba", background: "#0d1117" },
};

const escape = (text) => text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function buildSheet(name, theme) {
  const set = sets[name];
  const colors = themes[theme];
  const [cellWidth, cellHeight] = set.cell;
  const rows = Math.ceil(set.icons.length / set.columns);
  const width = set.columns * cellWidth;
  const height = rows * cellHeight + 16;
  const scale = set.size / 24;
  const cells = [];
  for (const [index, [slug, label]] of set.icons.entries()) {
    const svg = await readFile(path.join(root, set.directory, `${slug}.svg`), "utf8");
    const inner = svg.slice(svg.indexOf(">", svg.indexOf("<svg")) + 1, svg.lastIndexOf("</svg>")).trim();
    const x = (index % set.columns) * cellWidth + (cellWidth - set.size) / 2;
    const y = Math.floor(index / set.columns) * cellHeight + 16;
    cells.push(`  <g transform="translate(${x} ${y}) scale(${scale})" color="${colors.ink}">${inner.replace(/\s*\n\s*/g, "")}</g>`);
    cells.push(`  <text x="${x + set.size / 2}" y="${y + set.size + 22}" text-anchor="middle" fill="${colors.muted}" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="${set.label}">${escape(label)}</text>`);
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">\n` +
    `  <rect width="${width}" height="${height}" fill="${colors.background}"/>\n${cells.join("\n")}\n</svg>\n`;
}

export const sheetPath = (name, theme) => path.join(root, "docs", `preview-${name}-${theme}.svg`);

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  for (const name of Object.keys(sets)) {
    for (const theme of Object.keys(themes)) {
      await writeFile(sheetPath(name, theme), await buildSheet(name, theme));
    }
  }
  console.log("wrote preview sheets to docs/");
}
