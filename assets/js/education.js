AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Research Internship \u00b7 AEMS Lab, USPCAS-E",
    cardImage: "assets/images/education-page/aems.svg",
    moocLink: "https://drive.google.com/file/d/1uHTbtmBGH8Bjn5UyhQFqYH678B5ET_39/view?usp=sharing",
  },
  {
    title: "Research Internship \u00b7 Department of Chemistry, SNS",
    cardImage: "assets/images/education-page/sns.svg",
    moocLink: "https://drive.google.com/file/d/1FgZs9f10s-RVv7LVSSpfng1RnIctoZnu/view?usp=sharing",
  },
  {
    title: "MOSPI-2026 Workshop \u00b7 DFT Cluster",
    cardImage: "assets/images/education-page/mospi.svg",
    moocLink: "https://drive.google.com/file/d/1C7yWi-c14tV5ke4tRwTF9DD-DW3ySkHr/view?usp=sharing",
  },
  {
    title: "SUSTECH-2026 Workshop \u00b7 Energy Storage",
    cardImage: "assets/images/education-page/sustech.svg",
    moocLink: "https://drive.google.com/file/d/1eQ0tomMYCXeZX_XHByCG34M9VjEwlbIk/view?usp=sharing",
  },
  {
    title: "Research Internship \u00b7 PINSTECH",
    cardImage: "assets/images/education-page/pinstech.svg",
    moocLink: "https://drive.google.com/drive/folders/1vzTJ8bfKJUQR76T26nnbQ9DnkiQwEDb6",
  },
  {
    title: "Quantum Computing Internship \u00b7 CETQAP",
    cardImage: "assets/images/education-page/cetqap.svg",
    moocLink: "https://drive.google.com/drive/folders/17-R4DzqX66O5yU82S5Hyj399aihbqVa_",
  },
  {
    title: "Introduction to Process Safety and Risk Analysis",
    cardImage: "assets/images/education-page/coursera.svg",
    moocLink: "https://drive.google.com/file/d/1zyCP5dO8EXEgR3N0ZZCsbxWrqGdwoCBb/view?usp=sharing",
  },
  {
    title: "Introduction to HSE Engineering",
    cardImage: "assets/images/education-page/coursera.svg",
    moocLink: "https://drive.google.com/file/d/1Pcq2Y0gl1HjOh-JIIhKnVfQRzR8WOYPH/view?usp=sharing",
  },
  {
    title: "Chemical Process Safety",
    cardImage: "assets/images/education-page/coursera.svg",
    moocLink: "https://drive.google.com/file/d/1Sn8X6b6nI1rZtMWABrJl--rw4OqPktHM/view?usp=sharing",
  },
  {
    title: "Material Chemistry and Sustainable Building",
    cardImage: "assets/images/education-page/coursera.svg",
    moocLink: "https://drive.google.com/file/d/1l073bdano_YYO1t_l1u_tfe3Eqe0XGCm/view?usp=sharing",
  },
  {
    title: "Density Functional Theory",
    cardImage: "assets/images/education-page/coursera.svg",
    moocLink: "https://drive.google.com/file/d/1HEbBQqKqB2Y46BiNS50f6gR-uabWFMk7/view?usp=sharing",
  },
  {
    title: "Petroleum Engineering with AI Applications (Specialization)",
    cardImage: "assets/images/education-page/coursera.svg",
    moocLink: "https://drive.google.com/drive/folders/1w5XHIG0-l-pgnB1TcjTOW8Pn65CQj4Fw",
  },
];

const experience = [];

let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function () {
  showExperience();
});

function showExperience() {
  // The slideshow container (#image) is not present on every page - without
  // this guard the interval throws a TypeError every 3 seconds, forever.
  if (!img) return;
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
    const item = experience[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  // .badges is not present on every page
  if (bagdes) bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/

$(function () {
  // ScrollReveal is not bundled on this site; without it every call below
  // throws and the timeline reveal animations silently do nothing.
  if (typeof ScrollReveal === "undefined") return;
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});
