window.Dodat2.Collections.Boards = Backbone.Collection.extend({
	url: "api/boards",
	model: Dodat2.Models.Board,
	
	getOrFetch: function (id) {
		var model = this.get(id);
		var boards = this; 
		
		if (!model) {
			model = new Dodat2.Models.Board({id: id});
			model.fetch({
				success: function () { boards.add(model) }
			});
		}
		return model;
	},
	
	// define the url
	// define the model object in our collection
	// getOrFetch => 
}); 

allBoards = new Dodat2.Collections.Boards();

// fetch	GET	controller#index
// create passing in a hash of new model attributes	POST	controller#create  (and on success, adds new model to Backbone collection.)
