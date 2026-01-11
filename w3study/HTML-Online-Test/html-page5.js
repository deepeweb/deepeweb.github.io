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
    "question": "HTML में कौन सा attribute table cell को दो या अधिक columns में फैलाता है?",
    "options": ["rowspan", "colspan", "merge", "span"],
    "correct": 1
  },
  {
    "question": "HTML में कौन सा tag preformatted text दिखाने के लिए use होता है?",
    "options": ["<pre>", "<code>", "<format>", "<text>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag keyboard input show करता है?",
    "options": ["<kbd>", "<key>", "<input>", "<code>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag superscript text के लिए use होता है?",
    "options": ["<sup>", "<sub>", "<super>", "<high>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag subscript text के लिए use होता है?",
    "options": ["<sup>", "<sub>", "<low>", "<down>"],
    "correct": 1
  },
  {
    "question": "HTML में कौन सा attribute image को lazy loading के लिए use होता है?",
    "options": ["loading='lazy'", "defer", "delay", "async"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag definition term define करता है?",
    "options": ["<dt>", "<dd>", "<dfn>", "<term>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag definition description define करता है?",
    "options": ["<dd>", "<dt>", "<desc>", "<dfn>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag contact address के लिए semantic है?",
    "options": ["<contact>", "<info>", "<address>", "<details>"],
    "correct": 2
  },
  {
    "question": "HTML में कौन सा tag document के main content को define करता है?",
    "options": ["<section>", "<main>", "<article>", "<body>"],
    "correct": 1
  },
  {
    "question": "HTML में कौन सा attribute audio/video को repeat करने के लिए use होता है?",
    "options": ["autoplay", "loop", "repeat", "reload"],
    "correct": 1
  },
  {
    "question": "HTML में कौन सा tag table caption के लिए use होता है?",
    "options": ["<caption>", "<title>", "<head>", "<label>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा attribute input field को केवल पढ़ने योग्य बनाता है?",
    "options": ["readonly", "disabled", "lock", "inactive"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा attribute input field को disable करता है?",
    "options": ["readonly", "disabled", "lock", "inactive"],
    "correct": 1
  },
  {
    "question": "HTML में कौन सा tag semantic नहीं है?",
    "options": ["<footer>", "<section>", "<div>", "<nav>"],
    "correct": 2
  },
  {
    "question": "HTML में कौन सा tag text abbreviation define करता है?",
    "options": ["<abbr>", "<short>", "<acronym>", "<ab>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag deleted text को define करता है?",
    "options": ["<del>", "<strike>", "<remove>", "<cut>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag inserted text को define करता है?",
    "options": ["<insert>", "<ins>", "<add>", "<include>"],
    "correct": 1
  },
  {
    "question": "HTML में कौन सा attribute form submission के बाद redirect URL set करता है?",
    "options": ["action", "method", "target", "redirect"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag footer section define करता है?",
    "options": ["<footer>", "<bottom>", "<end>", "<foot>"],
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

