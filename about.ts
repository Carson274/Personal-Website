import c3 from "c3"

console.log("Connected.");

// ! - tells typescript that the variable is not null
// <HTMLUListElement> - tells the function to return the UL type
const major_related = document.querySelector<HTMLUListElement>("#major-related")!;
const baccalaureate = document.querySelector<HTMLUListElement>("#baccalaureate")!;
const electives = document.querySelector<HTMLUListElement>("#electives")!;
const beaver_image = document.querySelector("#beaver-image")!;
const course_lists = document.querySelector<HTMLDivElement>("#course-lists")!;

major_related.style.display = "none";
baccalaureate.style.display = "none";
electives.style.display = "none";

let previous_clicked_on;
let running_timeout = false;

c3.generate({
    bindto: '#chart',
    data: {
        columns: [
            ['Major Related', 12],
            ['Baccalaureate', 5],
            ['Electives', 4],
        ],
        type: 'donut',
        onclick: function(d, i) { 
            console.log("onclick", d, i);

            // cancel function if user clicks on the same button twice
            if(previous_clicked_on == [major_related, baccalaureate, electives][d.index] || running_timeout) {
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
                previous_clicked_on = [major_related, baccalaureate, electives][d.index];
                previous_clicked_on.classList.add("fade-in");
                previous_clicked_on.classList.remove("fade-out");
                previous_clicked_on.style.display = "block";  
            }, previous_clicked_on? 500: 0)    
            
            // remove rotate class after 1 second
            beaver_image.classList.add("rotate");
            setTimeout(() => {
                // rotate beaver logo
                beaver_image.classList.remove("rotate");
            }, 1500)

        }
    },
    donut: {
        width: 250,
        padAngle: 0.05,
        label: {
            show: false
        }
    },
    legend: {
        show: false
    },
    color: {
        pattern: ['red', 'orange', 'black']
    }
});

// const chart_element = document.querySelector("#chart")!;
// const bounds = chart_element.getBoundingClientRect();
// const image = document.querySelector<HTMLImageElement>("#beaver-image")!;

// // +"" auto converts to string
// image.style.top = bounds.y + "";
// image.style.left = bounds.x + "";

const education_header = document.querySelector<HTMLDivElement>("#education-header")!;

education_header.style.opacity = "0";

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

let achievement_played = false;
document.addEventListener('scroll', () => {
    if(!achievement_played){
        if(window.scrollY > 100){
            achievement_played = true;
            achievement();
            setTimeout(() => {
                education_header.style.opacity = "1";
            }, 4000)
        }
    }
})