AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "assets/images/techstack-page/titrations.svg",
    langName: "Titrations",
    langDesc: "<li>Volumetric analysis by controlled addition of a titrant to determine an unknown concentration, including acid-base and redox titrations.</li>",
  },
  {
    langImage: "assets/images/techstack-page/chromatography.svg",
    langName: "Chromatography",
    langDesc: "<li>Separation of mixtures by differential partition between a mobile and a stationary phase, used to isolate and identify components.</li>",
  },
  {
    langImage: "assets/images/techstack-page/nanoparticles.svg",
    langName: "Nanoparticle Synthesis",
    langDesc: "<li>Preparation of nanoscale materials with control over particle size and morphology, followed by characterization.</li>",
  },
  {
    langImage: "assets/images/techstack-page/gravimetric.svg",
    langName: "Gravimetric Analysis",
    langDesc: "<li>Quantitative determination of an analyte by mass, typically through selective precipitation, filtration and drying to constant weight.</li>",
  },
  {
    langImage: "assets/images/techstack-page/saltanalysis.svg",
    langName: "Salt Analysis",
    langDesc: "<li>Systematic qualitative identification of cations and anions in an unknown inorganic salt through classification tests.</li>",
  },
  {
    langImage: "assets/images/techstack-page/voltammetry.svg",
    langName: "Cyclic Voltammetry",
    langDesc: "<li>Electrochemical technique sweeping potential to study redox behaviour, reaction reversibility and electron-transfer kinetics.</li>",
  },
  {
    langImage: "assets/images/techstack-page/eis.svg",
    langName: "Electrochemical Impedance Spectroscopy",
    langDesc: "<li>Small-signal AC measurement across a frequency range, used to separate charge-transfer resistance from interfacial and diffusion behaviour.</li>",
  },
  {
    langImage: "assets/images/techstack-page/gcd.svg",
    langName: "Galvanostatic Charge-Discharge",
    langDesc: "<li>Constant-current cycling of a cell to evaluate capacity, coulombic efficiency and cycling stability over repeated charge and discharge.</li>",
  },
  {
    langImage: "assets/images/techstack-page/electrospinning.svg",
    langName: "Electrospinning",
    langDesc: "<li>Fabrication of nanostructured fibers by drawing a polymer solution through an electric field, with control over fiber morphology.</li>",
  },
  {
    langImage: "assets/images/techstack-page/dft.svg",
    langName: "Density Functional Theory",
    langDesc: "<li>Electronic-structure modelling with VASP, applied to surface systems and to adsorption and catalytic reaction studies.</li>",
  },
  {
    langImage: "assets/images/techstack-page/uvvis.svg",
    langName: "UV-Vis Spectrophotometry",
    langDesc: "<li>Measurement of absorbance across ultraviolet and visible wavelengths for concentration and electronic-structure analysis.</li>",
  },
  {
    langImage: "assets/images/techstack-page/aas.svg",
    langName: "Atomic Absorption Spectroscopy",
    langDesc: "<li>Trace metal quantification by measuring absorption of light by free atoms in the gaseous state.</li>",
  },
  {
    langImage: "assets/images/techstack-page/hplc.svg",
    langName: "High-Performance Liquid Chromatography",
    langDesc: "<li>High-pressure liquid-phase separation of complex mixtures for quantitative and qualitative analysis.</li>",
  },
  {
    langImage: "assets/images/techstack-page/gcms.svg",
    langName: "Gas Chromatography &amp; GC-MS",
    langDesc: "<li>Separation of volatile compounds by gas chromatography, coupled with mass spectrometry for structural identification.</li>",
  },
  {
    langImage: "assets/images/techstack-page/origin.svg",
    langName: "Origin",
    langDesc: "<li>Scientific graphing and data analysis: curve fitting, peak analysis and publication-quality plots from experimental data.</li>",
  },
  {
    langImage: "assets/images/techstack-page/chemdraw.svg",
    langName: "ChemDraw",
    langDesc: "<li>Chemical structure drawing for molecules, reaction schemes and mechanisms in reports and presentations.</li>",
  },
  {
    langImage: "assets/images/techstack-page/excel.svg",
    langName: "Excel",
    langDesc: "<li>Tabulating experimental data, running calculations and building charts for laboratory reporting.</li>",
  },
  {
    langImage: "assets/images/techstack-page/highscore.svg",
    langName: "High Scorer",
    langDesc: "<li>Analysis of diffraction data, including phase identification against reference pattern databases.</li>",
  },
  {
    langImage: "assets/images/techstack-page/photoshop.svg",
    langName: "Photoshop",
    langDesc: "<li>Raster image editing, used for event photography and preparing visual material for society media.</li>",
  },
  {
    langImage: "assets/images/techstack-page/illustrator.svg",
    langName: "Illustrator",
    langDesc: "<li>Vector design for posters, campaign graphics and outreach material.</li>",
  },
];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
