var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updatedRecord(formData);
    }
    resetForm();
}

//Retrives the data
function readFormData(){
    var formData = {};
    formData["employeeName"] = document.getElementById("employeeName").value;
    formData["employeeId"] = document.getElementById("employeeId").value;
    formData["workMode"] = document.getElementById("workMode").value;
    formData["salary"] = document.getElementById("salary").value;
    return formData;
}

//Insert the data
function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.employeeName;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.employeeId;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.workMode;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.salary;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<button onClick ='onEdit(this)'>Edit</button> <button onClick ='onDelete(this)'>Delete</button>`;
}

//Edit the data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('employeeName').value = selectedRow.cells[0].innerHTML;
    document.getElementById('employeeId').value = selectedRow.cells[1].innerHTML;
    document.getElementById('workMode').value = selectedRow.cells[2].innerHTML;
    document.getElementById('salary').value = selectedRow.cells[3].innerHTML;
}

function updatedRecord(formData){
    selectedRow.cells[0].innerHTML= formData.employeeName;
    selectedRow.cells[1].innerHTML= formData.employeeId;
    selectedRow.cells[2].innerHTML= formData.workMode;
    selectedRow.cells[3].innerHTML= formData.salary;
}

//Delete the data
function onDelete(td){
    if(confirm('Do you want yo delete this record ?')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
    
}

//reset the data
function resetForm(){
    document.getElementById('employeeName').value = '';
    document.getElementById('employeeId').value = '';
    document.getElementById('workMode').value = '';
    document.getElementById('salary').value = '';
}