window.Dodat2.Collections.Boards = Backbone.Collection.extend({
	url: "api/boards",
	model: Dodat2.Models.Board   //this is what the collection consists of
}); 