/**
 * Creates sample-save.bin in the same directory.
 * Run: node create-sample.js
 *
 * Format: version (4) + timestamp (8) + itemCount (4) + payload (itemCount × 4 bytes)
 */

const fs = require("fs");
const path = require("path");

// Layout constants (bytes)
const VERSION_OFFSET = 0;
const VERSION_SIZE = 4;
const TIMESTAMP_OFFSET = 4;
const TIMESTAMP_SIZE = 8;
const ITEM_COUNT_OFFSET = 12;
const ITEM_COUNT_SIZE = 4;
const PAYLOAD_OFFSET = 16;

// Sample data
const version = 12;
const timestamp = BigInt(Date.now()); // ms since epoch
const itemIds = [101, 207, 103, 204, 419]; // example item IDs
const itemCount = itemIds.length;

// Total size: header (16) + payload (itemCount * 4)
const totalSize = PAYLOAD_OFFSET + itemCount * 4;
const buffer = Buffer.alloc(totalSize);

// Write version (Uint32, little-endian)
buffer.writeUInt32LE(version, VERSION_OFFSET);

// Write timestamp (BigUint64, little-endian)
buffer.writeBigUint64LE(timestamp, TIMESTAMP_OFFSET);

// Write number of items
buffer.writeUInt32LE(itemCount, ITEM_COUNT_OFFSET);

// Write payload: each item ID as Uint32 LE
itemIds.forEach((id, i) => {
  buffer.writeUInt32LE(id, PAYLOAD_OFFSET + i * 4);
});

const outPath = path.join(__dirname, "sample-save.bin");
fs.writeFileSync(outPath, buffer);

console.log("Written:", outPath);
console.log("Size:", totalSize, "bytes");
console.log(
  "Version:",
  version,
  "| Timestamp:",
  timestamp.toString(),
  "| Items:",
  itemCount,
  "| IDs:",
  itemIds.join(", "),
);
