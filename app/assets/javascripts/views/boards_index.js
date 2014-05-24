window.Dodat2.Views.BoardsIndex = Backbone.View.extend({
	template: JST["boards/index"],
	
	events: {
		"click button.refresh": "refresh"
	},
	
	initialize: function (options) {
		this.listenTo(this.collection), "sync", this.render);
	},
	
	refresh: function () {
		this.collection.fetch();
	},
	
	render: function () {
		var renderedContent = this.template({ boards: this.collection });
		this.$el.html(renderedContent);
		
		return this;
	},
});