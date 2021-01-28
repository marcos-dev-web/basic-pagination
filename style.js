const buttons = document.querySelectorAll('.button');

const addStyle = (button) => {
  button.addEventListener('click', (e) => {
    e.target.style.backgroundColor = "#3867d6";
    setTimeout(() => {
      e.target.style.backgroundColor = "#45aaf2";
    }, 100)
  })

  button.addEventListener('mouseenter', (e) => {
    e.target.style.backgroundColor = "#2d98da";
  })

  button.addEventListener('mouseout', (e) => {
    e.target.style.backgroundColor = "#45aaf2";
  })
}

buttons.forEach(button => addStyle(button));

