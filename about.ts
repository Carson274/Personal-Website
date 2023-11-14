import c3 from "c3"

console.log("Connected.");

/****************************************************************************************
 * Name logo section stuff
****************************************************************************************/

const carson_secrest_white = document.querySelector<HTMLImageElement>("#carson-secrest-white")!;
const computer_science_brown = document.querySelector<HTMLImageElement>("#computer-science-brown")!;

computer_science_brown.style.display = "none";

let white_shown = true;
let brown_shown = false;

// function to toggle the images between the white and brown versions
function toggleImages() {
    if(white_shown){
        carson_secrest_white.style.display = "none";
        computer_science_brown.style.display = "block";
        white_shown = false;
        brown_shown = true;
    }else if(brown_shown){
        computer_science_brown.style.display = "none";
        carson_secrest_white.style.display = "block";
        brown_shown = false;
        white_shown = true;
    }
}

// checking to see if either of the logos are clicked on
carson_secrest_white.addEventListener("click", toggleImages);
computer_science_brown.addEventListener("click", toggleImages);

/****************************************************************************************
 * Chart section stuff
****************************************************************************************/

// ! - tells typescript that the variable is not null
// <HTMLUListElement> - tells the function to return the UL type
const major_related = document.querySelector<HTMLUListElement>("#major-related")!;
const baccalaureate = document.querySelector<HTMLUListElement>("#baccalaureate")!;
const electives = document.querySelector<HTMLUListElement>("#electives")!;
const honors = document.querySelector<HTMLUListElement>("#honors")!;
const beaver_image = document.querySelector("#beaver-image")!;
const course_lists = document.querySelector<HTMLDivElement>("#course-lists")!;

// setting all of the lists and list headers to be invisible to begin with
major_related.style.display = "none";
baccalaureate.style.display = "none";
electives.style.display = "none";
honors.style.display = "none";

let previous_clicked_on;
let running_timeout = false;

c3.generate({
    bindto: '#chart',
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

            // cancel function if user clicks on the same button twice
            if(previous_clicked_on == [major_related, baccalaureate, electives, honors][d.index] || running_timeout) {
                return;
            }

            // if one has already been clicked, then fade out; otherwise, don't fade out initially
            if(previous_clicked_on) {
                previous_clicked_on.classList.remove("fade-in");
                previous_clicked_on.classList.add("fade-out");
            }
            else{
                course_lists.style.width = "50%";
            }
        
            running_timeout = true;
            
            console.log("doing timeout")
            // function to fade in after a ceratain amount of time depending on whether something is already displayed
            setTimeout(() => {
                console.log("timeout done")
                if(previous_clicked_on) {
                    previous_clicked_on.style.display = "none";
                }
                running_timeout = false;

                // getting the list at the index clicked on, which is associated with the variable d
                previous_clicked_on = [major_related, baccalaureate, electives, honors][d.index];
                previous_clicked_on.classList.add("fade-in");
                previous_clicked_on.classList.remove("fade-out");
                previous_clicked_on.style.display = "block"; 
            }, previous_clicked_on? 500: 1500) // waits 1.5 seconds if nothing is displayed, otherwise waits 0.5 seconds
            
            // remove rotate class after 1 second
            beaver_image.classList.add("rotate");
            setTimeout(() => {
                // rotate beaver logo
                beaver_image.classList.remove("rotate");
            }, 1500)

        }
    },
    donut: {
        title: '19 Total Classes Taken',
        width: 250,
        padAngle: 0.05,
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

// const chart_element = document.querySelector("#chart")!;
// const bounds = chart_element.getBoundingClientRect();
// const image = document.querySelector<HTMLImageElement>("#beaver-image")!;

// // +"" auto converts to string
// image.style.top = bounds.y + "";
// image.style.left = bounds.x + "";

const achievement = () => {
    document.querySelector('.achiev_name').innerText = "Academic Weapon"
    document.querySelector('.unlocked').innerText = 'Achievement Unlocked'

    document.querySelector('.circle').classList.add('circle_animate')
    document.querySelector('.banner').classList.add('banner-animate')
    document.querySelector('.achieve_disp').classList.add('achieve_disp_animate')
    setTimeout(() => {
        document.querySelector('.circle').classList.remove('circle_animate')
        document.querySelector('.banner').classList.remove('banner-animate')
        document.querySelector('.achieve_disp').classList.remove('achieve_disp_animate')
    }, 12000)
}

// set education header and underline to be invisible
const education_header = document.querySelector<HTMLDivElement>("#education-header")!;
const education_underline = document.querySelector<HTMLDivElement>("#education-underline")!;
education_header.style.opacity = "0";
education_underline.style.opacity = "0";

// after the achievement has played, fade in the education header
let achievement_played = false;
document.addEventListener('scroll', () => {
    if(!achievement_played){
        if(window.scrollY > 800){
            achievement_played = true;
            achievement();
            setTimeout(() => {
                education_header.style.opacity = "1";
                education_underline.style.opacity = "1";
            }, 4000)
        }
    }
})