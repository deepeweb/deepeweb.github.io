function loadHTML(targetId, file) {
    fetch(file)
        .then(res => res.text())
        .then(data => {
            const el = document.getElementById(targetId);
            if (el) {
                el.innerHTML = data;
            }
        })
        .catch(err => console.error("Error loading container:", err));
}
loadHTML("dynamic-container", "../dynamic-containers.html");
loadHTML("dynamic-containers", "../dynamic-containers.html");
loadHTML("dynamic-containeres", "dynamic-containers.html");
loadHTML("footer", "../footer.html");
loadHTML("footer-copy", "footer.html");
loadHTML("footers", "footer.html");
loadHTML("side-nav-iwt", "side-nav-iwt.html");
loadHTML("side-nav-blog", "../IWT/side-nav-iwt.html");
loadHTML("side-nav-gk", "side-nav-gk.html");
loadHTML("online-tests", "../online-tests.html");
loadHTML("side-nav-html", "side-nav-html.html");
loadHTML("responsive-container", "../responsive-container.html");

// user-alert-container directly set karne se pehle bhi null check karo
// Safe innerHTML setter
function setHTML(id, html) {
    const el = document.getElementById(id);
    if (el) {
        el.innerHTML = html;
    }
}

// Reusable HTML templates
const userAlertHTML = `
    <div class="text">
        <p>अगर आपको यह article useful या interesting लगा हो, तो please इसे अपने dosto aur family ke साथ जरूर share करें। आपका एक छोटा सा कदम हमें और अच्छा content बनाने के लिए motivate करता है। Thank you!</p>
        <p>ध्यान दें कि इस page पर आपको कुछ ads भी देखने को मिल सकते हैं। इसके लिए हम आपसे माफी चाहते हैं। हम इस content को तैयार करने में काफी मेहनत और time लगाते हैं, ताकि आपको valuable जानकारी मिल सके। इन्हीं ads की मदद से हम ये काम continue कर पाते हैं।</p>
        <p>आपके support और understanding के लिए दिल से धन्यवाद।</p>
        <p>Niche diye gye Comment box ke jariye apna feedback Share kare. Thanks!</p>
    </div>
`;

const gkInstructionsHTML = `
    <p>Hello दोस्तो! Online test देने के लिए नीचे दी गयी Start Test बटन पर क्लिक करें और फिर आपको एक Question के 4 option मिलेंगे आपको एक option choose करना है जैसे ही आप एक option choose कर लेंगे आपको next बटन दिखने लगेगा, जैसे ही आप Next बटन पर क्लिक करेंगे आपके सामने दूसरा question आ जाएगा और जब आप सभी 20 question को कर लिया तो आप अपना result भी देख सकते है कि अपने कितना सही किया और कितना गलत. अगर आप चाहें तो नीचे कॉलम में दिए गए pages पर click करके फिर से नए question का ऑनलाइन test दे सकते है.</p><br>
`;

const gkH3HTML = `
    <h3>Test start करने के लिए Start Test बटन पर क्लिक करें</h3><br>
`;

const headertextHTML = `
    Deepanshu Ranjan
`;

// Set HTML safely
setHTML("user-alert-container", userAlertHTML);
setHTML("user-instructions", gkInstructionsHTML);
setHTML("gk-h3", gkH3HTML);
setHTML("header-text", headertextHTML);
