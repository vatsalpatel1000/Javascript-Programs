init.view.createStudent = {
  setupUI: function () {
    const saveButton = document.getElementById('save_student');

    saveButton.addEventListener('click', init.view.createStudent.addStudent);
  },
  addStudent: function (event) {
    event.preventDefault();
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const age = document.getElementById('age').value;
    const rollNumber = document.getElementById('roll_number').value;

    if (firstName.length <= 0) {
      alert('Please enter first name');
    }        
    else if (lastName.length <= 0) {
      alert('Please enter last name');
    } else if (isNaN(age)) {
      alert('Please enter proper age (Only numbers are accepted)!');
    } else if (rollNumber.length <= 7) {
      alert('Please enter proper roll number (roll number should be only number and minimum of 7 digits)');
    } else {
      Student.save(firstName, lastName, age, rollNumber);
      alert('Save successfull')
    }

  },
};


