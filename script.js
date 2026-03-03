document.getElementById('aiForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const age = parseFloat(document.getElementById('age').value);
  const family = parseFloat(document.getElementById('family').value);
  const wbc = parseFloat(document.getElementById('wbc').value);
  const rbc = parseFloat(document.getElementById('rbc').value);
  const platelets = parseFloat(document.getElementById('platelets').value);

  const resultEl = document.getElementById('result');
  resultEl.className = "";
  resultEl.innerText = "Analyzing results... 🔬";

  setTimeout(() => {
    let riskScore = (wbc / 10) + (rbc / 5) + (platelets / 100) + (age / 50) + (family * 30);
    let message = "";
    
    if (riskScore > 100) {
      message = `🔴 High risk detected! Your analysis suggests a higher-than-average likelihood of blood cancer. 
Please consult a healthcare professional promptly for further testing and guidance.`;
      resultEl.classList.add("high");
    } else if (riskScore > 50) {
      message = `🟠 Moderate risk. Your results indicate some warning signs. It's a good idea to monitor your health closely and discuss with your doctor.`;
      resultEl.classList.add("medium");
    } else {
      message = `🟢 Low risk. Based on your inputs, no major warning signs were detected. Continue healthy habits and routine checkups.`;
      resultEl.classList.add("low");
    }

    message += "\n\n⚠️ Reminder: CancerX AI is only a predictive tool and **cannot replace professional medical advice**.";

    resultEl.innerText = message;
  }, 1500);
});