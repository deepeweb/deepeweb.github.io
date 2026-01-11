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
    "question": "HTML का पूरा नाम क्या है?",
    "options": ["Hyperlinks and Text Markup Language", "Hyper Text Markup Language", "Home Tool Markup Language", "Hyper Tool Multi Language"],
    "correct": 1
  },
  {
    "question": "HTML में सबसे बड़ा heading tag कौन सा होता है?",
    "options": ["<h6>", "<heading>", "<h1>", "<head>"],
    "correct": 2
  },
  {
    "question": "Web page को structure देने के लिए कौन सी language use होती है?",
    "options": ["CSS", "HTML", "JavaScript", "PHP"],
    "correct": 1
  },
  {
    "question": "<br> tag का use किस लिए किया जाता है?",
    "options": ["Bold text", "New paragraph", "Line break", "Hyperlink"],
    "correct": 2
  },
  {
    "question": "HTML document की शुरुआत किस tag से होती है?",
    "options": ["<html>", "<head>", "<body>", "<!DOCTYPE html>"],
    "correct": 3
  },
  {
    "question": "HTML में image insert करने के लिए कौन सा tag use होता है?",
    "options": ["<img>", "<image>", "<pic>", "<photo>"],
    "correct": 0
  },
  {
    "question": "a tag का use किसके लिए होता है?",
    "options": ["Audio insert करने के लिए", "Link create करने के लिए", "Alignment के लिए", "Alert देने के लिए"],
    "correct": 1
  },
  {
    "question": "HTML का कौन सा tag table create करने के लिए use होता है?",
    "options": ["<tab>", "<table>", "<tbl>", "<td>"],
    "correct": 1
  },
  {
    "question": "HTML में comment लिखने का सही syntax क्या है?",
    "options": ["// comment", "<!-- comment -->", "# comment", "** comment **"],
    "correct": 1
  },
  {
    "question": "HTML में list create करने के लिए कौन सा tag use होता है?",
    "options": ["<ul> या <ol>", "<list>", "<li>", "<ls>"],
    "correct": 0
  },
  {
    "question": "HTML file को browser में open करने के लिए किस extension की जरूरत होती है?",
    "options": [".docx", ".txt", ".html", ".css"],
    "correct": 2
  },
  {
    "question": "<title> tag का use किस लिए किया जाता है?",
    "options": ["Page title show करने के लिए", "Image add करने के लिए", "List बनाने के लिए", "Form create करने के लिए"],
    "correct": 0
  },
  {
    "question": "Web page में background color set करने के लिए कौन सा attribute use होता है?",
    "options": ["bgcolor", "color", "background", "style"],
    "correct": 0
  },
  {
    "question": "HTML में form बनाने के लिए कौन सा tag use किया जाता है?",
    "options": ["<input>", "<form>", "<fieldset>", "<dataform>"],
    "correct": 1
  },
  {
    "question": "HTML tag जो unordered list create करता है?",
    "options": ["<li>", "<ol>", "<ul>", "<dl>"],
    "correct": 2
  },
  {
    "question": "Web page में text bold करने के लिए कौन सा tag use होता है?",
    "options": ["<b>", "<strong>", "<bold>", "<em>"],
    "correct": 0
  },
  {
    "question": "HTML में iframe का क्या use है?",
    "options": ["Image show करने के लिए", "Video play करने के लिए", "Another web page embed करने के लिए", "Form create करने के लिए"],
    "correct": 2
  },
  {
    "question": "HTML5 में audio add करने के लिए कौन सा tag use होता है?",
    "options": ["<sound>", "<audio>", "<music>", "<mp3>"],
    "correct": 1
  },
  {
    "question": "HTML tag जो table row define करता है?",
    "options": ["<tr>", "<td>", "<th>", "<row>"],
    "correct": 0
  },
  {
    "question": "HTML में responsive design के लिए कौन सा tag use किया जाता है?",
    "options": ["<meta viewport>", "<responsive>", "<media>", "<screen>"],
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
        ? "<span class='right-icon'>&#10004;</span>" // ✅
        : "<span class='wrong-icon'>&#10008;</span>"; // ❌

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

