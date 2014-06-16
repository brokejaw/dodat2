window.Dodat2.Views.BoardShow = Backbone.CompositeView.extend({
	template: JST['boards/boardshow'],
		
	initialize: function () {
		this.listenTo(this.model, "sync", this.render);
		this.listenTo(this.model.lists(), "remove sync", this.render);
		this.listenTo(allBoards, 'add', this.render);
		this.modalID = "board-modal-" + this.model.id;
	},
	
	events: {
		'click button.deleteBoard': 'deleteBoard',
		'click .list--new__button': 'newList'
	},
	
	deleteBoard: function (event) {
		var that = this;
		event.preventDefault();
		var $modal = $('#' + this.modalID);
		$modal.modal('hide');
		$modal.on('hidden.bs.modal', function(){
			that.model.destroy({
				success: function () {
					Dodat2.Router.navigate('#', { trigger: true })
				}
			});
		});
	},
	
	newList: function (event) {
		event.preventDefault();
		var view = new Dodat2.Views.ListNew({ model: this.model });
		
		$(event.currentTarget).replaceWith(view.render().$el);
	},
	
	render: function () {
		var content = this.template({
			board: this.model,
			modalID: this.modalID
			//lists: this.model.lists()
		});
		
		//put the content of the template into the $el
		this.$el.html(content);
		
		//put the content of the subviews into the same $el
		this.renderLists();

		//return this instance of the view, eventually the ROUTER
		//will add this's $el to the actual DOM
		return this;
		
	},
	
	renderLists: function () {
		var that = this;
		this.model.lists().each(function (list) {
			var view = new Dodat2.Views.ListShow({
				model: list
			});
			that.addSubView('#lists', view.render());
		});
	}
});