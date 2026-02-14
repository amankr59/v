/**
 * Valentine's Day – Surprise + Multi-section love story
 * Keeps: surprise messages, floating hearts, music.
 * Adds: scroll sections, IntersectionObserver reveal, 100 Valentine messages, scene triggers.
 */

(function () {
  'use strict';

  // --- Existing: Romantic surprise messages ---
  const SURPRISE_MESSAGES = [
    'You are the reason my heart smiles ❤️',
    'Every moment with you feels like a gift 💕',
    'You make my world brighter every day ✨',
    'I fall in love with you more each day 🌹',
    'You are my favorite place to be 💖',
    'My heart belongs to you, today and always 💗',
    'With you, every day feels like Valentine\'s Day 💝',
    'You are the best thing that ever happened to me 🌷',
    'I love you more than words can say 💌',
    'You are my sunshine and my sweetest dream ☀️',
    'Forever isn\'t long enough with you 💕',
    'You make ordinary moments extraordinary ❤️',
    'My love for you grows stronger every day 💖',
    'You are the answer to every prayer 💗',
    'Together is my favorite place to be 💝',
  ];

  // --- 100 short romantic Hinglish messages (Valentine finale) ---
  const VALENTINE_MESSAGES = [
    'Tum meri zindagi ka sabse khoobsurat decision ho.',
    'Tum ho to sab hai.',
    'Har din tumhare sath ek naya tohfa hai.',
    'Tumhari aankhon mein main apna aasmaan dekhta hoon.',
    'Tumse zyada precious kuch nahi.',
    'Tumhare bina din adhura lagta hai.',
    'Tum mere dil ki raani ho.',
    'Tumhari muskurahat meri dua hai.',
    'Tum jaho hamesha khush.',
    'Tumne mere zindagi ko rang diya.',
    'Tum mere liye sab kuch ho.',
    'Har pal tumhare sath chahiye.',
    'Tumhari baatein dil ko chhu jati hain.',
    'Tum mere sapno ki heroine ho.',
    'Tumhe kabhi kho nahi sakta.',
    'Tumhari har request meri command hai.',
    'Tum jahan ho wahi ghar hai.',
    'Tumhare sath budhapa bhi khubsurat lagega.',
    'Tum mere liye sabse special ho.',
    'Tumhari yaad har pal hai.',
    'Tumhe dekh kar dil bhagwan ko thank you bolta hai.',
    'Tum mere kal, aaj aur kal ho.',
    'Tumhari safety mere liye sabse upar.',
    'Tumhare liye main kuch bhi kar sakta hoon.',
    'Tum mere confidence ho.',
    'Tum jaisi koi nahi.',
    'Tumhari voice meri favorite song hai.',
    'Tum mere sath rehna – bas yahi chahiye.',
    'Tumne mujhe better insaan banaya.',
    'Tum mere liye blessing ho.',
    'Tumhari har problem meri responsibility.',
    'Tum kabhi akela nahi hoge – main hoon na.',
    'Tumhare sath har din Valentine hai.',
    'Tum mere dil ki dharkan ho.',
    'Tumhe paana meri sabse badi kamiyabi.',
    'Tumhari khushiyan meri khushiyan.',
    'Tum mere liye family ho.',
    'Tum jahan khush ho wahi main khush.',
    'Tumhari respect mere liye zaroori hai.',
    'Tum mere future ho.',
    'Tumhe kabhi dard nahi dena chahta.',
    'Tum mere liye strong ho.',
    'Tumhari har wish puri karna chahta hoon.',
    'Tum mere sath hamesha raho.',
    'Tumhare bina kuch feel nahi hota.',
    'Tum mere home screen pe ho – dil ke.',
    'Tumhari care mujhe zinda rakhti hai.',
    'Tum mere liye enough ho.',
    'Tumhe sirf tumse zyada pyaar karta hoon.',
    'Tum mere safe place ho.',
    'Tumhari har baat sunna chahta hoon.',
    'Tum mere sath real ho – yahi sabse achha hai.',
    'Tum jitna sochti ho usse zyada special ho.',
    'Tumhare liye har din improve karta hoon.',
    'Tum mere dreams ka hissa ho.',
    'Tumhe kabhi doubt mein nahi chhodunga.',
    'Tumhari family bhi meri family.',
    'Tum jahan bhi jao dil wahi rehta hai.',
    'Tumhari smile meri energy.',
    'Tum mere liye rare ho.',
    'Tumhe hamesha support karunga.',
    'Tum mere past present future sab ho.',
    'Tumhari choice meri choice.',
    'Tum kabhi fail nahi – tum winner ho.',
    'Tum mere liye precious ho.',
    'Tumhare sath har mushkil easy lagti hai.',
    'Tum mere trust ho.',
    'Tumhe kabhi ignore nahi karunga.',
    'Tumhari dua mere liye kaafi hai.',
    'Tum mere sath real raho – bas yahi chahiye.',
    'Tum jitna deti ho usse zyada deserve karti ho.',
    'Tum mere liye strong rehna – main hoon na.',
    'Tumhari har need samajhna chahta hoon.',
    'Tum mere sath hamesha safe raho.',
    'Tumhe duniya ki har khushi chahiye.',
    'Tum mere liye motivation ho.',
    'Tumhari har galat cheez bhi mujhe pasand hai.',
    'Tum mere bina adhuri ho – main tumhare bina.',
    'Tum jahan ho wahan light hai.',
    'Tumhe kabhi compromise mein nahi chhodunga.',
    'Tumhari success meri success.',
    'Tum mere liye unique ho.',
    'Tumhare sath har din naya hai.',
    'Tum mere dil ki language ho.',
    'Tumhe hamesha sach bolunga.',
    'Tumhari har feeling valid hai.',
    'Tum mere liye perfect ho.',
    'Tum jitna socho usse zyada main tumse pyaar karta hoon.',
    'Tumhari har problem mein sath dunga.',
    'Tum mere liye enough ho – zyada hi ho.',
    'Tumhe kabhi change mat karna – tum jaisi ho waisi achhi ho.',
    'Tumhari har chhoti khushi meri khushi.',
    'Tum mere sath hamesha honest raho.',
    'Tum mere liye sabse important ho.',
    'Tumhare bina kuch plan nahi banta.',
    'Tum jahan khush ho wahi mera ghar.',
    'Tumhe hamesha respect dunga.',
    'Tumhari har dream ko main sath dunga.',
    'Tum mere liye sabse beautiful ho.',
    'Tumhe kabhi alone feel nahi hone dunga.',
    'Tumhari har smile ki wajah ban na chahta hoon.',
    'Tum mere sath rehna – yehi meri sabse badi dua.',
    'Tum jitna deti ho usse zyada main tumhe dunga.',
    'Tum mere liye sab kuch ho – tum hi ho.',
    'Tumhari har din special banani chahta hoon.',
    'Tumhe paana meri sabse badi kamiyabi hai.',
    'Tum mere dil ki raani ho – hamesha.',
    'Tumhare sath forever ka plan hai.',
    'Tum jahan ho wahi meri jannat.',
    'Tumhe kabhi hurt nahi karna chahta.',
    'Tumhari har baat matter karti hai.',
    'Tum mere liye sabse achhi ho.',
    'Tumhe hamesha choose karunga – har baar.',
    'Tum mere sath ho to lagta hai sab theek hai.',
    'Tumhari har wish meri wish.',
    'Tum mere liye sabse valuable ho.',
    'Tumhe sirf tumse zyada pyaar – hamesha.',
  ];

  // --- DOM (existing) ---
  const heartsContainer = document.getElementById('heartsContainer');
  const loader = document.getElementById('loader');
  const confettiLayer = document.getElementById('confettiLayer');
  const openSurpriseBtn = document.getElementById('openSurpriseBtn');
  const homeScreen = document.getElementById('homeScreen');
  const messageScreen = document.getElementById('messageScreen');
  const surpriseMessageEl = document.getElementById('surpriseMessage');
  const openAgainBtn = document.getElementById('openAgainBtn');
  const finalMessage = document.getElementById('finalMessage');
  const musicBtn = document.getElementById('musicBtn');
  const musicVolume = document.getElementById('musicVolume');
  const bgMusic = document.getElementById('bgMusic');
  const exploreStoryBtn = document.getElementById('exploreStoryBtn');
  const exploreStoryBtn2 = document.getElementById('exploreStoryBtn2');

  // --- DOM (sections) ---
  const storySections = document.getElementById('storySections');
  const valentineMessagesEl = document.getElementById('valentineMessages');

  // --- State ---
  let messageIndex = 0;
  const HEART_SYMBOLS = ['❤️', '💕', '💖', '💗', '💝', '💘', '🌸'];

  /**
   * Create floating hearts in the background (existing)
   */
  function createFloatingHearts() {
    var heartCount = 12;
    for (var i = 0; i < heartCount; i++) {
      var heart = document.createElement('span');
      heart.className = 'heart-float';
      heart.textContent = HEART_SYMBOLS[i % HEART_SYMBOLS.length];
      heart.style.left = Math.random() * 100 + '%';
      heart.style.animationDelay = -(Math.random() * 10) + 's';
      heart.style.animationDuration = (10 + Math.random() * 8) + 's';
      heartsContainer.appendChild(heart);
    }
  }

  function getNextMessage() {
    var msg = SURPRISE_MESSAGES[messageIndex];
    messageIndex = (messageIndex + 1) % SURPRISE_MESSAGES.length;
    return msg;
  }

  function showSurpriseMessage() {
    var message = getNextMessage();
    surpriseMessageEl.textContent = message;
    messageScreen.classList.remove('hidden');
    homeScreen.classList.add('hidden');
    triggerConfetti();
    playSurpriseSound();
    setTimeout(function () {
      finalMessage.style.opacity = '1';
      finalMessage.style.transform = 'translateY(0)';
    }, 300);
  }

  /** Confetti when surprise is revealed */
  function triggerConfetti() {
    if (!confettiLayer) return;
    var colors = ['#e07a96', '#b84d68', '#d4a574', '#fff8fa'];
    for (var i = 0; i < 45; i++) {
      var c = document.createElement('div');
      c.className = 'confetti';
      c.style.left = Math.random() * 100 + '%';
      c.style.backgroundColor = colors[i % colors.length];
      c.style.animationDelay = Math.random() * 0.5 + 's';
      c.style.animationDuration = (2 + Math.random() * 1.5) + 's';
      confettiLayer.appendChild(c);
      setTimeout(function () { c.remove(); }, 3500);
    }
  }

  /** Soft sound effect (pop-up / reveal) */
  function playSurpriseSound() {
    try {
      var ctx = new (window.AudioContext || window.webkitAudioContext)();
      var osc = ctx.createOscillator();
      var gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.setValueAtTime(523.25, ctx.currentTime);
      osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1);
      osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.4);
    } catch (e) {}
  }

  function showHomeScreen() {
    var card = document.getElementById('surpriseRevealCard');
    if (card) card.classList.add('surprise-card-out');
    setTimeout(function () {
      messageScreen.classList.add('hidden');
      homeScreen.classList.remove('hidden');
      if (card) card.classList.remove('surprise-card-out');
    }, 280);
  }

  function toggleMusic() {
    if (bgMusic.paused) {
      bgMusic.play().catch(function () {});
      musicBtn.classList.add('playing');
    } else {
      bgMusic.pause();
      musicBtn.classList.remove('playing');
    }
  }

  /** Loader: hide after a short delay when DOM is ready */
  function hideLoader() {
    if (!loader) return;
    var delay = 1500;
    setTimeout(function () {
      loader.classList.add('hidden');
      if (bgMusic && bgMusic.muted) {
        bgMusic.play().catch(function () {});
      }
    }, delay);
  }

  /**
   * IntersectionObserver: reveal sections and trigger scene animations
   */
  function setupScrollReveal() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.section-reveal').forEach(function (el) {
        el.classList.add('revealed');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var section = entry.target;
          section.classList.add('revealed');

          // Love Story: typing date + music fade
          if (section.id === 'love-story') {
            runTypingDate();
            fadeMusicIn();
          }

          // Rose Day: boy arm extends toward girl
          var boyArmRose = document.getElementById('boyArmRose');
          if (section.id === 'rose-day' && boyArmRose) {
            setTimeout(function () {
              boyArmRose.classList.add('rose-extend');
            }, 800);
          }

          // Line hearts: spawn small heart when each story line is visible (once)
          if (section.id === 'love-story') {
            spawnLineHeartsWhenVisible(section);
          }
          // Surprise page: magical effects
          if (section.id === 'surprise-page') {
            setupSurprisePageEffects(section);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -15% 0px', threshold: 0.1 }
    );

    var sections = document.querySelectorAll('.section-reveal');
    sections.forEach(function (s) {
      observer.observe(s);
    });
  }

  /** Typing effect for key date (25 August 2018) */
  function runTypingDate() {
    var el = document.getElementById('typingDate');
    if (!el) return;
    var text = el.getAttribute('data-typing') || el.textContent;
    el.textContent = '';
    el.classList.add('typing-cursor');
    var i = 0;
    function type() {
      if (i < text.length) {
        el.textContent = text.slice(0, i + 1);
        i++;
        setTimeout(type, 120);
      } else {
        el.classList.remove('typing-cursor');
      }
    }
    setTimeout(type, 400);
  }

  /** Fade in background music when Love Story section enters */
  function fadeMusicIn() {
    if (!bgMusic) return;
    bgMusic.volume = 0;
    var targetVolume = 0.35;
    var step = 0.02;
    var interval = setInterval(function () {
      if (bgMusic.paused) return;
      var next = Math.min(bgMusic.volume + step, targetVolume);
      bgMusic.volume = next;
      if (next >= targetVolume) clearInterval(interval);
    }, 80);
  }

  /** Spawn line-hearts when story lines are revealed (once per line) */
  function spawnLineHeartsWhenVisible(section) {
    var lines = section.querySelectorAll('.reveal-line[data-line-heart]');
    lines.forEach(function (line, idx) {
      if (line.dataset.heartSpawned) return;
      var delay = 300 + idx * 600;
      setTimeout(function () {
        line.dataset.heartSpawned = '1';
        var heart = document.createElement('span');
        heart.className = 'line-heart';
        heart.textContent = '❤';
        line.style.position = 'relative';
        line.appendChild(heart);
        setTimeout(function () { heart.remove(); }, 1400);
      }, delay);
    });
  }

  /** Surprise page: hearts, sparkles, typing quotes, big reveal, popup + sound */
  var SURPRISE_QUOTES = [
    'Tum mere liye sabse special ho. ❤️',
    'Har din tumhare sath ek tohfa hai. 💕',
    'Tum jahan ho wahi ghar hai. 💖',
  ];

  function setupSurprisePageEffects(section) {
    var heartsEl = document.getElementById('surprisePageHearts');
    var sparklesEl = document.getElementById('surpriseSparkles');
    var quotesEl = document.getElementById('surpriseQuotesTyping');
    var finalReveal = document.getElementById('surpriseFinalReveal');
    var popup = document.getElementById('surprisePopup');

    if (heartsEl && !heartsEl.dataset.done) {
      heartsEl.dataset.done = '1';
      for (var i = 0; i < 12; i++) {
        var h = document.createElement('span');
        h.className = 'surprise-heart-float';
        h.textContent = '❤';
        h.style.left = Math.random() * 100 + '%';
        h.style.animationDelay = -(Math.random() * 12) + 's';
        h.style.animationDuration = (10 + Math.random() * 6) + 's';
        heartsEl.appendChild(h);
      }
    }

    if (sparklesEl && !sparklesEl.dataset.done) {
      sparklesEl.dataset.done = '1';
      for (var i = 0; i < 20; i++) {
        var s = document.createElement('span');
        s.className = 'sparkle-dot';
        s.style.left = Math.random() * 100 + '%';
        s.style.top = Math.random() * 100 + '%';
        s.style.animationDelay = Math.random() * 2 + 's';
        s.style.animationDuration = (1.5 + Math.random() * 1) + 's';
        sparklesEl.appendChild(s);
      }
    }

    if (quotesEl && !quotesEl.dataset.typed) {
      quotesEl.dataset.typed = '1';
      var idx = 0;
      function typeNext() {
        var text = SURPRISE_QUOTES[idx % SURPRISE_QUOTES.length];
        quotesEl.textContent = '';
        quotesEl.classList.add('typing-cursor');
        var j = 0;
        function tick() {
          if (j <= text.length) {
            quotesEl.textContent = text.slice(0, j);
            j++;
            setTimeout(tick, 60);
          } else {
            quotesEl.classList.remove('typing-cursor');
            idx++;
            if (idx < 3) setTimeout(typeNext, 800);
            else {
              if (finalReveal) {
                finalReveal.classList.add('revealed');
                setTimeout(function () {
                  if (popup) {
                    popup.classList.add('visible');
                    playSurpriseSound();
                  }
                }, 600);
              }
            }
          }
        }
        tick();
      }
      setTimeout(typeNext, 500);
    }
  }

  /** Parallax: subtle movement on scroll (lightweight) */
  function setupParallax() {
    var content = document.querySelector('[data-parallax]');
    if (!content) return;
    var section = content.closest('.story-section');
    if (!section) return;

    function onScroll() {
      var rect = section.getBoundingClientRect();
      var center = window.innerHeight / 2;
      var dist = rect.top + rect.height / 2 - center;
      var rate = 0.15;
      var y = dist * rate * 0.1;
      content.style.transform = 'translateY(' + y + 'px)';
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /** Spawn floating petals in Love Story section */
  function setupPetals() {
    var container = document.getElementById('petalsBg');
    if (!container) return;
    for (var i = 0; i < 10; i++) {
      var p = document.createElement('span');
      p.className = 'petal';
      p.style.left = Math.random() * 100 + '%';
      p.style.top = Math.random() * 100 + '%';
      p.style.animationDelay = -(Math.random() * 18) + 's';
      p.style.animationDuration = (14 + Math.random() * 8) + 's';
      container.appendChild(p);
    }
  }

  /** Spawn falling rose petals in Rose Day section */
  function setupRosePetals() {
    var container = document.getElementById('rosePetals');
    if (!container) return;
    for (var i = 0; i < 8; i++) {
      var p = document.createElement('span');
      p.className = 'petal-fall';
      p.style.left = Math.random() * 100 + '%';
      p.style.animationDelay = -(Math.random() * 10) + 's';
      p.style.animationDuration = (8 + Math.random() * 4) + 's';
      container.appendChild(p);
    }
  }

  /** Teddy section: heart sparkles around teddy */
  function setupTeddyHearts() {
    var container = document.getElementById('teddyHearts');
    if (!container) return;
    var symbols = ['❤', '💕', '💗'];
    for (var i = 0; i < 6; i++) {
      var s = document.createElement('span');
      s.className = 'teddy-heart';
      s.textContent = symbols[i % symbols.length];
      s.style.left = (15 + Math.random() * 70) + '%';
      s.style.top = (20 + Math.random() * 60) + '%';
      s.style.animationDelay = (i * 0.3) + 's';
      container.appendChild(s);
    }
  }

  /**
   * Heart rain in final section (lightweight: CSS-driven, JS only spawns nodes)
   */
  function setupHeartRain() {
    var container = document.querySelector('#valentine-final .section-heart-rain');
    if (!container) return;

    var count = 12;
    var symbols = ['❤', '💕', '💖'];
    for (var i = 0; i < count; i++) {
      var span = document.createElement('span');
      span.className = 'heart-drop';
      span.textContent = symbols[i % symbols.length];
      span.style.left = Math.random() * 100 + '%';
      span.style.animationDelay = -(Math.random() * 12) + 's';
      span.style.animationDuration = (10 + Math.random() * 6) + 's';
      container.appendChild(span);
    }
  }

  /**
   * Render 100 Valentine messages (handwritten style)
   */
  function renderValentineMessages() {
    if (!valentineMessagesEl) return;
    valentineMessagesEl.innerHTML = '';
    VALENTINE_MESSAGES.forEach(function (text, i) {
      var p = document.createElement('p');
      p.className = 'valentine-msg';
      p.style.transitionDelay = (i * 0.02) + 's';
      p.textContent = text;
      valentineMessagesEl.appendChild(p);
    });
  }

  /**
   * Optional: subtle music volume fade when first section enters (existing music control unchanged)
   */
  function setupMusicFade() {
    var firstSection = document.getElementById('love-story');
    if (!firstSection || !bgMusic) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && bgMusic.volume !== undefined) {
            if (bgMusic.paused) return;
            bgMusic.volume = Math.min(1, (bgMusic.volume || 0.5) + 0.1);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(firstSection);
  }

  function init() {
    createFloatingHearts();

    finalMessage.style.opacity = '0';
    finalMessage.style.transform = 'translateY(10px)';
    finalMessage.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

    openSurpriseBtn.addEventListener('click', showSurpriseMessage);

    if (openAgainBtn) {
      openAgainBtn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        showHomeScreen();
      });
    }
    var messageScreenEl = document.getElementById('messageScreen');
    if (messageScreenEl) {
      messageScreenEl.addEventListener('click', function (e) {
        if (e.target.closest && e.target.closest('#openAgainBtn')) {
          e.preventDefault();
          showHomeScreen();
        }
      });
    }

    musicBtn.addEventListener('click', toggleMusic);

    if (exploreStoryBtn) {
      exploreStoryBtn.addEventListener('click', function () {
        document.getElementById('love-story').scrollIntoView({ behavior: 'smooth' });
        unmuteAndPlayOnce();
      });
    }
    if (exploreStoryBtn2) {
      exploreStoryBtn2.addEventListener('click', function () {
        showHomeScreen();
        setTimeout(function () {
          document.getElementById('love-story').scrollIntoView({ behavior: 'smooth' });
        }, 300);
        unmuteAndPlayOnce();
      });
    }

    if (musicVolume && bgMusic) {
      bgMusic.volume = musicVolume.value / 100;
      musicVolume.addEventListener('input', function () {
        bgMusic.volume = this.value / 100;
      });
    }

    function unmuteAndPlayOnce() {
      if (bgMusic && bgMusic.muted) {
        bgMusic.muted = false;
        bgMusic.play().catch(function () {});
      }
    }

    document.body.addEventListener('click', unmuteAndPlayOnce, { once: true });
    document.body.addEventListener('touchstart', unmuteAndPlayOnce, { once: true });

    bgMusic.addEventListener('play', function () {
      musicBtn.classList.add('playing');
    });
    bgMusic.addEventListener('pause', function () {
      musicBtn.classList.remove('playing');
    });

    hideLoader();
    setupScrollReveal();
    setupPetals();
    setupRosePetals();
    setupTeddyHearts();
    setupHeartRain();
    renderValentineMessages();
    setupMusicFade();
    setupParallax();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
