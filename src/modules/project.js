function Project(name){
    this.name = name
    this.tasks = []
}


function createNewProject(){
    const addNewProjectBtn = document.querySelector(".addProject")
    
    addNewProjectBtn.addEventListener('click', function(){
        let project = new Project('test')
        console.log(project)

        return project
        // Input needed!!!
        // Here goes createProjectLayout(prjct)
    })

}

function createProjectLayout(){
    const projectSection = document.createElement("div")
    projectSection.classList.add("project")

    const projectSectionTitle = document.createElement("h")
    projectSectionTitle.classList.add("title")
    projectSectionTitle.textContent = "Project1"

    const addTask = document.createElement("div")
    addTask.classList.add("addTask")

    const addTaskImg = document.createElement("img")
    addTaskImg.classList.add("addTaskImg")
    addTaskImg.src = '/src/assets/images/add.svg'

    const addTaskTextContent = document.createElement("p")
    addTaskTextContent.classList.add("addTaskTextContent")
    addTaskTextContent.textContent = "Add Task"

    addTask.appendChild(addTaskImg)
    addTask.appendChild(addTaskTextContent)
    
    projectSection.appendChild(projectSectionTitle)
    projectSection.appendChild(addTask)

    return projectSection

}







export default createProjectLayout
// export default CreateProject


