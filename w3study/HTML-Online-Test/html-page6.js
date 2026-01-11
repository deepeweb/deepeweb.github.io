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
    "question": "HTML में कौन सा attribute link को download के रूप में save करने के लिए use होता है?",
    "options": ["download", "save", "href", "target"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag time और date define करता है?",
    "options": ["<datetime>", "<time>", "<date>", "<clock>"],
    "correct": 1
  },
  {
    "question": "HTML में कौन सा element responsive image के लिए use होता है?",
    "options": ["<img>", "<picture>", "<responsive>", "<image>"],
    "correct": 1
  },
  {
    "question": "HTML में कौन सा attribute media file का multiple sources define करता है?",
    "options": ["src", "source", "data", "srcset"],
    "correct": 3
  },
  {
    "question": "HTML में कौन सा tag user input को mark करने के लिए use होता है?",
    "options": ["<input>", "<kbd>", "<mark>", "<user>"],
    "correct": 1
  },
  {
    "question": "HTML में कौन सा element interactive command list create करता है?",
    "options": ["<menu>", "<command>", "<list>", "<option>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा attribute iframe के border को हटाने के लिए use होता है?",
    "options": ["border='0'", "frameborder='0'", "noborder", "style='border:none'"],
    "correct": 1
  },
  {
    "question": "HTML में कौन सा tag base URL set करता है?",
    "options": ["<base>", "<url>", "<link>", "<head>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag short form या acronym के लिए use होता है?",
    "options": ["<abbr>", "<short>", "<acronym>", "<sf>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा attribute input field में placeholder text set करता है?",
    "options": ["placeholder", "hint", "default", "value"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag mathematical expressions के लिए use होता है?",
    "options": ["<math>", "<equation>", "<formula>", "<calc>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag HTML5 में deprecate हो चुका है?",
    "options": ["<center>", "<section>", "<footer>", "<header>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा attribute image map area define करता है?",
    "options": ["coords", "map", "shape", "area"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag audio/video के लिए subtitles या captions add करता है?",
    "options": ["<caption>", "<track>", "<sub>", "<subtitle>"],
    "correct": 1
  },
  {
    "question": "HTML में कौन सा attribute form data भेजने से पहले validate करता है?",
    "options": ["validate", "novalidate", "check", "confirm"],
    "correct": 1
  },
  {
    "question": "HTML में कौन सा tag text को छोटे आकार में दिखाने के लिए use होता है?",
    "options": ["<small>", "<tiny>", "<short>", "<mini>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag line break के बिना text को wrap होने से रोकता है?",
    "options": ["<nobr>", "<nowrap>", "<pre>", "<break>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा attribute video को बिना sound के play करता है?",
    "options": ["mute", "muted", "nosound", "silent"],
    "correct": 1
  },
  {
    "question": "HTML में कौन सा attribute image loading performance improve करता है?",
    "options": ["loading", "lazy", "fast", "defer"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag data list बनाने के लिए use होता है?",
    "options": ["<datalist>", "<list>", "<optionlist>", "<inputlist>"],
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

