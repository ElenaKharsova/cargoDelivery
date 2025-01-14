let cargoNumber = 0;

const status = {
    "1": {
        status: "Ожидает отправки",
        color: "yellow"
    },
    "2": {
        status: "В пути",
        color: "blue"
    },
    "3": {
        status: "Доставлен", 
        color: "green"
    }
}

export const cargoList = [];
class Cargo{
    constructor(name, status, origin, destination, departureDate){
        cargoNumber += 1;
        this.number = `CARGO ${cargoNumber}`;
        this.name = name;
        this.status = status,
        this.origin = origin;
        this.destination = destination;
        this.departureDate = departureDate;
    }

    changeStatus(status){
        this.status = status;
    }
}

function showCargoList(){
    console.log("showCargoList")
    const tbody = document.querySelector(".tbody");
    tbody.innerHTML = "";
    for(let i = 0; i < cargoList.length; i++){
        const tr = document.createElement("tr");        
        tbody.appendChild(tr);
        for(const key in cargoList[i]){
            const field = cargoList[i];
            const td = document.createElement("td");
            tr.appendChild(td);
            console.log("key", key)
            if (key === "status"){
                let select = document.createElement("select");
                select.setAttribute("id", `cargoStatus${i}`);
                select.innerHTML = `<option value="1" class="td-status_yellow">Ожидает отправки</option>
                            <option value="2" class="td-status_blue">В пути</option>
                            <option value="3" class="td-status_green">Доставлен</option>`;
                select.querySelectorAll("option")[field[key]-1].setAttribute("selected", "");     
                select.classList.add(`td-status_${status[field[key]].color}`);
                td.appendChild(select);
            } else {
                td.innerText = field[key];
            }
        }
    }
}

export function addNewCargo(){
    event.preventDefault();
    const cargoName = document.getElementById("cargoName").value;
    const cargoOrigin = document.getElementById("cargoOrigin").value;
    console.log("cargoOrigin", cargoOrigin);
    const cargoDestination = document.getElementById("cargoDestination").value;
    const cargoStatus = document.getElementById("statuses").value;
    const cargoDepartureDate = document.getElementById("cargoDepartureDate").value;
    console.log("cargoDestination", cargoDestination);

    cargoList.push(new Cargo(cargoName, cargoStatus, cargoOrigin, cargoDestination, cargoDepartureDate)); 
    console.log("add new cargo", cargoList);       

    showCargoList();
}