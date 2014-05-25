window.Dodat2.Views.BoardShow = Backbone.View.extend({
	template: JST['board/show'],
	
	initialize: function () {
		
	},
	
	render: function () {
		var content = this.template({
			
		});
		
		this.$el.html(content);
		return this;
	},
});