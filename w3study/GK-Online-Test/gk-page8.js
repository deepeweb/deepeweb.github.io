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
  { question: "भारत का पहला परमाणु परीक्षण कब हुआ था?", options: ["1971", "1974", "1998", "2001"], correct: 1 },
  { question: "CPU का कौन सा भाग गणना करता है?", options: ["CU", "RAM", "ALU", "ROM"], correct: 2 },
  { question: "HTTPS में 'S' का क्या मतलब होता है?", options: ["Simple", "Secure", "Speed", "Server"], correct: 1 },
  { question: "World Environment Day कब मनाया जाता है?", options: ["5 जून", "22 अप्रैल", "1 जुलाई", "10 मई"], correct: 0 },
  { question: "GPS का full form क्या है?", options: ["Global Positioning System", "Graphical Power System", "Global Processing Software", "None of these"], correct: 0 },
  { question: "भारत की सबसे ऊँची चोटी कौन सी है?", options: ["K2", "Mount Everest", "Kangchenjunga", "Nanda Devi"], correct: 2 },
  { question: "किस ग्रह के सबसे अधिक चंद्रमा (moons) हैं?", options: ["बृहस्पति", "शनि", "यूरेनस", "नेपच्यून"], correct: 1 },
  { question: "Electric current का SI unit क्या है?", options: ["Volt", "Ohm", "Ampere", "Watt"], correct: 2 },
  { question: "Taj Mahal किस नदी के किनारे स्थित है?", options: ["गंगा", "यमुना", "सोन", "गोदावरी"], correct: 1 },
  { question: "PAN card में PAN का full form क्या है?", options: ["Permanent Account Number", "Private Access Number", "Personal Audit Number", "Public Account Name"], correct: 0 },
  { question: "भारत का पहला satellite launching station कहाँ है?", options: ["श्रीहरिकोटा", "इसरो बेंगलुरु", "नैनीताल", "चेन्नई"], correct: 0 },
  { question: "Mobile communication में SIM का full form क्या है?", options: ["Secure Identity Module", "Subscriber Identity Module", "System Integration Method", "Subscriber Internet Manager"], correct: 1 },
  { question: "किसने 'जन गण मन' लिखा था?", options: ["महात्मा गांधी", "रवींद्रनाथ ठाकुर", "बंकिम चंद्र चट्टोपाध्याय", "सरोजिनी नायडू"], correct: 1 },
  { question: "भारत का पहला nuclear submarine कौन सा था?", options: ["INS Vikrant", "INS Arihant", "INS Chakra", "INS Kalvari"], correct: 2 },
  { question: "WWW को किसने invent किया था?", options: ["Tim Berners-Lee", "Bill Gates", "Mark Zuckerberg", "Steve Jobs"], correct: 0 },
  { question: "भारत के किस राज्य को 'Spice Garden of India' कहा जाता है?", options: ["केरल", "तमिलनाडु", "गोवा", "कर्नाटका"], correct: 0 },
  { question: "E-mail का full form क्या है?", options: ["Electric Mail", "Electronic Mail", "Engineered Mail", "External Mail"], correct: 1 },
  { question: "कंप्यूटर वायरस क्या होता है?", options: ["एक हार्डवेयर", "एक सॉफ्टवेयर", "एक गेम", "एक ब्राउज़र"], correct: 1 },
  { question: "ATM का आविष्कार किस देश में हुआ था?", options: ["USA", "UK", "Germany", "India"], correct: 1 },
  { question: "Photosynthesis के लिए पौधों को किस gas की आवश्यकता होती है?", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], correct: 1 }
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

