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
   { question: "विश्व में सबसे अधिक बोली जाने वाली भाषा कौन सी है?", options: ["अंग्रेज़ी", "स्पैनिश", "हिन्दी", "मंदारिन"], correct: 3 },
  { question: "भारत का राष्ट्रीय पशु कौन सा है?", options: ["शेर", "हाथी", "बाघ", "तेंदुआ"], correct: 2 },
  { question: "द्वितीय विश्व युद्ध किस वर्ष समाप्त हुआ था?", options: ["1942", "1945", "1947", "1950"], correct: 1 },
  { question: "Computer का जनक (Father of Computer) किसे माना जाता है?", options: ["एलन ट्यूरिंग", "चार्ल्स बैबेज", "बिल गेट्स", "स्टीव जॉब्स"], correct: 1 },
  { question: "मनुष्य के शरीर में कुल कितनी हड्डियाँ होती हैं?", options: ["206", "201", "208", "210"], correct: 0 },
  { question: "भारत के पहले राष्ट्रपति कौन थे?", options: ["लाल बहादुर शास्त्री", "महात्मा गांधी", "डॉ. राजेन्द्र प्रसाद", "जवाहरलाल नेहरू"], correct: 2 },
  { question: "Google के वर्तमान CEO कौन हैं?", options: ["सुंदर पिचाई", "एलन मस्क", "सत्या नडेला", "मार्क ज़ुकरबर्ग"], correct: 0 },
  { question: "NASA का full form क्या है?", options: ["National Aeronautics and Space Administration", "North Atlantic Space Agency", "National Atomic Science Agency", "None of these"], correct: 0 },
  { question: "ताजमहल किसने बनवाया था?", options: ["अकबर", "शाहजहाँ", "औरंगज़ेब", "बाबर"], correct: 1 },
  { question: "Electric bulb का आविष्कार किसने किया था?", options: ["थॉमस एडिसन", "न्यूटन", "फैरेडे", "आइंस्टीन"], correct: 0 },
  { question: "हमारे सौरमंडल का सबसे बड़ा ग्रह कौन सा है?", options: ["पृथ्वी", "मंगल", "बृहस्पति", "शनि"], correct: 2 },
  { question: "भारत की राजधानी कौन सी है?", options: ["मुंबई", "कोलकाता", "दिल्ली", "चेन्नई"], correct: 2 },
  { question: "Oxygen गैस की खोज किसने की थी?", options: ["जोसेफ प्रीस्टली", "न्यूटन", "मैरी क्यूरी", "आइंस्टीन"], correct: 0 },
  { question: "United Nations (UN) का मुख्यालय कहाँ स्थित है?", options: ["पेरिस", "न्यूयॉर्क", "जिनेवा", "लंदन"], correct: 1 },
  { question: "विश्व का सबसे बड़ा महासागर कौन सा है?", options: ["अटलांटिक", "इंडियन", "पैसिफिक", "आर्कटिक"], correct: 2 },
  { question: "भारत में स्वतंत्रता दिवस कब मनाया जाता है?", options: ["15 जुलाई", "26 जनवरी", "2 अक्टूबर", "15 अगस्त"], correct: 3 },
  { question: "CPU का full form क्या है?", options: ["Central Program Unit", "Central Processing Unit", "Computer Power Unit", "Control Processing Unit"], correct: 1 },
  { question: "भारत की सबसे लंबी नदी कौन सी है?", options: ["यमुना", "ब्रह्मपुत्र", "गोदावरी", "गंगा"], correct: 3 },
  { question: "विश्व की सबसे ऊँची चोटी कौन सी है?", options: ["K2", "एवरेस्ट", "कंचनजंघा", "मकालू"], correct: 1 },
  { question: "Light year किस चीज़ को नापने के लिए प्रयोग होता है?", options: ["समय", "दूरी", "गति", "भार"], correct: 1 }
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

