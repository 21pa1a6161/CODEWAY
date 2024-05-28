function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function clearLast() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function calculate() {
    try {
      var display = document.getElementById('display');
      display.value = eval(display.value);
    } catch (error) {
      display.value = 'Error';
    }
  }
  