window.Dodat2.Views.ListShow = Backbone.View.extend({
	template: JST['lists/show'],
	
	events: {
		'click button.deleteList': 'deleteList'
	},
	
	render: function () {
		var content = this.template({
			list: this.model
		});
		
		this.$el.html(content);
		return this;
	},
	
	deleteList: function (event) {
		event.preventDefault();
		// var listID = 
		this.model.destroy();
	}
});