
function showOptions(pair) {
  const optionRadio = document.getElementById(`${pair}-radio`);
  const optionsDiv = document.getElementById(`${pair}-options`);
  const allOptions = document.querySelectorAll('.selected-cart');
  const boxDiv = optionRadio.closest('.box');
  const allBoxDiv = document.querySelectorAll('.box');
  

  //Hide all previously shown options
  allOptions.forEach(option => {
    option.classList.add('hidden');
    option.classList.remove('selected-cart');

  });
  
  allBoxDiv.forEach(option => {
    option.classList.remove('checked');

  });

  if (optionRadio.checked) {
    optionsDiv.classList.remove('hidden');
    optionsDiv.classList.add('selected-cart');
    boxDiv.classList.add('checked');
    
  } else {
    optionsDiv.classList.add('hidden');
    optionsDiv.classList.remove('selected-cart');
    boxDiv.classList.remove('checked');
   
  }
}

