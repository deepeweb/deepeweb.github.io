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
  { question: "भारत का राष्ट्रीय पक्षी कौन है?", options: ["कोयल", "तोता", "मोर", "हंस"], correct: 2 },
  { question: "UNESCO का full form क्या है?", options: ["United Nations Educational, Scientific and Cultural Organization", "United Nations Environmental Science and Culture Organization", "Universal Science and Education Commission Office", "None of these"], correct: 0 },
  { question: "ATM का full form क्या है?", options: ["Any Time Money", "Automated Teller Machine", "All Time Money", "Automatic Transfer Machine"], correct: 1 },
  { question: "भारत का सबसे बड़ा राज्य क्षेत्रफल के हिसाब से कौन सा है?", options: ["उत्तर प्रदेश", "मध्य प्रदेश", "महाराष्ट्र", "राजस्थान"], correct: 3 },
  { question: "कंप्यूटर में सबसे तेज memory कौन सी होती है?", options: ["RAM", "ROM", "Cache", "Hard Disk"], correct: 2 },
  { question: "इंटरनेट का आविष्कार किसने किया था?", options: ["टिम बर्नर्स-ली", "विंटन सर्फ और बॉब कान", "चार्ल्स बैबेज", "एडविन हबल"], correct: 1 },
  { question: "भारत का पहला उपग्रह कौन सा था?", options: ["INSAT", "Aryabhata", "Bhaskara", "Rohini"], correct: 1 },
  { question: "विश्व का सबसे लंबा नदी कौन सा है?", options: ["गंगा", "नील", "अमेज़न", "यांग्ज़ी"], correct: 1 },
  { question: "WHO का full form क्या है?", options: ["World Hygiene Organization", "World Health Organization", "World Humanitarian Organization", "None of these"], correct: 1 },
  { question: "First Indian to go into space कौन थे?", options: ["कल्पना चावला", "राकेश शर्मा", "विक्रम साराभाई", "सतीश धवन"], correct: 1 },
  { question: "भारत का पहला मोबाइल नेटवर्क कौन सा था?", options: ["BSNL", "Airtel", "MTNL", "Vodafone"], correct: 0 },
  { question: "भारत में योजना आयोग (Planning Commission) की स्थापना कब हुई थी?", options: ["1947", "1950", "1952", "1965"], correct: 1 },
  { question: "Bluetooth technology का नाम किसके नाम पर रखा गया है?", options: ["किसी वैज्ञानिक", "एक राजा", "एक नदी", "कंपनी के CEO"], correct: 1 },
  { question: "भारत के पहले प्रधानमंत्री कौन थे?", options: ["सरदार पटेल", "जवाहरलाल नेहरू", "लाल बहादुर शास्त्री", "राजेंद्र प्रसाद"], correct: 1 },
  { question: "PIN का full form क्या है (ATM में)?", options: ["Personal Identification Number", "Private Identity Number", "Password Identification Number", "Person Internal Number"], correct: 0 },
  { question: "Solar System में कितने planets हैं?", options: ["7", "8", "9", "10"], correct: 1 },
  { question: "भारत में सबसे अधिक बोली जाने वाली भाषा कौन सी है?", options: ["अंग्रेज़ी", "उर्दू", "हिन्दी", "बंगाली"], correct: 2 },
  { question: "Google की parent company का नाम क्या है?", options: ["Meta", "Alphabet Inc.", "Microsoft", "Amazon"], correct: 1 },
  { question: "भारत में कितने total राज्य (States) हैं?", options: ["28", "29", "30", "27"], correct: 0 },
  { question: "PDF का full form क्या है?", options: ["Print Document Format", "Portable Document Format", "Public Document File", "Personal Data File"], correct: 1 }
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

