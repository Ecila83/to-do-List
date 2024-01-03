

function creerLisAPartirDeLaListe(list) {
    const arrayLi = [];

    list.forEach(tache => {
        const li = getLi(tache);
        arrayLi.push(li);
    });

    return arrayLi;
}

function getLi(objet) {
    const li = document.createElement("li");
    const checkBox = document.createElement("input");
    const span = document.createElement("span");
    const buttonsupr = document.createElement("button");

    // checbox
    checkBox.type = "checkbox";
    checkBox.className ="tacheList__tache--checkBox";
    checkBox.checked = objet.checked;

    // span
    span.innerHTML = objet.title;

    // button
    buttonsupr.className ="tacheList__tache--buttonsupr"
    buttonsupr.innerHTML = "X";

    // li
    li.className = "tacheList__tache"
    li.dataset.id = objet.id;
    li.append(checkBox, span, buttonsupr);

    return li;
}

export default{
    getLi, creerLisAPartirDeLaListe
}