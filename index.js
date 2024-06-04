// let countEl=document.getElementById("count-el")
// console.log(countEl)

// let count =0
// function increment(){
//     count=count+1
//     countEl.innerText=count

// }
// function save(){



//     console.log(count)
// }


let saveEl=document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
console.log(saveEl)

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {

let previousEntries=count + " - "
saveEl.innerText+=previousEntries
countEl.textContent=0
count=0
    
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count)
}