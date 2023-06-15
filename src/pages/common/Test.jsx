import React from 'react'
import jsPDF from 'jspdf'

const Test = () => {

    const handleClick = () =>{
        // Create a new jsPDF instance
        var doc = new jsPDF();

        // Header
        var title = `${'Bilan Journalier de la production'}`;
        var subTitle = `${'"Unite Traitement Brut Sud"'}`
        var dateLocation = `${'Hassi Messaoud'}, ${'Le 25 Juin 2023'}`;
        // var location = "Sample Location";
        var responsibleEntity = "Ahmed Jaafer";
        // var createdBy = "Created By";
        doc.setFontSize(11);
        doc.text(`Sonatrach`, 15, 15);
        doc.text(`Division Production`, 15, 20);
        doc.text(`Direction Regional ${'Hassi Meassaoud'}`, 15, 25);
        doc.text(`Direction Exploitation`, 15, 30);

        doc.setFontSize(18);
        doc.text(title, 50, 45);
        doc.text(subTitle, 50, 55);
        doc.setFontSize(12);
        doc.text(`${dateLocation}`, 15, 70);

        doc.text(`Approuve par : ${responsibleEntity}`, 15, 80);
        // doc.text(`Created By: ${createdBy}`, 20, 54);

        // doc.autoTable({
        //   head : [['', 'M3', 'Tonne metrique']],
        //   body : [
        //   ['Stock Initial,' ,`100`, `100`],
        //   ['Stock Final', `200`, `200`],
        //   ['Expedition', `50`, `50`],
        //   ['Purge', `0`, `0`],
        //   ['Production', `150`, `150`],
        // ]
        // })

        // Body - Table
        var tableData = [
        ["", "m3", "Tonne metrique"],
        ["Stock Initial", "Value 5", "Value 6"],
        ["Stock Final", "Value 8", "Value 9"],
        ["Expedition", "Value 8", "Value 9"],
        ["Purge", "Value 8", "Value 9"],
        ["Production", "Value 8", "Value 9"],
        ["Value 7", "Value 8", "Value 9"],
        ["Value 7", "Value 8", "Value 9"],
        // Add more rows as needed
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
        doc.save(`${'Bilan journalier'}.pdf`);
    }

  return (
    <div className='h-full w-full'>
        <button onClick={handleClick}>Click me</button>

    </div>
  )
}

export default Test