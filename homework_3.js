const tableInfo = [
  {
    studentName: "John",
    Age: 19,
    Phone: "455 - 983 - 0903",
    Address: "123 Ave, San Francisco, CA, 94011"
  },
  {
    studentName: "Alex",
    Age: 21,
    Phone: "455 - 983 - 0912",
    Address: "456 Rd, San Francisco, CA, 94012"
  },
  {
    studentName: "Josh",
    Age: 22,
    Phone: "455 - 345 - 0912",
    Address: "789 Dr, Newark, CA, 94016"
  },
  {
    studentName: "Matt",
    Age: 23,
    Phone: "321 - 345 - 0912",
    Address: "223 Dr, Sunnyvale, CA, 94016"
  }
];

// 数组动态生成表格
function array_to_table() {
  const div_table = document.getElementById("array_table");
  let table = document.createElement("table");
  div_table.innerHTML = "<h3>Table :</h3>";
  div_table.appendChild(table);
  let thead = document.createElement("thead");
  table.appendChild(thead);
  let tr = document.createElement("tr");
  thead.appendChild(tr);
  let title_table = Object.keys(tableInfo[0]);
  for (let i in title_table) {
    let th = document.createElement("th");
    tr.appendChild(th);
    th.innerHTML = title_table[i];
  }

  const tbody = document.createElement("tbody");
  table.appendChild(tbody);

  for (let i = 0; i < tableInfo.length; i++) {
    let tr = document.createElement("tr");
    tbody.appendChild(tr);
    for (let j in tableInfo[i]) {
      let td = document.createElement("td");
      tr.appendChild(td);
      td.innerHTML = tableInfo[i][j];
    }
  }
}
// 数组动态生成列表
const list_item = ["HTML", "JavaSclistript", "CSS", "React", "Redux", "Java"];

// 生成有序列表
function array_to_olist() {
  const div_olist = document.getElementById("Ordered_list");
  div_olist.innerHTML = "<h3>Ordered list:</h3>";
  let o_list = document.createElement("ol");
  div_olist.appendChild(o_list);
  for (let i in list_item) {
    let o_item = document.createElement("li");
    o_list.appendChild(o_item);
    o_item.innerHTML = list_item[i];
  }
}
// 生成无序列表
function array_to_ulist() {
  const div_ulist = document.getElementById("Unordered_list");
  div_ulist.innerHTML = "<h3>Unordered list:</h3>";
  let u_list = document.createElement("ul");
  div_ulist.appendChild(u_list);
  for (let i in list_item) {
    let u_item = document.createElement("li");
    u_list.appendChild(u_item);
    u_item.innerHTML = list_item[i];
  }
}

// 数组动态生成下拉列表
const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" }
];
function array_to_dlist() {
  const DropDownList = document.getElementById("DropDown_list");
  DropDownList.innerHTML = "<h3>Dropdown list:</h3>";
  let selector = document.createElement("select");
  DropDownList.appendChild(selector);
  for (let i in dropDownList) {
    let op = document.createElement("option");
    selector.appendChild(op);
    op.value = dropDownList[i].value;
    op.text = dropDownList[i].content;
  }
}
