window.Dodat2.Collections.Lists = Backbone.Collection.extend({
	model: Dodat2.Models.List,
	
	url: function () {
		//return "api/boards/" + this.board.get("id") + "lists";
		return this.board.url() + "/comments";
	},
	
	initialize: function (models, options) {
		this.board = options.board;
	}
	
});

// example
// var board = new Dodat2.Models.Board({ id: 3 })
// var lists = new Dodat2.Collections.Lists([], {
//	board: board
// }); 