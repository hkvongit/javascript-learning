/**
 * Problem statement:
 *
 * Build a small Node.js script that:
 * - Reads an image file into a Buffer.
 * - Checks the first 8 bytes (the "magic bytes") to see if the file is really a PNG image.
 * - Logs a success message if the bytes match the PNG signature.
 * - Logs a failure message if they do not match (for example, when you point it at a JPEG file).
 *
 * This demonstrates a practical use of Node.js Buffers:
 * validating file type using raw binary data instead of trusting the file extension.
 */

const fs = require("fs");

const successFile = "cat.png";

// eslint-disable-next-line no-unused-vars
const failFile = "cat-2.jpg";

const filePath = successFile;

// Read the entire file into a Buffer.
// Buffer is Node's way of holding raw binary data (bytes) in memory.
const fileBuffer = fs.readFileSync(filePath);

// A valid PNG signature uses 8 bytes at the start of the file.
// If the file has fewer than 8 bytes, it cannot possibly be a valid PNG.
if (fileBuffer.length < 8) {
  console.log("File too short to be a PNG file");
} else {
  // Check the first 8 bytes of the Buffer against the official PNG signature.
  // PNG files always start with these exact bytes (in hexadecimal):
  // 89 50 4E 47 0D 0A 1A 0A
  const isPng =
    fileBuffer[0] === 0x89 && // First byte: 0x89 (137 in decimal) – special non-ASCII value
    fileBuffer[1] === 0x50 && // Second byte: 0x50 = 80 decimal = 'P' in ASCII
    fileBuffer[2] === 0x4e && // Third byte: 0x4E = 78 decimal = 'N'
    fileBuffer[3] === 0x47 && // Fourth byte: 0x47 = 71 decimal = 'G'
    fileBuffer[4] === 0x0d && // Fifth byte: 0x0D = carriage return
    fileBuffer[5] === 0x0a && // Sixth byte: 0x0A = line feed
    fileBuffer[6] === 0x1a && // Seventh byte: 0x1A = control character used in PNG signature
    fileBuffer[7] === 0x0a; // Eighth byte: 0x0A = line feed

  if (isPng) {
    console.log("Looks like a valid PNG file");
  } else {
    console.log("File is not a valid PNG file by signature");
  }
}
