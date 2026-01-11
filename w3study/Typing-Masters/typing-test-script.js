document.addEventListener('DOMContentLoaded', () => {
  // DOM refs
  const setupContainer   = document.getElementById('setupContainer');
  const testDurationSel  = document.getElementById('testDuration');
  const startBtn         = document.getElementById('startBtn');

  const countdownEl      = document.getElementById('countdown');

  const typingContainer  = document.getElementById('typingContainer');
  const timerEl          = document.getElementById('timer');
  const storyContainer   = document.getElementById('storyContainer');
  const typingArea       = document.getElementById('typingArea');

  const resultsBox       = document.getElementById('results');
  const wpmEl            = document.getElementById('wpm');
  const accuracyEl       = document.getElementById('accuracy');
  const scoreEl          = document.getElementById('score');
  const timeTakenEl      = document.getElementById('timeTaken');
  const restartBtn       = document.getElementById('restartBtn');

  // State
  let selectedMinutes = 1;               // default 1 min
  let words = [];                         // all words of the session
  let currentWordIndex = 0;               // pointer in words
  let incorrectSet = new Set();           // indices finalized incorrect
  let liveError = false;                  // live mismatch flag
  let totalSeconds = 0;                   // for timer display
  let timerInterval = null;
  let endTimeout = null;
  let testActive = false;

  // Metrics
  let correctChars = 0;
  let totalChars = 0;

  // --- Helpers ---

  function getStoryPoolForDuration(mins) {
    // Supports both shapes:
    // 1) stories = [...] (array)
    // 2) stories = { short:[], medium:[], long:[] }
    const s = window.stories;

    if (!s) {
      // fallback sample text if stories.js missing
      return [
        "Once upon a time in a small village surrounded by green fields and quiet hills there lived a boy named Arjun who was known for his endless curiosity and simple heart and although he came from a poor family that struggled to make ends meet he always carried a smile on his face because he believed that life was full of small wonders waiting to be discovered and he would spend his mornings helping his father in the fields and his afternoons chasing dragonflies by the river and his evenings listening to his grandmother’s old stories that spoke of heroes kings and distant lands where bravery and kindness always triumphed over greed and cruelty and one day as he was walking back from the river he noticed a small injured bird lying near a bush and though many children might have walked past without paying attention Arjun carefully picked up the bird and carried it home where he cleaned its wound with water and fed it crumbs of rice and day by day he watched the bird slowly regain its strength until finally it spread its wings and flew away and this simple act of kindness filled his heart with joy and made him realize how much happiness could come from helping others and in the same village there was a wealthy merchant who owned many shops and lands but despite his riches he was often restless and worried for he always feared losing his fortune and whenever he saw Arjun running barefoot on the road laughing with his friends he wondered how the boy could be so cheerful without money fine clothes or luxury and one evening when the merchant’s cart broke down near the field Arjun without hesitation helped him lift the heavy load and guided the oxen back onto the path and the merchant thanked him and asked how he managed to remain so happy all the time and Arjun simply replied that happiness did not come from gold or silver but from the little moments of love care and gratitude we share with people around us and the merchant thought deeply about those words and though he did not say anything then they remained in his mind for many days and as time passed Arjun grew older but his spirit remained the same always curious always willing to help and he loved going to the village school where the teacher noticed his eagerness to learn and encouraged him to read books about the wider world and one of the books told stories of explorers who crossed oceans and deserts to discover new places and Arjun would imagine himself sailing on a ship or walking through forests filled with animals he had never seen and though his family could not afford more than a few books he treasured them and read the same pages again and again until he knew them by heart and sometimes he would sit with the younger children of the village and retell those stories in his own words making them laugh and dream of distant lands and one rainy season the river that flowed near the village rose higher than usual and the strong current began to wash away parts of the small wooden bridge that connected the village to the fields and when the villagers realized the danger they hurried to save their belongings but many were afraid to cross and in that moment Arjun though only a teenager stepped forward and with courage helped carry the children and elderly across to safety and his quick thinking and bravery inspired others to join in and soon the whole village was safe from the rising water and that night sitting under the dark sky lit with stars the villagers praised his courage and his grandmother placed her hand on his head and said that true strength lies not in muscles but in the heart that cares for others and these words stayed with Arjun for the rest of his life guiding him whenever he faced challenges and years later when he grew into a young man he decided to travel beyond the hills to see the world he had always dreamed of and though he had little money he carried with him courage kindness and the lessons his family had taught him and on his journey he met strangers who became friends he faced hardships that tested his patience but in every town and city he visited he left behind a memory of kindness whether by helping a farmer harvest crops by teaching children to read or by guiding lost travelers on the road and slowly his name spread not as a warrior or a wealthy man but as someone whose heart was pure and whose smile never faded and one day after many years he returned to his village now a man with stories of faraway lands and experiences that filled everyone with wonder and though he had seen great cities tall mountains and wide seas he told his people that the greatest treasure of all was still the love and trust of his village where he had first learned the value of kindness and gratitude and the wealthy merchant who was now old came to him with tears in his eyes saying that he had finally understood the secret of happiness that Arjun had once spoken about long ago and together they sat under the same tree where Arjun had once played as a boy watching the children run barefoot and the birds fly freely across the sky and Arjun realized that life though filled with struggles could always be beautiful when lived with simplicity and love and as the sun set over the quiet hills he knew that his story was not about riches or fame but about the endless journey of learning growing and sharing goodness wherever he went."
      ];
    }

    if (Array.isArray(s)) return s;

    // object shape
    if (mins >= 5 && s.long?.length) return s.long;
    if (mins >= 3 && s.medium?.length) return s.medium;
    if (s.short?.length) return s.short;

    // any available bucket
    const merged = [...(s.short||[]), ...(s.medium||[]), ...(s.long||[])];
    return merged.length ? merged : [
      "In a quiet town near the edge of a wide forest there lived a girl named Meera who loved to explore the world around her and though she was only twelve years old she had a brave spirit and endless curiosity and every morning after finishing her school work she would take long walks along the small paths that led into the woods listening to the sound of birds and the rustling of leaves in the wind and she often carried a notebook where she would write about the animals she saw and the plants she collected and her dream was to one day become a teacher so she could share her love for nature with others and one summer afternoon while walking deeper into the forest than usual she heard a soft cry that sounded like a puppy and following the sound she discovered a small fawn trapped in a bush with its leg caught in a thick branch and though she felt afraid at first because the forest was quiet and lonely she reminded herself that the animal needed help so she carefully pushed the branches apart and freed the fawn which looked at her with wide eyes before limping back into the woods and this moment filled her heart with joy and she wrote in her notebook that helping even the smallest creature made her feel stronger than ever before and when she returned home and told her parents about it they were proud of her courage but also reminded her to always be careful when exploring alone and the next day she decided to take her younger brother Ravi with her so he too could see the beauty of the forest and together they discovered hidden flowers bright butterflies and even a small pond where frogs jumped from stone to stone and while Ravi at first was afraid of the insects and shadows he slowly began to enjoy the adventure because of Meera’s excitement and laughter and in time both children started visiting the forest regularly learning more about the life around them and sharing stories with their friends in school and one day when heavy rains flooded the paths many villagers worried about crossing the woods to reach the next town for supplies and though the adults hesitated Meera remembered the safe routes she had explored and offered to guide them and with careful steps she led the way through the forest helping the group reach the town safely and this act of bravery made the villagers realize that even a young girl could show wisdom and courage beyond her years and from that day on they respected her not just as a child but as a thoughtful member of the community and as years passed her love for learning and teaching only grew stronger and when she became older she fulfilled her dream of becoming a teacher who told children about the importance of nature kindness and courage and the story of the little fawn became her favorite example to show that even the smallest act of care can change the world in quiet but powerful ways."
    ];
  }

  function pickNewStory(excludeText = "") {
    const pool = getStoryPoolForDuration(selectedMinutes);
    if (!pool.length) return "";

    // try to avoid same as exclude
    const candidates = pool.filter(p => p !== excludeText);
    const base = candidates.length ? candidates : pool;
    const i = Math.floor(Math.random() * base.length);
    return base[i].trim();
  }

  function loadSessionText() {
    // For longer durations, optionally concatenate multiple stories to ensure enough text
    const base = pickNewStory();
    if (selectedMinutes <= 2) return base;

    if (selectedMinutes <= 4) {
      // 2 small/medium paragraphs
      return [base, pickNewStory(base)].join(" ");
    }

    // 5+ minutes -> 3–4 chunks
    const p2 = pickNewStory(base);
    const p3 = pickNewStory(p2);
    const maybeP4 = selectedMinutes >= 10 ? (" " + pickNewStory(p3)) : "";
    return [base, p2, p3].join(" ") + maybeP4;
  }

  function tokenize(text) {
    // split by spaces but keep clean words
    // also collapse multiple spaces/newlines to single space
    return text.replace(/\s+/g, " ").trim().split(" ");
  }

  function renderStory() {
    // Build HTML with classes:
    // current -> .current-word
    // past correct -> .correct-word
    // past incorrect -> .incorrect-word
    // live mismatch on current -> .live-error (styling red underline)
    const html = words.map((w, i) => {
      if (i < currentWordIndex) {
        return `<span class="${incorrectSet.has(i) ? 'incorrect-word' : 'correct-word'}">${escapeHTML(w)}</span>`;
      }
      if (i === currentWordIndex) {
        const cls = 'current-word' + (liveError ? ' live-error' : '');
        return `<span class="${cls}">${escapeHTML(w)}</span>`;
      }
      return `<span>${escapeHTML(w)}</span>`;
    }).join(" ");

    storyContainer.innerHTML = html;
    // Scroll-into-view for the current word if text overflows
    const cw = storyContainer.querySelector('.current-word');
    if (cw) cw.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }

  function escapeHTML(str) {
    return str.replace(/[&<>"']/g, m => (
      { '&':'&nbsp;&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[m]
    )).replace(/^ /, '&nbsp;');
  }

  function startCountdown(cb) {
    let count = 3;
    countdownEl.style.display = 'block';
    countdownEl.textContent = count;

    const iv = setInterval(() => {
      count--;
      if (count > 0) {
        countdownEl.textContent = count;
      } else {
        countdownEl.textContent = 'Go!';
        clearInterval(iv);
        setTimeout(() => {
          countdownEl.style.display = 'none';
          cb();
        }, 500);
      }
    }, 1000);
  }

  function updateTimer() {
    totalSeconds++;
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    timerEl.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }

  function endTest() {
    if (!testActive) return;

    clearInterval(timerInterval);
    clearTimeout(endTimeout);
    typingArea.disabled = true;
    testActive = false;

    const minutes = Math.max(totalSeconds / 60, 0.01);
    const grossWPM = Math.round((correctChars / 5) / minutes);
    const accuracy = totalChars > 0 ? Math.round((correctChars / totalChars) * 100) : 0;
    const score = Math.round(grossWPM * (accuracy / 100));

    wpmEl.textContent = grossWPM;
    accuracyEl.textContent = `${accuracy}%`;
    scoreEl.textContent = score;
    timeTakenEl.textContent = `${Math.floor(totalSeconds / 60)}m ${totalSeconds % 60}s`;

    // Show results, hide typing UI
    typingContainer.style.display = 'none';
    resultsBox.style.display = 'block';
    setupContainer.style.display = 'none'; // keep hidden
  }

  function resetSession() {
    // state reset (but not UI)
    words = [];
    currentWordIndex = 0;
    incorrectSet.clear();
    liveError = false;

    correctChars = 0;
    totalChars = 0;
    totalSeconds = 0;

    clearInterval(timerInterval);
    clearTimeout(endTimeout);

    timerEl.textContent = '00:00';
    typingArea.value = '';
    typingArea.classList.remove('live-error'); // just in case
  }

  function appendMoreTextIfNeeded() {
    // If user finishes all words before time, append another story chunk
    const extra = pickNewStory();
    if (!extra) return;
    const moreWords = tokenize(extra);
    words = words.concat(moreWords);
    // Re-render with new words present, current index unchanged
    renderStory();
  }

  // --- Event wiring ---

  startBtn.addEventListener('click', () => {
    // Move from setup -> countdown -> typing
    selectedMinutes = parseInt(testDurationSel.value || '1', 10) || 1;

    // UI
    resultsBox.style.display = 'none';
    setupContainer.style.display = 'none';
    typingContainer.style.display = 'block';

    resetSession();

    // Load story
    const bigText = loadSessionText();
    words = tokenize(bigText);
    renderStory();

    // Countdown then start
    startCountdown(() => {
      testActive = true;
      typingArea.disabled = false;
      typingArea.focus();

      // Start timers
      timerInterval = setInterval(updateTimer, 1000);
      endTimeout = setTimeout(endTest, selectedMinutes * 60 * 1000);
    });
  });

  restartBtn.addEventListener('click', () => {
    // Go back to setup screen (do not auto start)
    resultsBox.style.display = 'none';
    typingContainer.style.display = 'none';
    setupContainer.style.display = 'block';

    // default time = 1 minute
    testDurationSel.value = '1';
    selectedMinutes = 1;

    resetSession();
  });

  // Typing logic
  typingArea.addEventListener('input', () => {
    if (!testActive) return;

    const val = typingArea.value;
    const trimmed = val.replace(/\s+$/,''); // for live compare without trailing space
    const currentWord = words[currentWordIndex] || '';

    // Live mismatch check
    const targetSlice = currentWord.substring(0, trimmed.length);
    liveError = (trimmed !== targetSlice);
    renderStory();

    // If space pressed -> finalize this word
    if (/\s$/.test(val)) {
      const finalTyped = val.trim();
      // record metrics
      totalChars += currentWord.length;
      if (finalTyped === currentWord) {
        correctChars += currentWord.length;
      } else {
        incorrectSet.add(currentWordIndex);
      }

      // move next
      currentWordIndex++;
      typingArea.value = '';
      liveError = false;

      // If ran out of words but time remains, append more
      if (currentWordIndex >= words.length) {
        appendMoreTextIfNeeded();
      } else {
        renderStory();
      }
    }
  });

  // Initial UI state (only setup visible)
  setupContainer.style.display = 'block';
  typingContainer.style.display = 'none';
  resultsBox.style.display = 'none';
  testDurationSel.value = '1';
});
