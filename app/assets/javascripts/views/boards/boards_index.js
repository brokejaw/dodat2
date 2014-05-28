window.Dodat2.Views.BoardsIndex = Backbone.View.extend({
	template: JST['boards/boardindex'],
	
	initialize: function () {
		this.listenTo(this.collection, 'add remove sync', this.render);
	},
	
	render: function () {
		var content = this.template({ 
			boards: this.collection 
		});

		this.$el.html(content);
		return this;
	},
});