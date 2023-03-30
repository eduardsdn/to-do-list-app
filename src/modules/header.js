function createHeader(){
    const content = document.querySelector(".content")

    const header = document.createElement("div")
    header.classList.add("header")
    const logo = document.createElement("div")

    logo.textContent = "ToDoList"
    logo.classList.add("logo")

    header.appendChild(logo)

    content.appendChild(header)
}

export default createHeader 