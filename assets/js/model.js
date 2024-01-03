import { uniqueId } from "./utils.js";

function miseAJourLocalStorage() {
    localStorage.setItem("todo-list", JSON.stringify(list));
}

/** @type [] */
let list = null;

function getList() {
    if (list !== null) {
        return list;
    }

    const localList = localStorage.getItem("todo-list");

    if (localList === null) {
        list = [];
    } else {
        list = JSON.parse(localList);
    }

    return list;
}

/**
 * @param {string} title 
 * @returns {{id: string, title: string, checked: boolean}}
 */
function addTache(title) {
    const tache = {
        id: uniqueId(),
        title,
        checked: false
    }

    list.push(tache);
    miseAJourLocalStorage()

    return tache;
}

function gestionCocher(id, checked) {
    const index = list.findIndex((element) => element.id === id);

    list[index].checked = checked;
    miseAJourLocalStorage()

}

function suprTache(id){
    const index = list.findIndex((element) => element.id === id);

    // Supprime un élément à la position "index".
    list.splice(index, 1);
    miseAJourLocalStorage()
}

function deleteCocher(){
    list = list.filter ((element) => !element.checked);
    miseAJourLocalStorage()
}

export default {
    getList, addTache, gestionCocher, suprTache, deleteCocher
}

