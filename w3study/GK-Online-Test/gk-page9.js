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
  { question: "विश्व का सबसे बड़ा देश (क्षेत्रफल के अनुसार) कौन सा है?", options: ["कनाडा", "चीन", "रूस", "अमेरिका"], correct: 2 },
  { question: "HTTP का full form क्या है?", options: ["HyperText Transfer Protocol", "High Transfer Text Protocol", "HyperTool Text Page", "HyperText Telephone Protocol"], correct: 0 },
  { question: "भारत की पहली महिला IPS अधिकारी कौन थीं?", options: ["किरण बेदी", "सुषमा स्वराज", "प्रतिभा पाटिल", "मधु खोसला"], correct: 0 },
  { question: "UNO का मुख्यालय कहाँ है?", options: ["पेरिस", "न्यूयॉर्क", "जिनेवा", "लंदन"], correct: 1 },
  { question: "भारत में सबसे ज्यादा बोली जाने वाली भाषा कौन सी है?", options: ["हिंदी", "बंगाली", "तेलुगु", "मराठी"], correct: 0 },
  { question: "HTML में लिंक बनाने के लिए कौन सा tag use होता है?", options: ["<img>", "<link>", "<a>", "<href>"], correct: 2 },
  { question: "IC chip किस material से बनी होती है?", options: ["काँच", "तांबा", "प्लास्टिक", "सिलिकॉन"], correct: 3 },
  { question: "भारत में सबसे अधिक चाय उत्पादक राज्य कौन सा है?", options: ["असम", "केरल", "पश्चिम बंगाल", "सिक्किम"], correct: 0 },
  { question: "World Health Organization का गठन कब हुआ था?", options: ["1945", "1947", "1948", "1950"], correct: 2 },
  { question: "DNA किसके अंदर पाया जाता है?", options: ["Blood", "Cell Nucleus", "Skin", "Bone"], correct: 1 },
  { question: "QR Code का full form क्या है?", options: ["Quick Record", "Quick Response", "Quality Response", "Quick Review"], correct: 1 },
  { question: "सौरमंडल में सबसे ठंडा ग्रह कौन सा है?", options: ["शनि", "यूरेनस", "नेपच्यून", "मंगल"], correct: 2 },
  { question: "भारत की पहली bullet train किस शहर से शुरू होगी?", options: ["दिल्ली", "मुंबई", "अहमदाबाद", "मुंबई से अहमदाबाद"], correct: 3 },
  { question: "भारत की प्रथम महिला राष्ट्रपति कौन थीं?", options: ["मीरा कुमार", "सुषमा स्वराज", "इंदिरा गांधी", "प्रतिभा पाटिल"], correct: 3 },
  { question: "PNG का full form क्या है (image format)?", options: ["Portable Network Graphics", "Personal Network Graphics", "Pixel Net Graphic", "Picture Named Graphic"], correct: 0 },
  { question: "Vitamins की खोज किसने की थी?", options: ["Linus Pauling", "Funk", "Darwin", "Newton"], correct: 1 },
  { question: "भारत में सबसे पुराना पर्व कौन सा माना जाता है?", options: ["दिवाली", "होली", "रक्षा बंधन", "महाशिवरात्रि"], correct: 3 },
  { question: "PDF file को खोलने के लिए कौन सा software ज़्यादातर use होता है?", options: ["MS Word", "Notepad", "Adobe Reader", "Paint"], correct: 2 },
  { question: "भारत का पहला बैंक कौन सा था?", options: ["SBI", "Allahabad Bank", "Bank of Hindustan", "PNB"], correct: 2 },
  { question: "Word Processor software का मुख्य कार्य क्या होता है?", options: ["Image बनाना", "Text लिखना व edit करना", "Video चलाना", "Music चलाना"], correct: 1 }
];
     
let currentQuestionIndex = 0;
let score = 0;
let attempts = 0;
let selectedAnswer = null;
let timer;
let userAnswers = [];

function escapeHTML(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
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
    button.innerHTML = escapeHTML(option); // IMPORTANT CHANGE HERE
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

    function escapeHTML(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

// After quiz submit:
let detailedResults = document.getElementById("detailedResults");
detailedResults.innerHTML = "";

userAnswers.forEach((item, index) => {
    let isCorrect = item.selected === item.correct;
    let icon = isCorrect
        ? "<span class='right-icon'>&#10004;</span>" // ✅
        : "<span class='wrong-icon'>&#10008;</span>"; // ❌

    detailedResults.innerHTML += `
        <div class='result-item'>
            <strong>Q${index + 1}: ${escapeHTML(item.question)}</strong><br>
            <span class="label your-label">Your Answer:</span> ${escapeHTML(item.selected)} ${icon}<br>
            <span class="label correct-label">Correct Answer:</span> ${escapeHTML(item.correct)}
        </div>
    `;
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
