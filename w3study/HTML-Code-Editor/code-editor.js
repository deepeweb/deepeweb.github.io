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
  cconst copyBtn = document.querySelector(".copyBtn");
const outputBtn = document.querySelector(".outputBtn");
const backBtn = document.querySelector(".backBtn");
const themeBtn = document.querySelector(".themeBtn");
const restoreBtn = document.querySelector(".restoreBtn"); // 👈 नया बटन
  const previewFrame = wrap.querySelector(".output-frame");
  

  // Editor init
  let darkMode = true;
  const editor = CodeMirror.fromTextArea(textarea, {
    mode: "htmlmixed",
    lineNumbers: true,
    lineWrapping: true,
    tabSize: 2,
    theme: "dracula"
  });
  editor.setSize(
    "100%",
    getComputedStyle(document.documentElement)
      .getPropertyValue("--editor-height")
      .trim()
  );

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
  outputBtn.addEventListener("click", () => {
    const code = editor.getValue();
    const finalCode = wrapCode(code, true);

    previewFrame.style.display = "block";
    editor.getWrapperElement().style.display = "none";
    previewFrame.srcdoc = finalCode;
    outputBtn.style.display = "none";
    backBtn.style.display = "inline-block";

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

window.addEventListener("resize", () => {
  editor.refresh(); 
});
