const citiesOrigin = [
  "Санкт-Петербург",
  "Москва",
  "Нижний Новогород",
  "Псков",
  "Красноярск",
];
const citiesDestination = ["Сочи", "Тверь", "Краснодар"];

document.querySelector(".add-cargo-form").innerHTML = `
<fieldset class="add-cargo-form__wrapper">
    <label class = "error"> </label>
    <input
        id="cargoName"
        type="text"
        class="add-cargo-form__field"
        placeholder="Название груза"
    />
    <input
        id="cargoOrigin"
        type="text"
        list="originList"
        class="add-cargo-form__field"
        placeholder="Пункт отправления"
    />
    <datalist id="originList"></datalist>
    <input
        id="cargoDestination"
        type="text"
        list="destinationList"
        class="add-cargo-form__field"
        placeholder="Пункт назначения"
    />
    <datalist id="destinationList"></datalist>
    <input
        id="cargoDepartureDate"
        type="date"
        class="add-cargo-form__field"
        placeholder="Дата отправления"
    />
    <select id = "statuses">
        <option value="1" class="td-status_yellow" selected>Ожидает отправки</option>
        <option value="2" class="td-status_blue">В пути</option>
        <option value="3" class="td-status_green">Доставлен</option>
    </select>
    <button class="add-cargo__btn">Add new cargo</button>
</fieldset>
`;

function createListCitiesOrigin(citiesOrigin) {
  const originList = document.querySelector("#originList");

  for (let i = 0; i < citiesOrigin.length; i++) {
    const option = document.createElement("option");
    option.value = citiesOrigin[i];
    originList.appendChild(option);
  }
}

function createListCitiesDestination(citiesDestination) {
  const destinationList = document.querySelector("#destinationList");

  for (let i = 0; i < citiesDestination.length; i++) {
    const option = document.createElement("option");
    option.value = citiesDestination[i];
    destinationList.appendChild(option);
  }
}


createListCitiesOrigin(citiesOrigin);
createListCitiesDestination(citiesDestination);