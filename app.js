// Instantiating easyHTTP
const http = new easyHTTP;

// Create Data
const data = {
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
};


// Post prototype method(url, data,
// response text)
http.post(
'https://reqres.in/api/login',
data,
function(err, post) {
	if(err) {
		console.log(err);
	} else {
		// Parsing string data to object
		// let data = JSON.parse(posts);
		console.log(post);
	}
});
