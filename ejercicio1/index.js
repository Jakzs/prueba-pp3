function updateLabels() {
    const operation = document.getElementById('operation').value;
    const label1 = document.getElementById('label1');
    const label2 = document.getElementById('label2');
  
    if (operation === 'calcularCorriente') {
      label1.innerText = 'Tensión (V)';
      label2.innerText = 'Resistencia (R)';
    } else if (operation === 'calcularTension') {
      label1.innerText = 'Corriente (I)';
      label2.innerText = 'Resistencia (R)';
    } else if (operation === 'calcularResistencia') {
      label1.innerText = 'Tensión (V)';
      label2.innerText = 'Corriente (I)';
    }
  }
  
  function calculate() {
    const operation = document.getElementById('operation').value;
    const input1 = parseFloat(document.getElementById('input1').value);
    const input2 = parseFloat(document.getElementById('input2').value);
    let result;
  
    if (isNaN(input1) || isNaN(input2)) {
      alert('Por favor, ingrese valores válidos');
      return;
    }
  
    if (operation === 'calcularCorriente') {
      result = input1 / input2;
    } else if (operation === 'calcularTension') {
      result = input1 * input2;
    } else if (operation === 'calcularResistencia') {
      result = input1 / input2;
    }
  
    document.getElementById('result').innerText = result.toFixed(2);
  }
  