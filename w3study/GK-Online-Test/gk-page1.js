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
// Question conding
    const questions = [
  { question: "विश्व में सबसे अधिक बोली जाने वाली भाषा कौन सी है?", options: ["अंग्रेज़ी", "स्पैनिश", "हिन्दी", "मंदारिन"], correct: 3 },
  { question: "ओपेरा हाउस किस देश में स्थित है?", options: ["इटली", "ऑस्ट्रेलिया", "फ्रांस", "अमेरिका"], correct: 1 },
  { question: "प्रसिद्ध एफिल टॉवर कहाँ स्थित है?", options: ["इटली", "स्पेन", "फ्रांस", "जर्मनी"], correct: 2 },
  { question: "माउंट एवरेस्ट किस दो देशों की सीमा पर स्थित है?", options: ["भारत और चीन", "नेपाल और चीन", "भूटान और तिब्बत", "भारत और नेपाल"], correct: 1 },
  { question: "किस देश को 'सूर्योदय की भूमि' कहा जाता है?", options: ["चीन", "जापान", "थाईलैंड", "दक्षिण कोरिया"], correct: 1 },
  { question: "कौन सा देश 'कंगारूओं की भूमि' के नाम से प्रसिद्ध है?", options: ["न्यूजीलैंड", "ऑस्ट्रेलिया", "अमेरिका", "ब्राजील"], correct: 1 },
  { question: "विश्व का सबसे पुराना लोकतंत्र किस देश में है?", options: ["भारत", "ब्रिटेन", "ग्रीस", "अमेरिका"], correct: 2 },
  { question: "क्रिस्टो द रिडीमर प्रतिमा कहाँ स्थित है?", options: ["अर्जेंटीना", "ब्राजील", "चिली", "पेरू"], correct: 1 },
  { question: "नियाग्रा जलप्रपात किन दो देशों की सीमा पर स्थित है?", options: ["अमेरिका और कनाडा", "अमेरिका और मैक्सिको", "कनाडा और ग्रीनलैंड", "अमेरिका और ब्राजील"], correct: 0 },
  { question: "विश्व का सबसे व्यस्त हवाई अड्डा कौन सा है?", options: ["बीजिंग कैपिटल एयरपोर्ट", "लॉस एंजेलेस एयरपोर्ट", "दुबई इंटरनेशनल एयरपोर्ट", "अटलांटा इंटरनेशनल एयरपोर्ट"], correct: 3 },
  { question: "विश्व का सबसे ऊँचा सक्रिय ज्वालामुखी कौन सा है?", options: ["माउंट वेसुवियस", "माउंट कोटोपैक्सी", "माउंट एटना", "ओजोस डेल सलाडो"], correct: 3 },
  { question: "पेट्राफाईड जंगल कहाँ स्थित है?", options: ["अमेरिका", "ऑस्ट्रेलिया", "चिली", "इंडोनेशिया"], correct: 0 },
  { question: "किस देश में सबसे अधिक समय तक दिन और रात एक समान होते हैं?", options: ["नार्वे", "स्वीडन", "फिनलैंड", "आइसलैंड"], correct: 0 },
  { question: "बुर्ज खलीफा कहाँ स्थित है?", options: ["दुबई", "सऊदी अरब", "कतर", "ओमान"], correct: 0 },
  { question: "किस देश को 'पिरामिडों की भूमि' कहा जाता है?", options: ["मेक्सिको", "इंडोनेशिया", "मिस्र", "पेरू"], correct: 2 },
  { question: "किस देश का झंडा सबसे पुराना है?", options: ["ब्रिटेन", "डेनमार्क", "फ्रांस", "जर्मनी"], correct: 1 },
  { question: "किस देश का राष्ट्रीय खेल सूमो कुश्ती है?", options: ["कोरिया", "जापान", "मंगोलिया", "चीन"], correct: 1 },
  { question: "गोल्डन गेट ब्रिज किस शहर में स्थित है?", options: ["लॉस एंजेलेस", "न्यूयॉर्क", "सैन फ्रांसिस्को", "सिएटल"], correct: 2 },
  { question: "भारत की पहली महिला प्रधानमंत्री कौन थी?", options: ["प्रतिभा पाटिल", "इंदिरा गांधी", "सरोजिनी नायडू", "सोनिया गांधी"], correct: 1 },
  { question: "विश्व का सबसे बड़ा क्रिकेट स्टेडियम कौन सा है?", options: ["मेलबर्न क्रिकेट ग्राउंड", "लॉर्ड्स", "नरेंद्र मोदी स्टेडियम", "ईडन गार्डन्स"], correct: 2 }
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

