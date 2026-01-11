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
    "question": "HTML में कौन सा tag italic text show करता है?",
    "options": ["<i>", "<italic>", "<em>", "<it>"],
    "correct": 0
  },
  {
    "question": "HTML element जो page में horizontal line create करता है?",
    "options": ["<line>", "<hr>", "<br>", "<hl>"],
    "correct": 1
  },
  {
    "question": "HTML का कौन सा tag metadata define करता है?",
    "options": ["<meta>", "<link>", "<head>", "<style>"],
    "correct": 0
  },
  {
    "question": "HTML में कौन सा tag external CSS link करने के लिए use होता है?",
    "options": ["<script>", "<css>", "<link>", "<style>"],
    "correct": 2
  },
  {
    "question": "Web page में special characters के लिए क्या use किया जाता है?",
    "options": ["ASCII codes", "HTML entities", "Escape strings", "CDATA"],
    "correct": 1
  },
  {
    "question": "HTML element जो page का visible part होता है?",
    "options": ["<html>", "<head>", "<body>", "<section>"],
    "correct": 2
  },
  {
    "question": "HTML में checkbox input के लिए कौन सा type use होता है?",
    "options": ["text", "checkbox", "radio", "button"],
    "correct": 1
  },
  {
    "question": "HTML table में cell data insert करने के लिए कौन सा tag use होता है?",
    "options": ["<th>", "<td>", "<tr>", "<table>"],
    "correct": 1
  },
  {
    "question": "HTML में line break के लिए कौन सा empty tag use होता है?",
    "options": ["<break>", "<br>", "<lb>", "<newline>"],
    "correct": 1
  },
  {
    "question": "<head> tag में निम्नलिखित में से क्या include नहीं होता?",
    "options": ["<title>", "<style>", "<meta>", "<body>"],
    "correct": 3
  },
  {
    "question": "HTML में radio button select करने के लिए कौन सा attribute जरूरी होता है?",
    "options": ["value", "checked", "id", "placeholder"],
    "correct": 1
  },
  {
    "question": "HTML में किस tag से paragraph बनाया जाता है?",
    "options": ["<p>", "<para>", "<text>", "<pr>"],
    "correct": 0
  },
  {
    "question": "HTML में email input field के लिए correct type क्या है?",
    "options": ["type='text'", "type='email'", "type='mail'", "type='input'"],
    "correct": 1
  },
  {
    "question": "HTML में favicon set करने के लिए कौन सा tag use होता है?",
    "options": ["<icon>", "<link>", "<favicon>", "<meta>"],
    "correct": 1
  },
  {
    "question": "HTML में semantic tag कौन सा है?",
    "options": ["<div>", "<span>", "<section>", "<b>"],
    "correct": 2
  },
  {
    "question": "HTML form submit करने के लिए कौन सा tag use होता है?",
    "options": ["<submit>", "<input type='submit'>", "<send>", "<formsubmit>"],
    "correct": 1
  },
  {
    "question": "HTML में text box के लिए कौन सा input type होता है?",
    "options": ["type='textarea'", "type='textbox'", "type='text'", "type='inputtext'"],
    "correct": 2
  },
  {
    "question": "HTML tag जो bold और important दोनों indicate करता है?",
    "options": ["<strong>", "<b>", "<em>", "<bold>"],
    "correct": 0
  },
  {
    "question": "HTML tag जो web page में JavaScript insert करता है?",
    "options": ["<js>", "<script>", "<javascript>", "<code>"],
    "correct": 1
  },
  {
    "question": "HTML में कौन सा tag video insert करने के लिए use होता है?",
    "options": ["<movie>", "<media>", "<video>", "<mp4>"],
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

