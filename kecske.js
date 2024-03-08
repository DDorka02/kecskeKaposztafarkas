const KEPEK= document.querySelectorAll("#bal img")
console.log(KEPEK)
const TOMB=[]
for (let index = 0; index < KEPEK.length; index++) {
    KEPEK[index].addEventListener("click", function (event) {
    
        TOMB.push(event.target.src) 
          console.log(TOMB)
    })
 
}


for (let index = 0; index < KEPEK.length; index++) {
    KEPEK[index].addEventListener("mouseover", function (event) {
        event.target.classList.add("kiemel")
    })
 
}

for (let index = 0; index < KEPEK.length; index++) {
    KEPEK[index].addEventListener("mouseover", function (event) {
        event.target.classList.remove("kiemel")
    })
 
}