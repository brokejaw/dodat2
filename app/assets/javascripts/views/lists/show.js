window.Dodat2.Views.ListShow = Backbone.View.extend({
	template: JST['lists/show'],
	
	events: {
		'click button.createList': 'createList'
	},
	
	render: function () {
		var content = this.template({
			list: this.model
		});
		
		this.$el.html(content);
		return this;
	},
	
	createList: function () {
		
	},
});