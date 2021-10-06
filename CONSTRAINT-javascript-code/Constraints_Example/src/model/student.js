class Student {
  static students = [];

  static save(firstName, lastName, age, rollNumber) {
    const studentInfo = {
      firstName: firstName,
      lastName: lastName,
      age: age,
      rollNumber: rollNumber,
    };

    this.students.push(studentInfo);
  }
}
