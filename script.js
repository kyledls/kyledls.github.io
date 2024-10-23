"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            } else {
                entry.target.classList.remove('fade-in');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    const progressBar = document.querySelector('.progress-bar');
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });

    const projects = [
        {
            title: "AI Media Sentiment and Narrative Analysis",
            description: 'Final Submission for <a href="https://bloustein.rutgers.edu/graduate/public-informatics/raise2024/">Raise-2024 (National Data Science/Informatics Competition)</a> that won 1st place out of 100+ teams. Implemented advanced analytics including sentiment analysis and LLM-based categorization of news articles to extract key insights.',
            image: "/images/Raise.png", 
            techStack: ["Python", "NLTK", "Pandas", "Natural Language Processing", "Machine Learning"],
            projectUrl: "https://github.com/kyledls/raise-2024-competition"
        },

        {
            title: "Crowdstrike Equity Research Report",
            description: "Equity research report (1Q2024) analysis on Crowdstrike ($NYSE: CRWD). Recommended a buy @ $327 and has since made highs of $392.",
            image: "/images/CRWD.png", 
            techStack: ["Equity Research", "PowerPoint", "Financial Analysis"],
            projectUrl: "/PDF/CRWD-ER.pdf" 
        },

        {
            title: "Ford Discounted Cash Flow",
            description: "Discounted Cash Flow model created for Ford Motor Company ($NYSE: F). Analysis was conducted as a potential replacement for a company in the Dow Jones Industrial Average.",
            image: "/images/FORD.png", 
            techStack: ["Excel", "Financial Modeling", "DCF"],
            projectUrl: "https://docs.google.com/spreadsheets/d/1Rqa7j3DZt3UbMrFKeomXWN8Hx1i9fa2M/edit?usp=sharing&ouid=107750593706514896698&rtpof=true&sd=true"
        },

        {
            title: "374 Eastern Parkway Pitch Deck",
            description: "Pitch Deck created for a $8M, 38-unit residential property located in Brooklyn and presented to professionals from RBC, Citi, and J.P. Morgan in a pitch competition, securing 1st place through data-driven arguments and persuasive presentation.",
            image: "/images/PD.png", 
            techStack: ["Real Estate", "Financial Modeling", "Pitch Deck Creation"],
            projectUrl: "/PDF/PGIM.pdf"
        },

    ];

    function createProjectCards() {
        const container = document.querySelector('.project-container');
        
        projects.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card';
            
            card.innerHTML = `
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-content">
                    <div class="project-header">
                        <h3 class="project-title">${project.title}</h3>
                        <a href="${project.projectUrl}" target="_blank" rel="noopener noreferrer" class="project-link">↗</a>
                    </div>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
            `;
            
            container.appendChild(card);
        });
    }

    createProjectCards();

});

const aboutMeTitle = document.querySelector('#about h1');
const text = "About Me";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        aboutMeTitle.innerHTML = text.substring(0, index + 1) + '<span class="cursor">|</span>';
        index++;
        setTimeout(typeEffect, 250); 
    } else {
        aboutMeTitle.innerHTML = text; 
    }
}

typeEffect();

document.querySelector('.resume-timeline').innerHTML = jobData.map(createJobCard).join('');

function openModal() {
    document.getElementById('contactModal').classList.add('active');
    document.body.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('contactModal').classList.remove('active');
    document.body.classList.remove('modal-open');
    document.body.style.overflow = 'auto';
}

document.getElementById('contactModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});
