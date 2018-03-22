module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	var x = 0;
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
		console.log("Besøk nr " + x);
		x = x+1;
	});

};