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
    "question": "HTML में कौन सा tag table row create करने के लिए use होता है?",
    "options": ["<tr>", "<td>", "<th>", "<row>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag table heading cell define करता है?",
    "options": ["<th>", "<thead>", "<td>", "<heading>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा attribute image के alternate text के लिए use होता है?",
    "options": ["alt", "title", "src", "description"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag ordered list create करता है?",
    "options": ["<ol>", "<ul>", "<li>", "<list>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag unordered list create करता है?",
    "options": ["<ul>", "<ol>", "<li>", "<list>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा attribute background color set करने के लिए use होता है (deprecated)?",
    "options": ["bgcolor", "background", "color", "bg"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा element user से password input लेने के लिए use होता है?",
    "options": ["<input type='password'>", "<input type='text'>", "<password>", "<secret>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा attribute form data भेजने की method set करता है?",
    "options": ["method", "action", "target", "type"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा element semantic रूप से header section define करता है?",
    "options": ["<header>", "<head>", "<h1>", "<top>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा attribute video autoplay के लिए use होता है?",
    "options": ["autoplay", "play", "start", "loop"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag definition list create करने के लिए use होता है?",
    "options": ["<dl>", "<list>", "<ol>", "<deflist>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag definition term define करता है?",
    "options": ["<dt>", "<dd>", "<term>", "<define>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag definition description define करता है?",
    "options": ["<dd>", "<dt>", "<desc>", "<definition>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा element line break insert करने के लिए use होता है?",
    "options": ["<br>", "<lb>", "<break>", "<newline>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा element horizontal line insert करता है?",
    "options": ["<hr>", "<line>", "<horizontal>", "<border>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा attribute inline CSS apply करने के लिए use होता है?",
    "options": ["style", "css", "design", "format"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा element highlighted text दिखाने के लिए use होता है?",
    "options": ["<mark>", "<highlight>", "<em>", "<strong>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा element italic text दिखाने के लिए use होता है?",
    "options": ["<i>", "<italic>", "<em>", "<it>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा element bold text दिखाने के लिए use होता है?",
    "options": ["<b>", "<bold>", "<strong>", "<weight>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा attribute link को new tab में open करने के लिए use होता है?",
    "options": ["target='_blank'", "target='_self'", "newtab", "open"],
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

