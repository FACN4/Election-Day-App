const dbConnection = require('../dbConnection');

const addVotersToDB = (arrayOFPropertiesToAdd) => {
  const queryString = 'INSERT INTO voters (id,last_name,first_name,middle_name,box_number,address,serial_box_number ) VALUES($1,$2,$3,$4,$5,$6,$7)';
  dbConnection.query(queryString, arrayOFPropertiesToAdd, (err) => {
    if (err) {
      console.log(err);
    } else {
      // this is just for check - will be removed later
      console.log('success');
    }
  });
};

module.exports = addVotersToDB;
