window.Dodat2.Views.ListShow = Backbone.CompositeView.extend({
	template: JST['lists/listshow'],
	
	className: 'list-placement',
	
	initialize: function () {
		this.listenTo(this.model.cards(), "remove sync", this.render),
		this.modalID = "list-modal-" + this.model.id;
	},
	
	events: {
		'click button.deleteList': 'deleteList',
		'click .addCard': 'addCard'
	},
	
	render: function () {
		var content = this.template({
			list: this.model,
			cards: this.model.cards(),
			modalID: this.modalID
		});
		
		this.$el.html(content);
		this.renderCards();
		return this;
	},
	
	renderCards: function () {
		var that = this;
	
		this.model.cards().each(function (card) {
			var view = new Dodat2.Views.CardShow({
				model: card
			});
			that.addSubView('#cards', view.render());
		});
	},
	
	deleteList: function (event) {
		var that = this;
		event.preventDefault();
		var $modal = $('#' + this.modalID);
		$modal.modal('hide');
		$modal.on('hidden.bs.modal', function(){
			that.model.destroy();
		});
	},
	
	addCard: function(event) {
		event.preventDefault();
		var view = new Dodat2.Views.CardNew({
			model: this.model
		});
		$(event.currentTarget).replaceWith(view.render().$el);
	}
});




