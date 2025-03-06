const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const btnGenerate = document.querySelector(".btn-generate")
let btnResult = document.querySelector(".btn-result")
let btnResultT = document.querySelector(".btn-resultt")

btnGenerate.addEventListener("click", function() {
    let render1 = ""
    for (let i = 0; i < 15; i++) {
        let random = Math.floor(Math.random()*characters.length)
        render1 += characters[random]
    }
    btnResult.textContent = render1
    let render2 = ""
    for (let i = 0; i < 15; i++) {
        let random = Math.floor(Math.random()*characters.length)
        render2 += characters[random]
    }
    btnResultT.textContent = render2
})
