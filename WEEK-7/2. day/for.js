'use strict';

for (var i = 1; i < 11; i += 2) {
  console.log(i);
}

var dogs = ['Virsli', 'Morzsi', 'Tappancs']

for (var i = 0 ; i < dogs.length; i++) {
  console.log(dogs[i]);
}

var student = {
  kor: 6,
  nev: 'Tibi',
  labmeret: 45
};

for (var key in student) {
  console.log(student[key])
}
