myarray = [];  // déclaration d'un tableau de taille 0 (myarray.length == 0)

GenerateTableEntier(); // pour Exécuter la fonction au lancement de la page trié sous ordre croissant

function Populate() { // Fonction pour remplir le tableau

    document.getElementById('myTable').getElementsByTagName('tbody')[0].innerHTML = ""; // pour vider le contenu du tbody

    let tableRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];

    myarray.forEach(element => { // on parcour le tableau d'entier pour remplir les cellules du table en html

        let newRow = tableRef.insertRow(tableRef.rows.length);

        let newCell = newRow.insertCell(0);

        let p = document.createElement("p");

        p.setAttribute("class", "text-center sbold");

        let newText1 = document.createTextNode(element);

        p.appendChild(newText1);

        newCell.appendChild(p);

    });
}

function GenerateTableEntier() {// si le paramétre n'est pas fourni on trie sous ordre croissant

    myarray = [];

    new Promise((resolve) => { // promise pour éviter un traitement asychrone

        for (let index = 0; index < 99; index++) { // tableau de taille 99

            myarray.push(Math.floor(Math.random() * 100000)) // entier aléatoire entre 0 et 99 999
        }

        resolve();

    }).then(() => {

        myarray[99] = 100000; // le dernier élement du tableau
        myarray.sort(function (a, b) { return a - b }); // pour trier le tableau sous ordre croissant

        setTimeout(() => {
            Populate();
        }, 100);
    });
}

function Trier(ordre) {

    if (ordre == "asc") {
        myarray.sort(function (a, b) { return a - b }); // pour trier le tableau sous ordre croissant
        setTimeout(() => {
            Populate();
        }, 100);
    }
    else if (ordre == "desc") {
        myarray.sort(function (a, b) { return b - a }); // pour trier le tableau sous ordre décroissant
        setTimeout(() => {
            Populate();
        }, 100);
    }
}
