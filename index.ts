import c3 from "c3"
const { BASE_URL } = import.meta.env;

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
const curved_text = document.querySelector<HTMLDivElement>(".curved-text")!;

window.onload = () => {
  logo_1.style.animation = 'logo-slide-left 1.5s 0.4s cubic-bezier(0.215, 0.610, 0.355, 1) forwards';

  setTimeout(() => {
    secrest.style.animation = 'text-slide-up 1s 0.3s cubic-bezier(0.215, 0.610, 0.355, 1) forwards';
    carson.style.animation = 'text-slide-up 1s cubic-bezier(0.215, 0.610, 0.355, 1) forwards';
  }, 700);

  setTimeout(() => {
    curved_text.style.animation = 'fade-in 1s cubic-bezier(0.215, 0.610, 0.355, 1) forwards';
  }, 2000);
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
  curved_text.style.animation = 'curved-text-slide-right 1.5s cubic-bezier(0.215, 0.610, 0.355, 1) forwards';
  
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
    curved_text.style.display = 'none';
    
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


/////////////////////////////////////////////////////////////////////////////////////////////
const education_header = document.querySelector<HTMLDivElement>(".education-header")!;

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

let achievement_played = false;
document.addEventListener('scroll', () => {
    if(!achievement_played && getComputedStyle(professional_page).display !== 'none') {
        if(window.scrollY > window.innerHeight / 2){
            achievement_played = true;
            achievement();
            setTimeout(() => {
                education_header.style.opacity = "1";
            }, 4000);
        }
    }
})


const course_title_computer_science = document.querySelector<HTMLDivElement>(".course-title-computer-science")!;
const course_list_computer_science = document.querySelector<HTMLDivElement>(".course-list-computer-science")!;
const course_title_math = document.querySelector<HTMLDivElement>(".course-title-math")!;
const course_list_math = document.querySelector<HTMLDivElement>(".course-list-math")!;
const course_title_engineering = document.querySelector<HTMLDivElement>(".course-title-engineering")!;
const course_list_engineering = document.querySelector<HTMLDivElement>(".course-list-engineering")!;
const course_title_other = document.querySelector<HTMLDivElement>(".course-title-other")!;
const course_list_other = document.querySelector<HTMLDivElement>(".course-list-other")!;
const beaver_image = document.querySelector<HTMLImageElement>(".beaver-image")!;
const chart_container = document.querySelector<HTMLDivElement>(".chart-container")!;
const course_div = document.querySelector<HTMLDivElement>(".course-div")!;
const course_title_cover = document.querySelector<HTMLDivElement>(".course-title-cover")!;
const course_list_cover = document.querySelector<HTMLDivElement>(".course-list-cover")!;

course_title_math.style.display = "none";
course_list_math.style.display = "none";
course_title_engineering.style.display = "none";
course_list_engineering.style.display = "none";
course_title_other.style.display = "none";
course_list_other.style.display = "none";

let previous_title = course_title_computer_science;
let previous_list = course_list_computer_science;
previous_title.style.display = "block";
previous_list.style.display = "block";
let next_title;
let next_list;
let running_timeout = false;

let chart = c3.generate({
    bindto: '.chart',
    data: {
        columns: [
            ['Computer Science', 3],
            ['Math', 5],
            ['Engineering', 3],
            ['Other', 7]
        ],
        type: 'donut',
        onclick: function(d, i) { 
          console.log("onclick", d, i);

          next_title = [course_title_computer_science, course_title_math, course_title_engineering, course_title_other][d.index];
          next_list = [course_list_computer_science, course_list_math, course_list_engineering, course_list_other][d.index];

          if(previous_title === next_title) {
            return;
          }

          course_title_cover.style.animation = 'switch-course 1s cubic-bezier(0.19, 1, 0.22, 1) 0s 1 normal forwards running';
          course_list_cover.style.animation = 'switch-course 1s cubic-bezier(0.19, 1, 0.22, 1) 0s 1 normal forwards running';

          setTimeout(() => {
            setTimeout(() => {
              course_title_cover.style.animation = 'none';
              course_list_cover.style.animation = 'none';
            }, 600);
            previous_title.style.display = 'none';
            previous_list.style.display = 'none';
            next_title.style.display = 'block';
            next_list.style.display = 'block';
            previous_title = next_title;
            previous_list = next_list;
            
          }, 400);

          console.log("Previous title: ", previous_title);
          console.log("Next title: ", next_title);
          console.log("Previous list: ", previous_list);
          console.log("Next list: ", next_list);
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
        chart.internal.config.donut_width = 200;
      } else {
        chart.resize({height:600});
        chart.internal.config.donut_width = 240;
      }
      chart.flush();
    }
  }
});

resizeObserver.observe(document.body);