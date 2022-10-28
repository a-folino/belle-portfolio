const projectsButton = document.querySelector('#show-projects');
const contactButton = document.querySelector('#contact-mob');
const projects = document.querySelector('.projects');
const contact = document.querySelector('.contact-info');


// Typing header effect 
let i = 0;

function typeWriter() {
  let title = `✦ BELLE 3D`;

  if (i < title.length) {
    document.querySelector("h1").innerHTML += title.charAt(i);
    i++;
    setTimeout(typeWriter, 300);
  } 
}

typeWriter();


// Hide and show projects
if (window.innerWidth < 800) {
    projects.style.display = 'none';
    contact.style.display = 'none'
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

function showContact() {
  const arrow = document.querySelector('.arrow2')

  if (contact.style.display === 'none') {
      contact.style.display = 'block'
      arrow.classList.add('active')
  } else {
      contact.style.display = 'none'
      arrow.classList.remove('active')
  }
}

projectsButton.addEventListener('click', showProjects);
contactButton.addEventListener('click', showContact)