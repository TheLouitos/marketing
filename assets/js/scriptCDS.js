function effectuerCalculs() {
    function convertirEnNombre(input) {
        return Number(input.replace(',', '.'));
    }

    const idsExistants = [
        'data1', 'data2', 'data3', 'data4', 'data5', 'data6',
        'data11', 'data12', 'data13', 'data14', 'data15', 'data16',
        'data21', 'data22', 'data23', 'data24', 'data25', 'data26',
        'data31', 'data32', 'data33', 'data34', 'data35', 'data36',
        'data41', 'data42', 'data43', 'data44', 'data45', 'data46',
        'data51', 'data52', 'data53', 'data54', 'data55', 'data56',
        'data61', 'data62', 'data63', 'data64', 'data65', 'data66',
        'data71', 'data72', 'data73', 'data74', 'data75', 'data76',
        'data81', 'data82'
    ];

    let data = {};
    idsExistants.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            data[id] = convertirEnNombre(element.value);
        }
    });

    let data2 = data['data2'] / 100;
    let data12 = data['data12'] / 100;
    let data22 = data['data22'] / 100;
    let data32 = data['data32'] / 100;
    let data42 = data['data42'] / 100;
    let data52 = data['data52'] / 100;
    let data62 = data['data62'] / 100;
    let CAplace1 = (data['data1'] * data2 * data['data3'] * data['data5']) + (data['data1'] * data2 * data['data4'] * data['data6']);
    let CAplace2 = (data['data11'] * data12 * data['data13'] * data['data15']) + (data['data11'] * data12 * data['data14'] * data['data16']);
    let CAplace3 = (data['data21'] * data22 * data['data23'] * data['data25']) + (data['data21'] * data22 * data['data24'] * data['data26']);
    let CAplace4 = (data['data31'] * data32 * data['data33'] * data['data35']) + (data['data31'] * data32 * data['data34'] * data['data36']);
    let CAplace5 = (data['data41'] * data42 * data['data43'] * data['data45']) + (data['data41'] * data42 * data['data44'] * data['data46']);
    let CAplace6 = (data['data51'] * data52 * data['data53'] * data['data55']) + (data['data51'] * data52 * data['data54'] * data['data56']);
    let CAplace7 = (data['data61'] * data62 * data['data63'] * data['data65']) + (data['data61'] * data62 * data['data64'] * data['data66']);
    let CAtotTTC = (CAplace1 + CAplace2 + CAplace3 + CAplace4 + CAplace5 + CAplace6 + CAplace7);
    let CAtotHT = CAtotTTC / (1 + (data['data82']) / 100);
    let clientpeak = (data['data1'] * data2 * data['data5']) + (data['data11'] * data12 * data['data15']) + (data['data21'] * data22 * data['data25']) + (data['data31'] * data32 * data['data35']) + (data['data41'] * data42 * data['data45']) + (data['data51'] * data52 * data['data55']) + (data['data61'] * data62 * data['data65']);
    let clientoffpeak = (data['data1'] * data2 * data['data6']) + (data['data11'] * data12 * data['data16']) + (data['data21'] * data22 * data['data26']) + (data['data31'] * data32 * data['data36']) + (data['data41'] * data42 * data['data46']) + (data['data51'] * data52 * data['data56']) + (data['data61'] * data62 * data['data66']);
    let penerate = ((clientpeak + clientoffpeak) / data['data73']) * 100;
    let varcost = CAtotHT * (data['data72'] / 100);
    let opincome = CAtotHT - data['data71'] - varcost;
    let data81 = data['data81'] / 100;
    let taxIS = opincome * data81;
    let netincome = opincome - taxIS;
    let shareCDS = netincome / 2;
    let pourcentshareCDS = 100 / 2;
    let roicCDS = (shareCDS / data['data74']) * 100;
    let sharepart = netincome / 2;
    let pourcentsharepart = 100 / 2;
    let roicpart = ((sharepart + data['data76']) / data['data75']) * 100;
    // Calcul de x et y basé sur les nouvelles équations
    let x = (data['data74'] * (netincome + data['data76'])/(data['data74'] + data['data75']))
    let y = netincome - x;
    let shareCDSRE = x;
    let pourcentshareCDSRE = shareCDSRE / netincome *100;
    let roicCDSRE = (shareCDSRE / data['data74']) * 100;
    let sharepartRE = y;
    let pourcentsharepartRE = sharepartRE / netincome *100;
    let roicpartRE = ((sharepartRE + data['data76']) / data['data75']) * 100;


    function afficherResultat(elementId, label, valeur) {
        document.getElementById(elementId).innerText = `${label}: ${valeur.toFixed(2)}`;
    }

    afficherResultat('resultat1', 'Number of clients Peak period', clientpeak);
    afficherResultat('resultat2', 'Number of clients off-Peak period', clientoffpeak);
    afficherResultat('resultat3', 'Penetration Rate', penerate);
    afficherResultat('resultat4', 'Turn-over TTC', CAtotTTC);
    afficherResultat('resultat5', 'Turn-over HT', CAtotHT);
    afficherResultat('resultat6', 'Fixed cost', data['data71']);
    afficherResultat('resultat7', 'Variable cost', varcost);
    afficherResultat('resultat8', 'Operating income (REx)', opincome);
    afficherResultat('resultat11', 'Taxes (IS)', taxIS);
    afficherResultat('resultat12', 'Net income', netincome);
    afficherResultat('resultat13', 'Share of net income of CDS', shareCDSRE);
    afficherResultat('resultat14', '% Share of net incomeCDS', pourcentshareCDSRE);
    afficherResultat('resultat15', 'ROIC of CDS', roicCDSRE);
    afficherResultat('resultat16', 'Share of net income of partner', sharepartRE);
    afficherResultat('resultat17', '% Share of net income of partner', pourcentsharepartRE);
    afficherResultat('resultat18', 'ROIC of partner', roicpartRE);

    // Sauvegarde des données à chaque calcul pour maintenir l'état actuel
    sauvegarderDonnees();
    }

    function sauvegarderDonnees() {
    const idsExistants = [
    'data1', 'data2', 'data3', 'data4', 'data5', 'data6',
    'data11', 'data12', 'data13', 'data14', 'data15', 'data16',
    'data21', 'data22', 'data23', 'data24', 'data25', 'data26',
    'data31', 'data32', 'data33', 'data34', 'data35', 'data36',
    'data41', 'data42', 'data43', 'data44', 'data45', 'data46',
    'data51', 'data52', 'data53', 'data54', 'data55', 'data56',
    'data61', 'data62', 'data63', 'data64', 'data65', 'data66',
    'data71', 'data72', 'data73', 'data74', 'data75', 'data76',
    'data81', 'data82'
    ];
        idsExistants.forEach(id => {
        const element = document.getElementById(id);
            if (element) {
                localStorage.setItem(id, element.value);
                }
        });
    }

    function restaurerDonnees() {
        const idsExistants = [
        'data1', 'data2', 'data3', 'data4', 'data5', 'data6',
        'data11', 'data12', 'data13', 'data14', 'data15', 'data16',
        'data21', 'data22', 'data23', 'data24', 'data25', 'data26',
        'data31', 'data32', 'data33', 'data34', 'data35', 'data36',
        'data41', 'data42', 'data43', 'data44', 'data45', 'data46',
        'data51', 'data52', 'data53', 'data54', 'data55', 'data56',
        'data61', 'data62', 'data63', 'data64', 'data65', 'data66',
        'data71', 'data72', 'data73', 'data74', 'data75', 'data76',
        'data81', 'data82'
        ];
        idsExistants.forEach(id => {
        const valeurSauvegardee = localStorage.getItem(id);
        const element = document.getElementById(id);
            if (element && valeurSauvegardee !== null) {
            element.value = valeurSauvegardee;
            }
        });
    }

    function ajusterAffichageLignes() {
    var nombreChoisi = parseInt(document.getElementById('nombreDeLignes').value, 10);
    var lignes = document.querySelectorAll('#conteneurLignes .input-row');

        lignes.forEach((ligne, index) => {
        ligne.style.display = (index < nombreChoisi) ? 'flex' : 'none';
        });
    }

    document.addEventListener('DOMContentLoaded', function() {
        const checkbox = document.getElementById('showResults');
        const resultElements = document.querySelector('.resultats');

        // Initialisation de l'affichage basé sur l'état initial de la case à cocher
        updateDisplay(checkbox.checked);

        // Écouteur d'événements pour gérer les changements d'état de la case à cocher
        checkbox.addEventListener('change', function() {
           updateDisplay(this.checked);
        });

    function updateDisplay(checked) {
        resultElements.style.display = checked ? 'block' : 'none';
    }
});


    document.getElementById('nombreDeLignes').addEventListener('change', ajusterAffichageLignes);

    document.addEventListener('DOMContentLoaded', function() {
    restaurerDonnees();
    ajusterAffichageLignes();
    });

    /// Détails supplémentaires :

    ///1. **LocalStorage** : Les données des formulaires sont sauvegardées à chaque changement et récupérées à chaque chargement de la page grâce à la fonction `restaurerDonnees`.
    ///2. **Gestion des écouteurs d'événements** : La configuration initiale pour ajuster l'affichage et restaurer les données se fait au chargement de la page. De plus, un écouteur d'événements est ajouté pour gérer les modifications dans le nombre de lignes affichées.
    ///3. **Affichage des résultats** : Les résultats de tous les calculs et de la résolution des équations sont affichés en temps réel.

    ///Ce script complet prend en charge la récupération et la sauvegarde des valeurs des champs de formulaire, ce qui garantit que les données de l'utilisateur ne sont pas perdues lors du rechargement de la page.
