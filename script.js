

const popupContext = document.getElementById('popup-context');
const popupProcess = document.getElementById('popup-process');
const popupOutcome = document.getElementById('popup-outcome');
const popupKeySkills = document.getElementById('popup-keyskills');

const popupTitle = document.getElementById('popup-title');
// const popupDescription = document.getElementById('popup-description');
const popup = document.getElementById('portfolio-popup');
const closeButton = document.querySelector('.close');


// The project details object
const projectDetails = {
    project1: {
      title: "Presenting",
      context: [
        "Point 1 about context",
        "Point 2 about context",
      ],
      process: [
        "Step 1 in the process",
        "Step 2 in the process",
      ],
      outcome: [
        "Outcome 1",
        "Outcome 2",
      ],
      keySkills: [
        "Skill 1",
        "Skill 2",
      ]
    },

    project2: {
        title: "Discovery", 
        context: [
            "Overview:",
            "The company aimed to improve the onboarding experience for new users, which was identified as a key factor in increasing user retention and satisfaction.",
            "Point 2 about context",
          ],
          process: [
            "My Role:",
            "I led the product discovery phase, collaborating with UX designers and engineers to identify pain points through user interviews and data analysis.", 
            "I helped define the MVP, prioritized features based on user impact and feasibility, and assisted in sprint planning.",
            "Conducted 15+ user interviews and analyzed onboarding drop-off metrics. Created user journey maps and identified friction points.",
            "Defined and prioritized feature backlog with stakeholders.",
            "Coordinated with design and engineering teams through Agile ceremonies.",
            "Monitored launch impact through usage analytics and user feedback.",
          ],
          outcome: [
            "Outcomes:",
            "Reduced onboarding drop-off rate by 18% within three months post-launch.",
            "Increased new user activation by 25%.",
            "Received positive feedback from users citing clarity and ease of use",

          ],
          keySkills: [
            "Key Skills:",
            "Stakeholder management",
            "Communication",
            "Cross-functional collaboration",
          ]
    },

    project3: {
        title: "Competitor Analysis", 
        description: "this is a description of competitor analysis"
    },
    project4: {
        title: "Product", 
        description: "this is a description of product learning"
    },
};

// Open the popup when clicking the "view more" button
document.querySelectorAll('.view-more').forEach(button => {
    button.addEventListener('click', function(e) {
        const project = e.target.getAttribute('data-project');
        // popupTitle.innerText = projectDetails[project].title;
        // popupDescription.innerText = projectDetails[project].description;
        const details = projectDetails[project];
        console.log('Clicked project:', project);
        console.log('Project details:', details);

        popupTitle.innerText = details.title || "";
        popupContext.innerText = details.context || "";
        popupProcess.innerText = details.process || "";
        popupOutcome.innerText = details.outcome || "";
        popupKeySkills.innerText = details.keySkills || "";

        popup.style.display = 'flex'; // Show the popup
    });
});

// Close the popup when clicking the close button
closeButton.addEventListener('click', function() {
    popup.style.display = 'none'; // Hide the popup
});





























function sayHello(name) {
console.log('Hello' ,name)

}

sayHello("Rebecca")
sayHello("Naomi")

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
 
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
 

    })
})