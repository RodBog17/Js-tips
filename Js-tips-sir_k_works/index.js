// function addnum(x,y){
//     return x + y;
// };
// console.log(addnum(10,15));

//  function changed(){
//    document.getElementById("demo").innerHTML=
//    "Only the paragraph has changed";
//  }

function addNum(){
    let x,y,z;
    x = Number(document.getElementById("numberone").value);
    y = Number(document.getElementById("numbertwo").value);
    z = x + y;
    document.getElementById("result").innerHTML = z;
    console.log(z);
}

function multiplyNum(){
    let x,y,z;
    x = Number(document.getElementById("numberthree").value);
    y = Number(document.getElementById("numberfour").value);
    z = x * y;
    document.getElementById("result1").innerHTML = z;
    console.log(z);
}

function divideNum(){
    let x,y,z;
    x = Number(document.getElementById("numberfive").value);
    y = Number(document.getElementById("numbersix").value);
    z = x / y;
    document.getElementById("result2").innerHTML = z;
    console.log(z);
}

function subtractNum(){
    let x,y,z;
    x = Number(document.getElementById("numberseven").value);
    y = Number(document.getElementById("numbereight").value);
    z = x - y;
    document.getElementById("result3").innerHTML = z;
    console.log(z);
}

// function subtractNum(){
//     let x,y,z;
//     x = Number(document.getElementById("numberx1").value);
//     y = Number(document.getElementById("numberx2").value);
//     z = x - y;
//     document.getElementById("resultx3").innerHTML = z;
//     console.log(z);
// }
// function addNum(){
//     let x,y,z;
//     x = Number(document.getElementById("numberx1").value);
//     y = Number(document.getElementById("numberx2").value);
//     z = x + y;
//     document.getElementById("resultx3").innerHTML = z;
//     console.log(z);
// }
// function multiplyNum(){
//     let x,y,z;
//     x = Number(document.getElementById("numberx1").value);
//     y = Number(document.getElementById("numberx2").value);
//     z = x * y;
//     document.getElementById("resultx3").innerHTML = z;
//     console.log(z);
// }
// function divideNum(){
//     let x,y,z;
//     x = Number(document.getElementById("numberx1").value);
//     y = Number(document.getElementById("numberx2").value);
//     z = x / y;
//     document.getElementById("resultx3").innerHTML = z;
//     console.log(z);
// }

const celciusInput = document.getElementById("celcius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");

const inputs = document.getElementsByClassName("input");

for (let i = 0; i < inputs.length; i++) {
        let input = inputs[i];

        input.addEventListener("input", function(e){
            let value = e.target.value;
        
            switch (e.target.name) {
                case "celcius":
                    fahrenheitInput.value = (value * 1.8) + 32;
                    kelvinInput.value = value + 273.15;
                    break;
                case "fahrenheit":
                    celciusInput.value = (value - 32) / 1.8;
                    kelvinInput.value = ((value - 32) / 1.8) + 273.15
                    break;
                case "kelvin":
                    celciusInput.value = value - 273.15;
                    fahrenheitInput.value = ((value - 273.15) * 1.8) + 32
                    break;
            }
        });
}