/// <reference lib="webworker" />
importScripts("https://cdn.jsdelivr.net/pyodide/v0.21.3/full/pyodide.js");
declare var loadPyodide: any;
let pyodide: any;

async function loadPyodideAndPackages() {
  pyodide = await loadPyodide();
  await pyodide.loadPackage(["numpy"]);
  await pyodide.runPython("import numpy as np");
}

let pyodideReadyPromise = loadPyodideAndPackages();

addEventListener('message', ({ data }) => {
  async function runcode() {
    await pyodideReadyPromise;
    let pythonCode: string = `returnvalue = np.math.factorial(${data})`;
    let results = await pyodide.runPythonAsync(pythonCode);
    results = pyodide.globals.toJs().get('returnvalue');
    return results;
  };
  runcode().then((result) => {
    postMessage(result);
  })
});
