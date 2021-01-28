import "./style.js";

var actualValue = 1;
const view = document.querySelector('.view');
const whells = document.querySelector('.whells');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const data = {
  "pessoas": [
    {
      "nome": "maria",
      "idade": "45",
      "sexo": "F"
    },
    {
      "nome": "joao",
      "idade": "32",
      "sexo": "M"
    },
    {
      "nome": "marcos",
      "idade": "18",
      "sexo": "M"
    },
    {
      "nome": "joice",
      "idade": "21",
      "sexo": "F"
    }
  ]
}

const removeActive = (element) => {
  element.classList.remove('active')
}

const addActive = (element) => {
  element.classList.add('active')
}

const createWhell = (id, state) => {
  let whell = document.createElement('span')
  whell.setAttribute('data-id', id);

  whell.classList.add('whell');

  if (state === "active") {
    addActive(whell)
  }

  whells.appendChild(whell);
}


const createDiv = (body) => {
  const elements = {
    div_name: document.createElement('div'),
    div_bottom: document.createElement('div'),
    div_age: document.createElement('div'),
    div_sex: document.createElement('div'),

    h1: document.createElement('h1'),
    p: document.createElement('p'),
    span: document.createElement('span')
  }

  elements.h1.innerText = body.nome;
  elements.div_name.appendChild(elements.h1);
  elements.div_name.classList.add('name_view')

  elements.p.innerText = body.idade;
  elements.span.innerText = body.sexo;

  elements.div_age.appendChild(elements.p)
  elements.div_sex.appendChild(elements.span)

  elements.div_bottom.appendChild(elements.div_age)
  elements.div_bottom.appendChild(elements.div_sex)
  elements.div_bottom.classList.add('bottom_view')

  view.appendChild(elements.div_name);
  view.appendChild(elements.div_bottom);
}

const deletDiv = () => {
  view.innerHTML = ""
}

let slc_dt = data.pessoas;

createDiv(slc_dt[0]);
for (let id in slc_dt) {
  if (id == 0) {
    createWhell(id, "active")
  }
  else {
    createWhell(id)
  }
}

next.addEventListener('click', () => {
  let data_id_active = document.querySelector('.whell.active');
  let data_id_active_number = Number.parseInt(document.querySelector('.whell.active').getAttribute('data-id'));
  let data_id = document.querySelectorAll('.whell');

  let list_id = []

  for (let data_id_number of data_id) {
    list_id.push(Number.parseInt(data_id_number.getAttribute('data-id')))
  }
  
  if (data_id_active_number < list_id.length - 1) {
    actualValue++;
    addActive(document.querySelector(`.whell:nth-child(${actualValue})`))
    removeActive(data_id_active)
    deletDiv()
    createDiv(data.pessoas[actualValue-1]);
  } else {
    actualValue = 1;
    addActive(document.querySelector(`.whell:nth-child(${actualValue})`))
    removeActive(data_id_active)
    deletDiv()
    createDiv(data.pessoas[actualValue-1]);
  }
})

prev.addEventListener('click', () => {
  let data_id_active = document.querySelector('.whell.active');
  let data_id_active_number = Number.parseInt(document.querySelector('.whell.active').getAttribute('data-id'));
  let data_id = document.querySelectorAll('.whell');

  let list_id = []

  for (let data_id_number of data_id) {
    list_id.push(Number.parseInt(data_id_number.getAttribute('data-id')))
  }
  if (data_id_active_number > 0) {
    actualValue--;
    addActive(document.querySelector(`.whell:nth-child(${actualValue})`))
    removeActive(data_id_active)
    deletDiv()
    createDiv(data.pessoas[actualValue-1]);
  } else {
    actualValue = list_id.length;
    addActive(document.querySelector(`.whell:nth-child(${actualValue})`))
    removeActive(data_id_active)
    deletDiv()
    createDiv(data.pessoas[actualValue-1]);
  }
})
