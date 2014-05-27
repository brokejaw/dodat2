window.Dodat2.Views.ListNew = Backbone.View.extend({
	
	events: {
		'submit form': 'create'
	},	
	
	template: JST['lists/new'],
	
	render: function () {
		var content = this.template({
			board: this.model
		});
		this.$el.html(content);
		return this;
	},
	
	create: function (event) {
		event.preventDefault();
		var params = $(event.currentTarget).serializeJSON()["list"];
		// var newList = new Dodat2.Models.List(params);
		
		this.model.lists().create(params, {
			wait: true, 
			success: function (savedList) {
				alert("saved");
			}
		})
	},
});