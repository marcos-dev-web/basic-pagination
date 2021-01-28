import "./style.js";

const q = (element) => document.querySelector(element);
const qa = (element) => document.querySelectorAll(element);
const ce = (element_name) => document.createElement(element_name);

var actualValue = 1;
const view = q(".view");
const whells = q(".whells");

const prev = q(".prev");
const next = q(".next");

const data = {
  pessoas: [
    {
      nome: "maria",
      idade: "45",
      sexo: "F",
    },
    {
      nome: "joao",
      idade: "32",
      sexo: "M",
    },
    {
      nome: "marcos",
      idade: "18",
      sexo: "M",
    },
    {
      nome: "joice",
      idade: "21",
      sexo: "F",
    },
  ],
};

const removeActive = (element) => {
  element.classList.remove("active");
};

const addActive = (element) => {
  element.classList.add("active");
};

const createWhell = (id, state) => {
  let whell = ce("span");

  whell.setAttribute("data-id", id);
  whell.classList.add("whell");

  if (state === "active") {
    addActive(whell);
  }
  whells.appendChild(whell);
};

const changeViwer = (body) => {
  const elements = {
    div_name: ce("div"),
    div_bottom: ce("div"),
    div_age: ce("div"),
    div_sex: ce("div"),

    h1: ce("h1"),
    p: ce("p"),
    span: ce("span"),
  };

  elements.h1.innerText = body.nome;
  elements.div_name.appendChild(elements.h1);
  elements.div_name.classList.add("name_view");

  elements.p.innerText = body.idade;
  elements.span.innerText = body.sexo;

  elements.div_age.appendChild(elements.p);
  elements.div_sex.appendChild(elements.span);

  elements.div_bottom.appendChild(elements.div_age);
  elements.div_bottom.appendChild(elements.div_sex);
  elements.div_bottom.classList.add("bottom_view");

  view.appendChild(elements.div_name);
  view.appendChild(elements.div_bottom);
};

const clearView = () => {
  view.innerHTML = "";
};

const nextPrev = (direction) => {
  let data_id_active = q(".whell.active");
  let data_id_active_number = Number.parseInt(
    q(".whell.active").getAttribute("data-id")
  );
  let data_id = qa(".whell");

  let list_id = [];

  for (let data_id_number of data_id) {
    list_id.push(Number.parseInt(data_id_number.getAttribute("data-id")));
  }

  function changeState() {
    addActive(q(`.whell:nth-child(${actualValue})`));
    removeActive(data_id_active);
    clearView();
    changeViwer(data.pessoas[actualValue - 1]);
  }

  if (direction === "next") {
    if (data_id_active_number < list_id.length - 1) {
      actualValue++;
      changeState();
    } else {
      actualValue = 1;
      changeState();
    }
  } else if (direction === "previous") {
    if (data_id_active_number > 0) {
      actualValue--;
      changeState();
    } else {
      actualValue = list_id.length;
      changeState();
    }
  }
};

next.addEventListener("click", () => {
  nextPrev("next");
});

prev.addEventListener("click", () => {
  nextPrev("previous");
});

const init = () => {
  let slc_dt = data.pessoas;
  changeViwer(slc_dt[0]);
  for (let id in slc_dt) {
    if (id == 0) {
      createWhell(id, "active");
    } else {
      createWhell(id);
    }
  }
};

init();
