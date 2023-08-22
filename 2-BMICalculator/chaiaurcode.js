const form =  document.querySelector('form');
form.addEventListener('submit', function(e){
    e.preventDefault(); 
    const height = Number(document.querySelector('#height').value)
    const weight = Number(document.querySelector('#weight').value)
    const results = document.querySelector('#results');
    if(height==''||height<0 ||isNaN(height)){
        results.innerHTML =`Please give valid height ${height}` 

    }
    else if(weight==''||weight<0 ||isNaN(weight)){
        results.innerHTML =`Please give valid weight ${weight}` 

    }else{
        let bmi= (weight/(Math.pow((height/100),2))).toFixed() ;
        results.innerHTML =`<span>Your BMI is ${bmi}</span>`
    }
    
    


})