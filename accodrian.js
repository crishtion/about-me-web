const element1 = document.getElementById("first");
const element2 = document.getElementById("second");
const element3 = document.getElementById("third");
let count1 = 0;
let count2 = 0;
let count3 = 0;

console.log(count1)
console.log(count2)
console.log(count3)

const checkInputs1  = () =>{
    count1 += 1
    console.log(count1)
    if(count1 >= 2){
        element1.checked = false
        count1 = 0
        console.log('this button should close');
    } else if(element2.checked|| element3.checked){
        count1 = 0
        console.log(count1);
    }
};
const checkInputs2  = () =>{
    count2 += 1
    console.log(count2)
    if(count2 >= 2){
        element1.checked = false;
        count2 = 0
        console.log('this button should close');
    } else if(element1.checked || element3.checked){
        count2 = 0
        console.log(count2);
    }
};
const checkInputs3  = () =>{
    count3 += 1
    console.log(count3)
    if(count3 >= 2){
        element1.checked = false;
        count3 = 0
        console.log('this button should close');
    } else if(element1.checked  || element2.checked){
        count3 = 0
        console.log(count3)
    }
};


element1.addEventListener('click', checkInputs1)
element2.addEventListener('click', checkInputs2)
element3.addEventListener('click', checkInputs3)


