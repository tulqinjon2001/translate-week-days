var elTranslateForm = document.querySelector('.translation-form');
var elTranslateInput = elTranslateForm.querySelector('.translate-input');

var elTranslateOutput = document.querySelector('.tranlate-output');

elTranslateForm.addEventListener('submit', function(evt) {
  evt.preventDefault();

  elTranslateOutput.textContent = (elTranslateInput.value == "Dushanba") ? "Monday" :
                  (elTranslateInput.value == 'Seshanba') ? "Tuesday" : 
                  (elTranslateInput.value == 'Chorshanba') ? "Wednesday" : 
                  (elTranslateInput.value == 'Payshanba') ? "Twedsday" : 
                  (elTranslateInput.value == 'Juma') ? "Friday" : 
                  (elTranslateInput.value == 'Shanba') ? "Saturday" : 
                  (elTranslateInput.value == 'Yakshanba') ? "Sunday" : "Istimos hafta kunlarini to'g'ri kiriting!"

  console.log(elTranslateOutput);
})

// DTM

let elFormScore = document.querySelector(".form-score");
let elInputScore = elFormScore.querySelector(".input-score");
let elInputPrivilege = elFormScore.querySelector(".input-privilege");

let elScoreResult = document.querySelector(".score-result");

const minScore = 0;
const minSuperContract = 57.6;
const minContract = 155;
const minGrant = 175;
const maxScore = 189;

elFormScore.addEventListener("submit", function(evt) {
  evt.preventDefault();

  let scoreNumber = Number(elInputScore.value);
  let privilege = elInputPrivilege.checked;

  if (scoreNumber < minScore || isNaN(scoreNumber)) {
    var alertInfo = "alert-dark";
    var info = "Iltimos, musbat son kiriting.";
  } else if ((scoreNumber >= minGrant && scoreNumber <= maxScore) || privilege) {
    var alertInfo = "alert-success";
    var info = "Siz, grant asosida talabalikga tavsiya qilindingiz.";
  } else if (scoreNumber >= minContract && scoreNumber < minGrant) {
    var alertInfo = "alert-primary";
    var info = "Siz, kontraktga talabalikga tavsiya qilindingiz.";
  } else if (scoreNumber >= minSuperContract && scoreNumber < minContract) {
    var alertInfo = "alert-warning";
    var info = "Siz, super kontraktga talabalikga tavsiya qilindingiz.";
  } else if (scoreNumber >= minScore && scoreNumber < minSuperContract) {
    var alertInfo = "alert-danger";
    var info = "Siz, talabalikga tavsiya qilinmadingiz.";
  } else if (scoreNumber > maxScore) {
    var alertInfo = "alert-secondary";
    var info = `Iltimos, ${maxScore}dan past ball kiriting.`;
  }

  elScoreResult.classList.remove("alert-dark", "alert-success", "alert-primary", "alert-warning", "alert-danger", "alert-secondary"); 
  elScoreResult.classList.add(alertInfo); 
  elScoreResult.textContent = info;
})
