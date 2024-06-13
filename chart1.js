var ctx = document.getElementById('lineChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira'],

        datasets: [{
            label: 'Nº de peças',
            data: [42, 12, 8, 6, 26],
            backgroundColor: [
                'rgba(244,250,120, 1)',
                'rgba(185,150,94, 1)',
                'rgba(156,252,101, 1)',
                'rgba(239,95,82,1)',
                'rgba(0,144,171, 1)'

            ],
            borderColor: [
                'rgba(244,250,120, 1)',
                'rgba(185,150,94, 1)',
                'rgba(239,95,82, 1)',
                'rgba(0,144,171,1)'

            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});