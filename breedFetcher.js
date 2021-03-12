const request = require('request');
const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url,(error, response, body) => {
    if (error) {
      console.log(response,'you need a cat breed');
    } else {
      const data = JSON.parse(body);
      const breedName = data[0];
      console.log(breedName);
      if (breedName) {
        callback(null,breedName.description);
      } else {
        callback('This breed is not found');
      }
    }
  });
};

module.exports = { fetchBreedDescription };
// console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

// console.log('body:', body); // Print the HTML for the Google homepage.
//  //log the data
//  console.log(data.description);

// console.error('error:', error); // Print the error if one occurred
