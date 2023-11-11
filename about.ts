document.addEventListener("DOMContentLoaded", function() {
    var ctx = document.getElementById('myPieChart').getContext('2d');
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Major Related', 'Baccalaureate Core', 'Electives'],
            datasets: [{
                data: [1,1,1],
                backgroundColor: ['#FF6384','#36A2EB','#FFCE56'],
                borderColor: '#d9bda3',
                borderWidth: 4,
                hoverBorderColor: ['#FF6384','#36A2EB','#FFCE56'],
                hoverBorderWidth: 8
            }]
        },
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    enabled: false
                },
                legend: {
                    display: false
                }
            }
        }
    });
});

function slideLeft() {
    document.getElementById("myPieChart").style.color = "red";
}