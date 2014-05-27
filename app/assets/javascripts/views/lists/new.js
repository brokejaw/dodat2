window.Dodat2.Views.ListNew = Backbone.View.extend({
	initialize: function (options) {
		this.board = options.board;
	},
	
	events: {
		'submit form': 'create'
	},	
	
	template: JST['lists/new'],
	
	render: function () {
		var content = this.template({
			board: this.board
		});
		this.$el.html(content);
		return this;
	},
	
	create: function (event) {
		event.preventDefault();
		var params = $(event.currentTarget).serializeJSON()["list"];
		this.board.lists().create(params);
	},
});