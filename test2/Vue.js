class Node {
    constructor(data, gauche = null, droit = null) {
        this.data = data;
        this.gauche = gauche;
        this.droit = droit;
    }
}

class Arbre {
    constructor() {
        this.root = null;
    }
    Ajouter(data) {
        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
            return;
        } else {
            const searchTree = function (node) {
                if (data < node.data) {
                    if (node.gauche === null) {
                        node.gauche = new Node(data);
                        return;
                    } else if (node.gauche !== null) {
                        return searchTree(node.gauche);
                    }
                } else if (data > node.data) {
                    if (node.droit === null) {
                        node.droit = new Node(data);
                        return;
                    } else if (node.droit !== null) {
                        return searchTree(node.droit);
                    }
                } else {
                    return null;
                }
            };
            return searchTree(node);
        }
    }

    Parcours() {
        if (this.root == null) {
            return null;
        } else {
            var result = new Array();
            function traverseParcours(node) {
                node.gauche && traverseParcours(node.gauche);
                result.push(node.data);
                node.droit && traverseParcours(node.droit);
            }
            traverseParcours(this.root);
            return result;
        };
    }
}

GenerateTree(); //éxécution initiale

function GenerateTree() {
    document.getElementById('tree').innerHTML = ""; 
    const arbre = new Arbre();

    for (let index = 0; index < 20; index++) {
        arbre.Ajouter(Math.floor(Math.random() * (10 - 1 + 1)) + 1); // entier aléatoire entre 1 et 10
    }
    document.getElementById('tree').innerHTML = arbre.Parcours(); 

    console.log('Parcours: ' + arbre.Parcours()); // pour afficher sur la console
}
