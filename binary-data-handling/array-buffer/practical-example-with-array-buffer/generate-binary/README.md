# Binary file example

This folder contains a **sample binary file** and the script that generates it. Use it to practice parsing binary data with **ArrayBuffer** and **DataView** (e.g. in the browser).

## Files

| File                 | Description                                                      |
| -------------------- | ---------------------------------------------------------------- |
| **FORMAT.md**        | Byte layout: version, timestamp, item count, payload.            |
| **create-sample.js** | Node script that writes `sample-save.bin`.                       |
| **sample-save.bin**  | Generated binary file (run `node create-sample.js` to recreate). |

## Generate the sample file

```bash
node create-sample.js
```

Creates `sample-save.bin` (e.g. 36 bytes: 16-byte header + 5 item IDs × 4 bytes).

## Parse it in the browser

1. Put `sample-save.bin` on a local server (or use an `<input type="file">` to pick it).
2. Read the file as ArrayBuffer: `const arrayBuffer = await file.arrayBuffer()`.
3. Use **DataView** to read at fixed offsets:
   - `dataView.getUint32(0, true)` → version
   - - getUint32: reads 4 bytes starting at offset. Use it for fields that are stored as 4-byte numbers (e.g. version, item count, each item ID).
   - - `true` indicates little-endian: the least significant byte is stored first in memory. Example: the 32-bit value 0x12345678 is stored as bytes 78 56 34 12
   - - - If it was `false` then it is big-endian: the most significant byte is first. Same value mentioned above would be stored as 12 34 56 78.
   - `dataView.getBigUint64(4, true)` → timestamp
   - - getBigUint64(offset) reads 8 bytes starting at offset. Use it for fields that are stored as 8-byte numbers (e.g. timestamp)
   - `dataView.getUint32(12, true)` → item count
   - Loop: `dataView.getUint32(16 + i * 4, true)` → each item ID

See **binary-data-handling.md** for ArrayBuffer and DataView basics.
