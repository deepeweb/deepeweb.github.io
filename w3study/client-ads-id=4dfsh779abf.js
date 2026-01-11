document.addEventListener("DOMContentLoaded", () => {
  const adsList = [
    { id: "16:9", width: 400, height: Math.round(400 * 9 / 16),
      html: `<a href="https://deepeweb.github.io" target="_blank">
               <img src="https://deepeweb.github.io/Ad-Content/my-web-ad0.gif"
                    style="width:100%;height:100%;object-fit:cover;display:block;cursor:pointer;">
             </a>` },
     { id: "16:9", width: 400, height: Math.round(400 * 9 / 16),
      html: `<a href="https://deepeweb.github.io" target="_blank">
               <img src="https://deepeweb.github.io/Ad-Content/my-web-ad5.gif"
                    style="width:100%;height:100%;object-fit:cover;display:block;cursor:pointer;">
             </a>` },
     { id: "16:9", width: 400, height: Math.round(400 * 9 / 16),
      html: `<a href="https://deepeweb.github.io" target="_blank">
               <img src="https://deepeweb.github.io/Ad-Content/my-web-ad3.gif"
                    style="width:100%;height:100%;object-fit:cover;display:block;cursor:pointer;">
             </a>` },
     { id: "9:19-responsive",
      html: `
        <div style="position:relative;width:100%;aspect-ratio:1/2;">
          <a href="https://deepeweb.github.io" target="_blank">
            <img src="https://deepeweb.github.io/Ad-Content/my-web-ad6.gif"
                 style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;display:block;cursor:pointer;">
          </a>
        </div>
      `
    },
    { id: "9:20-responsive",
      html: `
        <div style="position:relative;width:100%;aspect-ratio:1/2;">
          <a href="https://deepeweb.github.io" target="_blank">
            <img src="https://deepeweb.github.io/Ad-Content/my-web-ad6.gif"
                 style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;display:block;cursor:pointer;">
          </a>
        </div>
      `
    }
  ];

  const adSlots = document.querySelectorAll(".ad-slot");

  adSlots.forEach((slot) => {
    const slotSize = slot.getAttribute("data-adsize");

    function loadRandomAd() {
      const filteredAds = adsList.filter(ad => ad.id === slotSize);
      if (filteredAds.length === 0) {
        slot.innerHTML = "<p style='color:red;'>No ads available for this size</p>";
        return;
      }

      const adObj = filteredAds[Math.floor(Math.random() * filteredAds.length)];

      // Wrapper
      slot.innerHTML = ""; 
      const wrapper = document.createElement("div");
      wrapper.style.position = "relative";
      wrapper.style.margin = "10px auto";
      wrapper.style.overflow = "hidden";
      wrapper.style.fontFamily = "Arial, sans-serif";

      if (adObj.id.includes("responsive")) {
        wrapper.style.width = "100%";
        wrapper.style.aspectRatio = "1/2";
      } else {
        wrapper.style.width = adObj.width + "px";
        wrapper.style.height = adObj.height + "px";
      }

      wrapper.innerHTML = `
        <!-- Main Ad -->
        <div class="ad-content" style="position:absolute; top:0; left:0; width:100%; height:100%;">
          ${adObj.html}
          <div class="ad-header" style="position:absolute; top:0; right:0; display:flex; gap:0; z-index:10;">
            <div class="ad-info" style="position:relative;">
              <button style="width:16px;height:16px;border:none;background:#fff;color:#1e90ff;cursor:pointer;display:flex;justify-content:center;align-items:center;padding:0;">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="9"/>
                  <line x1="12" y1="7.5" x2="12" y2="7.5"/>
                  <line x1="12" y1="12" x2="12" y2="16"/>
                </svg>
              </button>
              <div class="info-popup" style="display:none; position:absolute; top:0; right:16px;
                                              background:#fff; padding:2.4px 6px; font-size:10px; color:#000;
                                              white-space:nowrap;">
                Ads by <b>Deep E Web</b>
              </div>
            </div>
            <div class="ad-menu" style="position:relative;">
              <button style="width:16px;height:16px;border:none;background:#fff;cursor:pointer;font-size:12px;color:#1e90ff;display:flex;justify-content:center;align-items:center;padding:0;">
                <svg viewBox="0 0 24 24" width="14" height="12" fill="currentColor">
                  <circle cx="11" cy="5" r="2.6"/>
                  <circle cx="11" cy="12" r="2.6"/>
                  <circle cx="11" cy="19" r="2.6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <!-- Replace Content -->
        <div class="replace-content" style="display:none; position:absolute; top:0; left:0; width:100%; height:100%;
                                            background:#fff; color:#000; text-align:center; box-sizing:border-box;">
          <button class="back-btn" type="button" aria-label="Back"
                  style="display:inline-flex;align-items:center;justify-content:center;border:none;background:none;position:absolute; top:4px; left:0;cursor:pointer;color:#444;">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 12H9" />
              <path d="M15 6L9 12L15 18" />
            </svg>
          </button>
          <div class="options" style="display:flex;flex-direction:column;align-items:center;gap:10px;margin-top:25px;">
            <p style="color:black;">Ads by <b>Deep E Web</b></p>
            <button class="stop-btn" style="width:50%;padding:5px 10px;font-size:13px;cursor:pointer;background:#00f;color:white;border:1px solid #ccc;border-radius:2px;"
              onmouseover="this.style.backgroundColor='#4169E1';"
              onmouseout="this.style.backgroundColor='#00f';">
              Stop seeing this ad
            </button>
            <button class="why-btn" style="width:50%;padding:5px 10px;font-size:13px;cursor:pointer;background:#f0f0f0;border:1px solid #ccc;border-radius:2px;"
              onmouseover="this.style.backgroundColor='#dcdcdc';"
              onmouseout="this.style.backgroundColor='#f0f0f0';">
              Why this ad?
            </button>
          </div>
          <div class="reason-box" style="display:none; position:absolute; top:25px; left:50%; transform:translateX(-50%);
                                          width:95%; max-width:500px; background:#fafafa; border:1px solid #ddd;
                                          padding:10px; font-size:12px; text-align:left;">
            <p style="margin:0 0 5px;color:black;">Tell us why:</p>
            <label><input type="radio" name="reason"> Not relevant</label><br>
            <label><input type="radio" name="reason"> Repetitive</label><br>
            <label><input type="radio" name="reason"> Offensive</label><br>
            <label><input type="radio" name="reason"> Seen too often</label><br>
            <button class="confirm-reason" style="margin-top:8px;padding:4px 10px;font-size:12px;cursor:pointer;background:#0066cc;color:#fff;border:none;">
              Confirm
            </button>
          </div>
        </div>
      `;

      slot.appendChild(wrapper);

      // Elements
      const infoBtn = wrapper.querySelector(".ad-info button");
      const infoPopup = wrapper.querySelector(".info-popup");
      const menuBtn = wrapper.querySelector(".ad-menu button");
      const adContent = wrapper.querySelector(".ad-content");
      const replaceContent = wrapper.querySelector(".replace-content");
      const backBtn = wrapper.querySelector(".back-btn");
      const stopBtn = wrapper.querySelector(".stop-btn");
      const whyBtn = wrapper.querySelector(".why-btn");
      const reasonBox = wrapper.querySelector(".reason-box");
      const confirmBtn = wrapper.querySelector(".confirm-reason");

      // Info hover
      infoBtn.addEventListener("mouseenter", () => infoPopup.style.display = "block");
      infoBtn.addEventListener("mouseleave", () => infoPopup.style.display = "none");

      // Menu click
      menuBtn.addEventListener("click", () => {
        adContent.style.display = "none";
        replaceContent.style.display = "block";
        backBtn.style.display = "inline-flex";
      });

      // Back button
      backBtn.addEventListener("click", () => {
        adContent.style.display = "block";
        replaceContent.style.display = "none";
        backBtn.style.display = "none";
        reasonBox.style.display = "none";
        stopBtn.style.display = "inline-block";
        whyBtn.style.display = "inline-block";
      });

      // Why this ad
      whyBtn.addEventListener("click", () => {
        window.open("https://deepeweb.github.io/why-this-ad.html", "_blank");
      });

      // Stop seeing this ad
      stopBtn.addEventListener("click", () => {
        stopBtn.style.display = "none";
        whyBtn.style.display = "none";
        reasonBox.style.display = "block";
      });

      // Confirm reason
      confirmBtn.addEventListener("click", () => {
        const selected = reasonBox.querySelector("input[name='reason']:checked");
        if (!selected) {
          alert("Please select a reason");
          return;
        }
        wrapper.innerHTML = `
          <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;
                      background:#f9f9f9;color:#555;border:1px solid #ddd;font-size:18px;">
            <p style="color:#000;">Ad closed by&nbsp;<b>Deep E Web</b></p>
          </div>`;
        setTimeout(() => {
          loadRandomAd();
        }, 20000);
      });

      // 🚫 Disable image & link right-click/long-press
      wrapper.addEventListener("contextmenu", e => e.preventDefault());
      wrapper.querySelectorAll("img").forEach(img => {
        img.setAttribute("draggable", "false");
        img.addEventListener("contextmenu", e => e.preventDefault());
        img.addEventListener("mousedown", e => e.preventDefault());
        img.addEventListener("touchstart", e => e.preventDefault());
      });
      wrapper.querySelectorAll("a").forEach(link => {
        link.addEventListener("contextmenu", e => e.preventDefault());
      });
    }

    // Initial load
    loadRandomAd();
  });
});
