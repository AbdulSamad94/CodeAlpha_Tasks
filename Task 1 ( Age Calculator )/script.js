let theButton = document.getElementById("btn")
let input = document.getElementById("date")
let result = document.getElementById("result")
input.value = '2024-06-11'
input.setAttribute('placeholder', 'MM/DD/YYYY');
theButton.addEventListener("click", CalculateAge)
function CalculateAge() {
    if(input.value == ""){
        alert("Please! Enter Your Date of Month")
    }
    else{
        let dateOfBirth = new Date(input.value)
        let getYear = dateOfBirth.getFullYear()

        let todaysTime = new Date()
        let currenYear = todaysTime.getFullYear()
        let age = currenYear - getYear
        function AgeCalculating(clearCalculating) {
            setTimeout(() => {
                result.innerHTML = `Your Age is ${age}`
                clearCalculating()
           }, 1000);
        }
        function afterCalculating(){
            setTimeout(() => {
                result.innerHTML = " "
            }, 6000);
        }
        AgeCalculating(afterCalculating)
        
       

    }
}