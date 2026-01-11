document.addEventListener("DOMContentLoaded", () => {
      let pyodide = null;
      async function loadPython() {
        if (!pyodide) {
          pyodide = await loadPyodide();
        }
        return pyodide;
      }

      document.querySelectorAll(".editor-wrap").forEach((wrap) => {
        const textarea = wrap.querySelector(".source");
        const outputFrame = wrap.querySelector(".output-frame");

        const editor = CodeMirror.fromTextArea(textarea, {
          mode: "python",
          lineNumbers: true,
          lineWrapping: false,
          tabSize: 4,
          theme: "dracula"
        });

        const copyBtn = wrap.querySelector(".copyBtn");
        const copyText = copyBtn.querySelector(".btn-text");
        const outputBtn = wrap.querySelector(".outputBtn");
        const backBtn = wrap.querySelector(".backBtn");
        const themeBtn = wrap.querySelector(".themeBtn");
        const restoreBtn = wrap.querySelector(".restoreBtn");
        const initialCode = editor.getValue();

        // Copy
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
          copyText.textContent = "Copied";
          setTimeout(() => (copyText.textContent = "Copy"), 1500);
        });

        // Run
        outputBtn.addEventListener("click", async () => {
          const code = editor.getValue();
          editor.getWrapperElement().style.display = "none";
          outputBtn.style.display = "none";
          backBtn.style.display = "inline-flex";
          outputFrame.style.display = "block";
          outputFrame.textContent = "Running Python code...";

          try {
            const py = await loadPython();
            let output = [];
            let error = [];

            py.setStdout({ batched: (msg) => output.push(msg) });
            py.setStderr({ batched: (msg) => error.push(msg) });

            await py.runPythonAsync(code);

            if (error.length > 0) {
              outputFrame.textContent = error.join("\n");
              outputFrame.style.color = "red";
            } else if (output.length > 0) {
              outputFrame.textContent = output.join("");
              outputFrame.style.color = "white";
            } else {
              outputFrame.textContent = "✓ Code executed (no output)";
              outputFrame.style.color = "white";
            }
          } catch (err) {
            outputFrame.textContent = "Error: " + err;
            outputFrame.style.color = "red";
          }
        });

        // Back
        backBtn.addEventListener("click", () => {
          editor.getWrapperElement().style.display = "block";
          outputBtn.style.display = "inline-flex";
          backBtn.style.display = "none";
          outputFrame.style.display = "none";
        });

        // Restore
        restoreBtn.addEventListener("click", () => {
          editor.setValue(initialCode);
        });

        // Dark/Light
        let darkMode = true;
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
      });

      lucide.createIcons();
    });