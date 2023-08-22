const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault(); 
    const height = Number(document.querySelector('#height').value);
    const weight = Number(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        results.innerHTML = "Please provide valid height and weight.";
    } else {
        const bmi = (weight / (Math.pow(height / 100, 2)));
        
        if (bmi <= 18.6) {
            results.innerHTML = `<span>Your BMI is ${bmi.toFixed(1)} Under Weight</span>`;
        } else if (bmi > 18.6 && bmi <= 24.9) {
            results.innerHTML = `<span>Your BMI is ${bmi.toFixed(1)} Normal Weight</span>`;
        } else {
            results.innerHTML = `<span>Your BMI is ${bmi.toFixed(1)} Over Weight</span>`;
        }
    }
});
