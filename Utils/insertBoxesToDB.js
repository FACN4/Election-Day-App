// imports xlsx file as an array
// loop over the array imported
// take the relevant data to a single box
// run query of inserting box with the data

const importXlsxFile = require('./importXlsxFile');
const insertBoxes = require('../server/database/queries/insertBoxes');

const path = '/home/ray261/Desktop/BlackSheet/MINI_BOXES.xlsx';
// get data from the external file to an array
const boxesList = importXlsxFile(path);

let id;
let name;
let userOnBox;
let numberOfVoters;
let region;
// run on the array (where each row contains the data of one voter) and get all the relevant data
boxesList.forEach((row, index) => {
  // first row is names of the columns in the xlsx file and should be ignored
  if (index === 1) {
    return;
  }
  id = row[0];
  name = row[1].trim();
  userOnBox = row[2].trim();
  numberOfVoters = row[3];
  region = row[4];
  insertBoxes([id, name, userOnBox, numberOfVoters, region]);
});