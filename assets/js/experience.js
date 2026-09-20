AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Research Intern, Nanomaterials & Electrospinning",
    cardImage: "assets/images/experience-page/aems.svg",
    place: "AEMS Lab, USPCAS-E, NUST \u00b7 Islamabad, Pakistan",
    time: "(June 2026 \u2013 September 2026)",
    desp: "<li>Contributed to the project <em>Electrospinning Enabled Fabrication of MoTe<sub>2</sub> Nanostructured Fibers</em>, synthesizing transition-metal dichalcogenide nanofibers by electrospinning.</li><li>Ran synthesis and materials characterization, and carried out the data analysis for them.</li><li>Reported experimental results in written technical reports.</li>",
  },
  {
    title: "Research Intern, Battery Electrochemistry",
    cardImage: "assets/images/experience-page/sns.svg",
    place: "Department of Chemistry (SNS), NUST \u00b7 Islamabad, Pakistan",
    time: "(August 2026)",
    desp: "<li>Worked on <em>Synthesis of an Artificial Solid Electrolyte Interface Film for Zinc Metal Batteries</em>, synthesizing polymer-based protective coatings of varying composition.</li><li>Characterized cells by cyclic voltammetry, electrochemical impedance spectroscopy (EIS) and galvanostatic charge\u2013discharge.</li><li>Reviewed the literature on dendrite suppression: interfacial stabilization, uniform Zn<sup>2+</sup> flux and electrolyte compatibility.</li>",
  },
  {
    title: "Research Intern, Analytical & Materials Chemistry",
    cardImage: "assets/images/experience-page/pinstech.svg",
    place: "PINSTECH \u00b7 Islamabad, Pakistan",
    time: "(July 2025 \u2013 August 2025)",
    desp: "<li>Carried out advanced electrochemical and spectroscopic analysis including cyclic voltammetry, UV-Vis spectrophotometry and atomic absorption spectroscopy.</li><li>Ran separations and identification by high-performance liquid chromatography, gas chromatography and GC-MS.</li><li>Developed and synthesized resin-based materials for electrochemical and catalytic uses, building working knowledge of material characterization.</li>",
  },
  {
    title: "Intern, Quantum Computing for Chemistry",
    cardImage: "assets/images/experience-page/cetqap.svg",
    place: "CETQAP \u00b7 Remote",
    time: "(July 2025 \u2013 August 2025)",
    desp: "<li>Introduced to quantum computing, quantum algorithms and their applications through case studies and simulations.</li><li>Built conceptual knowledge of quantum state representation and entanglement.</li><li>Studied the encoding of quantum data with an eye toward computational chemistry.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Deputy Director \u2014 NLC, NUST",
    cardImage: "assets/images/experience-page/nlc.svg",
    description:
      "Managed media and event photography for the society, covering events end to end.",
  },
  {
    title: "Deputy Director \u2014 SSC, NUST",
    cardImage: "assets/images/experience-page/ssc.svg",
    description:
      "Managed society events and media coordination across the team.",
  },
  {
    title: "Executive, Marketing \u2014 NUST Robotics Club",
    cardImage: "assets/images/experience-page/nrc.svg",
    description:
      "Assisted marketing and outreach campaigns for the club.",
  },
  {
    title: "Community Outreach",
    cardImage: "assets/images/experience-page/outreach.svg",
    description:
      "Created a documentary on inflation and community well-being. Active in food drives, tutoring initiatives and health surveys in underprivileged communities.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);
