


function calculateEMI() {
    const principal = parseFloat(document.getElementById('amount').value);
    const interestRate = document.getElementById('intrest').value;
    const tenureMonths = document.getElementById('tenure').value;

    console.log(principal)

    if (isNaN(principal) || isNaN(interestRate) || isNaN(tenureMonths)) {
        alert("ENTER ALL VALUES")
    }

    const monthlyInterest = (interestRate / 100) / 12;
    const numerator = principal * monthlyInterest * Math.pow(1 + monthlyInterest, tenureMonths);
    const denominator = Math.pow(1 + monthlyInterest, tenureMonths) - 1;
    const emi = (numerator / denominator).toFixed(2);
    
    document.getElementById('emi').textContent= emi;
    console.log(emi)

    const totalInterest = (principal * monthlyInterest * tenureMonths).toFixed(2);

    document.getElementById('ti').textContent = totalInterest;


    
    const totalPayment = (principal + parseFloat(totalInterest)).toFixed(2);

    document.getElementById('total').textContent = totalPayment;
   
  }


console.log("hiii")


const button = document.getElementById('submit');
button.addEventListener('click', calculateEMI);