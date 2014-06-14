window.Dodat2.Collections.Boards = Backbone.Collection.extend({
	url: "api/boards", //
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
}); 

allBoards = new Dodat2.Collections.Boards();
