document.querySelector(".filter").innerHTML = `
<label>Отфильтровать таблицу по статусу</label>
<select id = "filter-statuses">
    <option value="1" class="td-status_yellow">Ожидает отправки</option>
    <option value="2" class="td-status_blue">В пути</option>
    <option value="3" class="td-status_green">Доставлен</option>
</select>`