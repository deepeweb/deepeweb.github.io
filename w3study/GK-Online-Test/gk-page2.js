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
// Question conding
    const questions = [
  { question: "भारत का सबसे बड़ा बंदरगाह कौन सा है?", options: ["मुंबई पोर्ट", "कोलकाता पोर्ट", "चेन्नई पोर्ट", "विशाखापत्तनम पोर्ट"], correct: 0 },
  { question: "भारत का पहला परमाणु परीक्षण कहाँ हुआ था?", options: ["पोकरण", "बेंगलुरु", "श्रीहरिकोटा", "चांदीपुर"], correct: 0 },
  { question: "भारत के पहले राष्ट्रपति कौन थे?", options: ["डॉ. राजेंद्र प्रसाद", "सरदार पटेल", "पंडित नेहरू", "डॉ. राधाकृष्णन"], correct: 0 },
  { question: "भारत की सबसे लंबी सड़क कौन सी है?", options: ["ग्रैंड ट्रंक रोड", "नेशनल हाईवे 44", "नेशनल हाईवे 1", "यमुना एक्सप्रेसवे"], correct: 1 },
  { question: "भारत की पहली महिला मुख्यमंत्री कौन थी?", options: ["सुषमा स्वराज", "ममता बनर्जी", "इंदिरा गांधी", "सुचेता कृपलानी"], correct: 3 },
  { question: "भारत का सबसे पुराना परमाणु ऊर्जा संयंत्र कौन सा है?", options: ["कुडनकुलम", "नरोरा", "तारापुर", "कैगा"], correct: 2 },
  { question: "भारत का सबसे बड़ा मस्जिद कौन सा है?", options: ["जामा मस्जिद, दिल्ली", "ताज-उल-मस्जिद, भोपाल", "मक्का मस्जिद, हैदराबाद", "चारमीनार मस्जिद"], correct: 1 },
  { question: "भारत में सबसे बड़ा रेलमार्ग नेटवर्क किस राज्य में है?", options: ["उत्तर प्रदेश", "महाराष्ट्र", "राजस्थान", "मध्य प्रदेश"], correct: 0 },
  { question: "भारत का पहला आईटी हब कौन सा शहर है?", options: ["बेंगलुरु", "हैदराबाद", "गुरुग्राम", "पुणे"], correct: 0 },
  { question: "भारत का पहला विज्ञान शहर (Science City) कहाँ स्थित है?", options: ["कोलकाता", "बेंगलुरु", "मुंबई", "दिल्ली"], correct: 0 },
  { question: "भारत के पहले गवर्नर जनरल कौन थे?", options: ["लॉर्ड कर्ज़न", "वारेन हेस्टिंग्स", "लॉर्ड माउंटबेटन", "लॉर्ड डलहौजी"], correct: 1 },
  { question: "किस भारतीय राज्य में सबसे अधिक जनजातियाँ पाई जाती हैं?", options: ["राजस्थान", "मध्य प्रदेश", "अरुणाचल प्रदेश", "छत्तीसगढ़"], correct: 2 },
  { question: "भारत में सबसे अधिक चीनी उत्पादन किस राज्य में होता है?", options: ["बिहार", "उत्तर प्रदेश", "महाराष्ट्र", "गुजरात"], correct: 1 },
  { question: "भारत में कुल कितने उच्च न्यायालय (High Courts) हैं?", options: ["20", "24", "25", "30"], correct: 2 },
  { question: "भारत की पहली बोलती फिल्म कौन सी थी?", options: ["अलम आरा", "मुगल-ए-आज़म", "राजा हरिश्चंद्र", "किसान कन्या"], correct: 0 },
  { question: "भारत का सबसे ऊँचा बाँध कौन सा है?", options: ["हीराकुंड बाँध", "टिहरी बाँध", "सरदार सरोवर बाँध", "नागरजुनसागर बाँध"], correct: 1 },
  { question: "भारत की पहली सुपर कंप्यूटर परियोजना कौन सी थी?", options: ["सिद्धार्थ", "परम", "शक्ति", "अग्नि"], correct: 1 },
  { question: "भारत में सबसे पहला बैंक कौन सा था?", options: ["स्टेट बैंक ऑफ इंडिया", "बैंक ऑफ हिंदुस्तान", "इलाहाबाद बैंक", "पंजाब नेशनल बैंक"], correct: 1 },
  { question: "भारत के किस राज्य में सबसे अधिक चाय का उत्पादन होता है?", options: ["केरल", "पश्चिम बंगाल", "असम", "तमिलनाडु"], correct: 2 },
  { question: "भारतीय रेलवे का मुख्यालय कहाँ स्थित है?", options: ["मुंबई", "कोलकाता", "दिल्ली", "चेन्नई"], correct: 2 }
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
    nextBtn.style.opacity = 0.5;
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

