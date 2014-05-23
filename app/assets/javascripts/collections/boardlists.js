window.Dodat2.Collections.BoardLists = Backbone.Collection.extend({
	initialize: function (models, options) {
		this.board = options.board;
	},
	
	model: Dodat2.Models.List,
	
	url: function () {
		//return "api/boards/" + this.board.get("id") + "lists";
		return this.board.url() + "/lists";
	},
});

// example
// var board = new Dodat2.Models.Board({ id: 3 })
// var lists = new Dodat2.Collections.Lists([], {
//	board: board
// }); 