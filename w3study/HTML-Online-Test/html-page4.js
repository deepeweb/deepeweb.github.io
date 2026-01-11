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
  {
    "question": "HTML में कौन सा tag inline style add करने के लिए use होता है?",
    "options": ["<css>", "<style>", "<link>", "<script>"],
    "correct": 1
  },
  {
    "question": "HTML में कौन सा attribute link को new tab में open करने के लिए use होता है?",
    "options": ["target='_self'", "target='_new'", "target='_blank'", "target='_top'"],
    "correct": 2
  },
  {
    "question": "HTML में कौन सा tag semantic structure के लिए header define करता है?",
    "options": ["<head>", "<header>", "<h1>", "<top>"],
    "correct": 1
  },
  {
    "question": "HTML में कौन सा element search engine के लिए keywords और description define करता है?",
    "options": ["<meta>", "<seo>", "<keywords>", "<head>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag figure और caption को group करने के लिए use होता है?",
    "options": ["<figcaption>", "<caption>", "<figure>", "<group>"],
    "correct": 2
  },
  {
    "question": "HTML में कौन सा tag form के अंदर drop-down menu में items add करता है?",
    "options": ["<item>", "<option>", "<select>", "<list>"],
    "correct": 1
  },
  {
    "question": "HTML5 में कौन सा tag self-contained content के लिए use होता है?",
    "options": ["<section>", "<article>", "<div>", "<aside>"],
    "correct": 1
  },
  {
    "question": "HTML में कौन सा attribute image का path set करता है?",
    "options": ["href", "src", "path", "link"],
    "correct": 1
  },
  {
    "question": "HTML में कौन सा tag table footer define करता है?",
    "options": ["<tfoot>", "<tfootter>", "<bottom>", "<footer>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag content को highlight करने के लिए use होता है?",
    "options": ["<mark>", "<highlight>", "<strong>", "<em>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा attribute input field का default value set करता है?",
    "options": ["value", "placeholder", "default", "name"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा attribute किसी link को inactive बनाता है?",
    "options": ["disable", "inactive", "disabled", "none"],
    "correct": 2
  },
  {
    "question": "HTML5 में कौन सा tag media playback controls enable करता है?",
    "options": ["controls", "autoplay", "loop", "play"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag responsive image map define करता है?",
    "options": ["<map>", "<imagemap>", "<area>", "<responsive>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा attribute audio को automatically play करने के लिए use होता है?",
    "options": ["autoplay", "controls", "loop", "start"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag text को quotation के रूप में दिखाने के लिए use होता है?",
    "options": ["<quote>", "<blockquote>", "<quotation>", "<q>"],
    "correct": 3
  },
  {
    "question": "HTML में कौन सा tag short inline quotation के लिए use होता है?",
    "options": ["<q>", "<quote>", "<inlinequote>", "<shortquote>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag long quotation के लिए use होता है?",
    "options": ["<blockquote>", "<q>", "<longquote>", "<quote>"],
    "correct": 0
  },
  {
    "question": "HTML5 में कौन सा element contact information define करता है?",
    "options": ["<address>", "<contact>", "<info>", "<details>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag computer code show करने के लिए use होता है?",
    "options": ["<code>", "<pre>", "<kbd>", "<syntax>"],
    "correct": 0
  }
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
        ? "<span class='right-icon'>&#10004;</span>" // âœ…
        : "<span class='wrong-icon'>&#10008;</span>"; // âŒ

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

