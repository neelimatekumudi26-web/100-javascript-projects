

let count = 0;
let totalSalary = 0;
let profit = 0;
let companies = 3; // ✅ object for company-wise count

// ✅ Open popup
function openForm(){
  document.getElementById("overlay").style.display = "block";
}

// ✅ Close popup
function closeForm(){
  document.getElementById("overlay").style.display = "none";
}

// ✅ Submit
function submitData(){

  let name = document.getElementById("Name").value;
  let company = document.getElementById("Company").value;
  let salary = document.getElementById("Salary").value;

  if(name==="" || company==="" || salary===""){
    alert("Please fill all fields");
    return;
  }

  // ✅ Employee count
  count++;
  document.getElementById("empCount").innerText = count;

  // ✅ Total salary
  totalSalary += Number(salary);
  document.getElementById("totalSalary").innerText = totalSalary;

  // ✅ Profit (20%)
  profit += Number(salary) * 0.2;
  document.getElementById("profit").innerText = profit;

  // ✅ Company-wise employee count
  if(companies[company]){
    companies[company]++;
  } else {
    companies[company] = 1;
  }

  // ✅ Display companies
  let result = "";
  for(let key in companies){
    result += key + " (" + companies[key] + ")<br>";
  }
  document.getElementById("companyList").innerHTML = result;

  // ✅ Add to list
  let li = document.createElement("li");
  li.innerText = name + " | " + company + " | ₹" + salary;
  document.getElementById("list").appendChild(li);

  // ✅ Close popup
  closeForm();

  // ✅ Clear inputs
  document.getElementById("Name").value = "";
  document.getElementById("Company").value = "";
  document.getElementById("Salary").value = "";
}
