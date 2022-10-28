const projectsButton = document.querySelector('#show-projects');
const contactButton = document.querySelector('#contact-mob');
const projects = document.querySelector('.projects');
const contact = document.querySelector('.contact-info');


// Typing header effect 
let iHeader = 0;

function typeWriter() {
  let title = `✦ BELLE 3D`;

  if (iHeader < title.length) {
    document.querySelector("h1").innerHTML += title.charAt(iHeader);
    iHeader++;
    setTimeout(typeWriter, 300);
  } 
}

typeWriter();

// Typing skills effects

let iSkills = 0;

function infoWriter() {
  let skills = 
  `AR - SPARK AR / LENS STUDIO / EFFECT HOUSE
  PROCEDURAL DESIGN
  DIGITAL FASHION - CLO3D / MARVELLOUS DESIGNER
  DIGITAL CREATION - BLENDER / MAYA`;

  if (iSkills < skills.length) {
    document.querySelector(".typed").innerHTML += skills.charAt(iSkills);
    iSkills++;
    setTimeout(infoWriter, 30);
  } 
}

infoWriter();


// Hide and show projects
if (window.innerWidth < 800) {
    projects.style.display = 'none';
}

function showProjects() {
    const arrow = document.querySelector('.arrow1')

    if (projects.style.display === 'none') {
        projects.style.display = 'block';
        arrow.classList.add('active')
    } else {
        projects.style.display = 'none'
        arrow.classList.remove('active')
    }
}

projectsButton.addEventListener('click', showProjects);