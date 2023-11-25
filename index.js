// fill in javascript code here

// fill in javascript code here
let myForm = document.querySelector('form');
let tbody = document.querySelector('tbody');
let filterSelect = document.getElementById('filter');


myForm.addEventListener('submit' , function(e){
    e.preventDefault();

    let Name = document.getElementById('name').value;
    let DoctorID = document.getElementById('doctor_id').value;
    let Specialization = document.getElementById('specialization').value;
    let Experience = document.getElementById('experience').value;
    let Email = document.getElementById('email').value;
    let Mobile = document.getElementById('mobile').value;
    

    // console.log(name,employeeID,department,experience,email,mobile)

    let Role;
    if(Experience > 5 ){
        Role = "Senior";
    }
    else if(Experience >= 2 && Experience <= 5  ){
        Role = "Junior";
    }
    else{
        Role = "Trainee";
    }
    
    let tbody = document.querySelector("tbody");
    let row = document.createElement("tr");

    let data = [Name,DoctorID,Specialization,Experience,Email,Mobile,Role]

    data.forEach((ele)=>{

        let td = document.createElement("td");
        td.innerText = ele
        row.appendChild(td);
        

    })

    tbody.appendChild(row);

    myForm.reset()
    

    let deleteTd = document.createElement('td');
    let deletBtn = document.createElement('button');
    deletBtn.innerText = "Delete";
    deletBtn.style.backgroundColor = "red"

    deletBtn.addEventListener('click',function(){
        tbody.removeChild(row);
    })

    deleteTd.appendChild(deletBtn);
    row.appendChild(deleteTd);


})



filterSelect.addEventListener("change", function () {
    const selectedSpecialization = filterSelect.value.toLowerCase();
    const rows = tbody.querySelectorAll("tr");
  
    rows.forEach((row) => {
      const rowSpecialization = row.children[2].textContent.toLowerCase();
      if (selectedSpecialization === "" || rowSpecialization === selectedSpecialization) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  });
