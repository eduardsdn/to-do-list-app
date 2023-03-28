import './style.css'
import DeleteIcon from './assets/images/delete_FILL0_wght400_GRAD0_opsz48.svg'

console.log("Hello world!")

const content = document.querySelector(".content")

const hello = document.createElement("div")
hello.textContent = "Hello webpack"
hello.classList.add("hello")

const myIcon = new Image();
myIcon.src = DeleteIcon;

content.appendChild(myIcon)
content.appendChild(hello)