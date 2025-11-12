const ctx = document.getElementById('barchart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Gabriel', 'Davi', 'Enzo', 'Camila', 'Ester', 'Isadora'],
      datasets: [{
        label: 'Os mais fodas',
        data: [20, 17, 14, 11, 8, 5],
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

// separação //

  const ctx2 = document.getElementById('pie');

  new Chart(ctx2, {
    type: 'pie',
    data: {
      labels: ['Gabriel', 'Davi', 'Enzo', 'Camila', 'Ester', 'Isadora'],
      datasets: [{
        label: 'Pizza Comidas',
        data: [20, 17, 15, 12, 9, 6],
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  // separação //

  const ctx3 = document.getElementById('radar');

  new Chart(ctx3, {
    type: 'radar',
    data: {
      labels: ['Aura', 'Força', 'Defesa', 'Profetizador', 'Velocidade', 'HAX'],
      datasets: [{
        label: 'Radar do Davi',
        data: [20, 20, 20, 18, 19, 20],
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  // separação //

  const ctx4 = document.getElementById('bubble');
const data1 = {
  datasets: [{
    label: 'Bolinhas que representam algo 1',
    data: [{
      x: 20,
      y: 12,
      r: 15
    }, {
      x: 20,
      y: 5,
      r: 10
    }],
    backgroundColor: 'rgb(255, 99, 132)'
  }]
};
  new Chart(ctx4, {
    type: 'bubble',
  data: data1,
  options: {

  }
  });

// sepração //

const ctx5 = document.getElementById('line');

new Chart(ctx5, {
  type: 'line',
  data: {
    labels: ['Gabriel', 'Davi', 'Enzo', 'Camila', 'Ester', 'Isadora'],
    datasets: [{
      label: 'Número de votos',
      data: [20, 10, 15, 18, 9, 16, 10],
      borderWidth: 2
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: false
      }
    }
  }
});

// separação //

const ctx6 = document.getElementById('scatter');
const data = {
  datasets: [{
    label: 'Bolinhas que representam algo 1',
    data: [{
      x: -10,
      y: 0
    }, {
      x: 0,
      y: 10
    }, {
      x: 10,
      y: 5
    }, {
      x: 0.5,
      y: 5.5
    }],
    backgroundColor: 'rgb(255, 99, 132)'
  }],
};
new Chart(ctx6, {
  type: 'scatter',
  data: data,
  options: {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom'
      }
    }
  }
});