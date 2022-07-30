const login = document.querySelector("#login")
const password = document.querySelector("#password")
const button = document.querySelector(".accent-button")
const card = document.querySelector(".card")
const show = document.querySelector(".show")

const rightLogin = "Hola"
const rightPassword = "1234"

button.addEventListener("click", function() {
   if (rightLogin != login.value){
   login.style.background = "red" 
   }

   if (rightPassword != password.value){
    password.style.background = "red" 
    }

    if (rightLogin == login.value && rightPassword == password.value){
        login.style.background = "green" 
        password.style.background = "green"
        }
     
        

})

login.addEventListener("keydown", function () {
    login.style.background = "transparent" 
        password.style.background = "transparent"
})



        password.addEventListener("keydown", function () {
            login.style.background = "transparent" 
                password.style.background = "transparen"
            })
    show.addEventListener("click", function(){
    if(password.type == "password"){
        password.type = "text"

    } else {
        password.type == password
    }
    })

