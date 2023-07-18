// target to the all elements 
const input = document.querySelector("#text")
const amount = document.querySelector("#amount")
const btn = document.querySelector(".btn")
const h1 = document.querySelector("h1")
const form = document.querySelector("form")
const ul = document.querySelector(".list")
const plus = document.querySelector(".plus")
const minus = document.querySelector(".minus")

let value = 0;
let income = 0;
let expense = 0;
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    if(input.value !== "" && amount.value !== ""){
        // create Element 
        const li = document.createElement("li")
        li.innerText = input.value
        li.style.listStyle ="none";
        li.style.display = "flex";
        li.style.justifyContent = "space-between"
        ul.append(li)

        // create amount
        const spa = document.createElement("span")
        spa.innerText = amount.value
        spa.style.display = "flex";
        li.append(spa)

        // create delte btn
        const delbtn = document.createElement("button")
        delbtn.innerText = "X";
        delbtn.style.color = "red";
        li.append(delbtn)
        input.value = ""
        amount.value = ""
        if(Number(spa.innerText) > 0){
            spa.style.color = "green";
            value+=Number(spa.innerText)
            h1.innerText = `${value}`
            income+=Number(spa.innerText)
            plus.innerText = `${income}`
        }
        else{
            spa.style.color = "red"
            value+=Number(spa.innerText)
            h1.innerText = `${value}`
            expense+= Number(spa.innerText)
            minus.innerText = `${expense}`
        }
        delbtn.addEventListener("click",(e)=>{
            e.target.parentElement.remove();
            let result = e.target.parentElement.children[0]
            if(Number(result.innerText)>0){
                value-=Number(spa.innerText)
                h1.innerText = value
                income-=Number(spa.innerText)
                plus.innerText = income
            }
            else{
                value-=Number(spa.innerText)
                h1.innerText = value
                expense-= Number(spa.innerText)
                minus.innerText = expense
            }

        })
    }
    else{
        alert("Please enter value")
        input.value = "";
        amount.value = "";
    }
})


