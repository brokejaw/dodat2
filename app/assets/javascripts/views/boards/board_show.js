window.Dodat2.Views.BoardShow = Backbone.View.extend({
	template: JST['boards/show'],
	
	initialize: function () {
		
	},
	
	render: function () {
		var content = this.template({
			board: this.model
		});
		
		this.$el.html(content);
		return this;
	},
});