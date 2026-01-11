// Stories data (would normally be in a separate story.js file)
        const stories = [
            {
                title: "The Quick Brown Fox",
                content: "The quick brown fox jumps over the lazy dog. This sentence contains every letter in the English alphabet. Typing practice helps improve your speed and accuracy. Keep practicing to become a better typist."
            },
            {
                title: "A Dream Within a Dream",
                content: "Take this kiss upon the brow! And, in parting from you now, Thus much let me avow: You are not wrong, who deem That my days have been a dream; Yet if hope has flown away In a night, or in a day, In a vision, or in none, Is it therefore the less gone? All that we see or seem Is but a dream within a dream."
            },
            {
                title: "The Road Not Taken",
                content: "Two roads diverged in a yellow wood, And sorry I could not travel both And be one traveler, long I stood And looked down one as far as I could To where it bent in the undergrowth; Then took the other, as just as fair, And having perhaps the better claim, Because it was grassy and wanted wear; Though as for that the passing there Had worn them really about the same."
            },
            {
                title: "The Future of Technology",
                content: "Technology is evolving at a rapid pace. Artificial intelligence and machine learning are transforming industries. Quantum computing promises to solve problems that are currently unsolvable. The future holds exciting possibilities for those who embrace technological advancement."
            }
        ];

        // DOM Elements
        const startScreen = document.getElementById('start-screen');
        const countdownScreen = document.getElementById('countdown-screen');
        const testScreen = document.getElementById('test-screen');
        const resultsScreen = document.getElementById('results-screen');
        
        const storySelect = document.getElementById('story-select');
        const timeSelect = document.getElementById('time-select');
        const startBtn = document.getElementById('start-btn');
        const countdownElement = document.getElementById('countdown');
        const storyContainer = document.getElementById('story-container');
        const typingInput = document.getElementById('typing-input');
        const timerElement = document.getElementById('timer');
        const completeBtn = document.getElementById('complete-btn');
        const restartBtn = document.getElementById('restart-btn');
        
        const accuracyElement = document.getElementById('accuracy');
        const wpmElement = document.getElementById('wpm');
        const timeTakenElement = document.getElementById('time-taken');
        const correctWordsElement = document.getElementById('correct-words');
        const incorrectWordsElement = document.getElementById('incorrect-words');

        // Application state
        let selectedStory = null;
        let timeLimit = 0;
        let timerInterval = null;
        let countdownInterval = null;
        let startTime = null;
        endTime = null;
        let words = [];
        let currentWordIndex = 0;
        let correctWords = 0;
        let incorrectWords = 0;

        // Initialize the application
        function init() {
            // Populate story select dropdown
            stories.forEach((story, index) => {
                const option = document.createElement('option');
                option.value = index;
                option.textContent = story.title;
                storySelect.appendChild(option);
            });
            
            // Event listeners
            startBtn.addEventListener('click', startTest);
            completeBtn.addEventListener('click', completeTest);
            restartBtn.addEventListener('click', restartTest);
            typingInput.addEventListener('input', handleTyping);
        }

        // Start the test
        function startTest() {
            const storyIndex = parseInt(storySelect.value);
            selectedStory = stories[storyIndex].content;
            timeLimit = parseInt(timeSelect.value) * 60; // Convert to seconds
            
            // Show countdown screen
            startScreen.classList.remove('active');
            countdownScreen.classList.add('active');
            
            // Start countdown
            let count = 3;
            countdownElement.textContent = count;
            
            countdownInterval = setInterval(() => {
                count--;
                
                if (count > 0) {
                    countdownElement.textContent = count;
                } else if (count === 0) {
                    countdownElement.textContent = "Start!";
                } else {
                    clearInterval(countdownInterval);
                    startTypingTest();
                }
            }, 1000);
        }

        // Start the typing test
        function startTypingTest() {
            // Show test screen
            countdownScreen.classList.remove('active');
            testScreen.classList.add('active');
            
            // Initialize words array
            words = selectedStory.split(' ').map(word => ({ text: word, status: '' }));
            currentWordIndex = 0;
            correctWords = 0;
            incorrectWords = 0;
            
            // Display the story with highlighting
            renderStory();
            
            // Set up the timer
            let timeLeft = timeLimit;
            timerElement.textContent = formatTime(timeLeft);
            
            startTime = new Date();
            
            timerInterval = setInterval(() => {
                timeLeft--;
                timerElement.textContent = formatTime(timeLeft);
                
                if (timeLeft <= 0) {
                    completeTest();
                }
            }, 1000);
            
            // Focus on the textarea
            typingInput.focus();
        }

        // Format time in seconds to mm:ss
        function formatTime(seconds) {
            const mins = Math.floor(seconds / 60);
            const secs = seconds % 60;
            return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }

        // Render the story with word highlighting
        function renderStory() {
            storyContainer.innerHTML = '';
            
            words.forEach((word, index) => {
                const wordSpan = document.createElement('span');
                wordSpan.textContent = word.text;
                wordSpan.classList.add('word');
                
                if (word.status === 'incorrect') {
                    wordSpan.classList.add('incorrect');
                } else if (word.status === 'correct') {
                    wordSpan.classList.add('correct');
                }
                
                if (index === currentWordIndex) {
                    wordSpan.classList.add('current');
                }
                
                storyContainer.appendChild(wordSpan);
                
                // Add a space after each word except the last one
                if (index < words.length - 1) {
                    storyContainer.appendChild(document.createTextNode(' '));
                }
            });
        }

        // Handle typing input
        function handleTyping() {
            const typedText = typingInput.value;
            const currentWord = words[currentWordIndex].text;
            
            // Check if the user has typed a space (completed a word)
            if (typedText.endsWith(' ')) {
                // Remove the space for comparison
                const typedWord = typedText.trim();
                
                // Check if the word is correct
                if (typedWord === currentWord) {
                    words[currentWordIndex].status = 'correct';
                    correctWords++;
                } else {
                    words[currentWordIndex].status = 'incorrect';
                    incorrectWords++;
                }
                
                // Move to the next word
                currentWordIndex++;
                
                // Clear the textarea
                typingInput.value = '';
                
                // Update the story display
                renderStory();
                
                // Scroll to keep the current word in view
                const currentWordElement = storyContainer.querySelector('.current');
                if (currentWordElement) {
                    currentWordElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
                
                // Check if all words have been typed
                if (currentWordIndex >= words.length) {
                    completeTest();
                }
            }
        }

        // Complete the test
        function completeTest() {
            clearInterval(timerInterval);
            endTime = new Date();
            
            // Calculate results
            const timeTaken = Math.floor((endTime - startTime) / 1000);
            const totalWords = correctWords + incorrectWords;
            const accuracy = totalWords > 0 ? Math.round((correctWords / totalWords) * 100) : 0;
            const wpm = timeTaken > 0 ? Math.round((correctWords / timeTaken) * 60) : 0;
            
            // Display results
            accuracyElement.textContent = `${accuracy}%`;
            wpmElement.textContent = wpm;
            timeTakenElement.textContent = `${timeTaken}s`;
            correctWordsElement.textContent = correctWords;
            incorrectWordsElement.textContent = incorrectWords;
            
            // Show results screen
            testScreen.classList.remove('active');
            resultsScreen.classList.add('active');
        }

        // Restart the test
        function restartTest() {
            resultsScreen.classList.remove('active');
            startScreen.classList.add('active');
            
            // Reset state
            typingInput.value = '';
        }

        // Initialize the app when the page loads
        window.addEventListener('load', init);