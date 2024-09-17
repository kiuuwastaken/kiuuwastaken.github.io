let currentLanguage = 'pl';

async function setLanguage(lang) {
    currentLanguage = lang;
    const response = await fetch(`./translations/${lang}.json`);
    const translations = await response.json();

    document.querySelector('h1').textContent = translations.pageTitle;
    document.querySelector('#about h2').textContent = translations.aboutTitle;
    document.querySelector('#about p').textContent = translations.aboutContent;

    document.querySelector('#sidebar-projects').textContent = translations.sidebarProjects;

    document.querySelector('#experience h2').textContent = translations.experienceTitle;
    document.querySelector('#experience h3').textContent = translations.experiencePosition;
    document.querySelector('#experience h4').textContent = translations.experienceCompany;
    document.querySelector('#experience p').textContent = translations.experienceDescription;

    document.querySelector('#skills h2').textContent = translations.skillsTitle;

    document.querySelector('#education h2').textContent = translations.educationTitle;
    document.querySelector('#education h3').textContent = translations.educationSectionTitle;
    document.querySelector('#education h4').textContent = translations.educationSchool;
    document.querySelector('#education p').textContent = translations.educationDates;

    document.querySelector('#contact h2').textContent = translations.contactTitle;
    document.querySelector('#contact p:nth-child(2)').textContent = translations.contactEmail;
    document.querySelector('#contact p:nth-child(3)').textContent = translations.contactPhone;
    document.querySelector('#contact p:nth-child(4)').textContent = translations.contactLinkedIn;


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
