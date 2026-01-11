// Questions.js

// CSS Page 1 Questions
const cssPage1Questions = [
  {
    "question": "CSS का पूरा नाम क्या है?",
    "options": ["Colorful Style Sheets", "Cascading Style Sheets", "Creative Style System", "Computer Style Sheets"],
    "correct": 1
  },
  {
    "question": "CSS को HTML document में include करने के कितने तरीके होते हैं?",
    "options": ["1", "2", "3", "4"],
    "correct": 2
  },
  {
    "question": "CSS में color code #000000 किस color को represent करता है?",
    "options": ["White", "Black", "Blue", "Red"],
    "correct": 1
  },
  {
    "question": "CSS में text को bold करने के लिए कौन सा property use होती है?",
    "options": ["font-weight", "font-bold", "text-bold", "weight"],
    "correct": 0
  },
  {
    "question": "CSS में class selector को define करने के लिए कौन सा symbol use होता है?",
    "options": ["#", ".", "*", "&"],
    "correct": 1
  },
  {
    "question": "CSS में id selector के लिए कौन सा symbol use होता है?",
    "options": ["#", ".", "@", "&"],
    "correct": 0
  },
  {
    "question": "CSS में background color set करने के लिए कौन सा property use होता है?",
    "options": ["color", "bgcolor", "background-color", "bg"],
    "correct": 2
  },
  {
    "question": "CSS में text को center align करने के लिए कौन सा property use होता है?",
    "options": ["align", "text-align", "center-text", "text-position"],
    "correct": 1
  },
  {
    "question": "CSS में external stylesheet link करने के लिए कौन सा HTML tag use होता है?",
    "options": ["<link>", "<style>", "<css>", "<script>"],
    "correct": 0
  },
  {
    "question": "CSS में border की thickness set करने के लिए कौन सा property use होता है?",
    "options": ["border-width", "border-size", "border-thickness", "border-height"],
    "correct": 0
  },
  {
    "question": "CSS में inline style देने के लिए कौन सा attribute use होता है?",
    "options": ["css", "style", "inline", "design"],
    "correct": 1
  },
  {
    "question": "CSS में font change करने के लिए कौन सा property use होता है?",
    "options": ["font-family", "font-name", "font-type", "font-change"],
    "correct": 0
  },
  {
    "question": "CSS में hover effect देने के लिए कौन सा pseudo-class use होता है?",
    "options": [":focus", ":hover", ":active", ":visited"],
    "correct": 1
  },
  {
    "question": "CSS में z-index property का use किस लिए होता है?",
    "options": ["Font size set करने के लिए", "Element की stacking order set करने के लिए", "Background set करने के लिए", "Margin set करने के लिए"],
    "correct": 1
  },
  {
    "question": "CSS में flexbox activate करने के लिए कौन सा property use होता है?",
    "options": ["display: flex", "flex: on", "flexbox: true", "layout: flex"],
    "correct": 0
  },
  {
    "question": "CSS में element के चारों ओर space बनाने के लिए कौन सा property use होता है?",
    "options": ["margin", "padding", "border", "gap"],
    "correct": 0
  },
  {
    "question": "CSS में text के बीच space देने के लिए कौन सा property use होता है?",
    "options": ["word-spacing", "letter-space", "text-space", "line-spacing"],
    "correct": 0
  },
  {
    "question": "CSS में background image set करने के लिए कौन सा property use होता है?",
    "options": ["background-img", "bg-image", "background-image", "image-set"],
    "correct": 2
  },
  {
    "question": "CSS में animation बनाने के लिए कौन सा property use होता है?",
    "options": ["@keyframes", "animation-key", "motion", "frames"],
    "correct": 0
  },
  {
    "question": "CSS में media queries का use किस लिए होता है?",
    "options": ["Website को responsive बनाने के लिए", "Font change करने के लिए", "Image load करने के लिए", "Table create करने के लिए"],
    "correct": 0
  }
];

// CSS Page 2 Questions
const cssPage2Questions = [
  {
    "question": "CSS में किसी element का text italic करने के लिए कौन सा property use होता है?",
    "options": ["font-style", "font-type", "text-style", "style-font"],
    "correct": 0
  },
  {
    "question": "CSS में shadow देने के लिए कौन सा property use होता है?",
    "options": ["box-shadow", "shadow", "element-shadow", "div-shadow"],
    "correct": 0
  },
  {
    "question": "CSS में किसी image को repeat होने से रोकने के लिए कौन सा property value use होता है?",
    "options": ["no-repeat", "none", "stop", "disable"],
    "correct": 0
  },
  {
    "question": "CSS में किसी element की opacity set करने के लिए कौन सा property use होता है?",
    "options": ["visibility", "opacity", "transparency", "alpha"],
    "correct": 1
  },
  {
    "question": "CSS में position property का कौन सा value element को relative position में रखता है?",
    "options": ["absolute", "relative", "fixed", "sticky"],
    "correct": 1
  },
  {
    "question": "CSS में किसी text के underline को हटाने के लिए कौन सा property use होता है?",
    "options": ["text-decoration", "text-style", "text-underline", "decoration-off"],
    "correct": 0
  },
  {
    "question": "CSS में background image को पूरे element में cover करने के लिए कौन सा value use होता है?",
    "options": ["fill", "cover", "stretch", "full"],
    "correct": 1
  },
  {
    "question": "CSS में किसी element को center करने के लिए flexbox में कौन सा property use होता है?",
    "options": ["align-items", "justify-content", "flex-center", "center-align"],
    "correct": 1
  },
  {
    "question": "CSS में grid layout activate करने के लिए कौन सा property use होता है?",
    "options": ["display: grid", "grid: on", "grid-layout", "layout: grid"],
    "correct": 0
  },
  {
    "question": "CSS में किसी element को screen पर हमेशा fixed position में रखने के लिए कौन सा value use होता है?",
    "options": ["absolute", "fixed", "sticky", "relative"],
    "correct": 1
  },
  {
    "question": "CSS में font-size को relative unit में set करने के लिए कौन सा unit use होता है?",
    "options": ["em", "px", "cm", "mm"],
    "correct": 0
  },
  {
    "question": "CSS में overflow property का कौन सा value scroll bar show करता है?",
    "options": ["visible", "hidden", "scroll", "auto"],
    "correct": 2
  },
  {
    "question": "CSS में transition बनाने के लिए कौन सा property use होता है?",
    "options": ["transition", "animation", "transform", "effect"],
    "correct": 0
  },
  {
    "question": "CSS में text का color change करने के लिए कौन सा property use होता है?",
    "options": ["color", "text-color", "font-color", "foreground"],
    "correct": 0
  },
  {
    "question": "CSS में किसी element को invisible करने के लिए कौन सा property use होता है?",
    "options": ["visibility: hidden", "display: hide", "opacity: 0", "none"],
    "correct": 0
  },
  {
    "question": "CSS में cursor का shape change करने के लिए कौन सा property use होता है?",
    "options": ["mouse", "pointer", "cursor", "hover"],
    "correct": 2
  },
  {
    "question": "CSS में min-width property का use किस लिए होता है?",
    "options": ["Minimum height set करने के लिए", "Minimum width set करने के लिए", "Maximum width set करने के लिए", "Width fix करने के लिए"],
    "correct": 1
  },
  {
    "question": "CSS में किसी element को rotate करने के लिए कौन सा property use होता है?",
    "options": ["transform", "rotate", "transition", "spin"],
    "correct": 0
  },
  {
    "question": "CSS में linear gradient set करने के लिए कौन सा function use होता है?",
    "options": ["gradient()", "linear-gradient()", "bg-gradient()", "color-gradient()"],
    "correct": 1
  },
  {
    "question": "CSS में clip-path property का use किसके लिए होता है?",
    "options": ["Image crop करने के लिए", "Shape बनाने के लिए", "Text highlight करने के लिए", "Border बनाने के लिए"],
    "correct": 1
  }
];

// CSS Page 3 Questions
const cssPage3Questions = [
  {
    "question": "CSS में absolute position किसके reference में set होती है?",
    "options": ["Parent element", "Browser window", "Nearest positioned ancestor", "Body element"],
    "correct": 2
  },
  {
    "question": "CSS में किसी element को blur करने के लिए कौन सा function use होता है?",
    "options": ["blur()", "opacity()", "shadow()", "filter() blur"],
    "correct": 0
  },
  {
    "question": "CSS में border-radius property का use किस लिए होता है?",
    "options": ["Border मोटा करने के लिए", "Border color change करने के लिए", "Border को गोल करने के लिए", "Border हटाने के लिए"],
    "correct": 2
  },
  {
    "question": "CSS में किसी element का default display value क्या होता है (जैसे div के लिए)?",
    "options": ["block", "inline", "flex", "none"],
    "correct": 0
  },
  {
    "question": "CSS में किसी element को background video देने के लिए कौन सा property use होता है?",
    "options": ["background-video", "video-bg", "background", "CSS से possible नहीं है"],
    "correct": 3
  },
  {
    "question": "CSS में font-size का default unit क्या होता है अगर unit न दी जाए?",
    "options": ["em", "px", "%", "pt"],
    "correct": 1
  },
  {
    "question": "CSS में text-shadow property का पहला value क्या define करता है?",
    "options": ["Shadow color", "Horizontal offset", "Vertical offset", "Blur radius"],
    "correct": 1
  },
  {
    "question": "CSS में cursor pointer कब दिखता है?",
    "options": ["जब element clickable हो", "जब image हो", "जब paragraph हो", "हमेशा"],
    "correct": 0
  },
  {
    "question": "CSS में @font-face rule का use किस लिए होता है?",
    "options": ["Custom font load करने के लिए", "Font size set करने के लिए", "Font color set करने के लिए", "Font bold करने के लिए"],
    "correct": 0
  },
  {
    "question": "CSS में किसी element का border हटाने के लिए कौन सा value use होता है?",
    "options": ["none", "0px", "hidden", "all above"],
    "correct": 3
  },
  {
    "question": "CSS में nth-child(odd) selector क्या select करता है?",
    "options": ["Even elements", "Odd elements", "First element", "Last element"],
    "correct": 1
  },
  {
    "question": "CSS में flex-direction: column; का क्या effect होता है?",
    "options": ["Items को horizontally arrange करता है", "Items को vertically arrange करता है", "Items को wrap करता है", "Items को center करता है"],
    "correct": 1
  },
  {
    "question": "CSS में किसी image को circular shape देने के लिए border-radius कितना होना चाहिए?",
    "options": ["25%", "50%", "100px", "0"],
    "correct": 1
  },
  {
    "question": "CSS में transform: scale(2); का क्या मतलब है?",
    "options": ["Element छोटा होगा", "Element दोगुना बड़ा होगा", "Element invisible होगा", "Element move होगा"],
    "correct": 1
  },
  {
    "question": "CSS में sticky position कब काम करती है?",
    "options": ["जब scroll नहीं हो", "जब parent overflow visible हो", "जब scroll position threshold पार हो", "हमेशा"],
    "correct": 2
  },
  {
    "question": "CSS में object-fit: cover; किसके लिए use होता है?",
    "options": ["Image crop और fill करने के लिए", "Image repeat करने के लिए", "Image border देने के लिए", "Image blur करने के लिए"],
    "correct": 0
  },
  {
    "question": "CSS में backdrop-filter property का use किस लिए होता है?",
    "options": ["Background blur या effect देने के लिए", "Foreground blur करने के लिए", "Border set करने के लिए", "Shadow देने के लिए"],
    "correct": 0
  },
  {
    "question": "CSS में content property का use कहाँ किया जाता है?",
    "options": ["Pseudo-elements में text या image add करने के लिए", "Font change करने के लिए", "Margin देने के लिए", "Padding देने के लिए"],
    "correct": 0
  },
  {
    "question": "CSS में vh unit का मतलब क्या है?",
    "options": ["Viewport height", "Vertical height", "Value height", "Virtual height"],
    "correct": 0
  },
  {
    "question": "CSS में clamp() function का use किस लिए होता है?",
    "options": ["Font या size को min-max limit में set करने के लिए", "Animation बनाने के लिए", "Image crop करने के लिए", "Color set करने के लिए"],
    "correct": 0
  }
];

// CSS Page 4 Questions
const cssPage4Questions = [
  {
    "question": "CSS में variable define करने के लिए कौन सा symbol use होता है?",
    "options": ["$", "--", "@", "#"],
    "correct": 1
  },
  {
    "question": "CSS में var() function का use किस लिए होता है?",
    "options": ["Variable value use करने के लिए", "Font set करने के लिए", "Animation बनाने के लिए", "Border देने के लिए"],
    "correct": 0
  },
  {
    "question": "CSS में inherit value का मतलब क्या होता है?",
    "options": ["Parent से property copy करना", "Default value set करना", "New value बनाना", "Property हटाना"],
    "correct": 0
  },
  {
    "question": "CSS में initial value का मतलब क्या है?",
    "options": ["Browser की default value apply करना", "Parent से value लेना", "Value हटाना", "Custom value बनाना"],
    "correct": 0
  },
  {
    "question": "CSS में !important का use क्यों किया जाता है?",
    "options": ["Property को high priority देने के लिए", "Property remove करने के लिए", "Error fix करने के लिए", "Variable set करने के लिए"],
    "correct": 0
  },
  {
    "question": "CSS में display: none; और visibility: hidden; में क्या फर्क है?",
    "options": ["दोनों same हैं", "display: none element remove करता है, visibility: hidden space छोड़ता है", "visibility: hidden remove करता है", "display: none space छोड़ता है"],
    "correct": 1
  },
  {
    "question": "CSS में currentColor keyword का use किस लिए होता है?",
    "options": ["Current theme color लेने के लिए", "Parent color लेने के लिए", "Body color लेने के लिए", "Text color लेने के लिए"],
    "correct": 3
  },
  {
    "question": "CSS में object-position property का use किस लिए होता है?",
    "options": ["Image या video को position करने के लिए", "Text position set करने के लिए", "Border position set करने के लिए", "Background position करने के लिए"],
    "correct": 0
  },
  {
    "question": "CSS में filter: grayscale(100%); का effect क्या होगा?",
    "options": ["Image black and white हो जाएगी", "Image blur होगी", "Image transparent होगी", "Image shadow हो जाएगी"],
    "correct": 0
  },
  {
    "question": "CSS में list-style-type property का use किस लिए होता है?",
    "options": ["List bullet type set करने के लिए", "List size set करने के लिए", "List color set करने के लिए", "List gap set करने के लिए"],
    "correct": 0
  },
  {
    "question": "CSS में overflow-x और overflow-y किसके लिए होते हैं?",
    "options": ["Horizontal और vertical scroll control करने के लिए", "Image resize करने के लिए", "Font size control करने के लिए", "Background color set करने के लिए"],
    "correct": 0
  },
  {
    "question": "CSS में white-space: nowrap; का क्या मतलब है?",
    "options": ["Text को wrap नहीं करना", "Text को uppercase करना", "Text को bold करना", "Text को italic करना"],
    "correct": 0
  },
  {
    "question": "CSS में column-count property का use किस लिए होता है?",
    "options": ["Text को multiple columns में divide करने के लिए", "Font size set करने के लिए", "Text color change करने के लिए", "Text wrap करने के लिए"],
    "correct": 0
  },
  {
    "question": "CSS में word-break: break-all; का मतलब क्या है?",
    "options": ["Words को break नहीं करना", "Words को किसी भी जगह break कर देना", "Words को wrap करना", "Words को uppercase करना"],
    "correct": 1
  },
  {
    "question": "CSS में max-height property का use किस लिए होता है?",
    "options": ["Maximum height limit set करने के लिए", "Minimum height set करने के लिए", "Height fix करने के लिए", "Height auto करने के लिए"],
    "correct": 0
  },
  {
    "question": "CSS में scroll-behavior: smooth; का क्या effect होता है?",
    "options": ["Page scroll smooth हो जाता है", "Page scroll fast हो जाता है", "Scroll disable हो जाता है", "Scroll hidden हो जाता है"],
    "correct": 0
  },
  {
    "question": "CSS में background-attachment: fixed; का क्या मतलब है?",
    "options": ["Background image scroll नहीं होगी", "Background image scroll होगी", "Background image repeat होगी", "Background image हट जाएगी"],
    "correct": 0
  },
  {
    "question": "CSS में shape-outside property का use किस लिए होता है?",
    "options": ["Text को किसी shape के चारों तरफ flow कराने के लिए", "Shape draw करने के लिए", "Border round करने के लिए", "Image crop करने के लिए"],
    "correct": 0
  },
  {
    "question": "CSS में will-change property का use क्यों किया जाता है?",
    "options": ["Performance improve करने के लिए", "Animation delete करने के लिए", "Font load करने के लिए", "Image load करने के लिए"],
    "correct": 0
  },
  {
    "question": "CSS में isolation property का use किस लिए होता है?",
    "options": ["Element को new stacking context देने के लिए", "Element hide करने के लिए", "Element align करने के लिए", "Element bold करने के लिए"],
    "correct": 0
  }
];

// CSS Page 5 Questions
const cssPage5Questions = [
  {
    "question": "CSS में text-transform: uppercase; का क्या effect होता है?",
    "options": ["Text small letters में बदलता है", "Text capital letters में बदलता है", "Text italic हो जाता है", "Text bold हो जाता है"],
    "correct": 1
  },
  {
    "question": "CSS में letter-spacing property का use किस लिए होता है?",
    "options": ["Letters के बीच space देने के लिए", "Words के बीच space देने के लिए", "Paragraph के बीच space देने के लिए", "Line के बीच space देने के लिए"],
    "correct": 0
  },
  {
    "question": "CSS में line-height property का use किसके लिए होता है?",
    "options": ["Line के बीच space देने के लिए", "Text bold करने के लिए", "Font change करने के लिए", "Color change करने के लिए"],
    "correct": 0
  },
  {
    "question": "CSS में background-repeat: repeat-x; का मतलब क्या है?",
    "options": ["Image horizontally repeat होगी", "Image vertically repeat होगी", "Image दोनों तरफ repeat होगी", "Image repeat नहीं होगी"],
    "correct": 0
  },
  {
    "question": "CSS में outline property का use किस लिए होता है?",
    "options": ["Element के बाहर एक extra border देने के लिए", "Element का background change करने के लिए", "Element move करने के लिए", "Element delete करने के लिए"],
    "correct": 0
  },
  {
    "question": "CSS में outline और border में क्या फर्क है?",
    "options": ["Outline border के अंदर होती है", "Outline border के बाहर होती है", "दोनों same हैं", "Outline transparent होती है"],
    "correct": 1
  },
  {
    "question": "CSS में text-overflow: ellipsis; का क्या मतलब है?",
    "options": ["Extra text hide होकर ... show होगा", "Text underline हो जाएगा", "Text italic हो जाएगा", "Text scroll होगा"],
    "correct": 0
  },
  {
    "question": "CSS में overflow: auto; का क्या मतलब है?",
    "options": ["Scroll तभी show होगा जब जरूरत होगी", "हमेशा scroll show होगा", "Scroll disable होगा", "Scroll hide होगा"],
    "correct": 0
  },
  {
    "question": "CSS में background-position: center; का क्या मतलब है?",
    "options": ["Background image center में आएगी", "Background image top में आएगी", "Background image left में आएगी", "Background image bottom में आएगी"],
    "correct": 0
  },
  {
    "question": "CSS में aspect-ratio property का use किस लिए होता है?",
    "options": ["Element का width-height proportion fix करने के लिए", "Element का size double करने के लिए", "Element का shape change करने के लिए", "Element का border set करने के लिए"],
    "correct": 0
  },
  {
    "question": "CSS में resize property का use किस लिए होता है?",
    "options": ["Element को manually resize करने देने के लिए", "Element का size fix करने के लिए", "Element hide करने के लिए", "Element move करने के लिए"],
    "correct": 0
  },
  {
    "question": "CSS में pointer-events: none; का क्या मतलब है?",
    "options": ["Element पर click और hover काम नहीं करेगा", "Element delete हो जाएगा", "Element move होगा", "Element invisible होगा"],
    "correct": 0
  },
  {
    "question": "CSS में quotes property का use किस लिए होता है?",
    "options": ["Quotes का style define करने के लिए", "Text में quotation mark add करने के लिए", "Font change करने के लिए", "Border बनाने के लिए"],
    "correct": 0
  },
  {
    "question": "CSS में backdrop-filter: blur(10px); का effect क्या होगा?",
    "options": ["Background blur होगा", "Text blur होगा", "Image blur होगा", "Element delete होगा"],
    "correct": 0
  },
  {
    "question": "CSS में hyphens: auto; का use किस लिए होता है?",
    "options": ["Text को automatic hyphen (-) के साथ break करने के लिए", "Hyphen हटाने के लिए", "Text को join करने के लिए", "Hyphen का color change करने के लिए"],
    "correct": 0
  },
  {
    "question": "CSS में mask-image property का use किस लिए होता है?",
    "options": ["Element को किसी image shape में cut करने के लिए", "Image blur करने के लिए", "Image crop करने के लिए", "Image resize करने के लिए"],
    "correct": 0
  },
  {
    "question": "CSS में unicode-bidi property का use किस लिए होता है?",
    "options": ["Text direction control करने के लिए", "Font style change करने के लिए", "Text color change करने के लिए", "Text bold करने के लिए"],
    "correct": 0
  },
  {
    "question": "CSS में scroll-snap-type property का use किस लिए होता है?",
    "options": ["Scroll को snap position पर stop कराने के लिए", "Scroll fast करने के लिए", "Scroll disable करने के लिए", "Scroll smooth करने के लिए"],
    "correct": 0
  },
  {
    "question": "CSS में writing-mode: vertical-rl; का effect क्या है?",
    "options": ["Text vertical right-to-left लिखा जाएगा", "Text horizontal होगा", "Text bold होगा", "Text italic होगा"],
    "correct": 0
  },
  {
    "question": "CSS में overflow-wrap property का use किस लिए होता है?",
    "options": ["Long words को break करने के लिए", "Text color change करने के लिए", "Text center करने के लिए", "Text bold करने के लिए"],
    "correct": 0
  }
];
// CSS Page 6 Questions
const cssPage6Questions = [
{ question: "CSS में text का color बदलने के लिए कौन-सा property use किया जाता है?", options: ["font-color", "text-color", "color", "background-color"], correct: 2 },
{ question: "CSS का कौन-सा property text को bold करने के लिए use होता है?", options: ["font-weight", "text-bold", "bold-style", "font-style"], correct: 0 },
{ question: "CSS में किसी element की border हटाने के लिए कौन-सा value use की जाती है?", options: ["0", "none", "null", "hidden"], correct: 1 },
{ question: "CSS में background image को repeat ना करने के लिए कौन-सी value use की जाती है?", options: ["repeat-x", "repeat-y", "no-repeat", "none"], correct: 2 },
{ question: "CSS में किसी element के अंदर space देने के लिए कौन-सा property use होता है?", options: ["margin", "padding", "spacing", "gap"], correct: 1 },
{ question: "CSS में font-size set करने के लिए कौन-सा unit relative होता है?", options: ["px", "em", "cm", "mm"], correct: 1 },
{ question: "CSS में z-index का काम क्या है?", options: ["color set करना", "position set करना", "element का stacking order set करना", "opacity set करना"], correct: 2 },
{ question: "CSS में flexbox में items को horizontally center करने के लिए कौन-सा property use होता है?", options: ["align-items", "justify-content", "flex-center", "center"], correct: 1 },
{ question: "CSS में line-height किसके लिए use होता है?", options: ["text spacing vertically", "text spacing horizontally", "font size", "letter spacing"], correct: 0 },
{ question: "CSS में text को underline करने के लिए कौन-सा property use होता है?", options: ["text-style", "underline", "text-decoration", "font-decoration"], correct: 2 },
{ question: "CSS में overflow: hidden का क्या मतलब है?", options: ["Content scroll होगा", "Content hide हो जाएगा", "Content zoom होगा", "Content fade होगा"], correct: 1 },
{ question: "CSS में position: absolute का मतलब क्या है?", options: ["Element normal flow में रहेगा", "Element relative parent के अनुसार position होगा", "Element fixed रहेगा", "Element static रहेगा"], correct: 1 },
{ question: "CSS में cursor: pointer का effect क्या होता है?", options: ["Normal cursor", "Hand cursor", "Text cursor", "Loading cursor"], correct: 1 },
{ question: "CSS में किसी text का first letter style करने के लिए कौन-सा pseudo-element use होता है?", options: [":first", "::first-letter", "::letter", ":first-text"], correct: 1 },
{ question: "CSS में media queries का use किसके लिए होता है?", options: ["Animations", "Responsive design", "Font styling", "Background set करने के लिए"], correct: 1 },
{ question: "CSS में background-size: cover का मतलब क्या है?", options: ["Image पूरे container में fit होगी", "Image repeat होगी", "Image zoom होगी", "Image half दिखाई देगी"], correct: 0 },
{ question: "CSS में hover effect लगाने के लिए कौन-सा pseudo-class use होता है?", options: [":hover", ":focus", ":active", ":visited"], correct: 0 },
{ question: "CSS में transition-duration किसके लिए use होता है?", options: ["Animation speed set करने के लिए", "Font size बदलने के लिए", "Background color set करने के लिए", "Border style set करने के लिए"], correct: 0 },
{ question: "CSS में rgba() function का use क्या है?", options: ["Color के साथ transparency set करने के लिए", "Gradient बनाने के लिए", "Shadow बनाने के लिए", "Border set करने के लिए"], correct: 0 },
{ question: "CSS में object-fit: cover किसके लिए use होता है?", options: ["Image resize without distortion", "Image repeat", "Image rotate", "Image fade"], correct: 0 }
];
// CSS Page 7 Questions
const cssPage7Questions = [
{ question: "CSS में text को italic करने के लिए कौन-सा property use होता है?", options: ["font-italic", "font-style", "text-style", "italic"], correct: 1 },
{ question: "CSS में किसी element की height set करने के लिए कौन-सा property use किया जाता है?", options: ["width", "height", "size", "max-height"], correct: 1 },
{ question: "CSS में किसी element की outer space को क्या कहते हैं?", options: ["margin", "padding", "spacing", "gap"], correct: 0 },
{ question: "CSS में किसी element को पूरी window में fix करने के लिए कौन-सा position use होता है?", options: ["absolute", "fixed", "relative", "static"], correct: 1 },
{ question: "CSS में letter-spacing का काम क्या है?", options: ["Letters के बीच space बढ़ाना या घटाना", "Words के बीच space बदलना", "Line height बदलना", "Font size बदलना"], correct: 0 },
{ question: "CSS में किसी image को circle shape में दिखाने के लिए कौन-सा property use होता है?", options: ["border-circle", "border-style", "border-radius", "border-shape"], correct: 2 },
{ question: "CSS में opacity का काम क्या है?", options: ["Transparency control करना", "Border style set करना", "Font size change करना", "Shadow लगाना"], correct: 0 },
{ question: "CSS में display: none का क्या मतलब है?", options: ["Element दिखाई देगा लेकिन space लेगा", "Element invisible होगा और space नहीं लेगा", "Element fade होगा", "Element zoom होगा"], correct: 1 },
{ question: "CSS में transform: rotate(90deg) का मतलब क्या है?", options: ["Element को zoom करना", "Element को 90 degree घुमाना", "Element को move करना", "Element का color बदलना"], correct: 1 },
{ question: "CSS में किसी link का color change करने के लिए कौन-सा pseudo-class use होता है?", options: [":visited", ":hover", ":focus", ":link"], correct: 3 },
{ question: "CSS में box-shadow का use किसके लिए होता है?", options: ["Text shadow", "Element shadow", "Image shadow", "Background shadow"], correct: 1 },
{ question: "CSS में min-width का काम क्या है?", options: ["Minimum height set करना", "Minimum width set करना", "Maximum width set करना", "Content width change करना"], correct: 1 },
{ question: "CSS में font-family property का use किसके लिए होता है?", options: ["Font type change करने के लिए", "Font size change करने के लिए", "Font color change करने के लिए", "Font bold करने के लिए"], correct: 0 },
{ question: "CSS में overflow: scroll का मतलब क्या है?", options: ["Content automatically hide होगा", "Content scroll bar के साथ show होगा", "Content zoom होगा", "Content fade होगा"], correct: 1 },
{ question: "CSS में position: relative का मतलब क्या है?", options: ["Element अपने normal position से move हो सकता है", "Element हमेशा fixed रहेगा", "Element parent के अनुसार set होगा", "Element invisible हो जाएगा"], correct: 0 },
{ question: "CSS में background-position: center का मतलब क्या है?", options: ["Image को top में रखना", "Image को bottom में रखना", "Image को horizontally और vertically center करना", "Image को left में रखना"], correct: 2 },
{ question: "CSS में flex-wrap का use किसके लिए होता है?", options: ["Items को same line में रखने के लिए", "Items को नई line में shift करने के लिए", "Items को center करने के लिए", "Items को gap देने के लिए"], correct: 1 },
{ question: "CSS में grid-template-columns का use किसके लिए होता है?", options: ["Grid rows set करने के लिए", "Grid columns set करने के लिए", "Grid gap set करने के लिए", "Grid background set करने के लिए"], correct: 1 },
{ question: "CSS में clip-path property का काम क्या है?", options: ["Element को crop करना", "Element का color बदलना", "Element का size बदलना", "Element को rotate करना"], correct: 0 },
{ question: "CSS में text-transform: uppercase का मतलब क्या है?", options: ["Text को capital letters में बदलना", "Text को small letters में बदलना", "Text को italic करना", "Text को bold करना"], correct: 0 }
];
// CSS Page 8 Questions
const cssPage8Questions = [
{ question: "CSS में किसी text का underline हटाने के लिए कौन-सा property use होता है?", options: ["text-decoration: none", "font-style: normal", "line-height: none", "text-align: none"], correct: 0 },
{ question: "CSS में z-index का use किसके लिए होता है?", options: ["Element के stacking order को control करना", "Element का zoom level set करना", "Element का opacity बदलना", "Element का size बदलना"], correct: 0 },
{ question: "CSS में cursor: pointer का मतलब क्या है?", options: ["Cursor को arrow बनाना", "Cursor को hand icon में बदलना", "Cursor को text selection में बदलना", "Cursor को hide करना"], correct: 1 },
{ question: "CSS में transition-duration किसके लिए use होता है?", options: ["Transition effect की speed set करने के लिए", "Transition का color set करने के लिए", "Transition का size set करने के लिए", "Transition को remove करने के लिए"], correct: 0 },
{ question: "CSS में line-height का काम क्या है?", options: ["Text की height set करना", "Text की vertical spacing set करना", "Font size change करना", "Text को bold करना"], correct: 1 },
{ question: "CSS में list-style-type property का use किसके लिए होता है?", options: ["List bullet type बदलने के लिए", "List को hide करने के लिए", "List का color change करने के लिए", "List का size change करने के लिए"], correct: 0 },
{ question: "CSS में :hover pseudo-class कब लागू होता है?", options: ["जब mouse किसी element पर आता है", "जब mouse किसी element से हटता है", "जब element पर click होता है", "जब element load होता है"], correct: 0 },
{ question: "CSS में background-repeat: no-repeat का मतलब क्या है?", options: ["Background image बार-बार repeat होगी", "Background image repeat नहीं होगी", "Background image vertical repeat होगी", "Background image horizontal repeat होगी"], correct: 1 },
{ question: "CSS में font-weight: bold का मतलब क्या है?", options: ["Text को italic करना", "Text को bold करना", "Text का color बदलना", "Text को underline करना"], correct: 1 },
{ question: "CSS में max-width का काम क्या है?", options: ["Maximum height set करना", "Maximum width set करना", "Minimum width set करना", "Content width change करना"], correct: 1 },
{ question: "CSS में white-space: nowrap का मतलब क्या है?", options: ["Text को नई line में जाने से रोकना", "Text को नई line में भेजना", "Text को wrap करना", "Text को bold करना"], correct: 0 },
{ question: "CSS में object-fit: cover का मतलब क्या है?", options: ["Image को crop करके container fill करना", "Image को stretch करना", "Image को repeat करना", "Image को hide करना"], correct: 0 },
{ question: "CSS में :focus pseudo-class कब लागू होता है?", options: ["जब element select होता है", "जब element click होता है", "जब element पर keyboard focus होता है", "जब element hover होता है"], correct: 2 },
{ question: "CSS में filter: blur(5px) का मतलब क्या है?", options: ["Image को fade करना", "Image को blur करना", "Image को zoom करना", "Image को rotate करना"], correct: 1 },
{ question: "CSS में order property किसके लिए होती है?", options: ["Flex items का order change करने के लिए", "Grid items का order change करने के लिए", "Z-index set करने के लिए", "Elements को hide करने के लिए"], correct: 0 },
{ question: "CSS में gap property का use किस layout में होता है?", options: ["Flexbox और Grid दोनों में", "सिर्फ Flexbox में", "सिर्फ Grid में", "सिर्फ Table layout में"], correct: 0 },
{ question: "CSS में :nth-child(odd) का मतलब क्या है?", options: ["सिर्फ odd number वाले child select होंगे", "सिर्फ even number वाले child select होंगे", "First child select होगा", "Last child select होगा"], correct: 0 },
{ question: "CSS में sticky position का काम क्या है?", options: ["Scroll होने पर element fix हो जाता है", "Element हमेशा static रहता है", "Element parent में fix होता है", "Element fade हो जाता है"], correct: 0 },
{ question: "CSS में outline property का use किसके लिए होता है?", options: ["Element के चारों तरफ border जैसा effect बनाने के लिए", "Text को bold करने के लिए", "Image का shadow बनाने के लिए", "Element को rotate करने के लिए"], correct: 0 },
{ question: "CSS में content property का use कब किया जाता है?", options: ["Pseudo-elements के साथ content insert करने के लिए", "Image add करने के लिए", "Font size change करने के लिए", "Background change करने के लिए"], correct: 0 }
];
// CSS Page 9 Questions
const cssPage9Questions = [
{ question: "CSS में z-index property का उपयोग किसके लिए किया जाता है?", options: ["Element का stacking order", "Element की transparency", "Element का आकार बदलना", "Element को rotate करना"], correct: 0 },
{ question: "CSS में border-radius property का उपयोग किसके लिए होता है?", options: ["Text का रंग बदलने के लिए", "Image को crop करने के लिए", "Element के corners को round करने के लिए", "Font size बदलने के लिए"], correct: 2 },
{ question: "CSS में कौन सी unit responsive design के लिए बेहतर है?", options: ["px", "em", "rem", "%"], correct: 3 },
{ question: "CSS में कौन सी property text को shadow देने के लिए प्रयोग होती है?", options: ["box-shadow", "text-shadow", "shadow-text", "font-shadow"], correct: 1 },
{ question: "CSS में display: flex; का मतलब क्या है?", options: ["Element को grid में दिखाना", "Element को block बनाना", "Flexbox layout activate करना", "Element को hide करना"], correct: 2 },
{ question: "CSS में justify-content property का उपयोग किस लिए किया जाता है?", options: ["Flex items को horizontally align करने के लिए", "Flex items को vertically align करने के लिए", "Font change करने के लिए", "Margin set करने के लिए"], correct: 0 },
{ question: "CSS में align-items property का उपयोग किसके लिए होता है?", options: ["Items को vertically align करने के लिए", "Items को horizontally align करने के लिए", "Text-align करने के लिए", "Background set करने के लिए"], correct: 0 },
{ question: "CSS में position: sticky; का effect क्या होता है?", options: ["Element हमेशा fixed रहता है", "Element scroll के साथ move करता है लेकिन एक point पर sticky हो जाता है", "Element invisible हो जाता है", "Element randomly move करता है"], correct: 1 },
{ question: "CSS में transform: rotate(45deg); क्या करता है?", options: ["Element को 45 degree घुमाता है", "Element का size बढ़ाता है", "Element को fade करता है", "Element का color बदलता है"], correct: 0 },
{ question: "CSS में कौन सी property background image को repeat रोकने के लिए होती है?", options: ["background-stop", "background-repeat: no-repeat;", "background-no-repeat", "background-block"], correct: 1 },
{ question: "CSS में overflow: hidden; का उपयोग किसके लिए होता है?", options: ["Extra content को छुपाने के लिए", "Scroll bar add करने के लिए", "Text wrap करने के लिए", "Background बदलने के लिए"], correct: 0 },
{ question: "CSS में कौन सा selector सिर्फ first child select करता है?", options: [":first-child", ":first", "::first", ":first-item"], correct: 0 },
{ question: "CSS में कौन सा pseudo-class किसी element पर mouse hover detect करता है?", options: [":hover", ":active", ":focus", ":visited"], correct: 0 },
{ question: "CSS में media queries का उपयोग किसलिए किया जाता है?", options: ["Animation create करने के लिए", "Responsive design बनाने के लिए", "Image edit करने के लिए", "Font change करने के लिए"], correct: 1 },
{ question: "CSS में calc() function का उपयोग किसके लिए होता है?", options: ["Calculation के लिए values set करने के लिए", "Colors mix करने के लिए", "Images merge करने के लिए", "Animation delay करने के लिए"], correct: 0 },
{ question: "CSS में कौन सी property flex items के बीच gap set करती है?", options: ["item-gap", "flex-gap", "gap", "space-between"], correct: 2 },
{ question: "CSS में कौन सा unit parent element के font-size पर आधारित होता है?", options: ["em", "rem", "px", "%"], correct: 0 },
{ question: "CSS में कौन सा property value transition के साथ change करता है?", options: ["transition", "animation", "transform", "delay"], correct: 0 },
{ question: "CSS में कौन सा shorthand property margin के लिए use होता है?", options: ["margin", "m", "spacing", "padding"], correct: 0 },
{ question: "CSS में कौन सा property backdrop blur effect देने के लिए होता है?", options: ["filter: blur();", "backdrop-filter: blur();", "background-blur", "blur-effect"], correct: 1 }
];
// CSS Page 10 Questions
const cssPage10Questions = [
{ question: "CSS में कौन सा selector किसी specific id वाले element को select करता है?", options: ["#", ".", "id()", "select-id"], correct: 0 },
{ question: "CSS में कौन सा selector किसी specific class वाले element को select करता है?", options: [".", "#", "class()", "select-class"], correct: 0 },
{ question: "CSS में min-width property का उपयोग किसलिए होता है?", options: ["Element की minimum height set करने के लिए", "Element की minimum width set करने के लिए", "Element की maximum width set करने के लिए", "Font size fix करने के लिए"], correct: 1 },
{ question: "CSS में max-width property का उपयोग किसके लिए होता है?", options: ["Maximum height set करने के लिए", "Maximum width set करने के लिए", "Minimum width set करने के लिए", "Background size set करने के लिए"], correct: 1 },
{ question: "CSS में कौन सा pseudo-class किसी clicked link के लिए use होता है?", options: [":visited", ":active", ":hover", ":focus"], correct: 1 },
{ question: "CSS में कौन सी property font style italic करने के लिए होती है?", options: ["font-italic", "style-italic", "font-style", "text-italic"], correct: 2 },
{ question: "CSS में कौन सा property value text को uppercase करने के लिए होता है?", options: ["text-transform: uppercase;", "font-uppercase", "text-upper", "transform-text"], correct: 0 },
{ question: "CSS में कौन सा property value background image को पूरी width और height में fit करने के लिए होता है?", options: ["background-fit: cover;", "background-size: cover;", "background-cover", "background-full"], correct: 1 },
{ question: "CSS में कौन सा property value shadow को blur करने के लिए होता है?", options: ["shadow-blur", "box-shadow blur value", "blur-shadow", "shadow-size"], correct: 1 },
{ question: "CSS में कौन सा pseudo-class किसी input field पर focus detect करता है?", options: [":focus", ":hover", ":checked", ":selected"], correct: 0 },
{ question: "CSS में कौन सा property value element को horizontal और vertical center में लाने के लिए flexbox में होता है?", options: ["justify-content: center; align-items: center;", "center-all", "margin: auto", "align-center"], correct: 0 },
{ question: "CSS में कौन सा property value animation infinite बार चलाने के लिए होता है?", options: ["animation-repeat: infinite;", "animation-iteration-count: infinite;", "repeat-animation: infinite;", "loop-animation"], correct: 1 },
{ question: "CSS में कौन सा property value grid columns के बीच gap set करने के लिए होता है?", options: ["column-gap", "grid-gap", "gap", "all-gap"], correct: 0 },
{ question: "CSS में कौन सा property value grid rows के बीच gap set करने के लिए होता है?", options: ["row-gap", "grid-gap", "gap", "all-gap"], correct: 0 },
{ question: "CSS में कौन सा property value element की visibility hide करने के लिए होती है लेकिन space reserve करती है?", options: ["display: none;", "visibility: hidden;", "opacity: 0;", "hide-element"], correct: 1 },
{ question: "CSS में कौन सा property value element की opacity set करने के लिए होता है?", options: ["opacity", "transparency", "alpha", "lightness"], correct: 0 },
{ question: "CSS में कौन सा property value element को scrollable बनाने के लिए होता है?", options: ["overflow: scroll;", "scroll: enable;", "enable-scroll", "overflow: visible;"], correct: 0 },
{ question: "CSS में कौन सा property value gradient background बनाने के लिए होता है?", options: ["background: gradient();", "background: linear-gradient();", "background-gradient", "gradient-bg"], correct: 1 },
{ question: "CSS में कौन सा property value किसी element की outline set करने के लिए होता है?", options: ["outline", "border-outline", "element-outline", "outer-border"], correct: 0 },
{ question: "CSS में कौन सा property value element की height को उसके content के हिसाब से auto set करता है?", options: ["height: auto;", "auto-height", "content-height", "height-fit"], correct: 0 }
];


// Export object jisme sab quizzes ka data hai
const questionSets = {
    css1: cssPage1Questions,
    css2: cssPage2Questions,
    css3: cssPage3Questions,
    css4: cssPage4Questions,
    css5: cssPage5Questions,
    css6: cssPage6Questions,
    css7: cssPage7Questions,
    css8: cssPage8Questions,
    css9: cssPage9Questions,
    css10: cssPage10Questions
};

// Browser ke liye export
window.questionSets = questionSets;
