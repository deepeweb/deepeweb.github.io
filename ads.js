(function(){
  var ads = [
    {
      img: "https://deepstudyweb.github.io/assets/insta-add.gif",
      url: "https://www.instagram.com/deepanshuranjan80?igsh=dHhmOGR0cmZxaGRi",
      text: "Follow Me!"
    },
    {
      img: "https://deepstudyweb.github.io/assets/fb-pic-deepanshu.jpg",
      url: "https://www.facebook.com/share/19MEJCU9fj/",
      text: "🔥 Deal 2 - Limited Time!"
    },
    {
       img: "https://deepstudyweb.github.io/assets/insta-dp.jpg",
      url: "https://www.facebook.com/share/19MEJCU9fj/",
      text: "🔥 Deal 2 - Limited Time!"
    }
  ];

    var ad = ads[Math.floor(Math.random() * ads.length)];

    document.write(`
  <div style="
    position: relative;
    border: none;
    padding: 0;
    width: 300px;
    max-width: 100%;
    margin: 20px auto;
    background: #f9f9f9;
    font-family: sans-serif;
    text-align: center;
   ">
    <!-- Top Right Ad Badge -->
    <div style="
      position: absolute;
      top: 0;
      right: 0;
      background: #ffcc00;
      color: #000;
      font-size: 10px;
      font-weight: bold;
      padding: 2px 6px;
      border-radius: 3px;
      z-index: 10;
    ">
      Ad
    </div>
 <a href="${ad.url}" target="_blank" style="text-decoration:none;color:inherit;" class="no-style">
          <img src="${ad.img}" alt="Ad"
            draggable="false"
            oncontextmenu="return false;"
            style="
              display: block;
              width: 100%;
              max-width: 300px;
              height: auto;
              -webkit-user-drag: none;
              user-select: none;
            ">
        </a>
      </div>
    </div>
  `);
})();
