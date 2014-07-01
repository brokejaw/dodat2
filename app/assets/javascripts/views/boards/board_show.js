window.Dodat2.Views.BoardShow = Backbone.CompositeView.extend({
	template: JST['boards/boardshow'],
		
	initialize: function () {
		this.listenTo(this.model, "sync", this.render);
		this.listenTo(this.model.lists(), "remove sync", this.render);
		this.listenTo(allBoards, 'add', this.render);
		this.modalID = "board-modal-" + this.model.id;
	},
	
	events: {
		'click .list--new__button': 'newList',
		'click .deleteBoard': 'deleteBoard'
	},
	
	newList: function (event) {
		event.preventDefault();
		var view = new Dodat2.Views.ListNew({ model: this.model });
		
		$(event.currentTarget).replaceWith(view.render().$el);
	},
	
	sortableLists: function () {
		var view = this;
		
		this.$el.find('#lists').sortable({
			tolerance: 'pointer',
			opacity: 0.7,
		});
	},
	
	droppableLists: function () {
		var view = this;
		
		this.$el.find('#lists').droppable({
		});
	},
	
	render: function () {
		var content = this.template({
			board: this.model,
			modalID: this.modalID
		});
		
		this.$el.html(content);
		
		this.renderLists();
		
		this.sortableLists();
		this.droppableLists();
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
	},
	
	deleteBoard: function (event) {
		var that = this;
		var $modal = $('#' + this.modalID);
		
		event.preventDefault();
		$modal.modal('hide');
		
		$modal.on('hidden.bs.modal', function(){
			that.model.destroy({
				success: function () {
					Dodat2.Router.navigate('#', { trigger: true })
				}
			});
		});
	},
});
