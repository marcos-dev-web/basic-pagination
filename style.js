const buttons = document.querySelectorAll('.button');

const color_click = "#3867d6";
const color_hover = "#2d98da";
const default_color = "#45aaf2";

const addStyle = (button) => {
  button.addEventListener('click', (e) => {
    e.target.style.backgroundColor = color_click;
    setTimeout(() => {
      e.target.style.backgroundColor = default_color;
    }, 100)
  })

  button.addEventListener('mouseenter', (e) => {
    e.target.style.backgroundColor = color_hover;
  })

  button.addEventListener('mouseout', (e) => {
    e.target.style.backgroundColor = default_color;
  })
}

buttons.forEach(button => addStyle(button));

