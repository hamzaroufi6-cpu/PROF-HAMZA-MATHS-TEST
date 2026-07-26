/* ===================================================================
   PROF HAMZA MATHS TEST — Application Logic
   Vanilla JS only. No external libraries. Fully offline.
   =================================================================== */

/* ============================================================
   1. QUESTION DATABASE — Moroccan middle-school curriculum
   Each question: { q: "...", choices:["A","B","C","D"], correct: index }
   ============================================================ */
const QUESTION_BANK = {
  '1AC': [
    { q: "Quel est le résultat de 245 + 178 ?", choices: ["423", "413", "433", "403"], correct: 0 },
    { q: "Combien font 7 × 8 ?", choices: ["56", "54", "58", "48"], correct: 0 },
    { q: "Simplifie la fraction 6/8.", choices: ["3/4", "2/3", "6/8", "4/3"], correct: 0 },
    { q: "Quel est le périmètre d'un carré de côté 5 cm ?", choices: ["20 cm", "25 cm", "10 cm", "15 cm"], correct: 0 },
    { q: "Quelle est l'aire d'un rectangle de longueur 6 cm et largeur 4 cm ?", choices: ["24 cm²", "20 cm²", "10 cm²", "28 cm²"], correct: 0 },
    { q: "Combien de degrés mesure un angle droit ?", choices: ["90°", "180°", "45°", "60°"], correct: 0 },
    { q: "Quel est le double de 15 ?", choices: ["30", "25", "45", "20"], correct: 0 },
    { q: "Quelle est la moitié de 48 ?", choices: ["24", "20", "26", "22"], correct: 0 },
    { q: "3/5 + 1/5 = ?", choices: ["4/5", "3/10", "1", "2/5"], correct: 0 },
    { q: "Un axe qui partage une figure en deux parties symétriques s'appelle :", choices: ["un axe de symétrie", "un rayon", "un diamètre", "une diagonale"], correct: 0 },
    { q: "12 × 5 = ?", choices: ["60", "50", "55", "65"], correct: 0 },
    { q: "Quel est le résultat de 9 − 4,5 ?", choices: ["4,5", "5", "4", "5,5"], correct: 0 },
    { q: "Une figure à 4 côtés égaux et 4 angles droits est :", choices: ["un carré", "un triangle", "un cercle", "un pentagone"], correct: 0 },
    { q: "100 ÷ 4 = ?", choices: ["25", "20", "30", "15"], correct: 0 },
    { q: "Si 1 kg = 1000 g, combien de grammes dans 3,5 kg ?", choices: ["3500 g", "350 g", "35 g", "300 g"], correct: 0 },
    { q: "Quelle fraction représente 0,25 ?", choices: ["1/4", "1/2", "1/3", "2/5"], correct: 0 },
    { q: "Le triple de 9 est :", choices: ["27", "18", "24", "30"], correct: 0 },
    { q: "Combien de côtés a un pentagone ?", choices: ["5", "4", "6", "3"], correct: 0 },
    { q: "Un article coûte 40 DH et augmente de 10 %. Son nouveau prix est :", choices: ["44 DH", "40 DH", "50 DH", "36 DH"], correct: 0 },
    { q: "Quel nombre est le plus grand : 0,7 ou 0,65 ?", choices: ["0,7", "0,65", "Ils sont égaux", "Impossible à dire"], correct: 0 }
  ],
  '2AC': [
    { q: "(−5) + 8 = ?", choices: ["3", "−3", "13", "−13"], correct: 0 },
    { q: "(−6) × (−3) = ?", choices: ["18", "−18", "9", "−9"], correct: 0 },
    { q: "Résous : x + 5 = 12", choices: ["x = 7", "x = 17", "x = 5", "x = −7"], correct: 0 },
    { q: "Développe : 3(x + 2)", choices: ["3x + 6", "3x + 2", "x + 6", "3x + 5"], correct: 0 },
    { q: "(−12) ÷ 4 = ?", choices: ["−3", "3", "−4", "4"], correct: 0 },
    { q: "Quelle est la valeur de x dans 2x = 10 ?", choices: ["5", "10", "2", "20"], correct: 0 },
    { q: "La somme des angles d'un triangle est :", choices: ["180°", "360°", "90°", "270°"], correct: 0 },
    { q: "Calcule : 2² + 3²", choices: ["13", "12", "25", "6"], correct: 0 },
    { q: "Un cercle de rayon 5 cm a un diamètre de :", choices: ["10 cm", "5 cm", "15 cm", "25 cm"], correct: 0 },
    { q: "−3 − (−7) = ?", choices: ["4", "−4", "10", "−10"], correct: 0 },
    { q: "Si 5 stylos coûtent 25 DH, combien coûtent 8 stylos ?", choices: ["40 DH", "35 DH", "45 DH", "30 DH"], correct: 0 },
    { q: "Factorise : 6x + 9", choices: ["3(2x + 3)", "6(x + 9)", "3(x + 3)", "9(x + 6)"], correct: 0 },
    { q: "Dans une série de 5 nombres rangés, la médiane est :", choices: ["la valeur du milieu", "la moyenne", "le maximum", "le minimum"], correct: 0 },
    { q: "Résous : 3x − 4 = 11", choices: ["x = 5", "x = 3", "x = 7", "x = 15"], correct: 0 },
    { q: "(+7) + (−10) = ?", choices: ["−3", "3", "17", "−17"], correct: 0 },
    { q: "Un angle de 90° est appelé :", choices: ["angle droit", "angle aigu", "angle obtus", "angle plat"], correct: 0 },
    { q: "La distance entre A(0,0) et B(3,4) mesure :", choices: ["5", "7", "4", "6"], correct: 0 },
    { q: "Calcule : (−2)³", choices: ["−8", "8", "−6", "6"], correct: 0 },
    { q: "Un triangle ayant deux côtés égaux est dit :", choices: ["isocèle", "équilatéral", "rectangle", "quelconque"], correct: 0 },
    { q: "La moyenne de 8, 10 et 12 est :", choices: ["10", "9", "11", "12"], correct: 0 }
  ],
  '3AC': [
    { q: "Résous l'équation : 2x + 3 = 11", choices: ["x = 4", "x = 7", "x = 5", "x = 8"], correct: 0 },
    { q: "Si f(x) = 2x − 1, alors f(3) = ?", choices: ["5", "6", "4", "7"], correct: 0 },
    { q: "√49 = ?", choices: ["7", "49", "24,5", "14"], correct: 0 },
    { q: "Le théorème de Pythagore relie, dans un triangle rectangle :", choices: ["les carrés des côtés", "les angles", "les périmètres", "les aires"], correct: 0 },
    { q: "Un triangle de côtés 3, 4 et 5 est-il rectangle ?", choices: ["Oui", "Non", "Impossible à dire", "Seulement s'il est équilatéral"], correct: 0 },
    { q: "Développe : (x + 3)(x − 3)", choices: ["x² − 9", "x² + 9", "x² − 6x + 9", "x² + 6x − 9"], correct: 0 },
    { q: "Factorise : x² − 16", choices: ["(x − 4)(x + 4)", "(x − 8)(x + 2)", "(x − 16)(x + 1)", "(x − 2)(x + 8)"], correct: 0 },
    { q: "Résous l'inéquation : x − 2 > 5", choices: ["x > 7", "x > 3", "x < 7", "x < 3"], correct: 0 },
    { q: "Une fonction affine s'écrit sous la forme :", choices: ["f(x) = ax + b", "f(x) = ax²", "f(x) = a/x", "f(x) = √x"], correct: 0 },
    { q: "Le coefficient directeur d'une droite représente :", choices: ["sa pente", "son ordonnée à l'origine", "sa longueur", "son angle"], correct: 0 },
    { q: "Dans un triangle rectangle, sin(angle) = ?", choices: ["côté opposé / hypoténuse", "côté adjacent / hypoténuse", "opposé / adjacent", "hypoténuse / opposé"], correct: 0 },
    { q: "Le théorème de Thalès permet de calculer :", choices: ["des longueurs proportionnelles", "des angles", "des aires", "des volumes"], correct: 0 },
    { q: "√2 est environ égal à :", choices: ["1,41", "1,73", "2,00", "1,25"], correct: 0 },
    { q: "Résous : x² = 25", choices: ["x = 5 ou x = −5", "x = 5 seulement", "x = 25", "x = −25"], correct: 0 },
    { q: "Dans une série statistique, la médiane est :", choices: ["la valeur centrale", "la moyenne", "l'écart", "le mode"], correct: 0 },
    { q: "Développe : (x + 5)²", choices: ["x² + 10x + 25", "x² + 25", "x² + 5x + 25", "x² − 10x + 25"], correct: 0 },
    { q: "Si deux droites sont parallèles, leurs coefficients directeurs sont :", choices: ["égaux", "opposés", "inverses", "nuls"], correct: 0 },
    { q: "Calcule : (−3)² + (−4)²", choices: ["25", "7", "−25", "1"], correct: 0 },
    { q: "Un pourcentage de 25 % équivaut à la fraction :", choices: ["1/4", "1/2", "1/5", "1/3"], correct: 0 },
    { q: "La fonction f(x) = −2x + 4 est :", choices: ["décroissante", "croissante", "constante", "indéfinie"], correct: 0 }
  ]
};

const TIME_LIMIT_SECONDS = 20 * 60; // 20 minutes
const DASH_PASSWORD = "Hamza2026";
const RESULTS_KEY = "phm_results";
const DRAFT_KEY = "phm_draft";

/* ============================================================
   2. STATE
   ============================================================ */
let session = null;      // current assessment session object
let timerHandle = null;
let assessmentActive = false;
let submitted = false;

/* ============================================================
   3. UTILITIES
   ============================================================ */
function $(id){ return document.getElementById(id); }

function shuffle(arr){
  const a = arr.slice();
  for(let i = a.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function formatTime(totalSeconds){
  const m = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
  const s = Math.floor(totalSeconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

function showScreen(id){
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  $(id).classList.add('active');
}

function showToast(msg, ms = 2200){
  const t = $('toast');
  t.textContent = msg;
  t.classList.remove('hidden');
  clearTimeout(showToast._h);
  showToast._h = setTimeout(() => t.classList.add('hidden'), ms);
}

/* ---- Simple beep sound effects (Web Audio API, no audio files) ---- */
let audioCtx = null;
function playTone(freq, duration = 0.15, type = 'sine'){
  try{
    if(!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch(e){ /* audio not available — silently ignore */ }
}
function soundCorrect(){ playTone(880, 0.15); setTimeout(() => playTone(1175, 0.18), 120); }
function soundWrong(){ playTone(180, 0.25, 'square'); }
function soundClick(){ playTone(520, 0.06); }

/* ============================================================
   4. DARK MODE
   ============================================================ */
function initDarkMode(){
  const saved = localStorage.getItem('phm_dark');
  if(saved === '1') document.documentElement.classList.add('dark');
  $('darkToggle').addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('phm_dark', document.documentElement.classList.contains('dark') ? '1' : '0');
  });
}

/* ============================================================
   5. FULLSCREEN
   ============================================================ */
function initFullscreen(){
  $('fullscreenToggle').addEventListener('click', () => {
    if(!document.fullscreenElement){
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  });
}

/* ============================================================
   6. WELCOME / FORM NAVIGATION
   ============================================================ */
function initWelcomeAndForm(){
  $('startBtn').addEventListener('click', () => showScreen('screen-form'));
  $('backToWelcomeBtn').addEventListener('click', () => showScreen('screen-welcome'));
  $('openDashboardBtn').addEventListener('click', () => {
    showScreen('screen-dashboard');
    $('dashLoginBox').classList.remove('hidden');
    $('dashContent').classList.add('hidden');
  });

  $('launchTestBtn').addEventListener('click', () => {
    const name = $('studentName').value.trim();
    const cls = $('studentClass').value.trim();
    const school = $('studentSchool').value.trim();
    const level = $('studentLevel').value;

    if(!name || !cls || !school || !level){
      $('formError').classList.remove('hidden');
      return;
    }
    $('formError').classList.add('hidden');
    startAssessment({ name, cls, school, level });
  });
}

/* ============================================================
   7. ASSESSMENT LOGIC
   ============================================================ */
function startAssessment(student){
  const bank = QUESTION_BANK[student.level];
  // Shuffle question order, and shuffle answer choices per question
  const questions = shuffle(bank).map(orig => {
    const correctText = orig.choices[orig.correct];
    const shuffledChoices = shuffle(orig.choices);
    return {
      text: orig.q,
      choices: shuffledChoices,
      correctIndex: shuffledChoices.indexOf(correctText)
    };
  });

  session = {
    student,
    questions,
    current: 0,
    answers: new Array(questions.length).fill(null),
    startTime: Date.now(),
    remaining: TIME_LIMIT_SECONDS
  };
  submitted = false;
  assessmentActive = true;

  $('levelBadge').textContent = student.level;
  showScreen('screen-assessment');
  renderQuestion();
  startTimer();
  trapBackButton();
  window.addEventListener('beforeunload', beforeUnloadHandler);
}

function beforeUnloadHandler(e){
  if(assessmentActive){
    e.preventDefault();
    e.returnValue = '';
  }
}

/* Disable browser back button during the assessment */
function trapBackButton(){
  history.pushState({ phm: true }, '');
  window.addEventListener('popstate', onPopState);
}
function onPopState(e){
  if(assessmentActive){
    history.pushState({ phm: true }, '');
    showToast("⛔ Retour désactivé pendant l'évaluation");
  }
}
function releaseBackTrap(){
  window.removeEventListener('popstate', onPopState);
  window.removeEventListener('beforeunload', beforeUnloadHandler);
}

function renderQuestion(){
  const q = session.questions[session.current];
  $('qCounter').textContent = `Question ${session.current + 1}/${session.questions.length}`;
  $('progressFill').style.width = `${((session.current) / session.questions.length) * 100}%`;
  $('questionText').textContent = q.text;

  const letters = ['A', 'B', 'C', 'D'];
  const list = $('choicesList');
  list.innerHTML = '';
  const selected = session.answers[session.current];

  q.choices.forEach((choiceText, idx) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.innerHTML = `<span class="letter">${letters[idx]}</span><span>${choiceText}</span>`;
    if(selected !== null){
      btn.disabled = false; // allow changing answer while navigating
      if(idx === selected) btn.classList.add('selected');
    }
    btn.addEventListener('click', () => selectAnswer(idx));
    list.appendChild(btn);
  });

  $('prevQBtn').disabled = (session.current === 0);
  $('nextQBtn').textContent = (session.current === session.questions.length - 1) ? 'Terminer ✔' : 'Suivant ▶';
}

function selectAnswer(idx){
  soundClick();
  session.answers[session.current] = idx;
  saveDraft();
  renderQuestion();
}

function saveDraft(){
  try{
    sessionStorage.setItem(DRAFT_KEY, JSON.stringify({
      answers: session.answers,
      current: session.current
    }));
  } catch(e){ /* ignore quota errors */ }
}

function startTimer(){
  updateTimerDisplay();
  timerHandle = setInterval(() => {
    session.remaining--;
    updateTimerDisplay();
    if(session.remaining <= 0){
      clearInterval(timerHandle);
      showToast("⏰ Temps écoulé — soumission automatique");
      finalizeAssessment();
    }
  }, 1000);
}
function updateTimerDisplay(){
  const el = $('timer');
  el.textContent = formatTime(session.remaining);
  el.classList.toggle('low-time', session.remaining <= 60);
}

function initAssessmentNav(){
  $('prevQBtn').addEventListener('click', () => {
    if(session.current > 0){
      session.current--;
      renderQuestion();
    }
  });
  $('nextQBtn').addEventListener('click', () => {
    if(session.current < session.questions.length - 1){
      session.current++;
      renderQuestion();
    } else {
      finalizeAssessment();
    }
  });
}

/* ============================================================
   GOOGLE FORMS INTEGRATION
   ============================================================ */
function sendResultsToGoogleForm(nom, info, score) {
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdfw06T8cosrpCe9YRrwUZTZ_hX632_ywXSJqz3nyy5_Ks0hA/formResponse"; 

  const formData = new FormData();
  formData.append("entry.689950786", nom);
  formData.append("entry.909049097", info);
  formData.append("entry.1797257371", score);

  fetch(formUrl, {
    method: "POST",
    mode: "no-cors",
    body: formData
  })
  .then(() => {
    console.log("Résultats envoyés avec succès à Google Forms!");
  })
  .catch((error) => {
    console.error("Erreur d'envoi Google Forms:", error);
  });
}

/* ============================================================
   8. GRADING & REPORT
   ============================================================ */
function finalizeAssessment(){
  if(submitted) return; // prevent duplicate submissions
  submitted = true;
  assessmentActive = false;
  clearInterval(timerHandle);
  releaseBackTrap();
  try{ sessionStorage.removeItem(DRAFT_KEY); } catch(e){}

  const total = session.questions.length;
  let correctCount = 0;
  const wrongDetails = [];

  session.questions.forEach((q, i) => {
    const given = session.answers[i];
    if(given !== null && given === q.correctIndex){
      correctCount++;
    } else {
      wrongDetails.push({
        text: q.text,
        given: given !== null ? q.choices[given] : "(Sans réponse)",
        correct: q.choices[q.correctIndex]
      });
    }
  });

  const wrongCount = total - correctCount;
  const percentage = Math.round((correctCount / total) * 100);
  const elapsedSeconds = Math.round((Date.now() - session.startTime) / 1000);
  const perfLevel = performanceLevel(percentage);

  const result = {
    id: 'r_' + Date.now() + '_' + Math.floor(Math.random() * 1000),
    name: session.student.name,
    cls: session.student.cls,
    school: session.student.school,
    level: session.student.level,
    date: new Date().toISOString(),
    timeSpent: elapsedSeconds,
    total, correctCount, wrongCount, percentage, perfLevel,
    wrongDetails
  };

  saveResult(result);

  // إرسال النتيجة إلى Google Forms تلقائياً
  const studentInfo = `${session.student.level} - ${session.student.cls} (${session.student.school})`;
  const studentScore = `${correctCount}/${total} (${percentage}%)`;
  sendResultsToGoogleForm(session.student.name, studentInfo, studentScore);

  if(percentage >= 50) soundCorrect(); else soundWrong();
  renderReport(result);
  showScreen('screen-report');

  if(percentage >= 70) launchConfetti();
}

function performanceLevel(pct){
  if(pct >= 90) return "Excellent";
  if(pct >= 75) return "Très Bien";
  if(pct >= 60) return "Bien";
  if(pct >= 40) return "Assez Bien";
  return "À renforcer";
}

function recommendationFor(perfLevel, level){
  const base = {
    "Excellent": "Excellent travail ! Continue à approfondir avec des exercices de niveau supérieur et des défis mathématiques.",
    "Très Bien": "Très bon niveau. Revois rapidement les quelques points manqués pour viser la maîtrise complète du programme.",
    "Bien": "Bon travail global. Concentre-toi sur les chapitres où des erreurs sont apparues, avec des exercices supplémentaires.",
    "Assez Bien": "Des bases sont acquises mais des lacunes subsistent. Un accompagnement ciblé sur les notions de base est recommandé.",
    "À renforcer": "Il est important de reprendre les notions fondamentales du programme " + level + " avec un soutien régulier."
  };
  return base[perfLevel];
}

function renderReport(result){
  $('rName').textContent = result.name;
  $('rSchool').textContent = result.school;
  $('rClass').textContent = result.cls;
  $('rLevel').textContent = result.level;
  $('rDate').textContent = new Date(result.date).toLocaleString('fr-FR');
  $('rTime').textContent = formatTime(result.timeSpent);
  $('rScore').textContent = `${result.correctCount}/${result.total}`;
  $('rCorrect').textContent = result.correctCount;
  $('rWrong').textContent = result.wrongCount;
  $('rPerf').textContent = result.perfLevel;
  $('scorePercent').textContent = `${result.percentage}%`;
  $('scoreCircle').style.setProperty('--pct', result.percentage);
  $('rRecommend').textContent = recommendationFor(result.perfLevel, result.level);

  const wrongListEl = $('wrongList');
  if(result.wrongDetails.length === 0){
    wrongListEl.innerHTML = '<p>🎉 Aucune erreur — score parfait !</p>';
  } else {
    wrongListEl.innerHTML = '<h4>Réponses à revoir</h4>' + result.wrongDetails.map(w =>
      `<div class="wrong-item"><b>${w.text}</b><br>Réponse donnée : ${w.given} — Bonne réponse : <span class="ok">${w.correct}</span></div>`
    ).join('');
  }

  const motivs = [
    "La persévérance transforme les efforts en réussite ! 💪",
    "Chaque erreur est une occasion d'apprendre. Continue ! 📘",
    "Les mathématiques se maîtrisent avec la pratique régulière. 🚀",
    "Bravo pour ton engagement dans cette évaluation ! 🌟"
  ];
  $('motivMsg').textContent = motivs[Math.floor(Math.random() * motivs.length)];
}

function initReportActions(){
  $('printBtn').addEventListener('click', () => window.print());
  $('pdfBtn').addEventListener('click', () => {
    showToast("Choisissez « Enregistrer en PDF » dans la fenêtre d'impression");
    window.print();
  });
  $('restartBtn').addEventListener('click', () => {
    $('studentName').value = '';
    $('studentClass').value = '';
    $('studentSchool').value = '';
    $('studentLevel').value = '';
    showScreen('screen-welcome');
  });
}

/* ============================================================
   9. LOCAL STORAGE — RESULTS DATABASE
   ============================================================ */
function loadResults(){
  try{
    return JSON.parse(localStorage.getItem(RESULTS_KEY)) || [];
  } catch(e){ return []; }
}
function saveResult(result){
  const all = loadResults();
  all.push(result);
  localStorage.setItem(RESULTS_KEY, JSON.stringify(all));
}
function clearResults(){
  localStorage.removeItem(RESULTS_KEY);
}

/* ============================================================
   10. TEACHER DASHBOARD
   ============================================================ */
function initDashboard(){
  $('dashBackBtn').addEventListener('click', () => showScreen('screen-welcome'));

  $('dashLoginBtn').addEventListener('click', () => {
    const pwd = $('dashPassword').value;
    if(pwd === DASH_PASSWORD){
      $('dashError').classList.add('hidden');
      $('dashPassword').value = '';
      $('dashLoginBox').classList.add('hidden');
      $('dashContent').classList.remove('hidden');
      renderDashboard();
    } else {
      $('dashError').classList.remove('hidden');
    }
  });

  $('dashLogoutBtn').addEventListener('click', () => {
    $('dashContent').classList.add('hidden');
    $('dashLoginBox').classList.remove('hidden');
  });

  $('searchName').addEventListener('input', renderDashboard);
  $('filterLevel').addEventListener('change', renderDashboard);
  $('filterClass').addEventListener('input', renderDashboard);

  $('exportCsvBtn').addEventListener('click', exportCSV);
  $('exportJsonBtn').addEventListener('click', exportJSON);
  $('exportExcelBtn').addEventListener('click', exportExcel);
  $('exportPdfBtn').addEventListener('click', exportPDF);
  $('deleteAllBtn').addEventListener('click', () => {
    if(confirm("Supprimer définitivement toutes les données enregistrées ?")){
      clearResults();
      renderDashboard();
      showToast("Toutes les données ont été supprimées");
    }
  });
}

function getFilteredResults(){
  const all = loadResults();
  const nameQ = $('searchName').value.trim().toLowerCase();
  const levelQ = $('filterLevel').value;
  const classQ = $('filterClass').value.trim().toLowerCase();

  return all.filter(r =>
    (!nameQ || r.name.toLowerCase().includes(nameQ)) &&
    (!levelQ || r.level === levelQ) &&
    (!classQ || r.cls.toLowerCase().includes(classQ))
  );
}

function renderDashboard(){
  const filtered = getFilteredResults();

  $('statTotal').textContent = filtered.length;
  if(filtered.length){
    const pcts = filtered.map(r => r.percentage);
    $('statAvg').textContent = Math.round(pcts.reduce((a,b) => a+b, 0) / pcts.length) + '%';
    $('statMax').textContent = Math.max(...pcts) + '%';
    $('statMin').textContent = Math.min(...pcts) + '%';
  } else {
    $('statAvg').textContent = '0%';
    $('statMax').textContent = '0%';
    $('statMin').textContent = '0%';
  }

  const tbody = $('resultsTbody');
  tbody.innerHTML = filtered.slice().reverse().map(r => `
    <tr>
      <td>${r.name}</td>
      <td>${r.cls}</td>
      <td>${r.school}</td>
      <td>${r.level}</td>
      <td>${new Date(r.date).toLocaleDateString('fr-FR')}</td>
      <td>${r.correctCount}/${r.total}</td>
      <td>${r.percentage}%</td>
      <td>${r.perfLevel}</td>
    </tr>
  `).join('') || '<tr><td colspan="8" style="text-align:center;">Aucun résultat</td></tr>';

  drawLevelChart(filtered);
  drawQuestionChart(filtered);
}

/* ---- Simple canvas bar charts (no external chart library) ---- */
function drawLevelChart(filtered){
  const canvas = $('chartByLevel');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const levels = ['1AC', '2AC', '3AC'];
  const averages = levels.map(lvl => {
    const subset = filtered.filter(r => r.level === lvl);
    if(!subset.length) return 0;
    return Math.round(subset.reduce((a,b) => a + b.percentage, 0) / subset.length);
  });

  const barWidth = 60;
  const gap = 40;
  const baseY = canvas.height - 30;
  const maxH = canvas.height - 50;

  ctx.font = '12px Arial';
  levels.forEach((lvl, i) => {
    const x = 30 + i * (barWidth + gap);
    const h = (averages[i] / 100) * maxH;
    ctx.fillStyle = '#1e88e5';
    ctx.fillRect(x, baseY - h, barWidth, h);
    ctx.fillStyle = '#d4af37';
    ctx.fillRect(x, baseY - h, barWidth, 4);
    ctx.fillStyle = '#1a2233';
    ctx.textAlign = 'center';
    ctx.fillText(lvl, x + barWidth/2, baseY + 16);
    ctx.fillText(averages[i] + '%', x + barWidth/2, baseY - h - 6);
  });
}

function drawQuestionChart(filtered){
  const canvas = $('chartByQuestion');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if(!filtered.length){
    ctx.fillStyle = '#5b6472';
    ctx.font = '13px Arial';
    ctx.fillText("Aucune donnée à afficher", 10, 100);
    return;
  }

  // Use the level of the most recent filtered result as reference
  const refLevel = filtered[filtered.length - 1].level;
  const subset = filtered.filter(r => r.level === refLevel);
  const qCount = QUESTION_BANK[refLevel].length;
  const correctPerQ = new Array(qCount).fill(0);
  const wrongPerQ = new Array(qCount).fill(0);

  // Since question order is shuffled per session, we approximate using
  // wrongDetails text matched back to the original bank index.
  subset.forEach(r => {
    const wrongTexts = new Set(r.wrongDetails.map(w => w.text));
    QUESTION_BANK[refLevel].forEach((origQ, idx) => {
      if(wrongTexts.has(origQ.q)) wrongPerQ[idx]++;
      else correctPerQ[idx]++;
    });
  });

  const barWidth = Math.max(6, Math.floor((canvas.width - 20) / qCount) - 2);
  const baseY = canvas.height - 20;
  const maxH = canvas.height - 30;
  const maxVal = Math.max(...correctPerQ, ...wrongPerQ, 1);

  ctx.font = '9px Arial';
  for(let i = 0; i < qCount; i++){
    const x = 10 + i * (barWidth + 2);
    const hC = (correctPerQ[i] / maxVal) * (maxH / 2);
    const hW = (wrongPerQ[i] / maxVal) * (maxH / 2);
    ctx.fillStyle = '#2e7d32';
    ctx.fillRect(x, baseY - hC, barWidth, hC);
    ctx.fillStyle = '#c62828';
    ctx.fillRect(x, baseY, barWidth, hW);
  }
}

/* ============================================================
   11. EXPORT FUNCTIONS
   ============================================================ */
function downloadBlob(content, filename, mime){
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function resultsToRows(){
  const all = loadResults();
  const header = ["Nom","Classe","Etablissement","Niveau","Date","Score","Pourcentage","Performance","TempsSecondes"];
  const rows = all.map(r => [
    r.name, r.cls, r.school, r.level,
    new Date(r.date).toLocaleString('fr-FR'),
    `${r.correctCount}/${r.total}`, `${r.percentage}%`, r.perfLevel, r.timeSpent
  ]);
  return [header, ...rows];
}

function exportCSV(){
  const rows = resultsToRows();
  const csv = rows.map(row => row.map(cell => `"${String(cell).replace(/"/g,'""')}"`).join(',')).join('\n');
  downloadBlob('\uFEFF' + csv, 'phm_resultats.csv', 'text/csv;charset=utf-8;');
  showToast('Export CSV terminé');
}

function exportJSON(){
  const all = loadResults();
  downloadBlob(JSON.stringify(all, null, 2), 'phm_resultats.json', 'application/json');
  showToast('Export JSON terminé');
}

/* Excel export using SpreadsheetML (native Excel XML) — no library needed */
function exportExcel(){
  const rows = resultsToRows();
  const xmlRows = rows.map(row =>
    `<Row>${row.map(cell => `<Cell><Data ss:Type="String">${String(cell).replace(/&/g,'&amp;').replace(/</g,'&lt;')}</Data></Cell>`).join('')}</Row>`
  ).join('');
  const xml = `<?xml version="1.0"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">
 <Worksheet ss:Name="Resultats">
  <Table>${xmlRows}</Table>
 </Worksheet>
</Workbook>`;
  downloadBlob(xml, 'phm_resultats.xls', 'application/vnd.ms-excel');
  showToast('Export Excel terminé');
}

function exportPDF(){
  showToast("Choisissez « Enregistrer en PDF » dans la fenêtre d'impression");
  window.print();
}

/* ============================================================
   12. CONFETTI ANIMATION (vanilla canvas, no library)
   ============================================================ */
function launchConfetti(){
  const canvas = $('confettiCanvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext('2d');
  const colors = ['#1565c0', '#1e88e5', '#d4af37', '#2e7d32', '#eef2f7'];
  const pieces = Array.from({ length: 120 }, () => ({
    x: Math.random() * canvas.width,
    y: -20 - Math.random() * canvas.height * 0.5,
    size: 4 + Math.random() * 6,
    color: colors[Math.floor(Math.random() * colors.length)],
    speedY: 2 + Math.random() * 3,
    speedX: -1.5 + Math.random() * 3,
    rotation: Math.random() * 360,
    rotSpeed: -6 + Math.random() * 12
  }));

  let frame = 0;
  const maxFrames = 160;

  function tick(){
    frame++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;
      p.rotation += p.rotSpeed;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation * Math.PI / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size * 0.6);
      ctx.restore();
    });
    if(frame < maxFrames){
      requestAnimationFrame(tick);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
  tick();
}

/* ============================================================
   13. RESUME DRAFT (auto-save recovery within the same tab session)
   ============================================================ */
function tryRestoreDraft(){
  try{
    const raw = sessionStorage.getItem(DRAFT_KEY);
    if(raw && session){
      const draft = JSON.parse(raw);
      if(draft.answers && draft.answers.length === session.answers.length){
        session.answers = draft.answers;
        session.current = draft.current || 0;
      }
    }
  } catch(e){ /* ignore */ }
}

/* ============================================================
   14. INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  initFullscreen();
  initWelcomeAndForm();
  initAssessmentNav();
  initReportActions();
  initDashboard();
});
