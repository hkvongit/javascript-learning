(function () {
  const input = document.getElementById("bin-input");
  const output = document.getElementById("parsed-output");

  function convertBigIntToTimestamp(timeStampBigInt) {
    try {
      const date = new Date(Number(timeStampBigInt));
      return date.toISOString();
    } catch {
      console.error("Some error happened in fn::convertBigIntToTimestamp");
      return null;
    }
  }

  input.addEventListener("change", async function (e) {
    const file = e.target.files?.[0];
    if (!file) return;

    const arrayBuffer = await file.arrayBuffer();
    const dataView = new DataView(arrayBuffer);
    const version = dataView.getUint32(0, true);
    const date = convertBigIntToTimestamp(dataView.getBigUint64(4, true));
    const itemCount = dataView.getUint32(12, true);
    const items = [];
    for (let i = 0; i < itemCount; i++) {
      items.push(dataView.getUint32(16 + i * 4, true));
    }
    console.dir({ version, date, items });
    // Add your parsing logic below. Use arrayBuffer (and DataView/TypedArray as needed)
    // and show the result in the output element.
    output.innerHTML = `<p><em>Parsed output: ${JSON.stringify({ version, date, items })}</em></p>`;
  });
})();
