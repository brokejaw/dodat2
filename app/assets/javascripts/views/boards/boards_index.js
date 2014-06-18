window.Dodat2.Views.BoardsIndex = Backbone.View.extend({
	template: JST['boards/boardindex'],
	
	initialize: function () {
		this.listenTo(this.collection, 'add remove sync', this.render);
	},
	
	events: {
		'click .addBoard': 'addBoard',
		'click .deleteBoard': 'deleteBoard'
	},
	
	render: function () {
		var content = this.template({ 
			boards: this.collection 
		});

		this.$el.html(content);
		return this;
	},
	
	addBoard: function(event) {
		event.preventDefault();
		var view = new Dodat2.Views.BoardNew({
			collection: allBoards
		});
		$(event.currentTarget).replaceWith(view.render().$el);
	}
});