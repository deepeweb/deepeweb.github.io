// JavaScript Quiz Questions

// JavaScript Page 1 Questions
const jsPage1Questions = [
  {
    "question": "JavaScript का use किसके लिए किया जाता है?",
    "options": ["Web page styling", "Web page structure", "Web page interactivity", "Database management"],
    "correct": 2
  },
  {
    "question": "JavaScript में variable declare करने के लिए कौन सा keyword use होता है?",
    "options": ["var", "let", "const", "इनमें से सभी"],
    "correct": 3
  },
  {
    "question": "JavaScript में array बनाने का सही तरीका कौन सा है?",
    "options": ["var arr = [];", "var arr = {};", "array()", "new list()"],
    "correct": 0
  },
  {
    "question": "JavaScript में equality check करने के लिए strict operator कौन सा है?",
    "options": ["==", "===", "!=", "="],
    "correct": 1
  },
  {
    "question": "JavaScript में comment लिखने का सही तरीका कौन सा है?",
    "options": ["// comment", "<!-- comment -->", "# comment", "** comment **"],
    "correct": 0
  },
  {
    "question": "JavaScript में function declare करने का सही तरीका कौन सा है?",
    "options": ["function myFunc() {}", "func myFunc() {}", "declare myFunc()", "method myFunc() {}"],
    "correct": 0
  },
  {
    "question": "JavaScript में data type check करने के लिए कौन सा operator use होता है?",
    "options": ["check", "typeof", "instanceof", "datatype"],
    "correct": 1
  },
  {
    "question": "JavaScript में object बनाने का सही तरीका कौन सा है?",
    "options": ["var obj = [];", "var obj = {};", "var obj = object();", "var obj = <>;"],
    "correct": 1
  },
  {
    "question": "JavaScript में string को number में convert करने के लिए कौन सा function use होता है?",
    "options": ["toString()", "parseInt()", "stringify()", "parseStr()"],
    "correct": 1
  },
  {
    "question": "JavaScript में loop जो कम से कम एक बार चलता है?",
    "options": ["for loop", "while loop", "do...while loop", "for...in loop"],
    "correct": 2
  },
  {
    "question": "JavaScript में null और undefined में क्या अंतर है?",
    "options": ["दोनों same हैं", "null का मतलब empty value, undefined का मतलब value assign नहीं हुआ", "null का मतलब error, undefined का मतलब string", "null number है, undefined boolean है"],
    "correct": 1
  },
  {
    "question": "JavaScript में array के last में element add करने के लिए कौन सा method use होता है?",
    "options": ["push()", "pop()", "shift()", "unshift()"],
    "correct": 0
  },
  {
    "question": "JavaScript में array के first element को remove करने के लिए कौन सा method use होता है?",
    "options": ["push()", "pop()", "shift()", "unshift()"],
    "correct": 2
  },
  {
    "question": "JavaScript में कौन सा method array को sort करता है?",
    "options": ["order()", "arrange()", "sort()", "align()"],
    "correct": 2
  },
  {
    "question": "JavaScript में current date और time प्राप्त करने के लिए कौन सा object use होता है?",
    "options": ["Time()", "Date()", "Clock()", "Calendar()"],
    "correct": 1
  },
  {
    "question": "JavaScript में किसी event को trigger करने के लिए कौन सा function use किया जाता है?",
    "options": ["fireEvent()", "trigger()", "dispatchEvent()", "callEvent()"],
    "correct": 2
  },
  {
    "question": "JavaScript में NaN का मतलब क्या है?",
    "options": ["Not a Null", "Not a Number", "No any Name", "Negative and Null"],
    "correct": 1
  },
  {
    "question": "JavaScript में किसी array की length कैसे पता करते हैं?",
    "options": ["arr.count", "arr.length", "arr.size()", "arr.total()"],
    "correct": 1
  },
  {
    "question": "JavaScript में alert box दिखाने के लिए कौन सा function use होता है?",
    "options": ["popup()", "alert()", "show()", "message()"],
    "correct": 1
  },
  {
    "question": "JavaScript में कौन सा keyword error handling के लिए use होता है?",
    "options": ["try...catch", "handle...error", "catch...throw", "error...catch"],
    "correct": 0
  }
];
// JavaScript Page 2 Questions
const jsPage2Questions = [
  {
    "question": "JavaScript किस type की language है?",
    "options": ["Compiled", "Interpreted", "Markup", "Database"],
    "correct": 1
  },
  {
    "question": "JavaScript को सबसे पहले किस company ने develop किया?",
    "options": ["Microsoft", "Netscape", "Google", "Sun Microsystems"],
    "correct": 1
  },
  {
    "question": "JavaScript में strict mode enable करने के लिए क्या लिखा जाता है?",
    "options": ["enable strict", "use strict", "activate strict", "strict mode"],
    "correct": 1
  },
  {
    "question": "JavaScript में string को lowercase में बदलने के लिए कौन सा method use होता है?",
    "options": ["toLowerCase()", "lower()", "changeLower()", "makeLowerCase()"],
    "correct": 0
  },
  {
    "question": "JavaScript में किसी array को join करने के लिए कौन सा method use होता है?",
    "options": ["concat()", "combine()", "join()", "merge()"],
    "correct": 2
  },
  {
    "question": "JavaScript में किसी number को round करने के लिए कौन सा method use होता है?",
    "options": ["Math.round()", "round()", "Math.floor()", "Math.ceil()"],
    "correct": 0
  },
  {
    "question": "JavaScript में JSON को object में convert करने के लिए कौन सा method use होता है?",
    "options": ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObject()"],
    "correct": 0
  },
  {
    "question": "JavaScript में localStorage data कितने समय तक store रहता है?",
    "options": ["जब तक browser खुला है", "जब तक user delete न करे", "1 दिन", "1 घंटे"],
    "correct": 1
  },
  {
    "question": "JavaScript में sessionStorage का data कब delete होता है?",
    "options": ["Page reload होने पर", "Tab close होने पर", "System restart होने पर", "1 घंटे बाद"],
    "correct": 1
  },
  {
    "question": "JavaScript में किसी array के सभी elements पर loop लगाने के लिए कौन सा method use होता है?",
    "options": ["map()", "forEach()", "filter()", "reduce()"],
    "correct": 1
  },
  {
    "question": "JavaScript में async function हमेशा क्या return करता है?",
    "options": ["Promise", "Array", "Object", "String"],
    "correct": 0
  },
  {
    "question": "JavaScript में error throw करने के लिए कौन सा keyword use होता है?",
    "options": ["throw", "error", "raise", "break"],
    "correct": 0
  },
  {
    "question": "JavaScript में promise resolve होने के बाद कौन सा method call होता है?",
    "options": [".catch()", ".then()", ".finally()", ".resolve()"],
    "correct": 1
  },
  {
    "question": "JavaScript में किसी string में substring search करने के लिए कौन सा method use होता है?",
    "options": ["find()", "includes()", "match()", "searchString()"],
    "correct": 1
  },
  {
    "question": "JavaScript में event listener add करने का सही तरीका कौन सा है?",
    "options": ["addEvent()", "addEventListener()", "onEvent()", "attachEvent()"],
    "correct": 1
  },
  {
    "question": "JavaScript में setTimeout() function किसके लिए use होता है?",
    "options": ["Code को delay से execute करने के लिए", "Code को बार-बार execute करने के लिए", "Variable delete करने के लिए", "Event रोकने के लिए"],
    "correct": 0
  },
  {
    "question": "JavaScript में setInterval() function क्या करता है?",
    "options": ["Code को सिर्फ एक बार delay से execute करता है", "Code को बार-बार fixed interval पर execute करता है", "Variable reset करता है", "Event रोकता है"],
    "correct": 1
  },
  {
    "question": "JavaScript में किसी object के सभी keys पाने के लिए कौन सा method use होता है?",
    "options": ["Object.keys()", "Object.values()", "Object.entries()", "Object.list()"],
    "correct": 0
  },
  {
    "question": "JavaScript में किसी object को freeze करने के लिए कौन सा method use होता है?",
    "options": ["Object.freeze()", "Object.lock()", "Object.stop()", "Object.disable()"],
    "correct": 0
  },
  {
    "question": "JavaScript में ES6 में variable declare करने के लिए कौन से keywords use हुए?",
    "options": ["let और const", "var और let", "const और var", "var और int"],
    "correct": 0
  }
];
// JavaScript Page 3 Questions
const jsPage3Questions = [
  {
    "question": "JavaScript में break statement का use कब किया जाता है?",
    "options": ["Loop को continue करने के लिए", "Loop या switch को stop करने के लिए", "Function को call करने के लिए", "Variable delete करने के लिए"],
    "correct": 1
  },
  {
    "question": "JavaScript में continue statement क्या करता है?",
    "options": ["Loop को पूरी तरह रोक देता है", "Current iteration skip करके next पर जाता है", "Function को बंद करता है", "Page reload करता है"],
    "correct": 1
  },
  {
    "question": "JavaScript में Math.floor(4.9) का output क्या होगा?",
    "options": ["4.9", "4", "5", "Error"],
    "correct": 1
  },
  {
    "question": "JavaScript में Math.ceil(4.1) का output क्या होगा?",
    "options": ["4", "4.1", "5", "Error"],
    "correct": 2
  },
  {
    "question": "JavaScript में किसी string की length कैसे पता करते हैं?",
    "options": ["string.count", "string.length", "string.size()", "string.total()"],
    "correct": 1
  },
  {
    "question": "JavaScript में template literals लिखने के लिए कौन से quotes use होते हैं?",
    "options": ["Single quotes", "Double quotes", "Backticks", "Curly braces"],
    "correct": 2
  },
  {
    "question": "JavaScript में destructuring किसके लिए use होता है?",
    "options": ["Variables को merge करने के लिए", "Array या object से values निकालने के लिए", "Function call करने के लिए", "Loops बनाने के लिए"],
    "correct": 1
  },
  {
    "question": "JavaScript में spread operator (…) का use किसके लिए होता है?",
    "options": ["Object या array को expand करने के लिए", "Function call करने के लिए", "Variable delete करने के लिए", "Event trigger करने के लिए"],
    "correct": 0
  },
  {
    "question": "JavaScript में map() method क्या return करता है?",
    "options": ["Original array", "New array", "Boolean value", "Number"],
    "correct": 1
  },
  {
    "question": "JavaScript में filter() method का काम क्या है?",
    "options": ["Array को modify करता है", "Array से selected elements return करता है", "Array को sort करता है", "Array को reverse करता है"],
    "correct": 1
  },
  {
    "question": "JavaScript में reduce() method का काम क्या है?",
    "options": ["Array को एक single value में reduce करना", "Array को sort करना", "Array को split करना", "Array को merge करना"],
    "correct": 0
  },
  {
    "question": "JavaScript में 'this' keyword किसको refer करता है?",
    "options": ["Current object", "Parent object", "Global variable", "Loop variable"],
    "correct": 0
  },
  {
    "question": "JavaScript में arrow functions में 'this' keyword किसको refer करता है?",
    "options": ["Function खुद को", "Lexical scope", "Window object", "Undefined"],
    "correct": 1
  },
  {
    "question": "JavaScript में default parameter किसके लिए use होता है?",
    "options": ["Function में default value देने के लिए", "Variable को lock करने के लिए", "Loop को रोकने के लिए", "Event create करने के लिए"],
    "correct": 0
  },
  {
    "question": "JavaScript में typeof null का result क्या होता है?",
    "options": ["null", "object", "undefined", "boolean"],
    "correct": 1
  },
  {
    "question": "JavaScript में Array.isArray([1,2,3]) का result क्या होगा?",
    "options": ["true", "false", "undefined", "error"],
    "correct": 0
  },
  {
    "question": "JavaScript में parseFloat('4.5') का output क्या होगा?",
    "options": ["4", "4.0", "4.5", "Error"],
    "correct": 2
  },
  {
    "question": "JavaScript में isNaN('Hello') का result क्या होगा?",
    "options": ["true", "false", "undefined", "Error"],
    "correct": 0
  },
  {
    "question": "JavaScript में logical AND operator कौन सा है?",
    "options": ["&", "&&", "|", "||"],
    "correct": 1
  },
  {
    "question": "JavaScript में logical OR operator कौन सा है?",
    "options": ["|", "||", "&", "&&"],
    "correct": 1
  }
];
// JavaScript Page 4 Questions
const jsPage4Questions = [
  {
    "question": "JavaScript में कौन सा method string के starting और ending spaces remove करता है?",
    "options": ["strip()", "trim()", "removeSpace()", "clean()"],
    "correct": 1
  },
  {
    "question": "JavaScript में किसी string को array में बदलने के लिए कौन सा method use होता है?",
    "options": ["split()", "join()", "toArray()", "slice()"],
    "correct": 0
  },
  {
    "question": "JavaScript में किसी array को reverse करने के लिए कौन सा method use होता है?",
    "options": ["reverse()", "invert()", "flip()", "back()"],
    "correct": 0
  },
  {
    "question": "JavaScript में slice() method का काम क्या है?",
    "options": ["Array को delete करता है", "Array के part को return करता है", "Array को sort करता है", "Array को merge करता है"],
    "correct": 1
  },
  {
    "question": "JavaScript में splice() method क्या करता है?",
    "options": ["Array के elements को add/remove करता है", "Array को sort करता है", "Array को copy करता है", "Array को reverse करता है"],
    "correct": 0
  },
  {
    "question": "JavaScript में Infinity का type क्या है?",
    "options": ["string", "number", "boolean", "undefined"],
    "correct": 1
  },
  {
    "question": "JavaScript में कौन सा statement asynchronous code handle करने के लिए use होता है?",
    "options": ["if-else", "try-catch", "async-await", "for loop"],
    "correct": 2
  },
  {
    "question": "JavaScript में fetch() method का use किसके लिए होता है?",
    "options": ["Database से data लाने के लिए", "API से data लाने के लिए", "LocalStorage में data save करने के लिए", "Array बनाने के लिए"],
    "correct": 1
  },
  {
    "question": "JavaScript में finally block कब execute होता है?",
    "options": ["हमेशा", "सिर्फ error होने पर", "सिर्फ error न होने पर", "कभी नहीं"],
    "correct": 0
  },
  {
    "question": "JavaScript में कौन सा method array से duplicate values remove करने के लिए use किया जा सकता है?",
    "options": ["filter()", "reduce()", "Set()", "map()"],
    "correct": 2
  },
  {
    "question": "JavaScript में कौन सा method string के अंदर किसी value की position बताता है?",
    "options": ["indexOf()", "find()", "search()", "position()"],
    "correct": 0
  },
  {
    "question": "JavaScript में charAt(0) method क्या return करता है?",
    "options": ["String का last character", "String का पहला character", "String की length", "Error"],
    "correct": 1
  },
  {
    "question": "JavaScript में toFixed(2) का use किसके लिए होता है?",
    "options": ["Number को round करने के लिए", "Number को fixed decimal places में convert करने के लिए", "String को number में बदलने के लिए", "Array को sort करने के लिए"],
    "correct": 1
  },
  {
    "question": "JavaScript में कौन सा method random number generate करता है?",
    "options": ["Math.random()", "random()", "Number.random()", "generateRandom()"],
    "correct": 0
  },
  {
    "question": "JavaScript में string interpolation किसके साथ की जाती है?",
    "options": ["${}", "[]", "()", "{}"],
    "correct": 0
  },
  {
    "question": "JavaScript में new Date().getFullYear() क्या return करेगा?",
    "options": ["Current month", "Current date", "Current year", "Current time"],
    "correct": 2
  },
  {
    "question": "JavaScript में array के सभी elements का sum निकालने के लिए कौन सा method best है?",
    "options": ["map()", "forEach()", "reduce()", "filter()"],
    "correct": 2
  },
  {
    "question": "JavaScript में कौन सा method array के सभी elements को एक string में बदल देता है?",
    "options": ["join()", "concat()", "merge()", "stringify()"],
    "correct": 0
  },
  {
    "question": "JavaScript में Object.assign() का use किसके लिए होता है?",
    "options": ["Objects को merge करने के लिए", "Objects को delete करने के लिए", "Objects को reverse करने के लिए", "Objects को freeze करने के लिए"],
    "correct": 0
  },
  {
    "question": "JavaScript में कौन सा function किसी variable का exact data type देता है?",
    "options": ["typeof()", "instanceof()", "Object.prototype.toString.call()", "checkType()"],
    "correct": 2
  }
];
// JavaScript Page 5 Questions
const jsPage5Questions = [
  {
    "question": "JavaScript में कौन सा method किसी array के elements को ascending order में sort करता है?",
    "options": ["sort()", "order()", "arrange()", "align()"],
    "correct": 0
  },
  {
    "question": "JavaScript में किसी number को integer में बदलने के लिए कौन सा method use होता है?",
    "options": ["parseInt()", "toInteger()", "int()", "Math.int()"],
    "correct": 0
  },
  {
    "question": "JavaScript में Math.max(5,10) का output क्या होगा?",
    "options": ["5", "10", "15", "Error"],
    "correct": 1
  },
  {
    "question": "JavaScript में Math.min(5,10) का output क्या होगा?",
    "options": ["5", "10", "15", "Error"],
    "correct": 0
  },
  {
    "question": "JavaScript में कौन सा method array को string में बदलता है?",
    "options": ["toString()", "stringify()", "join()", "convert()"],
    "correct": 0
  },
  {
    "question": "JavaScript में Number.isInteger(10.5) का result क्या होगा?",
    "options": ["true", "false", "undefined", "Error"],
    "correct": 1
  },
  {
    "question": "JavaScript में logical NOT operator कौन सा है?",
    "options": ["!", "!!", "not", "~"],
    "correct": 0
  },
  {
    "question": "JavaScript में Boolean('') का result क्या होगा?",
    "options": ["true", "false", "undefined", "Error"],
    "correct": 1
  },
  {
    "question": "JavaScript में Boolean('Hello') का result क्या होगा?",
    "options": ["true", "false", "undefined", "Error"],
    "correct": 0
  },
  {
    "question": "JavaScript में Array.from('ABC') का output क्या होगा?",
    "options": [["ABC"], ["A","B","C"], "['ABC']", "Error"],
    "correct": 1
  },
  {
    "question": "JavaScript में string.concat('A','B') का output क्या होगा?",
    "options": ["AB", "A B", "A,B", "Error"],
    "correct": 0
  },
  {
    "question": "JavaScript में indexOf() method क्या return करता है?",
    "options": ["Element की position", "Element का value", "Boolean", "Array length"],
    "correct": 0
  },
  {
    "question": "JavaScript में lastIndexOf() method क्या करता है?",
    "options": ["Last element return करता है", "Last matching index return करता है", "Array reverse करता है", "Array length देता है"],
    "correct": 1
  },
  {
    "question": "JavaScript में JSON.stringify({a:1}) का output क्या होगा?",
    "options": ["{\"a\":1}", "{a:1}", "['a',1]", "Error"],
    "correct": 0
  },
  {
    "question": "JavaScript में typeof [] का result क्या होगा?",
    "options": ["array", "object", "list", "undefined"],
    "correct": 1
  },
  {
    "question": "JavaScript में string repeat करने के लिए कौन सा method use होता है?",
    "options": ["repeat()", "multiply()", "clone()", "copy()"],
    "correct": 0
  },
  {
    "question": "JavaScript में किसी value को exponential form में बदलने के लिए कौन सा method use होता है?",
    "options": ["toExponential()", "exponential()", "exp()", "Math.exp()"],
    "correct": 0
  },
  {
    "question": "JavaScript में Math.sqrt(16) का output क्या होगा?",
    "options": ["2", "4", "8", "16"],
    "correct": 1
  },
  {
    "question": "JavaScript में किसी object के सभी values पाने के लिए कौन सा method use होता है?",
    "options": ["Object.keys()", "Object.values()", "Object.entries()", "Object.data()"],
    "correct": 1
  },
  {
    "question": "JavaScript में Promise.all() क्या करता है?",
    "options": ["Multiple promises को एक साथ run करता है और सभी के complete होने पर result देता है", "Promises को cancel करता है", "Promise को delay करता है", "Promise को reject करता है"],
    "correct": 0
  }
];
// JavaScript Page 6 Questions
const jsPage6Questions = [
  {
    "question": "JavaScript में Promise.reject() क्या करता है?",
    "options": ["Promise को resolve करता है", "Promise को reject करता है", "Promise को delay करता है", "Promise को cancel करता है"],
    "correct": 1
  },
  {
    "question": "JavaScript में Promise.race() क्या करता है?",
    "options": ["सभी promises के खत्म होने का wait करता है", "सबसे पहले खत्म होने वाले promise का result return करता है", "Promises को merge करता है", "Promise को cancel करता है"],
    "correct": 1
  },
  {
    "question": "JavaScript में Symbol किसके लिए use होता है?",
    "options": ["Unique identifiers बनाने के लिए", "String बनाने के लिए", "Array बनाने के लिए", "Number बनाने के लिए"],
    "correct": 0
  },
  {
    "question": "JavaScript में Set object क्या store करता है?",
    "options": ["Unique values", "Duplicate values", "Keys और values", "Only strings"],
    "correct": 0
  },
  {
    "question": "JavaScript में Map object किसके लिए use होता है?",
    "options": ["Key-value pairs store करने के लिए", "Unique values store करने के लिए", "String store करने के लिए", "Array store करने के लिए"],
    "correct": 0
  },
  {
    "question": "JavaScript में WeakMap और Map में क्या फर्क है?",
    "options": ["WeakMap केवल objects को keys के रूप में रखता है", "WeakMap duplicate keys allow करता है", "WeakMap numbers को keys बनाता है", "WeakMap infinite size का होता है"],
    "correct": 0
  },
  {
    "question": "JavaScript में WeakSet क्या store करता है?",
    "options": ["Unique primitive values", "Unique object references", "Duplicate strings", "Duplicate numbers"],
    "correct": 1
  },
  {
    "question": "JavaScript में event.preventDefault() का use किसके लिए होता है?",
    "options": ["Event को रोकने के लिए", "Default browser action को रोकने के लिए", "Event को fast करने के लिए", "Event को duplicate करने के लिए"],
    "correct": 1
  },
  {
    "question": "JavaScript में event.stopPropagation() क्या करता है?",
    "options": ["Event को bubbling से रोकता है", "Event को execute करता है", "Event को default बनाता है", "Event को duplicate करता है"],
    "correct": 0
  },
  {
    "question": "JavaScript में custom event बनाने के लिए कौन सा constructor use होता है?",
    "options": ["Event()", "CustomEvent()", "UserEvent()", "CreateEvent()"],
    "correct": 1
  },
  {
    "question": "JavaScript में navigator object का use किसके लिए होता है?",
    "options": ["Browser और device information लेने के लिए", "File system access करने के लिए", "Server से connect करने के लिए", "Cookies delete करने के लिए"],
    "correct": 0
  },
  {
    "question": "JavaScript में window.location.reload() क्या करता है?",
    "options": ["Page को reload करता है", "Page को redirect करता है", "Page को close करता है", "Page को pause करता है"],
    "correct": 0
  },
  {
    "question": "JavaScript में screen.width क्या return करता है?",
    "options": ["Screen का height", "Screen का width", "Window का width", "Document का width"],
    "correct": 1
  },
  {
    "question": "JavaScript में innerHTML property किसके लिए use होती है?",
    "options": ["Element के अंदर का HTML code set/get करने के लिए", "CSS change करने के लिए", "Event trigger करने के लिए", "Image load करने के लिए"],
    "correct": 0
  },
  {
    "question": "JavaScript में textContent property क्या करती है?",
    "options": ["HTML code return करती है", "Only text content return करती है", "CSS return करती है", "Event return करती है"],
    "correct": 1
  },
  {
    "question": "JavaScript में querySelectorAll() क्या return करता है?",
    "options": ["Single element", "NodeList", "HTMLCollection", "Array"],
    "correct": 1
  },
  {
    "question": "JavaScript में getElementsByClassName() क्या return करता है?",
    "options": ["NodeList", "HTMLCollection", "Array", "String"],
    "correct": 1
  },
  {
    "question": "JavaScript में localStorage की maximum size लगभग कितनी होती है?",
    "options": ["5MB", "10MB", "50MB", "100MB"],
    "correct": 0
  },
  {
    "question": "JavaScript में async keyword का use किसके लिए होता है?",
    "options": ["Function को asynchronous बनाने के लिए", "Variable को asynchronous बनाने के लिए", "Loop को asynchronous बनाने के लिए", "Object को asynchronous बनाने के लिए"],
    "correct": 0
  },
  {
    "question": "JavaScript में await keyword किसके साथ use होता है?",
    "options": ["Promise", "Array", "Object", "Function"],
    "correct": 0
  }
];
// JavaScript Page 7 Questions
const jsPage7Questions = [
{ question: "JavaScript में '===' operator क्या check करता है?", options: ["Value only", "Type only", "Value और Type दोनों", "None"], correct: 2 },
{ question: "JavaScript में function को define करने का सही तरीका कौन सा है?", options: ["function = myFunc()", "function myFunc()", "func myFunc()", "create function myFunc()"], correct: 1 },
{ question: "JavaScript में array का पहला index क्या होता है?", options: ["0", "1", "-1", "None"], correct: 0 },
{ question: "JavaScript में comments के लिए कौन सा symbol use होता है?", options: ["// और /* */", "<!-- -->", "#", "--"], correct: 0 },
{ question: "JavaScript में 'typeof null' का result क्या होता है?", options: ["null", "object", "undefined", "boolean"], correct: 1 },
{ question: "JavaScript में 'var', 'let', और 'const' का इस्तेमाल किस लिए होता है?", options: ["Loop बनाने के लिए", "Variable declare करने के लिए", "Function call करने के लिए", "Object बनाने के लिए"], correct: 1 },
{ question: "JavaScript में NaN का मतलब क्या है?", options: ["Not a Number", "New and Null", "Name as Number", "None"], correct: 0 },
{ question: "JavaScript में 'document.getElementById()' क्या return करता है?", options: ["HTML element", "CSS property", "JavaScript function", "None"], correct: 0 },
{ question: "JavaScript में string को number में convert करने के लिए क्या use होता है?", options: ["Number()", "parseInt()", "parseFloat()", "सभी सही हैं"], correct: 3 },
{ question: "JavaScript में कौन सा keyword loop को तुरंत खत्म करने के लिए use होता है?", options: ["exit", "stop", "break", "return"], correct: 2 },
{ question: "JavaScript में कौन सा loop कम से कम एक बार जरूर चलता है?", options: ["for", "while", "do...while", "for...of"], correct: 2 },
{ question: "JavaScript में 'this' keyword किसको refer करता है?", options: ["Global object", "Current object", "Parent object", "Child object"], correct: 1 },
{ question: "JavaScript में 'JSON' का full form क्या है?", options: ["JavaScript Object Notation", "Java Source Object Name", "Java Syntax Open Node", "None"], correct: 0 },
{ question: "JavaScript में async function का return type क्या होता है?", options: ["Promise", "Array", "String", "Object"], correct: 0 },
{ question: "JavaScript में किसी array के last element को remove करने के लिए क्या use होता है?", options: ["shift()", "pop()", "remove()", "delete"], correct: 1 },
{ question: "JavaScript में किसी array में नया element last में add करने के लिए क्या use होता है?", options: ["push()", "append()", "add()", "concat()"], correct: 0 },
{ question: "JavaScript में template literals किस symbol से लिखे जाते हैं?", options: ["''", "\"\"", "``", "##"], correct: 2 },
{ question: "JavaScript में 'map()' function क्या करता है?", options: ["Array को filter करता है", "Array के हर element पर function apply करता है", "Array को sort करता है", "None"], correct: 1 },
{ question: "JavaScript में 'undefined' कब आता है?", options: ["जब variable declare हो लेकिन value assign न की गई हो", "जब variable delete कर दिया गया हो", "जब error हो", "None"], correct: 0 },
{ question: "JavaScript में strict mode enable करने के लिए क्या लिखा जाता है?", options: ["'strict mode';", "'use strict';", "use strict()", "strict();"], correct: 1 },
];
// JavaScript Page 8 Questions
const jsPage8Questions = [
{ question: "JavaScript में 'call()', 'apply()', और 'bind()' का use किसके लिए होता है?", options: ["Function को copy करने के लिए", "Function का this value set करने के लिए", "Function को delete करने के लिए", "Loop बनाने के लिए"], correct: 1 },
{ question: "JavaScript में 'closure' क्या है?", options: ["Function का अंदर function होना", "Function का अपने lexical scope को याद रखना", "Variable का global होना", "Loop का बंद होना"], correct: 1 },
{ question: "JavaScript में 'event bubbling' का मतलब क्या है?", options: ["Event का parent elements तक जाना", "Event का सिर्फ target element पर चलना", "Event का DOM में ऊपर से नीचे आना", "Event का cancel होना"], correct: 0 },
{ question: "JavaScript में 'event capturing' किस order में चलता है?", options: ["Parent to child", "Child to parent", "Random", "None"], correct: 0 },
{ question: "JavaScript में 'setTimeout' function किस unit में time लेता है?", options: ["Seconds", "Milliseconds", "Minutes", "Hours"], correct: 1 },
{ question: "JavaScript में arrow function में 'this' कैसे behave करता है?", options: ["अपने parent scope का this use करता है", "Always window object refer करता है", "हमेशा undefined देता है", "None"], correct: 0 },
{ question: "JavaScript में '==', '===' में क्या फर्क है?", options: ["कोई फर्क नहीं", "== value compare करता है, === value और type दोनों compare करता है", "=== सिर्फ type compare करता है", "== सिर्फ type compare करता है"], correct: 1 },
{ question: "JavaScript में 'Object.freeze()' क्या करता है?", options: ["Object को delete करता है", "Object को read-only बना देता है", "Object को copy करता है", "None"], correct: 1 },
{ question: "JavaScript में 'spread operator' (...) का use किस लिए होता है?", options: ["Values merge करने के लिए", "Array या object को expand करने के लिए", "Function call रोकने के लिए", "None"], correct: 1 },
{ question: "JavaScript में 'destructuring' किसके लिए use होता है?", options: ["Variable delete करने के लिए", "Array या object से values निकालने के लिए", "Function stop करने के लिए", "Loop चलाने के लिए"], correct: 1 },
{ question: "JavaScript में 'Promise' का कौन सा state valid नहीं है?", options: ["pending", "fulfilled", "rejected", "paused"], correct: 3 },
{ question: "JavaScript में async/await का use किसके लिए होता है?", options: ["Synchronous code बनाने के लिए", "Asynchronous code को आसान बनाने के लिए", "Loop बनाने के लिए", "Data delete करने के लिए"], correct: 1 },
{ question: "JavaScript में 'localStorage' में data कितने time तक रहता है?", options: ["Page refresh तक", "Browser बंद होने तक", "Manually delete होने तक", "1 hour"], correct: 2 },
{ question: "JavaScript में 'sessionStorage' और 'localStorage' में क्या फर्क है?", options: ["कोई फर्क नहीं", "sessionStorage data browser बंद होने पर delete हो जाता है, localStorage में नहीं", "localStorage सिर्फ functions के लिए है", "sessionStorage permanent है"], correct: 1 },
{ question: "JavaScript में किसी object की keys को array में बदलने के लिए क्या use होता है?", options: ["Object.values()", "Object.keys()", "Object.entries()", "Array.from()"], correct: 1 },
{ question: "JavaScript में किसी object की values को array में बदलने के लिए क्या use होता है?", options: ["Object.values()", "Object.keys()", "Object.entries()", "Array.from()"], correct: 0 },
{ question: "JavaScript में किसी array को sort करने का default method क्या करता है?", options: ["Numbers को सही order में sort करता है", "Values को string में convert करके sort करता है", "Values को random करता है", "None"], correct: 1 },
{ question: "JavaScript में 'isNaN()' function क्या check करता है?", options: ["Value number नहीं है", "Value null है", "Value undefined है", "Value string है"], correct: 0 },
{ question: "JavaScript में 'Array.isArray()' क्या return करता है?", options: ["true अगर array है", "false अगर array है", "हमेशा true", "हमेशा false"], correct: 0 },
{ question: "JavaScript में किसी value को boolean में बदलने का सबसे छोटा तरीका क्या है?", options: ["Boolean(value)", "!!value", "value == true", "value === false"], correct: 1 },
 
];
// JavaScript Page 9 Questions
const jsPage9Questions = [
{ question: "JavaScript में '==' और '===' में क्या अंतर है?", options: ["कोई अंतर नहीं", "== type conversion करता है, === नहीं करता", "=== type conversion करता है, == नहीं करता", "दोनों strict comparison करते हैं"], correct: 1 },
{ question: "JavaScript में किसी function को बिना return value के क्या कहा जाता है?", options: ["Pure Function", "Void Function", "Static Function", "Lambda Function"], correct: 1 },
{ question: "JavaScript में 'NaN' का मतलब क्या है?", options: ["Not a Name", "No any Number", "Not a Number", "Null and Nothing"], correct: 2 },
{ question: "JavaScript में object की length property किसके लिए होती है?", options: ["Keys की संख्या", "Values की संख्या", "Array length", "दोनों A और B"], correct: 0 },
{ question: "JavaScript में array से आखिरी element हटाने के लिए कौन सा method use होता है?", options: ["shift()", "pop()", "remove()", "delete()"], correct: 1 },
{ question: "JavaScript में 'this' keyword किसको refer करता है?", options: ["Global Object", "Current Object", "Window Object", "दोनों A और B"], correct: 1 },
{ question: "JavaScript में कौन सा method string को array में convert करता है?", options: ["split()", "slice()", "splice()", "join()"], correct: 0 },
{ question: "JavaScript में कौन सा method array के सभी elements को एक string में बदल देता है?", options: ["concat()", "join()", "toString()", "दोनों B और C"], correct: 3 },
{ question: "JavaScript में 'undefined' कब आता है?", options: ["जब variable declare किया गया हो लेकिन value assign ना हो", "जब variable delete हो", "जब function empty हो", "जब syntax error हो"], correct: 0 },
{ question: "JavaScript में कौन सा loop कम से कम एक बार जरूर चलता है?", options: ["for", "while", "do...while", "foreach"], correct: 2 },
{ question: "JavaScript में JSON का पूरा नाम क्या है?", options: ["JavaScript Oriented Notation", "JavaScript Object Notation", "Java Standard Object Notation", "JavaScript Online Notation"], correct: 1 },
{ question: "JavaScript में किसी object में नया property जोड़ने के लिए क्या use करते हैं?", options: ["add()", "push()", "assign()", "dot notation या bracket notation"], correct: 3 },
{ question: "JavaScript में null और undefined में क्या अंतर है?", options: ["कोई अंतर नहीं", "null intentional absence है, undefined default absence है", "undefined intentional है", "null type error है"], correct: 1 },
{ question: "JavaScript में कौन सा method array को sort करता है?", options: ["order()", "sort()", "arrange()", "filter()"], correct: 1 },
{ question: "JavaScript में parseInt('12.34') क्या return करेगा?", options: ["12.34", "12", "13", "error"], correct: 1 },
{ question: "JavaScript में किसी array के elements को reverse करने के लिए कौन सा method use होता है?", options: ["reverse()", "invert()", "flip()", "rotate()"], correct: 0 },
{ question: "JavaScript में कौन सा operator exponentiation के लिए use होता है?", options: ["^", "**", "exp()", "power()"], correct: 1 },
{ question: "JavaScript में 'const' variable को reassign किया जा सकता है?", options: ["हाँ", "नहीं", "कभी-कभी", "depends on scope"], correct: 1 },
{ question: "JavaScript में किसी value का data type जानने के लिए क्या use करते हैं?", options: ["type()", "typeof", "instanceof", "checktype()"], correct: 1 },
{ question: "JavaScript में कौन सा statement loop को रोकने के लिए use होता है?", options: ["stop", "return", "break", "exit"], correct: 2 }
];
// JavaScript Page 10 Questions
const jsPage10Questions = [
{ question: "JavaScript में किसी array की शुरुआत में element जोड़ने के लिए कौन सा method use होता है?", options: ["push()", "unshift()", "prepend()", "shift()"], correct: 1 },
{ question: "JavaScript में 'map()' method क्या करता है?", options: ["Array filter करता है", "Array transform करता है और नया array return करता है", "Array sort करता है", "Array को merge करता है"], correct: 1 },
{ question: "JavaScript में 'filter()' method क्या return करता है?", options: ["Matched elements का नया array", "Original array", "True/False", "Object"], correct: 0 },
{ question: "JavaScript में किसी string को lowercase में बदलने के लिए कौन सा method use होता है?", options: ["toLowerCase()", "lower()", "toSmall()", "smallCase()"], correct: 0 },
{ question: "JavaScript में किसी string को uppercase में बदलने के लिए कौन सा method use होता है?", options: ["upperCase()", "toUpperCase()", "capitalize()", "bigCase()"], correct: 1 },
{ question: "JavaScript में 'find()' method क्या return करता है?", options: ["Index of element", "पहला matching element", "सभी matching elements", "Boolean value"], correct: 1 },
{ question: "JavaScript में 'findIndex()' method क्या return करता है?", options: ["पहला matching element का index", "सभी elements के index", "Boolean value", "Element value"], correct: 0 },
{ question: "JavaScript में कौन सा method array के सभी elements पर एक function execute करता है?", options: ["each()", "forEach()", "map()", "loop()"], correct: 1 },
{ question: "JavaScript में 'includes()' method का इस्तेमाल किस लिए होता है?", options: ["Array में value मौजूद है या नहीं check करने के लिए", "Array को merge करने के लिए", "Array से value remove करने के लिए", "Array को copy करने के लिए"], correct: 0 },
{ question: "JavaScript में किसी variable को बिना declare किए value assign करने पर क्या होगा?", options: ["Error आएगा", "Automatically global variable बन जाएगा", "Variable local बनेगा", "कुछ नहीं होगा"], correct: 1 },
{ question: "JavaScript में कौन सा method object को clone करने के लिए use होता है?", options: ["Object.copy()", "Object.assign()", "clone()", "copyObject()"], correct: 1 },
{ question: "JavaScript में किसी array को flatten करने के लिए कौन सा method use होता है?", options: ["flat()", "merge()", "reduce()", "spread()"], correct: 0 },
{ question: "JavaScript में किसी array से duplicate values हटाने का आसान तरीका क्या है?", options: ["filter()", "new Set()", "splice()", "concat()"], correct: 1 },
{ question: "JavaScript में किसी number को string में convert करने के लिए क्या use कर सकते हैं?", options: ["String()", "toString()", "दोनों A और B", "parseInt()"], correct: 2 },
{ question: "JavaScript में किसी string को number में convert करने के लिए कौन सा method use करते हैं?", options: ["parseInt()", "Number()", "parseFloat()", "सभी"], correct: 3 },
{ question: "JavaScript में कौन सा keyword asynchronous function declare करने के लिए use होता है?", options: ["async", "await", "promise", "defer"], correct: 0 },
{ question: "JavaScript में 'await' keyword किसके साथ use होता है?", options: ["async function", "setTimeout()", "loop", "callback"], correct: 0 },
{ question: "JavaScript में कौन सा method promise resolve होने के बाद code चलाने के लिए use होता है?", options: ["done()", "then()", "await()", "after()"], correct: 1 },
{ question: "JavaScript में कौन सा statement error handle करने के लिए use होता है?", options: ["if...else", "try...catch", "throw...catch", "error...handle"], correct: 1 },
{ question: "JavaScript में कौन सा method किसी array के elements को string में join करता है?", options: ["concat()", "join()", "merge()", "combine()"], correct: 1 }
];

// Export object jisme sab quizzes ka data hai
const questionSets = {
    js1: jsPage1Questions,
    js2: jsPage2Questions,
    js3: jsPage3Questions,
    js4: jsPage4Questions,
    js5: jsPage5Questions,
    js6: jsPage6Questions,
    js7: jsPage7Questions,
    js8: jsPage8Questions,
    js9: jsPage9Questions,
    js10: jsPage10Questions
};

// Browser ke liye export
window.questionSets = questionSets;
