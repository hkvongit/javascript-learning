# Sample binary file format (save/config)

Layout of `sample-save.bin`:

| Offset (bytes) | Size | Type        | Meaning                    |
|----------------|------|-------------|----------------------------|
| 0              | 4    | Uint32 LE   | Format version (e.g. 1)    |
| 4              | 8    | BigUint64 LE| Timestamp (ms since epoch)  |
| 12             | 4    | Uint32 LE   | Number of items (N)        |
| 16             | N×4  | Uint32 LE   | Item IDs (payload)         |

- **LE** = little-endian (same as typical x86/JS).
- Payload = list of 32-bit unsigned integers (item IDs), one after another.

Example: version=1, timestamp=now, 3 items with IDs 101, 102, 103 → header 16 bytes + 12 bytes payload = 28 bytes total.
