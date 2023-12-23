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
const dark_background_color = '4e3a3a';
const above_secrest = document.querySelector<HTMLDivElement>("#above-secrest")!;
const above_carson = document.querySelector<HTMLDivElement>("#above-carson")!;
const above_science = document.querySelector<HTMLDivElement>("#above-science")!;
const above_computer = document.querySelector<HTMLDivElement>("#above-computer")!;

window.onload = () => {
  logo_1.style.animation = 'logo-slide-left 1.5s 0.4s cubic-bezier(0.215, 0.610, 0.355, 1) forwards';

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

function next_logo(last_logo, next_logo, last_upper_text, last_lower_text, next_upper_text, next_lower_text, background_color, last_s_above, last_c_above, next_s_above, next_c_above){
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
    last_logo.style.animation = 'none';
    last_logo.style.transform = 'translateX(0)';
    last_logo.style.display = 'none';
    next_logo.style.display = 'block';
    last_upper_text.style.display = 'none';
    last_lower_text.style.display = 'none';
    next_upper_text.style.display = 'block';
    next_lower_text.style.display = 'block';
    
    setTimeout(() => {
      next_logo.style.animation = 'logo-slide-left 1.5s cubic-bezier(0.215, 0.610, 0.355, 1) forwards';

        setTimeout(() => {
          next_upper_text.style.animation = 'text-slide-up 1s 0.3s cubic-bezier(0.215, 0.610, 0.355, 1) forwards';
          next_lower_text.style.animation = 'text-slide-up 1s cubic-bezier(0.215, 0.610, 0.355, 1) forwards';
        }, 400);

    }, 1000);
    
  }, 1000);
}

logo_1.addEventListener("click", () => next_logo(logo_1, logo_2, secrest, carson, science, computer, dark_background_color, above_secrest, above_carson, above_science, above_computer));
logo_2.addEventListener("click", () => next_logo(logo_2, logo_1, science, computer, secrest, carson, light_background_color, above_science, above_computer, above_secrest, above_carson));