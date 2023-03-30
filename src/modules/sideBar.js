function createSidebar(){
    const sideBar = document.createElement("div")
    sideBar.classList.add("sideBar")

    const content = document.querySelector(".content")


    sideBar.appendChild(createRemindersSection())
    sideBar.appendChild(createProjectsSection())

    content.appendChild(sideBar)

}

function createRemindersSection(){
    const reminders = document.createElement("ul")
    reminders.classList.add("reminders")

    const reminderToday = document.createElement("div")
    reminderToday.classList.add("reminder")
    const imgToday = document.createElement("img")
    imgToday.classList.add("reminderImg")
    imgToday.src = "/src/assets/images/today.svg"
    const textContentToday = document.createElement("p")
    textContentToday.classList.add("reminderTextContent")
    textContentToday.textContent = "Today"
    reminderToday.appendChild(imgToday)
    reminderToday.appendChild(textContentToday)
    
    const reminderWeek = document.createElement("div")
    reminderWeek.classList.add("reminder")
    const imgWeek = document.createElement("img")
    imgWeek.classList.add("reminderImg")
    imgWeek.src = "/src/assets/images/week.svg"
    const textContentWeek = document.createElement("p")
    textContentWeek.classList.add("reminderTextContent")
    textContentWeek.textContent = "Week"
    reminderWeek.appendChild(imgWeek)
    reminderWeek.appendChild(textContentWeek)

    const reminderAnytime = document.createElement("div")
    reminderAnytime.classList.add("reminder")
    const imgAnytime = document.createElement("img")
    imgAnytime.classList.add("reminderImg")
    imgAnytime.src = "/src/assets/images/anytime.svg"
    const textContentAnytime = document.createElement("p")
    textContentAnytime.classList.add("reminderTextContent")
    textContentAnytime.textContent = "Anytime"
    reminderAnytime.appendChild(imgAnytime)
    reminderAnytime.appendChild(textContentAnytime)
    
    reminders.appendChild(reminderToday)
    reminders.appendChild(reminderWeek)
    reminders.appendChild(reminderAnytime)

    return reminders
}

function createProjectsSection(){
    const projects = document.createElement("div")
    projects.classList.add("projects")

    const projectsTitle = document.createElement("h")
    projectsTitle.classList.add("title")
    projectsTitle.textContent = "Projects"

    const addNewProject = document.createElement("div")
    addNewProject.classList.add("addProject")
    const addNewProjectImg = document.createElement("img")
    addNewProjectImg.classList.add("addNewProjectImg")
    addNewProjectImg.src = "/src/assets/images/add.svg"
    const addNewProjectText = document.createElement("p")
    addNewProjectText.classList.add("addNewProjectText")
    addNewProjectText.textContent = "Add new project"

    addNewProject.appendChild(addNewProjectImg)
    addNewProject.appendChild(addNewProjectText)




    projects.appendChild(projectsTitle)
    projects.appendChild(addNewProject)


    return projects
}

export default createSidebar
