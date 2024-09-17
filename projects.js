const projects = {
    1: {
        title: "Project Title 1",
        date: "January 2024",
        extendedDescription: "This is the extended description for Project Title 1. It contains detailed information about the project, including the technologies used, challenges faced, and lessons learned. This description is shown in the modal when you click the 'more...' button."
    },
    2: {
        title: "Project Title 2",
        date: "February 2024",
        extendedDescription: "This is the extended description for Project Title 2. It contains detailed information about the project, including the technologies used, challenges faced, and lessons learned. This description is shown in the modal when you click the 'more...' button."
    },
    3: {
        title: "Project Title 3",
        date: "March 2024",
        extendedDescription: "This is the extended description for Project Title 2. It contains detailed information about the project, including the technologies used, challenges faced, and lessons learned. This description is shown in the modal when you click the 'more...' button."
    },
    4: {
        title: "Project Title 4",
        date: "April 2024",
        extendedDescription: "This is the extended description for Project Title 2. It contains detailed information about the project, including the technologies used, challenges faced, and lessons learned. This description is shown in the modal when you click the 'more...' button."
    }
    // Add more project details here
};

function openModal(projectId) {
    const project = projects[projectId];
    const modalDetails = document.getElementById('modal-details');
    modalDetails.innerHTML = `
        <h2>${project.title}</h2>
        <p><strong>Date:</strong> ${project.date}</p>
        <p>${project.extendedDescription}</p>
    `;
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

// language & sidebar

let currentLanguage = 'pl';

async function setLanguage(lang) {
    currentLanguage = lang;
    const response = await fetch(`./translations/${lang}-2.json`);
    const translations = await response.json();

    document.querySelector('h1').textContent = translations.pageTitle;
    document.querySelector('#sidebar-projects').textContent = translations.sidebarProjects;

    document.getElementById('en-btn').classList.toggle('toggled', lang === 'en');
    document.getElementById('pl-btn').classList.toggle('toggled', lang === 'pl');
    
}


// Sidebar toggle functionality
document.getElementById('close-btn').addEventListener('click', () => {
    document.getElementById('sidebar').classList.add('hidden');
    document.getElementById('main-content').classList.add('full-width');
    document.getElementById('open-btn').classList.add('show');
});

document.getElementById('open-btn').addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('hidden');
    document.getElementById('main-content').classList.remove('full-width');
    document.getElementById('open-btn').classList.remove('show');
});

// Set default language to English on load
setLanguage('pl');

document.getElementById('open-btn').addEventListener('click', () => {
    document.getElementById('sidebar').classList.add('active');
});

document.getElementById('close-btn').addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('active');
});

