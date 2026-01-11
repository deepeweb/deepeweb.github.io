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
  { question: "भारत का राष्ट्रीय फूल कौन सा है?", options: ["गुलाब", "कमल", "सूरजमुखी", "गेंदा"], correct: 1 },
  { question: "WWW का full form क्या है?", options: ["World Wide Web", "World Web Wide", "Web Wide World", "None of these"], correct: 0 },
  { question: "भारत की पहली महिला प्रधानमंत्री कौन थीं?", options: ["सोनिया गांधी", "इंदिरा गांधी", "प्रतिभा पाटिल", "सुषमा स्वराज"], correct: 1 },
  { question: "संसद भवन (Parliament House) कहाँ स्थित है?", options: ["मुंबई", "दिल्ली", "कोलकाता", "जयपुर"], correct: 1 },
  { question: "भारत की मुद्रा कौन सी है?", options: ["Rupee", "Dollar", "Euro", "Dinar"], correct: 0 },
  { question: "CPU को कंप्यूटर का क्या कहा जाता है?", options: ["Brain", "Heart", "Memory", "Engine"], correct: 0 },
  { question: "भारत में कुल कितने High Courts हैं?", options: ["21", "22", "25", "28"], correct: 2 },
  { question: "भारत का राष्ट्रीय खेल क्या माना जाता है?", options: ["क्रिकेट", "कबड्डी", "हॉकी", "फुटबॉल"], correct: 2 },
  { question: "DNA का full form क्या है?", options: ["Digital Network Access", "Deoxyribonucleic Acid", "Data Navigation Area", "None of these"], correct: 1 },
  { question: "ISRO का full form क्या है?", options: ["Indian Space Research Organization", "Indian Satellite Research Operation", "International Space Rocket Organization", "None of these"], correct: 0 },
  { question: "भारत के पहले उपराष्ट्रपति कौन थे?", options: ["जाकिर हुसैन", "डॉ. सर्वपल्ली राधाकृष्णन", "आर. वेंकैया नायडू", "श्यामा प्रसाद मुखर्जी"], correct: 1 },
  { question: "भारत की पहली महिला राष्ट्रपति कौन थीं?", options: ["सुषमा स्वराज", "इंदिरा गांधी", "प्रतिभा पाटिल", "मीरा कुमार"], correct: 2 },
  { question: "LED का full form क्या है?", options: ["Light Emitting Diode", "Low Energy Display", "Light Electrical Device", "None of these"], correct: 0 },
  { question: "भारत में सबसे पहले रेल सेवा कब शुरू हुई थी?", options: ["1853", "1901", "1847", "1869"], correct: 0 },
  { question: "भारत का सबसे पुराना पर्वत कौन सा है?", options: ["हिमालय", "सह्याद्री", "अरावली", "विंध्याचल"], correct: 2 },
  { question: "Google किस साल में स्थापित हुआ था?", options: ["1996", "1998", "2000", "2002"], correct: 1 },
  { question: "भारत का पहला राष्ट्रपति बनने से पहले डॉ. राजेन्द्र प्रसाद किस क्षेत्र से जुड़े थे?", options: ["विज्ञान", "कला", "कानून", "संगीत"], correct: 2 },
  { question: "Radar का full form क्या है?", options: ["Radio Detection and Ranging", "Random Detection and Response", "Radio Active Device and Range", "None of these"], correct: 0 },
  { question: "Mahatma Gandhi को राष्ट्रपिता (Father of the Nation) किसने कहा था?", options: ["सुभाष चंद्र बोस", "नेहरू", "सरदार पटेल", "डॉ. राजेंद्र प्रसाद"], correct: 0 },
  { question: "भारत में पहला अंतरिक्ष यात्री कौन था?", options: ["विक्रम साराभाई", "राकेश शर्मा", "कल्पना चावला", "नरेन्द्र मोदी"], correct: 1 }
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

