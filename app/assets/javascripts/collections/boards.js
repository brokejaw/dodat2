window.Dodat2.Collections.Boards = Backbone.Collection.extend({
	url: "api/boards",
	model: Dodat2.Models.Board,
	
	getOrFetch: function (id) {
		var model = this.get(id);
		
		if (!model) {
			model = new Dodat2.Models.Board({id: id});
			model.fetch();
		}
		return model;
	},
}); 

allBoards = new Dodat2.Collections.Boards();

// fetch	GET	controller#index
// create passing in a hash of new model attributes	POST	controller#create  (and on success, adds new model to Backbone collection.)
