
const request = require('request');
request('https://api.tfl.gov.uk/StopPoint/Mode/bus/Disruption?app_id=483499fa&app_key=4ae112a69209ec408b173e4e9db18388', function (error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', coresponse && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
  const returnedBody = response.body
    function firstFive(returnedBody){
    const fiveback = returnedBody[0,4];
    return fiveback;
    console.log(fiveback);
}
});
firstFive()
// and then print it out the next 5 buses at that stop. 