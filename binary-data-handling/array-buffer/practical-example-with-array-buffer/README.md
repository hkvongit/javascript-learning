# Practical example: parse a .bin file in the browser

This folder contains a small web app that lets you pick a `.bin` file and parse it using **ArrayBuffer** and **DataView**. Use it to try the binary format described in `generate-binary/`.

---

## Run the app with a Node.js live server

From this directory (`practical-example-with-array-buffer`), start a static server with **Node.js**:

```bash
npx --yes serve . -l 3000
```

Then open in your browser:

**http://localhost:3000**

You should see the binary file parser page. Use the file input to choose a `.bin` file; the parsed result will appear below.

To use another port (e.g. 8080):

```bash
npx --yes serve . -l 8080
```

---

## File to use for testing

Use the sample binary file produced by the script in `generate-binary/`:

| File                                | Description                                                    |
| ----------------------------------- | -------------------------------------------------------------- |
| **generate-binary/sample-save.bin** | Sample binary file (version, timestamp, item count, item IDs). |

**If `sample-save.bin` is not there**, generate it first:

```bash
cd generate-binary
node create-sample.js
cd ..
```

That creates `generate-binary/sample-save.bin`. In the browser, choose this file with the “Choose a .bin file” input to test the parser.

For the byte layout and field meanings, see **generate-binary/FORMAT.md** and **generate-binary/README.md**.
