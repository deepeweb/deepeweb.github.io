function wrapCode(userCode, useJquery = true) {
  return `
    <!doctype html>
    <html>
    <head>
      <meta charset="UTF-8">
      ${useJquery ? '<script src="https://code.jquery.com/jquery-3.6.0.min.js"><\/script>' : ""}
      <style>
        body { margin:10px; font-family:monospace; background:#fff; }
        #consoleOutput { 
          background:#111; 
          color:#0f0; 
          padding:10px; 
          margin-top:10px; 
          font-size:14px; 
          white-space:pre-wrap; 
          display:none;
          border-radius:4px;
        }
      </style>
    </head>
    <body>
      <script>
        (function() {
          const oldLog = console.log;
          window._logs = [];
          console.log = function(...args) {
            window._logs.push(args.map(a => 
              (typeof a === "object" ? JSON.stringify(a, null, 2) : a)
            ).join(" "));
            oldLog.apply(console, args);
          };
        })();
      <\/script>

      ${userCode}

      <div id="consoleOutput" style="background:none;color: black;"></div>
      <script>
        (function(){
          const outputDiv = document.getElementById("consoleOutput");
          if(window._logs.length > 0){
            outputDiv.style.display = "block";
            outputDiv.innerText = window._logs.join("\\n");
          }
        })();
      <\/script>
    </body>
    </html>
  `;
}


// Initialize all editors on page
document.querySelectorAll(".editor-wrap").forEach((wrap, index) => {
  const textarea = wrap.querySelector(".source");
  const copyBtn = wrap.querySelector(".copyBtn");
  const outputBtn = wrap.querySelector(".outputBtn");
  const backBtn = wrap.querySelector(".backBtn");
  const themeBtn = wrap.querySelector(".themeBtn");
  const restoreBtn = wrap.querySelector(".restoreBtn"); // 👈 नया बटन
  const previewFrame = wrap.querySelector(".output-frame");
  

  // Editor init
  let darkMode = true;
  const editor = CodeMirror.fromTextArea(textarea, {
    mode: "application/json",
    lineNumbers: true,
    lineWrapping: false,
    tabSize: 2,
    theme: "dracula"
  });
  // Auto adjust editor height
  function autoResizeEditor() {
    const lineCount = editor.lineCount();
    const lineHeight = 22; // approx px per line
    const minHeight = 150;
    const maxHeight = 600;
    const newHeight = Math.min(Math.max(lineCount * lineHeight, minHeight), maxHeight);
    editor.setSize("100%", "auto");
  }
  editor.on("change", autoResizeEditor);
  autoResizeEditor();

  // 👇 Original Code Save
  const originalCode = editor.getValue();

  // Copy button
  copyBtn.addEventListener("click", async () => {
  const code = editor.getValue();
  try {
    await navigator.clipboard.writeText(code);
  } catch {
    const ta = document.createElement("textarea");
    ta.value = code;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
  }

});

  // Output button
outputBtn.addEventListener("click", async () => {
  const code = editor.getValue();
  const mode = editor.getOption("mode"); // detect language
  previewFrame.style.display = "block";
  editor.getWrapperElement().style.display = "none";
  outputBtn.style.display = "none";
  backBtn.style.display = "inline-block";

  // Default
  previewFrame.srcdoc = "<pre style='color:black;padding:10px;'>Running...</pre>";

  try {
    if (mode === "application/json") {
      // ✅ JSON Mode
      const parsed = JSON.parse(code);
      previewFrame.srcdoc =
        "<pre style='color:black;padding:10px;'>" +
        JSON.stringify(parsed, null, 2) +
        "</pre>";

    } else if (mode === "python") {
      // ✅ Python Mode
      const py = await loadPython();
      let output = [];
      let error = [];

      py.setStdout({ batched: (msg) => output.push(msg) });
      py.setStderr({ batched: (msg) => error.push(msg) });

      await py.runPythonAsync(code);

      if (error.length > 0) {
        previewFrame.srcdoc =
          "<pre style='color:red;padding:10px;'>" +
          error.join("\n") +
          "</pre>";
      } else if (output.length > 0) {
        previewFrame.srcdoc =
          "<pre style='color:black;padding:10px;'>" +
          output.join("") +
          "</pre>";
      } else {
        previewFrame.srcdoc =
          "<pre style='color:gray;padding:10px;'>✓ Code executed (no output)</pre>";
      }

    } else if (mode === "javascript") {
      // ✅ JavaScript Mode
      try {
        let result = eval(code);
        previewFrame.srcdoc =
          "<pre style='color:white;padding:10px;'>" +
          (result ?? "✓ JS executed") +
          "</pre>";
      } catch (err) {
        previewFrame.srcdoc =
          "<pre style='color:red;padding:10px;'>Error: " + err + "</pre>";
      }

    } else {
      // ✅ HTML Mode (default)
      const finalCode = wrapCode(code, true); // HTML को run कराओ
      previewFrame.srcdoc = finalCode;
    }
  } catch (err) {
    previewFrame.srcdoc =
      "<pre style='color:red;padding:10px;'>Error: " + err + "</pre>";
  }

  // --- Auto adjust height ---
  previewFrame.onload = () => {
    let iframeDoc =
      previewFrame.contentDocument || previewFrame.contentWindow.document;
    if (iframeDoc) {
      const bodyHeight = iframeDoc.body ? iframeDoc.body.scrollHeight : 0;
      const docHeight = iframeDoc.documentElement
        ? iframeDoc.documentElement.scrollHeight
        : 0;
      let finalHeight = Math.max(
        150,
        Math.min(Math.max(bodyHeight, docHeight), 1200)
      );
      previewFrame.style.height = finalHeight + "px";
    }
  };
});



  // Back button
  backBtn.addEventListener("click", () => {
    previewFrame.style.display = "none";
    editor.getWrapperElement().style.display = "block";
    backBtn.style.display = "none";
    outputBtn.style.display = "inline-block";
  });

  
// buttons icon 
// Icons init (call this once)
lucide.createIcons();

// Agar dynamically button text change kar rahe ho (Dark <-> Light)
// to uske andar icon bhi replace karna hoga:
themeBtn.addEventListener("click", () => {
  darkMode = !darkMode;
  if (darkMode) {
    editor.setOption("theme", "dracula");
    themeBtn.innerHTML = '<i data-lucide="moon"></i>';
  } else {
    editor.setOption("theme", "eclipse");
    themeBtn.innerHTML = '<i data-lucide="sun"></i>';
  }
  lucide.createIcons();
});


  // 👇 Restore button
  restoreBtn.addEventListener("click", () => {
    editor.setValue(originalCode);
  });
});


// Output button
outputBtn.addEventListener("click", () => {
  const code = editor.getValue();

  // Wrap with template + console hijack
  const finalCode = `
    <!doctype html>
    <html>
    <head>
      <meta charset="UTF-8">
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      <style>
        body { margin:10px; font-family:sans-serif; }
        #consoleOutput {
          background:#111; color:#0f0; padding:10px; 
          font-family:monospace; white-space:pre-wrap;
          margin-top:15px; border-radius:5px;
        }
      </style>
    </head>
    <body>
      <div id="userContent">${code}</div>
      <pre id="consoleOutput"></pre>
      <script>
        (function(){
          const logArea = document.getElementById("consoleOutput");
          const oldLog = console.log;
          console.log = function(...args){
            args.forEach(a => {
              logArea.textContent += a + "\\n";
            });
            oldLog.apply(console, args);
          };
        })();
      <\/script>
      <script>
        // Run user code
        ${code}
      <\/script>
    </body>
    </html>
  `;

  previewFrame.style.display = "block";
  editor.getWrapperElement().style.display = "none";
  previewFrame.srcdoc = finalCode;
  outputBtn.style.display = "none";
  backBtn.style.display = "inline-block";

  // Auto resize iframe height
  previewFrame.onload = () => {
    let iframeDoc =
      previewFrame.contentDocument || previewFrame.contentWindow.document;
    if (iframeDoc) {
      const bodyHeight = iframeDoc.body ? iframeDoc.body.scrollHeight : 0;
      const docHeight = iframeDoc.documentElement
        ? iframeDoc.documentElement.scrollHeight
        : 0;
      let finalHeight = Math.max(
        150,
        Math.min(Math.max(bodyHeight, docHeight), 1200)
      );
      previewFrame.style.height = finalHeight + "px";
    }
  };
});
