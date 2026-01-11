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
    "question": "HTML में कौन सा attribute form submit होने के बाद target window set करता है?",
    "options": ["target", "action", "method", "redirect"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag progress bar का value दिखाता है?",
    "options": ["<meter>", "<progress>", "<bar>", "<status>"],
    "correct": 1
  },
  {
    "question": "HTML में कौन सा tag measurement या gauge दिखाने के लिए use होता है?",
    "options": ["<progress>", "<meter>", "<gauge>", "<range>"],
    "correct": 1
  },
  {
    "question": "HTML में कौन सा attribute input में min और max values set करता है?",
    "options": ["range", "limit", "min/max", "size"],
    "correct": 2
  },
  {
    "question": "HTML में कौन सा input type slider create करता है?",
    "options": ["range", "slider", "scroll", "bar"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag search box semantic तरीके से define करता है?",
    "options": ["<search>", "<form role='search'>", "<find>", "<input type='search'>"],
    "correct": 3
  },
  {
    "question": "HTML में कौन सा attribute autocomplete feature control करता है?",
    "options": ["autocomplete", "autosuggest", "autofill", "suggest"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag clickable button create करता है?",
    "options": ["<input type='button'>", "<btn>", "<button>", "दोनों A और C"],
    "correct": 3
  },
  {
    "question": "HTML में कौन सा attribute केवल numbers को allow करता है?",
    "options": ["type='number'", "type='digit'", "type='int'", "type='numeric'"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा input type date picker create करता है?",
    "options": ["date", "datetime", "calendar", "datepicker"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा attribute text box में default text दिखाता है?",
    "options": ["placeholder", "value", "default", "hint"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag semantic रूप से navigation links के लिए use होता है?",
    "options": ["<menu>", "<nav>", "<links>", "<navigation>"],
    "correct": 1
  },
  {
    "question": "HTML में कौन सा element figure का caption define करता है?",
    "options": ["<figcaption>", "<caption>", "<title>", "<label>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा attribute input field को required बनाता है?",
    "options": ["mandatory", "require", "required", "must"],
    "correct": 2
  },
  {
    "question": "HTML में कौन सा tag semantic document outline create करने में मदद करता है?",
    "options": ["<section>", "<div>", "<br>", "<span>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा attribute audio/video का playback speed control करता है?",
    "options": ["speed", "playbackrate", "rate", "tempo"],
    "correct": 1
  },
  {
    "question": "HTML में कौन सा attribute script को page load के बाद execute करता है?",
    "options": ["async", "defer", "delay", "wait"],
    "correct": 1
  },
  {
    "question": "HTML में कौन सा element details और summary दिखाने के लिए use होता है?",
    "options": ["<summary>", "<details>", "दोनों A और B", "<info>"],
    "correct": 2
  },
  {
    "question": "HTML में कौन सा tag contact information के लिए semantic है?",
    "options": ["<address>", "<contact>", "<info>", "<details>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag embedded object (जैसे PDF या Flash) show करने के लिए use होता है?",
    "options": ["<embed>", "<object>", "<iframe>", "सभी"],
    "correct": 3
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

