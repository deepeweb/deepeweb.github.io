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
    "question": "HTML में कौन सा attribute image load न होने पर alternate text दिखाता है?",
    "options": ["title", "alt", "caption", "description"],
    "correct": 1
  },
  {
    "question": "HTML में कौन सा tag video embed करने के लिए use होता है?",
    "options": ["<video>", "<media>", "<movie>", "<embedvideo>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag italic text के लिए semantic होता है?",
    "options": ["<em>", "<i>", "<italic>", "दोनों A और B"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा attribute image का size define करता है?",
    "options": ["height & width", "size", "dimension", "scale"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag quotation (quote) दिखाने के लिए use होता है?",
    "options": ["<quote>", "<blockquote>", "<q>", "दोनों B और C"],
    "correct": 3
  },
  {
    "question": "HTML में कौन सा tag table में heading cells के लिए use होता है?",
    "options": ["<th>", "<td>", "<thead>", "<caption>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा element email link create करता है?",
    "options": ["<a href='mailto:'>", "<mail>", "<emaillink>", "<contact>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा attribute hyperlink को नई tab में open करता है?",
    "options": ["target='_blank'", "newtab", "opennew", "window='_new'"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag सबसे बड़ा heading define करता है?",
    "options": ["<h6>", "<heading>", "<h1>", "<title>"],
    "correct": 2
  },
  {
    "question": "HTML में कौन सा attribute background color set करने के लिए use होता है?",
    "options": ["bgcolor", "background", "color", "bg"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag definition list create करता है?",
    "options": ["<dl>", "<list>", "<def>", "<dlist>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag text को delete (strike through) दिखाता है?",
    "options": ["<del>", "<strike>", "<s>", "सभी"],
    "correct": 3
  },
  {
    "question": "HTML में कौन सा attribute audio को automatically play करता है?",
    "options": ["autoplay", "play", "start", "loop"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा element form fields को group करने के लिए use होता है?",
    "options": ["<fieldset>", "<group>", "<formgroup>", "<section>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag horizontal line create करता है?",
    "options": ["<line>", "<hr>", "<hline>", "<break>"],
    "correct": 1
  },
  {
    "question": "HTML में कौन सा attribute video को loop में play करता है?",
    "options": ["loop", "repeat", "cycle", "again"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा attribute password type field बनाता है?",
    "options": ["type='password'", "secure", "secret", "hidden"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा element description details छुपा/दिखा सकता है?",
    "options": ["<details>", "<summary>", "<collapse>", "दोनों A और B"],
    "correct": 3
  },
  {
    "question": "HTML में कौन सा tag table का caption set करता है?",
    "options": ["<caption>", "<title>", "<head>", "<th>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा attribute form data send करने का method set करता है?",
    "options": ["action", "target", "method", "send"],
    "correct": 2
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

