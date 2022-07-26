function easyHTTP() {

	// Initializing new XMLHttpRequest method.
	this.http = new XMLHttpRequest();
}

// Make an HTTP POST Request
easyHTTP.prototype.post = function(url, data, callback) {

// Open an object (POST, PATH, ASYN-TRUE/FALSE)
this.http.open('POST', url, true);

// Set content-type
this.http.setRequestHeader('Content-type', 'application/json');

// Assigning this to self to have
// scope of this into the function
let self = this;

// When response is ready
this.http.onload = function() {

	// Callback function (Error, response text)
	callback(null, self.http.responseText);
}

// Since the data is an object so
// we need to stringify it
this.http.send(JSON.stringify(data));
}
