import * as XLSX from "xlsx";

// Read an excelFile
export const readExcelFile = (e , setBaremeTable, setDisplayTable, setError) =>{
    const file= e.target.files[0]
    const fileTypes = ["text/csv", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.ms-excel","application/vnd.ms-excel.sheet.macroEnabled.12"]
    if(!fileTypes.includes(file.type)) {setError({error:true , errorMessage:"mauvais type de fichier Inserer."})}

        const promise = new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file);
      
            fileReader.onload =  async(e) => {

              const bufferArray = e.target.result;
              
              const wb = XLSX.read(bufferArray, { type: "buffer" });
              const wsname = wb.SheetNames[0];
              let ws = wb.Sheets[wsname];
              
              let data = await sheetToArray(ws) 
              resolve(data);
            };
      
            fileReader.onerror = (error) => {
              reject(error);
            };
          });
      
          promise.then((data) => {
            setBaremeTable(data);
            let d = (data.slice(0,10));
            setDisplayTable(d)
          });
    }



// Read Excel Data into an array
export const sheetToArray = (ws) =>{
    let array=[]
    let horizontal = "ABCDEFGHIJK"
    let temp = []

    let ref = ws["!ref"].split(":")[1]
    ref = Number(ref.slice(1,ref.length))

    for (let vIndex = 1; vIndex < ref; vIndex++) {

        for (let hIndex = 1; hIndex < 11; hIndex++) {
            try {
                let volume ;
                let  cellValue = ws[`${horizontal[hIndex]}${vIndex}`]
                
                let excelValue = cellValue.w.split(",")

                if(excelValue.length >1)
                volume = Number(`${excelValue[0]}.${excelValue[1]}`)
                else
                volume = Number(excelValue)

                let row = {
                    dm_valeur : vIndex-1,
                    mm_valeur : (hIndex-1) * 10,
                    volume_apparent : volume
                }
                temp.push(row)
                if(hIndex === 10){
                  array.push(temp)
                  temp = []
                }
                //

            } catch (error) {
                
            }    
        }
    }
    return array;
}

