import c3 from "c3"

const body = document.body;
const logo_1 = document.querySelector<HTMLImageElement>('.logo-1')!;
const logo_2 = document.querySelector<HTMLImageElement>('.logo-2')!;
const secrest = document.querySelector<HTMLHeadingElement>('#secrest')!;
const carson = document.querySelector<HTMLHeadingElement>('#carson')!;
const science = document.querySelector<HTMLHeadingElement>('#science')!;
const computer = document.querySelector<HTMLHeadingElement>('#computer')!;
const brown_div = document.querySelector<HTMLDivElement>("#brown-div")!;
const beige_div = document.querySelector<HTMLDivElement>("#beige-div")!;
const light_background_color = 'F0ECE9';
const dark_background_color = '241C1C';
const above_secrest = document.querySelector<HTMLDivElement>("#above-secrest")!;
const above_carson = document.querySelector<HTMLDivElement>("#above-carson")!;
const above_science = document.querySelector<HTMLDivElement>("#above-science")!;
const above_computer = document.querySelector<HTMLDivElement>("#above-computer")!;
const background = document.querySelector<HTMLDivElement>(".background")!;
const upper_welcome_div = document.querySelector<HTMLDivElement>(".upper-welcome-div")!;
const lower_welcome_div = document.querySelector<HTMLDivElement>(".lower-welcome-div")!;
const introduction_screen = document.querySelector<HTMLDivElement>(".introduction-screen")!;
const interests_screen = document.querySelector<HTMLDivElement>(".interests-screen")!;
const personal_page = document.querySelector<HTMLDivElement>(".personal-page")!;
const professional_page = document.querySelector<HTMLDivElement>(".professional-page")!;
const education_header = document.querySelector<HTMLDivElement>(".education-header")!;

window.onload = () => {
  logo_1.style.animation = 'logo-slide-left 1.5s 0.4s cubic-bezier(0.215, 0.610, 0.355, 1) forwards';
  achievement();
  setTimeout(() => {
    education_header.style.opacity = '1';
  }, 4000);

  setTimeout(() => {
    secrest.style.animation = 'text-slide-up 1s 0.3s cubic-bezier(0.215, 0.610, 0.355, 1) forwards';
    carson.style.animation = 'text-slide-up 1s cubic-bezier(0.215, 0.610, 0.355, 1) forwards';
  }, 700);
}

function move_background() {
  brown_div.style.animation =
    "div-slide-right 0.5s cubic-bezier(0.215, 0.610, 0.355, 1) forwards";
  beige_div.style.animation =
    "div-slide-right 0.5s 0.2s cubic-bezier(0.215, 0.610, 0.355, 1) forwards";

  setTimeout(() => {
    brown_div.style.transform = "translateX(0vw)";
    brown_div.style.animation =
      "div-slide-left 0.5s 0.2s cubic-bezier(0.215, 0.610, 0.355, 1) forwards";
    beige_div.style.animation =
      "div-slide-left 0.5s cubic-bezier(0.215, 0.610, 0.355, 1) forwards";
  }, 1500);
}

function next_logo(last_logo, next_logo, last_upper_text, last_lower_text, next_upper_text, next_lower_text, background_color, last_s_above, last_c_above, next_s_above, next_c_above, last_page, next_page){
  move_background();
  
  last_logo.style.animation = 'logo-slide-right 1.5s cubic-bezier(0.215, 0.610, 0.355, 1) forwards';
  last_upper_text.style.animation = 'text-slide-down 1s cubic-bezier(0.215, 0.610, 0.355, 1) forwards';
  last_lower_text.style.animation = 'text-slide-down 1s cubic-bezier(0.215, 0.610, 0.355, 1) forwards';
  
  setTimeout(() => {
    last_s_above.style.display = 'none';
    last_c_above.style.display = 'none';
    next_s_above.style.display = 'block';
    next_c_above.style.display = 'block';
    body.style.backgroundColor = `#${background_color}`;
    background.style.backgroundColor = `#${background_color}`;
    upper_welcome_div.style.backgroundColor = `#${background_color}`;
    lower_welcome_div.style.backgroundColor = `#${background_color}`;
    introduction_screen.style.backgroundColor = `#${background_color}`;
    // interests_screen.style.backgroundColor = `#${background_color}`;
    last_logo.style.animation = 'none';
    last_logo.style.transform = 'translateX(0)';
    last_logo.style.display = 'none';
    next_logo.style.display = 'block';
    last_upper_text.style.display = 'none';
    last_lower_text.style.display = 'none';
    next_upper_text.style.display = 'block';
    next_lower_text.style.display = 'block';
    last_page.style.display = 'none';
    next_page.style.display = 'block';
    
    setTimeout(() => {
      next_logo.style.animation = 'logo-slide-left 1.5s cubic-bezier(0.215, 0.610, 0.355, 1) forwards';

        setTimeout(() => {
          next_upper_text.style.animation = 'text-slide-up 1s 0.3s cubic-bezier(0.215, 0.610, 0.355, 1) forwards';
          next_lower_text.style.animation = 'text-slide-up 1s cubic-bezier(0.215, 0.610, 0.355, 1) forwards';
        }, 400);

    }, 1000);
    
  }, 1000);
}

logo_1.addEventListener("click", () => next_logo(logo_1, logo_2, secrest, carson, science, computer, dark_background_color, above_secrest, above_carson, above_science, above_computer, personal_page, professional_page));
logo_2.addEventListener("click", () => next_logo(logo_2, logo_1, science, computer, secrest, carson, light_background_color, above_science, above_computer, above_secrest, above_carson, professional_page, personal_page));




const interests = document.querySelectorAll<HTMLUListElement>('.interests-items li')!;

let display_text_array = [];
interests.forEach((interest) => {
  display_text_array.push(interest.textContent);
  interest.textContent = ' ';
  interest.style.display = 'none';
});

function type(interest, index) {
  interest.style.display = 'block';
  let display_text = display_text_array[index];
  let i = 0;

  function addCharacter() {
    if (i < display_text.length) {
      interest.textContent += display_text[i];
      i++;
      setTimeout(addCharacter, 60);
    } else {
      setTimeout(() => {
        removeCharacter();
      }, 2000);
    }
  }

  addCharacter();

  function removeCharacter() {
    if (i >= 0) {
      interest.textContent = interest.textContent.slice(0, i);
      i--;
      setTimeout(removeCharacter, 60);
    }
  }
} 

interests.forEach((interest, index) => {
  setTimeout(() => {
    type(interest, index);
  }, index * 6000);
});


//////////////////////////////////////////////////
const achievement = () => {
    (document.querySelector('.achiev_name') as HTMLDivElement).innerText = "Academic Weapon";
    (document.querySelector('.unlocked') as HTMLDivElement).innerText = 'Achievement Unlocked';

    (document.querySelector('.circle') as HTMLDivElement).classList.add('circle_animate');
    (document.querySelector('.banner') as HTMLDivElement).classList.add('banner-animate');
    (document.querySelector('.achieve_disp') as HTMLDivElement).classList.add('achieve_disp_animate');

    setTimeout(() => {
        (document.querySelector('.circle') as HTMLDivElement).classList.remove('circle_animate');
        (document.querySelector('.banner') as HTMLDivElement).classList.remove('banner-animate');
        (document.querySelector('.achieve_disp') as HTMLDivElement).classList.remove('achieve_disp_animate');
    }, 12000);
}





const course_title_major_related = document.querySelector<HTMLDivElement>(".course-title-major-related")!;
const course_list_major_related = document.querySelector<HTMLDivElement>(".course-list-major-related")!;
const course_title_baccalaureate = document.querySelector<HTMLDivElement>(".course-title-baccalaureate")!;
const course_list_baccalaureate = document.querySelector<HTMLDivElement>(".course-list-baccalaureate")!;
const course_title_electives = document.querySelector<HTMLDivElement>(".course-title-electives")!;
const course_list_electives = document.querySelector<HTMLDivElement>(".course-list-electives")!;
const course_title_honors = document.querySelector<HTMLDivElement>(".course-title-honors")!;
const course_list_honors = document.querySelector<HTMLDivElement>(".course-list-honors")!;
const beaver_image = document.querySelector<HTMLImageElement>(".beaver-image")!;
const chart_container = document.querySelector<HTMLDivElement>(".chart-container")!;
const course_div = document.querySelector<HTMLDivElement>(".course-div")!;

course_title_baccalaureate.style.display = "none";
course_list_baccalaureate.style.display = "none";
course_title_electives.style.display = "none";
course_list_electives.style.display = "none";
course_title_honors.style.display = "none";
course_list_honors.style.display = "none";

let previous_clicked_on;
let running_timeout = false;

let chart = c3.generate({
    bindto: '.chart',
    data: {
        columns: [
            ['Major Related', 11],
            ['Baccalaureate', 5],
            ['Electives', 4],
            ['Honors', 4]
        ],
        type: 'donut',
        onclick: function(d, i) { 
          console.log("onclick", d, i);

          if(!previous_clicked_on) {
            chart_container.style.animation = 'chart-slide-left 1s cubic-bezier(0.215, 0.610, 0.355, 1) forwards';
          }

          previous_clicked_on = [course_list_major_related, course_list_baccalaureate, course_list_electives, course_list_honors][d.index];

          console.log(previous_clicked_on);
        }
    },
    size: {
      height: 600
    },
    donut: {
        padAngle: 0.05,
        width: 240,
        label: {
            show: true,
            format: function (value, ratio, id) {
                return id; // + ": " + value; // display the actual value of the numbers on the chart
            }
        }
    },
    legend: {
        show: false
    },
    color: {
        pattern: ['#846C5F', '#897668', '#A88F81', '#BBA89A']
    },
    tooltip: {
        show: false
    }
});

const resizeObserver = new ResizeObserver(entries => {
  for (let entry of entries) {
    if (entry.target === document.body) {
      if (window.matchMedia("(max-width: 1200px)").matches) {
        chart.resize({height:550});
      } else {
        chart.resize({height:600});
      }
    }
  }
});

resizeObserver.observe(document.body);


