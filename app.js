// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {

  // Arreglo donde se almacenan los datos ingresados por el usuario
  const salesData = [];

  // Obtiene el formulario por su ID
  const form = document.getElementById('salesForm');

  // Obtiene el contexto 2D del canvas para poder dibujar el gráfico
  const ctx = document.getElementById('salesChart').getContext('2d');

  // Crea un nuevo gráfico de barras utilizando Chart.js
  let chart = new Chart(ctx, {
    type: 'bar', // Tipo de gráfico: barras
    data: {
      labels: [], // Etiquetas del eje X (meses)
      datasets: [{
        label: 'Ventas por mes', // Título de la serie de datos
        data: [], // Datos del eje Y (monto de ventas)
        backgroundColor: 'rgba(75, 192, 192, 0.5)', // Color de fondo de las barras
        borderColor: 'rgba(75, 192, 192, 1)', // Borde de las barras
        borderWidth: 1 // Grosor del borde
      }]
    },
    options: {
      responsive: true, // Se adapta al tamaño de la pantalla
      scales: {
        y: {
          beginAtZero: true // El eje Y empieza en 0
        }
      }
    }
  });

  // Escucha el evento "submit" del formulario
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Previene el recargo de página al enviar el formulario

    // Obtiene el valor del mes y del monto ingresado por el usuario
    const month = document.getElementById('month').value.trim();
    const amount = parseFloat(document.getElementById('amount').value);

    // Valida que el mes no esté vacío y que el monto sea un número
    if (!month || isNaN(amount)) return;

    // Guarda los datos ingresados en el arreglo
    salesData.push({ month, amount });

    // Agrega los nuevos datos al gráfico
    chart.data.labels.push(month); // agrega el mes al eje X
    chart.data.datasets[0].data.push(amount); // agrega el monto al eje Y

    chart.update(); // Actualiza el gráfico para mostrar los nuevos datos

    form.reset(); // Limpia los campos del formulario
});

});
