window.Dodat2.Collections.Boards = Backbone.Collection.extend({
	url: "api/boards",
	model: Dodat2.Models.Board,
}); 

// fetch	GET	controller#index
// create passing in a hash of new model attributes	POST	controller#create  (and on success, adds new model to Backbone collection.)
