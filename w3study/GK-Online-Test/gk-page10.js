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
  { question: "GPS का full form क्या है?", options: ["Global Positioning System", "Graphical Position Service", "Geo Position Software", "Global Process System"], correct: 0 },
  { question: "विश्व की सबसे बड़ी मीठे पानी की झील कौन सी है?", options: ["Lake Victoria", "Lake Baikal", "Lake Superior", "Lake Tanganyika"], correct: 2 },
  { question: "भारत का राष्ट्रीय फल कौन सा है?", options: ["सेब", "केला", "आम", "संतरा"], correct: 2 },
  { question: "CPU का मुख्य कार्य क्या है?", options: ["Data input", "Data display", "Processing", "Storage"], correct: 2 },
  { question: "Microsoft का founder कौन है?", options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Jeff Bezos"], correct: 1 },
  { question: "भारत की मुद्रा कौन सी है?", options: ["Dollar", "Euro", "Rupee", "Yen"], correct: 2 },
  { question: "ATM का full form क्या है?", options: ["All Time Money", "Automatic Teller Machine", "Any Time Money", "Auto Transfer Machine"], correct: 1 },
  { question: "Photosynthesis की प्रक्रिया में पौधे क्या लेते हैं?", options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon Dioxide"], correct: 3 },
  { question: "Email का अविष्कार किसने किया था?", options: ["Ray Tomlinson", "Tim Berners-Lee", "Bill Gates", "Steve Wozniak"], correct: 0 },
  { question: "भारत के पहले प्रधानमंत्री कौन थे?", options: ["महात्मा गांधी", "लाल बहादुर शास्त्री", "जवाहरलाल नेहरू", "सरदार पटेल"], correct: 2 },
  { question: "WWW का full form क्या है?", options: ["World Wide Web", "Web World Wide", "Wide World Web", "World Web Wide"], correct: 0 },
  { question: "शुद्ध जल का pH मान क्या होता है?", options: ["5", "7", "9", "11"], correct: 1 },
  { question: "भारत का राष्ट्रीय पक्षी कौन है?", options: ["तोता", "मोर", "बाज", "हंस"], correct: 1 },
  { question: "Light year किसे मापा जाता है?", options: ["समय", "दूरी", "उर्जा", "गति"], correct: 1 },
  { question: "USB का full form क्या है?", options: ["Universal Serial Bus", "United Serial Board", "Universal System Bus", "Unlimited Storage Bus"], correct: 0 },
  { question: "भारत का सबसे ऊँचा जलप्रपात कौन सा है?", options: ["दूधसागर", "जोग", "केशव", "चंचल"], correct: 1 },
  { question: "सांस लेते समय मनुष्य कौन सी gas बाहर निकालता है?", options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon Dioxide"], correct: 3 },
  { question: "HTML का प्रयोग किसके लिए किया जाता है?", options: ["Mobile Apps", "Web Page design", "Gaming", "Networking"], correct: 1 },
  { question: "ISRO का full form क्या है?", options: ["Indian Space Research Organization", "International Satellite Research Organization", "Indian Space Rocket Organization", "Indian Service Research Organization"], correct: 0 },
  { question: "Bluetooth किसके लिए प्रयोग होता है?", options: ["Video call", "Wireless data transfer", "Satellite connection", "GPS navigation"], correct: 1 }
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

