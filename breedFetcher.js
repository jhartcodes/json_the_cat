const request = require('request');
const breed = process.argv.slice(2);

const breedFetcher = function(breed) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

  request(url,(error, response, body) => {
    if (error) {
      console.log(response,'you need a cat breed');
    } else if (body.length < 4) {
      console.log('there are no cats silly');
    } else {
      const data = JSON.parse(body);
      console.log(data[0].description);
    }
  });
};

breedFetcher(breed);
// console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

// console.log('body:', body); // Print the HTML for the Google homepage.
//  //log the data
//  console.log(data.description);

// console.error('error:', error); // Print the error if one occurred
