// gk page 1 script code

function toggleMenu() {
    const menu = document.getElementById('menu');
    const hamburger = document.querySelector('.hamburger-icon');
    menu.classList.toggle('active');
    
    if (menu.classList.contains('active')) {
        hamburger.innerHTML = '&#10006;'; // Cross icon (X)
    } else {
        hamburger.innerHTML = '&#9776;'; // Three lines icon
    }
}


const questions = [
  { question: "भारत का राष्ट्रीय वृक्ष (National Tree) कौन सा है?", options: ["नीम", "बरगद", "पीपल", "आम"], correct: 1 },
  { question: "UN का स्थापना वर्ष क्या है?", options: ["1942", "1945", "1950", "1955"], correct: 1 },
  { question: "USB का full form क्या है?", options: ["Universal Serial Bus", "United System Base", "Universal Software Backup", "Unlimited Storage Base"], correct: 0 },
  { question: "पृथ्वी का सबसे ऊपरी परत क्या कहलाती है?", options: ["Core", "Mantle", "Crust", "Surface"], correct: 2 },
  { question: "भारत के वर्तमान मुख्य चुनाव आयुक्त (CEC) का कार्य क्या होता है?", options: ["Budget बनाना", "चुनाव करवाना", "कानून बनाना", "रक्षा नीति तय करना"], correct: 1 },
  { question: "Wi-Fi का full form क्या है?", options: ["Wireless Fidelity", "Wired File", "Wide Filter", "Wireless Frequency"], correct: 0 },
  { question: "पाँच वर्ष की योजना (Five Year Plan) सबसे पहले कब लागू हुई थी?", options: ["1947", "1950", "1951", "1952"], correct: 2 },
  { question: "किस धातु को लोहा कहा जाता है?", options: ["Iron", "Copper", "Zinc", "Aluminum"], correct: 0 },
  { question: "भारत में पहली जनगणना कब हुई थी?", options: ["1872", "1881", "1901", "1941"], correct: 0 },
  { question: "Microsoft कंपनी के संस्थापक कौन हैं?", options: ["Steve Jobs", "Mark Zuckerberg", "Sundar Pichai", "Bill Gates"], correct: 3 },
  { question: "Google Maps किस तकनीक का उपयोग करता है?", options: ["GPS", "RAM", "USB", "HTTP"], correct: 0 },
  { question: "H2O किसका chemical formula है?", options: ["Hydrogen", "Water", "Oxygen", "Acid"], correct: 1 },
  { question: "भारत का सर्वोच्च न्यायालय कहाँ स्थित है?", options: ["मुंबई", "दिल्ली", "कोलकाता", "लखनऊ"], correct: 1 },
  { question: "इंसान के शरीर में सबसे बड़ी हड्डी कौन सी होती है?", options: ["Humerus", "Femur", "Tibia", "Skull"], correct: 1 },
  { question: "MP3 किससे संबंधित है?", options: ["Image", "Document", "Audio", "Video"], correct: 2 },
  { question: "सौर मंडल का सबसे गर्म ग्रह कौन सा है?", options: ["पृथ्वी", "शुक्र", "मंगल", "बृहस्पति"], correct: 1 },
  { question: "भारत में टेलीफोन सेवा की शुरुआत किसने की थी?", options: ["ब्रिटिश सरकार", "नेहरू सरकार", "मोदी सरकार", "इंदिरा गांधी"], correct: 0 },
  { question: "Email का आविष्कार किसने किया था?", options: ["Tim Berners-Lee", "Shiva Ayyadurai", "Larry Page", "Alan Turing"], correct: 1 },
  { question: "किस ग्रह को 'लाल ग्रह' कहा जाता है?", options: ["शुक्र", "शनि", "मंगल", "यूरेनस"], correct: 2 },
  { question: "IC का full form क्या है (electronics में)?", options: ["Internal Cable", "Integrated Circuit", "Internet Connection", "Input Channel"], correct: 1 }
];

let currentQuestionIndex = 0;
let score = 0;
let attempts = 0;
let selectedAnswer = null;
let timer;
let userAnswers = [];

function escapeHTML(text) {
    return text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function startTest() {
    document.getElementById("startContainer").style.display = "none";
    document.getElementById("quizContainer").style.display = "block";
    loadQuestion();
}

function startTimer() {
    let timeLeft = 60;
    document.getElementById("timer").textContent = `Time Left: ${timeLeft}s`;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").textContent = `Time Left: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function loadQuestion() {
    clearInterval(timer);
    startTimer();
    selectedAnswer = null;

    document.getElementById("questionNumber").textContent = `Question ${attempts + 1} of ${questions.length}`;
    const questionData = questions[currentQuestionIndex];
    document.getElementById("question").innerHTML = escapeHTML(questionData.question);

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    questionData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => selectAnswer(button, index);
        optionsContainer.appendChild(button);
    });

    // Next button visible but disabled
    const nextBtn = document.getElementById("nextBtn");
    nextBtn.disabled = true;
    nextBtn.style.opacity = 0.3;
    nextBtn.style.display = "block";
}

function selectAnswer(button, selectedIndex) {
    if (selectedAnswer !== null) {
        document.querySelectorAll("#options button").forEach(btn => btn.classList.remove("selected"));
    }

    selectedAnswer = selectedIndex;
    button.classList.add("selected");

    const nextBtn = document.getElementById("nextBtn");
    nextBtn.disabled = false;
    nextBtn.style.opacity = 1;
}

function nextQuestion() {
    clearInterval(timer);

    const questionObj = questions[currentQuestionIndex];
    userAnswers.push({
        question: questionObj.question,
        selected: selectedAnswer !== null ? questionObj.options[selectedAnswer] : "No Answer",
        correct: questionObj.options[questionObj.correct]
    });

    if (selectedAnswer !== null && selectedAnswer === questionObj.correct) {
        score++;
    }

    currentQuestionIndex++;
    attempts++;

    if (attempts < questions.length && currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showFinalResult();
    }
}

function showFinalResult() {
    document.getElementById("quizContainer").style.display = "none";
    document.getElementById("resultContainer").style.display = "block";

    // ====== New Pass/Fail Logic ======
    let statusText = "";
    if (score < 8) {
        statusText = "<span class='fail'>❌ Fail</span>";
    } else if (score >= 8 && score < 18) {
        statusText = "<span class='pass'>✅ Pass</span>";
    } else {
        statusText = "<span class='excellent'>🌟 Excellent</span>";
    }

    // Add status before score
    document.getElementById("scoreStatus").innerHTML = `${statusText} &nbsp; Your Score: ${score}`;

    document.getElementById("correctCount").textContent = `Correct Answers: ${score}`;
    document.getElementById("wrongCount").textContent = `Wrong Answers: ${attempts - score}`;


    let detailedResults = document.getElementById("detailedResults");
    detailedResults.innerHTML = "";

    userAnswers.forEach((item, index) => {
        let isCorrect = item.selected === item.correct;
        let icon = isCorrect ? 
        "<span class='right-icon'>&#10004;</span>" 
        : "<span class='wrong-icon'>&#10008;</span>";

        detailedResults.innerHTML += `
            <div class='result-item'>
                <strong>Q${index + 1}: ${item.question}</strong><br>
                Your Answer: ${item.selected} ${icon} <br>
                Correct Answer: ${item.correct} 
            </div>`;
    });
}

function nextQuestion() {
    clearInterval(timer);

    const questionObj = questions[currentQuestionIndex];
    userAnswers.push({
        question: questionObj.question,
        selected: selectedAnswer !== null ? questionObj.options[selectedAnswer] : "No Answer",
        correct: questionObj.options[questionObj.correct]
    });

    if (selectedAnswer !== null && selectedAnswer === questionObj.correct) {
        score++;
    }

    currentQuestionIndex++;
    attempts++;

    if (attempts < questions.length && currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        // Show loading screen
        document.getElementById("quizContainer").style.display = "none";
        document.getElementById("loadingContainer").style.display = "block";

        // After 5 seconds, show final result
        setTimeout(() => {
            document.getElementById("loadingContainer").style.display = "none";
            showFinalResult();
        }, 10000); // 5000 ms = 5 seconds
    }
}

