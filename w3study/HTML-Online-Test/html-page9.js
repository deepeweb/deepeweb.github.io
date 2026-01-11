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
    "question": "HTML में कौन सा element HTML5 में progress bar दिखाने के लिए use होता है?",
    "options": ["<progress>", "<bar>", "<meter>", "<status>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag audio file insert करने के लिए use होता है?",
    "options": ["<music>", "<sound>", "<audio>", "<media>"],
    "correct": 2
  },
  {
    "question": "HTML में कौन सा attribute image का URL define करता है?",
    "options": ["src", "href", "link", "path"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा element user से text input लेने के लिए use होता है?",
    "options": ["<input type='text'>", "<textbox>", "<text>", "<field>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा attribute hyperlink का destination set करता है?",
    "options": ["src", "href", "link", "target"],
    "correct": 1
  },
  {
    "question": "HTML में कौन सा tag drop-down list create करने के लिए use होता है?",
    "options": ["<select>", "<dropdown>", "<list>", "<option>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag किसी दूसरे HTML file को embed करने के लिए use होता है?",
    "options": ["<iframe>", "<frame>", "<embed>", "<import>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा attribute form submit होने पर data भेजने का URL set करता है?",
    "options": ["action", "method", "target", "formurl"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag abbreviation के लिए use होता है?",
    "options": ["<abbr>", "<acronym>", "<short>", "<small>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा element current progress percentage दिखाने के लिए use होता है?",
    "options": ["<progress>", "<meter>", "<range>", "<status>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा attribute audio को mute करने के लिए use होता है?",
    "options": ["muted", "silent", "nosound", "mute"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag navigation links group करने के लिए use होता है?",
    "options": ["<menu>", "<nav>", "<links>", "<header>"],
    "correct": 1
  },
  {
    "question": "HTML में कौन सा attribute image को responsive बनाने के लिए use होता है?",
    "options": ["style='max-width:100%'", "responsive", "fit", "fluid"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा element semantic रूप से footer define करता है?",
    "options": ["<footer>", "<bottom>", "<foot>", "<end>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag preformatted text दिखाने के लिए use होता है?",
    "options": ["<pre>", "<code>", "<text>", "<formatted>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag document का main heading define करता है?",
    "options": ["<h1>", "<title>", "<header>", "<heading>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag image map define करता है?",
    "options": ["<map>", "<imagemap>", "<area>", "<coords>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा attribute link को same page में open करने के लिए use होता है?",
    "options": ["target='_self'", "target='_blank'", "same", "pageopen"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा element semantic रूप से article content define करता है?",
    "options": ["<section>", "<article>", "<content>", "<main>"],
    "correct": 1
  },
  {
    "question": "HTML में कौन सा element figure और caption को represent करता है?",
    "options": ["<figure>", "<imagecaption>", "<fig>", "<imgcap>"],
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

