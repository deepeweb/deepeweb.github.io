// Initialize all editors on page
document.querySelectorAll(".editor-wrap").forEach((wrap) => {
  const textarea = wrap.querySelector(".source");
  const copyBtn = wrap.querySelector(".copyBtn");
  const outputBtn = wrap.querySelector(".outputBtn");
  const backBtn = wrap.querySelector(".backBtn");
  const themeBtn = wrap.querySelector(".themeBtn");
  const restoreBtn = wrap.querySelector(".restoreBtn");
  const previewFrame = wrap.querySelector(".output-frame");

  // Editor init (XML mode)
  let darkMode = true;
  const editor = CodeMirror.fromTextArea(textarea, {
    mode: "xml",       // 👈 XML mode
    lineNumbers: true,
    lineWrapping: true,
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

  // Save original code for restore
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
    copyBtn.querySelector(".btn-text").textContent = "Copied";
    setTimeout(() => {
      copyBtn.querySelector(".btn-text").textContent = "Copy";
    }, 1500);
  });

  // Run/Output button
  outputBtn.addEventListener("click", () => {
    const code = editor.getValue();

    // XML को browser में render करवाना
    const finalCode = `
      <!doctype html>
      <html>
      <head><meta charset="UTF-8"></head>
      <body>
        ${code}
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
  const iframeDoc = previewFrame.contentDocument || previewFrame.contentWindow.document;
  if (iframeDoc) {
    iframeDoc.body.style.margin = "0";  // 👈 remove default margin
    const finalHeight = iframeDoc.documentElement.scrollHeight;
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

  // Theme toggle
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

  // Restore button
  restoreBtn.addEventListener("click", () => {
    editor.setValue(originalCode);
    autoResizeEditor();
  });
});

// Icons init
lucide.createIcons();
