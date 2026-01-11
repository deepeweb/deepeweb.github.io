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
  { question: "भारत के पहले गृह मंत्री कौन थे?", options: ["राजेन्द्र प्रसाद", "जवाहरलाल नेहरू", "सरदार पटेल", "लाल बहादुर शास्त्री"], correct: 2 },
  { question: "LAN का full form क्या है?", options: ["Local Area Network", "Large Access Network", "Low Area Node", "Local Access Net"], correct: 0 },
  { question: "पृथ्वी को सूर्य की एक परिक्रमा करने में कितना समय लगता है?", options: ["30 दिन", "180 दिन", "365 दिन", "400 दिन"], correct: 2 },
  { question: "भारत में राष्ट्रपति का कार्यकाल कितने वर्षों का होता है?", options: ["4 साल", "5 साल", "6 साल", "7 साल"], correct: 1 },
  { question: "भारत का पहला IIT कहाँ स्थापित हुआ था?", options: ["IIT Bombay", "IIT Kanpur", "IIT Kharagpur", "IIT Delhi"], correct: 2 },
  { question: "RAM का full form क्या है?", options: ["Read Access Memory", "Random Access Memory", "Run Access Mode", "Remote Access Module"], correct: 1 },
  { question: "गांधी जी ने 'नमक सत्याग्रह' कब शुरू किया था?", options: ["1930", "1920", "1942", "1919"], correct: 0 },
  { question: "भारत की सबसे बड़ी झील कौन सी है?", options: ["डाल झील", "चिल्का झील", "वुलर झील", "पिचोला झील"], correct: 1 },
  { question: "CPU में ALU का क्या कार्य होता है?", options: ["Control", "Memory", "Calculation", "Graphics"], correct: 2 },
  { question: "भारत में कितने Union Territories हैं (2025 तक)?", options: ["7", "8", "9", "10"], correct: 1 },
  { question: "HTML का full form क्या है?", options: ["HyperText Markup Language", "HighText Machine Language", "HyperTool Machine Language", "None of these"], correct: 0 },
  { question: "भारत में पंचायती राज प्रणाली की शुरुआत किस राज्य से हुई थी?", options: ["राजस्थान", "उत्तर प्रदेश", "बिहार", "महाराष्ट्र"], correct: 0 },
  { question: "भारत में कितने राष्ट्रीय उद्यान (National Parks) हैं लगभग?", options: ["50", "70", "100+", "150+"], correct: 2 },
  { question: "भारत का सबसे पुराना समाचार पत्र कौन सा है?", options: ["The Times of India", "The Hindu", "The Bengal Gazette", "Hindustan Times"], correct: 2 },
  { question: "Photosynthesis किसके द्वारा किया जाता है?", options: ["जड़", "फूल", "पत्ती", "तना"], correct: 2 },
  { question: "भारत में संविधान को कब लागू किया गया था?", options: ["15 अगस्त 1947", "26 जनवरी 1950", "2 अक्टूबर 1949", "26 नवम्बर 1950"], correct: 1 },
  { question: "Bluetooth किस frequency पर कार्य करता है?", options: ["2.4 GHz", "1.5 GHz", "5 GHz", "900 MHz"], correct: 0 },
  { question: "Solar Eclipse कब होता है?", options: ["जब सूर्य पृथ्वी के पीछे होता है", "जब चंद्रमा सूर्य और पृथ्वी के बीच आता है", "जब पृथ्वी सूर्य और चंद्रमा के बीच होती है", "जब चंद्रमा पृथ्वी से दूर होता है"], correct: 1 },
  { question: "भारत का सबसे बड़ा बाँध (Dam) कौन सा है?", options: ["टिहरी बाँध", "हीराकुंड बाँध", "सरदार सरोवर बाँध", "भाखड़ा नांगल बाँध"], correct: 0 },
  { question: "Radar का उपयोग किसके लिए किया जाता है?", options: ["सड़क मैपिंग", "हवाई ट्रैफिक कंट्रोल", "वायुमंडलीय दबाव मापन", "कंप्यूटर गेम्स"], correct: 1 }
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

