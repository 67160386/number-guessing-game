// ตัวแปรเก็บตัวเลขลับ
let secretNumber = 0;
// ตัวแปรนับจํานวนครั้งที่ทาย
let attemptCount = 0;
// ฟังก์ชันเริ่มเกมใหม่
function initializeGame() {
  // เลือกระดับความยากของการสุ่มตัวเลข
  let chooseNumber = document.getElementById("randomNumber").value;

  if (chooseNumber === "randomToTen") {
    secretNumber = Math.floor(Math.random() * 10) + 1;
  }
  if (chooseNumber === "randomToFify") {
    secretNumber = Math.floor(Math.random() * 50) + 1;
  }
  if (chooseNumber === "randomToOneHundred") {
    secretNumber = Math.floor(Math.random() * 100) + 1;
  }
  if (chooseNumber === "randomToOneThousand") {
    secretNumber = Math.floor(Math.random() * 1000) + 1;
  }
  attemptCount = 0;
  updateDisplay();
}
// ฟังก์ชันตรวจสอบการทาย
function checkGuess() {
  const guessInput = document.getElementById("guessInput");
  const guessValue = parseInt(guessInput.value);
  const resultContainer = document.getElementById("resultContainer");

  // Validation: ตรวจสอบว่าเลือกระดับความยากหรือไม่
  const checkDifficulty = document.getElementById("randomNumber").value;
  const checkNumber = document.getElementById("randomNumber").value;
  if (checkDifficulty === "") {
    resultContainer.innerHTML = `
    <div class="alert alert-danger" role="alert">
    กรุณาเลือกระดับความยาก!
    </div>
    `;
    return;
  }
  // Validation: ตรวจสอบว่าใส่ตัวเลขหรือไม่
  else if (isNaN(guessValue) || guessInput.value === "") {
    resultContainer.innerHTML = `
 <div class="alert alert-danger" role="alert">
 กรุณาใส่ตัวเลข!
 </div>
 `;
    return;
  }
  // Validation: ตรวจสอบว่าค่าอยู่ในช่วงระดับความยากหรือไม่
  if (checkNumber == "randomToTen") {
    if (guessValue < 1 || guessValue > 10) {
      resultContainer.innerHTML = `
 <div class="alert alert-danger" role="alert">
 กรุณาใส่ตัวเลขระหว่าง 1 ถึง 10!
 </div>
 `;
      return;
    }
  } else if (checkNumber == "randomToFify") {
    if (guessValue < 1 || guessValue > 50) {
      resultContainer.innerHTML = `
 <div class="alert alert-danger" role="alert">
 กรุณาใส่ตัวเลขระหว่าง 1 ถึง 50!
 </div>
 `;
      return;
    }
  } else if (checkNumber == "randomToOneHundred") {
    if (guessValue < 1 || guessValue > 100) {
      resultContainer.innerHTML = `
 <div class="alert alert-danger" role="alert">
 กรุณาใส่ตัวเลขระหว่าง 1 ถึง 100!
 </div>
 `;
      return;
    }
  } else if (checkNumber == "randomToOneThousand") {
    if (guessValue < 1 || guessValue > 1000) {
      resultContainer.innerHTML = `
 <div class="alert alert-danger" role="alert">
 กรุณาใส่ตัวเลขระหว่าง 1 ถึง 1000!
 </div>
 `;
      return;
    }
  }
  attemptCount++;
  if (guessValue === secretNumber) {
    resultContainer.innerHTML = `
 <div class="alert alert-success" role="alert">
 <h5>✓ ถูกต้อง!</h5>
 <p>คุณทายถูกในครั้งที่ ${attemptCount}</p>
 </div>
 `;
  } else if (guessValue > secretNumber) {
    resultContainer.innerHTML = `
 <div class="alert alert-warning" role="alert">
 ↓ ตัวเลขสูงไป
 </div>
 `;
  } else {
    resultContainer.innerHTML = `
 <div class="alert alert-info" role="alert">
 ↑ ตัวเลขตํ่าไป
 </div>
 `;
  }
  updateDisplay();
  guessInput.value = "";
  guessInput.focus();
}
// ฟังก์ชันอัปเดตจํานวนครั้ง
function updateDisplay() {
  const attemptsContainer = document.getElementById("attemptsContainer");
  attemptsContainer.textContent = `ทายแล้ว: ${attemptCount} ครั้ง`;
}
// ฟังก์ชันเริ่มเกมใหม่
function resetGame() {
  initializeGame();
  document.getElementById("resultContainer").innerHTML = "";
  document.getElementById("guessInput").value = "";
  document.getElementById("guessInput").focus();
}
// เริ่มเกมเมื่อโหลดหน้า
window.addEventListener("load", initializeGame);

// ฟังก์ชันเริ่มเกมใหม่
function resetGame() {
  initializeGame();
  document.getElementById("resultContainer").innerHTML = "";
  document.getElementById("guessInput").value = "";
  document.getElementById("guessInput").focus();
}

// เพิ่มการ select text เมื่อคลิก input
document.addEventListener("DOMContentLoaded", function () {
  const guessInput = document.getElementById("guessInput");
  guessInput.addEventListener("focus", function () {
    this.select();
  });
});

// เพิ่มการรองรับ Enter key
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("guessInput")
    .addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        checkGuess();
      }
    });
});
