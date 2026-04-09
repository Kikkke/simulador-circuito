const entradasF = document.querySelectorAll('.entrada-f');
const switchD = document.getElementById('switch-d');
const switchC = document.getElementById('switch-c');
const switchB = document.getElementById('switch-b');
const switchA = document.getElementById('switch-a');
const led = document.getElementById('led');

function obtenerIndiceActual() {
  const d = switchD.checked ? '1' : '0';
  const c = switchC.checked ? '1' : '0';
  const b = switchB.checked ? '1' : '0';
  const a = switchA.checked ? '1' : '0';
  return parseInt(d + c + b + a, 2);
}

function actualizarLed() {
  const indice = obtenerIndiceActual();
  const valor = entradasF[indice].value;

  if (valor === '1') {
    led.textContent = '1';
    led.style.backgroundColor = '#ffffff';
    led.style.color = '#000000';
    led.style.boxShadow = '0 0 20px rgba(255,255,255,0.8)';
  } else {
    led.textContent = '0';
    led.style.backgroundColor = '#000000';
    led.style.color = '#ffffff';
    led.style.boxShadow = 'none';
  }
}

entradasF.forEach(function(input) {
  input.addEventListener('input', function() {
    if (input.value !== '0' && input.value !== '1') {
      input.value = '';
    }
    actualizarLed();
  });
});

switchD.addEventListener('change', actualizarLed);
switchC.addEventListener('change', actualizarLed);
switchB.addEventListener('change', actualizarLed);
switchA.addEventListener('change', actualizarLed);

actualizarLed();
