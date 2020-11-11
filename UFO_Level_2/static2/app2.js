// from data2.js
function fillTable(tableData) {
  var tbody = d3.select("tbody");
  tbody.html("");
  tableData.forEach((data, index) => {
    let row = tbody.append("tr");
    Object.entries(data).forEach(([key, value]) => {
      let cell = row.append("td");
      cell.text(value);
    });
  });
}

fillTable(data);

// YOUR CODE HERE!
let filterbutton = d3.select("#button");
filterbutton.on("click", function () {
  let dateValue = document.getElementById("date_filter").value;
  console.log("dateValue", dateValue);

  let filteredlist = [];

  // const month = dateValue.slice(6, 7);
  const day = dateValue.split("-")[2];
  console.log("day", day);
  const dateFormat = `1/${parseInt(day)}/2010`;
  console.log("dateFormat", dateFormat);
  data.forEach((date) => {
    if (dateFormat == date.datetime) {
      filteredlist.push(date);
    }
  });
  fillTable(filteredlist);

  console.log(filteredlist);
});

// function fillTable(tableData) {
//   var tbody = d3.select("tbody");
//   tbody.html("");
//   tableData.forEach((data, index) => {
//     let row = tbody.append("tr");
//     Object.entries(data).forEach(([key, value]) => {
//       let cell = row.append("td");
//       cell.text(value);
//     });
//   });
// }

// fillTable(data);

// // YOUR CODE HERE!
// let filterbutton = d3.select("#button");
// filterbutton.on("click", function () {
//   let dateValue = document.getElementById("date_filter").value;

//   //   let cityValue = document.getElementById("city_filter").value;

//   console.log("dateValue", dateValue);

//   let filteredlist = [];

//   // const month = dateValue.slice(6, 7);
//   const day = dateValue.split("-")[2];
//   console.log("day", day);
//   const dateFormat = `1/${parseInt(day)}/2010`;
//   console.log("dateFormat", dateFormat);
//   data.forEach((date) => {
//     if (dateFormat == date.datetime) {
//       filteredlist.push(date);
//     }
//   });
//   fillTable(filteredlist);

//   console.log(filteredlist);
// });

// function performReset() {
//   document.getElementById("inputName").value = "";
//   document.getElementById("inputCity").value = "";
//   document.getElementById("inputCountry").value = "";
//   filterTable();
// }

// function filterTable() {
//   // Get the table rows.
//   let rows = document.querySelector("#myTable > tbody").rows;

//   // Get the inputed values to filter against.
//   let inputedName = document.getElementById("inputName").value.toUpperCase();
//   let inputedCity = document.getElementById("inputCity").value.toUpperCase();
//   let inputedCountry = document
//     .getElementById("inputCountry")
//     .value.toUpperCase();

//   // Loop over the rows to perform the filter.
//   let totalRows = rows.length;
//   for (let i = 0; i < totalRows; i++) {
//     // Get the contents of the relevant cell data.
//     let rowName = rows[i].cells[0].textContent.toUpperCase();
//     let rowCity = rows[i].cells[1].textContent.toUpperCase();
//     let rowCountry = rows[i].cells[2].textContent.toUpperCase();

//     // Define an array of conditions.
//     // Note: the conditions are evaluated here.
//     let conditionsArray = [
//       rowName.indexOf(inputedName) > -1,
//       rowCity.indexOf(inputedCity) > -1,
//       rowCountry.indexOf(inputedCountry) > -1,
//     ];

//     // If any of the above conditions are true then show the row,
//     // otherwise turn of displaying that row.
//     if (conditionsArray.indexOf(true) > -1) {
//       rows[i].display = "";
//     } else {
//       rows[i].display = "none";
//     }
//   }
// }
