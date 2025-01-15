import {status} from "./cargo.js"
document.querySelector(".filter").innerHTML = `
<label><b>Отфильтровать таблицу по статусу</b></label>
<select id = "filter-statuses">
    <option value="0" class="td-status_white">Все</option>
    <option value="1" class="td-status_yellow">Ожидает отправки</option>
    <option value="2" class="td-status_blue">В пути</option>
    <option value="3" class="td-status_green">Доставлен</option>
</select>`

document.querySelector("#filter-statuses").addEventListener("change", (event)=>{
    const select = event.target;
    const selectedValue = event.target.value;
    console.log("selectedValue", selectedValue);
    if(selectedValue !== 0){
        select.className = `td-status_${status[selectedValue].color}`;
        const rows = document.querySelectorAll(".cargo-list tr");
        rows.forEach(row => {
            row.classList.remove("tr_hidden");
        })
        const notSelected = document.querySelectorAll(`.cargo-list tr:has(select option[value="${selectedValue}"]:not([selected]))`);
        console.log("notSelected", notSelected);
        notSelected.forEach(row => {
            row.classList.add("tr_hidden");
        })
    } else {
        select.className = "";
        const rows = document.querySelectorAll(".cargo-list tr");
        rows.forEach(row => {
            row.classList.remove("tr.hidden");
        })
    }
})