window.Dodat2.Views.BoardNew = Backbone.View.extend({
	template: JST['boards/boardnew'],
	
	events: {
		'submit form': 'create'
	},
	
	render: function () {
		var content = this.template();
		
		this.$el.html(content);
		return this;
	},
	
	create: function (event) {
		event.preventDefault();
		
		var params = $(event.currentTarget).serializeJSON()["board"];
		var newBoard = new Dodat2.Models.Board(params);

		this.collection.create(newBoard, {
			wait: true, 
			success: function (savedBoard) {
				Dodat2.Router.navigate('#', {trigger: true} )
			}
		})
	}
});