import './style.css'
import createHolder from './modules/holder.js'
import createHeader from "./modules/header.js";
import createSideBar from "./modules/sideBar.js"
// import CreateProject from './modules/project.js'
// import createNewProject from './modules/project.js';
import createProjectLayout from './modules/project.js'

const content = document.querySelector(".content")
const holder = createHolder()

holder.appendChild(createSideBar())
holder.appendChild(createProjectLayout())




// holder.appendChild(createHeader())
content.appendChild(createHeader())
content.appendChild(holder)

// createNewProject()







