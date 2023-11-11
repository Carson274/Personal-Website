import c3 from "c3"

console.log("Connected.");

// ! - tells typescript that the variable is not null
// <HTMLUListElement> - tells the function to return the UL type
const major_related = document.querySelector<HTMLUListElement>("#major-related")!;
const baccalaureate = document.querySelector<HTMLUListElement>("#baccalaureate")!;
const electives = document.querySelector<HTMLUListElement>("#electives")!;

major_related.style.display = "none";
baccalaureate.style.display = "none";
electives.style.display = "none";

c3.generate({
    bindto: '#chart',
    data: {
        columns: [
            ['Major Related', 12],
            ['Baccalaureate', 5],
            ['Electives', 4],
        ],
        type: 'donut',
        onclick: function(d, i) { console.log("onclick", d, i) }
    },
    donut: {
        width: 200,
        padAngle: 0.05
    }
});