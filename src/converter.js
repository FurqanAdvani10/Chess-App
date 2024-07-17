import React, { useState } from 'react';
import { read, utils } from 'xlsx';
import Papa from 'papaparse';
import { startOfMonth, endOfMonth, format } from 'date-fns';



const ExcelToSIF = () => {
  const [sifData, setSifData] = useState('');


  const convretMonthYearToDayMonthYear = (val) => {
    // Parse the date string "val" to a Date object
    const dateString = val;
    const year = new Date().getFullYear(); // Assuming current year
    const date = new Date(`${dateString} ${year}`);

    // Set the day to "01"
    date.setDate(1);

    return date
  }

  const getStartAndEndDayWithTotalDays = (val) => {

      const date = convretMonthYearToDayMonthYear(val);

      // Get the start and end date of the month
      const monthStartDate = startOfMonth(date);
      const monthEndDate = endOfMonth(date);
      
      // Format the dates as "YYYY-MM-DD"
      const formattedStartDate = format(monthStartDate, 'yyyy-MM-dd');
      const formattedEndDate = format(monthEndDate, 'yyyy-MM-dd');
      
      // Calculate the total number of days in the month
      const totalDaysInMonth = monthEndDate.getDate();

    return {
      startDate: formattedStartDate,
      endDate: formattedEndDate,
      totalDaysInMonth
    }
  }

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = utils.sheet_to_json(sheet);
      
      console.log(jsonData)

      let datejson = jsonData[0]?.Remarks
      
      console.log(datejson , "adatejsonsdaj")
      const dateString = datejson;
      const parts = dateString.split(' ');
      const month = parts[0];
      const day = parts[1];
      const date = month + day

     getStartAndEndDayWithTotalDays(date)
     
      let sifString = ``;

      jsonData.forEach((row) => {
        const values = Object.keys(row)
          .filter(key => key !== "Emp Name" && key !==  "Establisment ID")
          .map(key => row[key])
          .join(',');
        const sifRow = `EDR,${values}\n`;
        sifString += sifRow;
      });


      setSifData(sifString);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      <div>
        <h2>SIF Data</h2>
       {sifData}
      </div>
    </div>
  );
};

export default ExcelToSIF;



// function ExcelToCsv() {
  //   const [csvData, setCsvData] = useState("");
  
  //   const handleFileUpload = (event) => {
  //     const file = event.target.files[0];
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       const data = new Uint8Array(e.target.result);
  //       const workbook = read(data, { type: "array" });
  //       const sheetName = workbook.SheetNames[0];
  //       const sheet = workbook.Sheets[sheetName];
  //       const csvData = Papa.unparse(utils.sheet_to_json(sheet), {
  //         header: false,
  //       });
  //       const newHeader = "Register No, Student Name, Branch, Semester, Course, Exam Type, Attendance, Withheld, IMark, Grade, Result\n";
  //       const finalCSVData = newHeader + csvData.substring(csvData.indexOf("\n") + 1);
  //       setCsvData(finalCSVData);
  
  //       // Convert CSV data to Blob and download it
  //       const blob = new Blob([finalCSVData], { type: "text/csv;charset=utf-8;" });
  //       saveAs(blob, "converted.csv");
  //     };
  //     reader.readAsArrayBuffer(file);
  //   };
  
  //   return (
  //     <div>
  //       <input type="file" onChange={handleFileUpload} />
  //     </div>
  //   );
  // }
  
  // export default ExcelToCsv;