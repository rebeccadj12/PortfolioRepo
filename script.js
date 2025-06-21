

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
      title: "Product",
      context: [
        "Overview: I led a project from discovery through to delivery, focused on improving a highly manual and time-critical red business process used by our operations team. This process was client-facing and had to be completed on the first working day of each month, meaning any delays could have commercial consequences.",
      ],
      process: [
        "My Role: I led the inital discovery, deleving into the pain points of our operations team and writing a product brief defining the problem. I scoped out initial prototyping with a senior engineer, building technical domain knowledge. Next, I led the wider engineering team through the build, breaking down complex problems into digestible items of work. ",
      ],
      outcome: [
        "Outcome: We delivered the automation which removed a red operational processes, directly contributing to our divisions OKRs. It saved around 10 hours of manual work on each first of the month.",
      ],
      keySkills: [
        "Key Skills: Product management, analytical and creative thinking, technical knowledge, collaboration, leadership.",
      ]
    },

    project2: {
        title: "Discovery", 
        context: [
            "Overview: I led the discovery of a new interactive Savings tool for our clients. Senior stakeholders had shown an interest in this tool as our competitor's had a strong offering.",
          ],
          process: [
            "My Role: I guided strategic direction and decision-making. This involved collaboring with a diverse range of teams, including individuals from user-centred design, marketing, compliance, product management, and senior stakeholders.  I supported UCD through prototyping and client interviews, ensuring clients needs were met while staying aligned with industry regulations. Additionally I managed the expectations of stakeholders throughout.",
          ],
          outcome: [
            "Outcome: Senior stakeholders were impressed with the designs and far exceeded their expectations of what was possible. This was taken into future roadmap priortisation.",

          ],
          keySkills: [
            "Key Skills: Stakeholder management, communication, cross-functional collaboration, leadership.",
          ]
    },

    project3: {
        title: "Competitor Analysis", 
        
        context: [
        "Overview: I provided weekly comepetitor reports to the wider business to 150+ people across the wider business including c-level stakeholders.",
        ],
        process: [
        "My Role: I followed key financial news reporting on competitor or industry moves that were both interesting and relevant to Hargreaves Lansdown. This allowed me to build an understanding of all our services and our competitor landscape. Additionally I built strong commericial awareness. ",
        ],
        outcome: [
        "Outcome: This was extremely positively received, with many senior stakeholders commenting on the usefulness and their interest in the weekly reports. The report became more wide spread throughout the year reaching new areas of the business.",
        ],
        keySkills: [
        "Key Skills: Proposition, commericial awareness, business knowledge.",
        ]
    
    },
    project4: {
      title: "Presenting",
      context: [
        "Overview: I recognised presenting was a skill I needed to improve.",
      ],
      process: [
        "My Role: I took steps to proactively seek opportunities to public speak. I started off small but gradually presented to larger audiences as I built my confidence. I actively sought feedback and acted upon it each time. ",
      ],
      outcome: [
        "Outcome: Over my placement year I have presented to varying audiences, reaching c-level stakeholders and audiences of 80+ people",
      ],
      keySkills: [
        "Key Skills: Public speaking and confidence.",
      ]
    },
};

// Open the popup when clicking the "view more" button
document.querySelectorAll('.view-more').forEach(button => {
    button.addEventListener('click', function(e) {
        const project = e.target.getAttribute('data-project');
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