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
    "question": "HTML में text underline करने के लिए कौन सा tag use होता है?",
    "options": ["<u>", "<underline>", "<ul>", "<under>"],
    "correct": 0
  },
  {
    "question": "HTML में ordered list बनाने के लिए कौन सा tag use होता है?",
    "options": ["<ul>", "<ol>", "<list>", "<order>"],
    "correct": 1
  },
  {
    "question": "HTML में drop-down list बनाने के लिए कौन सा tag use होता है?",
    "options": ["<dropdown>", "<select>", "<option>", "<list>"],
    "correct": 1
  },
  {
    "question": "HTML में table heading define करने के लिए कौन सा tag होता है?",
    "options": ["<thead>", "<th>", "<h>", "<head>"],
    "correct": 1
  },
  {
    "question": "HTML में image का alternative text किस attribute से set किया जाता है?",
    "options": ["title", "alt", "name", "desc"],
    "correct": 1
  },
  {
    "question": "HTML में hyperlink open करने के लिए किस attribute का use होता है?",
    "options": ["src", "href", "link", "path"],
    "correct": 1
  },
  {
    "question": "HTML में कौन सा tag block-level element नहीं है?",
    "options": ["<p>", "<div>", "<span>", "<section>"],
    "correct": 2
  },
  {
    "question": "HTML में कौन सा attribute inline CSS apply करने के लिए use होता है?",
    "options": ["class", "id", "style", "css"],
    "correct": 2
  },
  {
    "question": "HTML में text italic और emphasis दोनों करने के लिए कौन सा tag semantic है?",
    "options": ["<em>", "<i>", "<italic>", "<imp>"],
    "correct": 0
  },
  {
    "question": "HTML में किस tag के अंदर page का title लिखा जाता है?",
    "options": ["<meta>", "<title>", "<head>", "<h1>"],
    "correct": 1
  },
  {
    "question": "HTML में कौन सा tag audio और video दोनों को support नहीं करता?",
    "options": ["<embed>", "<audio>", "<video>", "<source>"],
    "correct": 0
  },
  {
    "question": "HTML5 में progress bar दिखाने के लिए कौन सा tag use होता है?",
    "options": ["<progress>", "<bar>", "<status>", "<meter>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा attribute input field को required बनाता है?",
    "options": ["mandatory", "required", "validate", "must"],
    "correct": 1
  },
  {
    "question": "HTML में कौन सा attribute form में data भेजने का method बताता है?",
    "options": ["send", "type", "method", "action"],
    "correct": 2
  },
  {
    "question": "HTML में कौन सा tag semantic नहीं है?",
    "options": ["<article>", "<aside>", "<div>", "<header>"],
    "correct": 2
  },
  {
    "question": "HTML5 में किस tag का use interactive content के लिए किया जाता है?",
    "options": ["<details>", "<summary>", "<dialog>", "सभी"],
    "correct": 3
  },
  {
    "question": "HTML में कौन सा attribute image के size को control करता है?",
    "options": ["width & height", "size", "scale", "dimension"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag definition list create करने के लिए होता है?",
    "options": ["<dl>", "<def>", "<list>", "<definition>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag navigation links के लिए semantic है?",
    "options": ["<nav>", "<menu>", "<links>", "<navigation>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा element multi-line text input देता है?",
    "options": ["<textarea>", "<input type='text'>", "<textbox>", "<multitext>"],
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

