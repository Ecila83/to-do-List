import model from "./model.js";
import manipDom from "./manip-dom.js";

const listUl = document.querySelector(".tacheList");
const inputTache = document.getElementById("inputTache");
const ajoutTache = document.getElementById("ajoutTache");
const buttondelete = document.getElementById("delete");


function buttonAjoutTache() {
    const titletache = inputTache.value;
    const newTache = model.addTache(titletache);
    const li = manipDom.getLi(newTache);

    listUl.append(li);
    if (titletache.trim() !== "Ajouter une tâche...") { 
        const newTache = model.addTache(titletache);
        const li = manipDom.getLi(newTache);
        listUl.append(li);
        inputTache.value = "Ajouter une tâche..."; 
    }
    
}

function listActions(event) {
    if (event.target.classList.contains("tacheList__tache--checkBox")) {
        const checkbox = event.target;
        const id = checkbox.parentElement.dataset.id;
        model.gestionCocher(id, checkbox.checked);
    } else if (event.target.classList.contains("tacheList__tache--buttonsupr")) {
        const buttonsupr = event.target;
        const id = buttonsupr.parentElement.dataset.id;
        model.suprTache(id);
        buttonsupr.parentElement.remove();
    }
}

function buttonDeleteChecked() {
    listUl.querySelectorAll(".tacheList__tache--checkBox:checked").forEach((checbox) => {
        checbox.parentElement.remove();
    })

    model.deleteCocher();
}

function init() {
    // Charge la liste, la première fois ça va charger depuis le localStorage.
    const list = model.getList();

    // Créer les "LI" à partir des éléments de la liste qu'on a charger juste avant.
    const listLis = manipDom.creerLisAPartirDeLaListe(list);

    listUl.replaceChildren(...listLis);

    ajoutTache.addEventListener("click", buttonAjoutTache);
    inputTache.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            buttonAjoutTache();
        }
    })
    
    listUl.addEventListener("click", listActions)
    buttondelete.addEventListener("click", buttonDeleteChecked)

    
}

init()
