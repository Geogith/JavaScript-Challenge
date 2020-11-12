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

fillTable(data2);
function filterchange() {
  var dateValue = d3.select(this).select("input");
  console.log(dateValue);
  var value = dateValue.property("value");
  var column_name = Value.attr("id");

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
}
// YOUR CODE HERE!
let filterbutton = d3.select(".button");
filterbutton.on("change", filterchange);
