
const student = {
    Name: "",
    Age: 0,
    Grade: "",
  

    displayInfo: function () {
      console.log(`Student Information:
  Name: ${this.Name}
  Age: ${this.Age}
  Grade: ${this.Grade}`);
    },
  };
  

  student.Name = prompt("Enter the student's name:");
  student.Age = parseInt(prompt("Enter the student's age:"), 10);
  student.Grade = prompt("Enter the student's grade:");
  
  
  student.displayInfo();
  