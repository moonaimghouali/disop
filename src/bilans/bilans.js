import jsPDF from 'jspdf'

export const printBilanJournalierRegion = (data, nom_region, code_region, user) =>{
    // Create a new jsPDF instance
    var doc = new jsPDF();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    let date = new Date(data.journee_production).toLocaleDateString("fr", options)

    // Header
    var title = `${'Bilan Journalier de la production'}`;
    var subTitle = `"${nom_region}"`
    var dateLocation = `${nom_region}, ${date}`;
    
    var responsibleEntity = user.nom+' '+user.prenom;
    
    doc.setFontSize(11);
    doc.text(`Sonatrach`, 15, 15);
    doc.text(`Division Production`, 15, 20);
    doc.text(`Direction Regional ${nom_region}`, 15, 25);
    doc.text(`Direction Exploitation`, 15, 30);

    doc.setFontSize(18);
    doc.text(title, 50, 45);
    doc.text(subTitle, 50, 55);
    doc.setFontSize(12);
    doc.text(`${dateLocation}`, 15, 70);

    doc.text(`Approuve par : ${'Directeur Regional'}`, 15, 80);
    
    // Body - Table
    var tableData = [
    ["", "m3", "Tonne metrique"],
    ["Stock Initial", `${data.stock_initial_vm}`, `${data.stock_initial_tm}`],
    ["Expedition", `${data.expedition_region_vm}`, `${data.expedition_region_tm}`],
    ["Production", `${data.production_region_vm}`, `${data.production_region_tm}`],
    ["Stock Final", `${data.stock_final_vm}`, `${data.stock_final_vm}`],
    ];

    var tableTop = 100;
    var tableLeft = 20;
    var cellWidth = 40;
    var cellHeight = 10;

    doc.setFontSize(12);
    for (var i = 0; i < tableData.length; i++) {
    for (var j = 0; j < tableData[i].length; j++) {
        doc.text(tableData[i][j], tableLeft + j * cellWidth, tableTop + (i + 1) * cellHeight);
    }
    }

    doc.setFontSize(12);
    doc.text(`Le Directeur Explotation`, 20, doc.internal.pageSize.height - 20);

    // Save the PDF
    doc.save(`Bilan_Regional-${code_region}-${data.journee_production}.pdf`);
}

export const printBilanJournalierUnite = (data,nom_region, nom_unite, code_unite, user) =>{
    // Create a new jsPDF instance
    var doc = new jsPDF();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    let date = new Date(data.journee_production).toLocaleDateString("fr", options)

    // Header
    var title = `${'Bilan Journalier de la production'}`;
    var subTitle = `"${nom_unite}"`
    var dateLocation = `${nom_unite}, ${date}`;
    
    // var responsibleEntity = user.nom+' '+user.prenom;
    
    doc.setFontSize(11);
    doc.text(`Sonatrach`, 15, 15);
    doc.text(`Division Production`, 15, 20);
    doc.text(`Direction Regional ${nom_region}`, 15, 25);
    doc.text(`Direction Exploitation`, 15, 30);
    doc.text(`Service ${nom_unite}`, 15, 35);

    doc.setFontSize(18);
    doc.text(title, 50, 50);
    doc.text(subTitle, 50, 60);
    doc.setFontSize(12);
    doc.text(`${dateLocation}`, 15, 75);

    doc.text(`Approuve par : ${'Direction Exploitation'}`, 15, 85);
    
    // Body - Table
    var tableData = [
    ["", "m3", "Tonne metrique"],
    ["Stock Initial", `${data.stock_initial_vm}`, `${data.stock_initial_tm}`],
    ["Production", `${data.production_unite_vm}`, `${data.production_unite_tm}`],
    ["Expedition", `${data.expedition_unite_vm}`, `${data.expedition_unite_tm}`],
    ["Purge", `${data.purge_unite_vm}`, `${data.purge_unite_tm}`],
    ["Stock Final", `${data.stock_final_vm}`, `${data.stock_final_tm}`],
    ];

    var tableTop = 100;
    var tableLeft = 20;
    var cellWidth = 40;
    var cellHeight = 10;

    doc.setFontSize(12);
    for (var i = 0; i < tableData.length; i++) {
    for (var j = 0; j < tableData[i].length; j++) {
        doc.text(tableData[i][j], tableLeft + j * cellWidth, tableTop + (i + 1) * cellHeight);
    }
    }

    doc.setFontSize(12);
    doc.text(`Le Responsable d'Unite`, 20, doc.internal.pageSize.height - 20);

    // Save the PDF
    doc.save(`Bilan-Unite-${code_unite}-${data.journee_production}.pdf`);
}