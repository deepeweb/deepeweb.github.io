// ads.js
document.addEventListener("DOMContentLoaded", () => {
  const adsList = [
    `<a href="https://example1.com" target="_blank">
        <img src="https://deepeweb.github.io/favicon.png" style="width:100%;height:auto;display:block;">
     </a>`,
    `<a href="https://example2.com" target="_blank">
        <img src="https://imagestopdf.github.io/favicon.png" style="width:100%;height:auto;display:block;">
     </a>`,
    `<a href="https://example3.com" target="_blank">
        <img src="https://deepeweb.github.io/favicon.png" style="width:100%;height:auto;display:block;">
     </a>`
  ];
  
  const adSlots = document.querySelectorAll(".ad-slot");

  adSlots.forEach((slot) => {
    const randomAd = adsList[Math.floor(Math.random() * adsList.length)];

    // Main wrapper
    const wrapper = document.createElement("div");
    wrapper.style.position = "relative";
    wrapper.style.width = "300px";
    wrapper.style.margin = "15px auto";
    wrapper.style.overflow = "hidden";
    wrapper.style.fontFamily = "Arial, sans-serif";
    wrapper.style.fontSize = "13px";
    wrapper.style.lineHeight = "1.4";
    wrapper.style.textAlign = "center";

    wrapper.innerHTML = `
      <!-- Ad Content -->
      <div class="ad-content" style="position:relative;">
        ${randomAd}
        <!-- Overlay buttons -->
        <div class="ad-header" style="position:absolute; top:0; right:0; display:flex; gap:1px; z-index:10;">
          <!-- Info button -->
          <div class="ad-info" style="position:relative;">
          <div style="width:20px;height:20px;background:#fff;display:flex;justify-content:center;align-items:center;">
            <button style="width:16px;height:16px;border-radius:50%; border:1.7px solid skyblue;font-weight:bold;margin:0;
                           background:#fff;color:skyblue; cursor:pointer;padding:0;">i</button></div>
            <div class="info-popup" style="display:none; position:absolute; top:0; right:21px;
                                            background:#fff;
                                            padding:2.5px 6px; font-size:11px; color:#000;
                                            white-space:nowrap; box-shadow:0 2px 4px rgba(0,0,0,0.2);">
              Ads by Deep E Web
            </div>
          </div>
          <!-- Menu button -->
          <div class="ad-menu" style="position:relative;">
            <button style="width:20px; height:20px; border:none; background:#fff; cursor:pointer;font-weight:bold; padding:0;font-size:18px;color:skyblue;">?</button>
          </div>
        </div>
      </div>

      <!-- Replace Content (hidden by default) -->
      <div class="replace-content" style="display:none; width:100%; height:300px;
                                          background:#fff; color:#000; padding:10px;padding-top:20px;
                                          box-sizing:border-box; text-align:left; position:relative;">
        <!-- Back button -->
        <button class="back-btn" style="position:absolute; top:0; left:0; 
                                        background:#0066cc; color:#fff; border:none;
                                        padding:3px 8px; font-size:10px; border-radius:0;
                                        cursor:pointer; display:none;">
          Back
        </button>
        <p style="color:black;font-size:20px;font-weight:bold;text-align:center;">Ads by Deep E Web</p>
        <p style="color:black;text-align:center;"><b>आप इस ad को remove नहीं कर सकते।</b></p>
        <p style="color:black;text-align:center;">अगर आप ads नहीं देखना चाहते हैं तो हमारा <b>subscription</b> लें।</p>
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

    let restoreTimer;

    // Info hover functionality
    infoBtn.addEventListener("mouseenter", () => {
      infoPopup.style.display = "block";
    });
    infoBtn.addEventListener("mouseleave", () => {
      infoPopup.style.display = "none";
    });

    // Menu click functionality (show replace content)
    menuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      adContent.style.display = "none";
      replaceContent.style.display = "block";
      backBtn.style.display = "inline-block";

      // Auto-restore after 20s
      restoreTimer = setTimeout(() => {
        restoreAd();
      }, 10000);
    });

    // Back button functionality
    backBtn.addEventListener("click", () => {
      clearTimeout(restoreTimer); // cancel auto-restore
      restoreAd();
    });

    // Function to restore ad
    function restoreAd() {
      adContent.style.display = "block";
      replaceContent.style.display = "none";
      backBtn.style.display = "none";
    }
  });
});
