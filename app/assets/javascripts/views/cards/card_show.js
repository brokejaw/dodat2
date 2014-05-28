window.Dodat2.Views.CardShow = Backbone.View.extend({
	template: JST['cards/cardshow'],
	initialize: function(){
		this.modalID = "card-modal-" + this.model.id;
	},
	
	className: 'card',
	
	tagName: 'li',
	
	events: {
		'click button.deleteCard': 'deleteCard'
	},
	
	render: function () {
		
		var content = this.template({
			card: this.model,
			modalID: this.modalID
		});
		
		this.$el.html(content);
		return this;
	},
	
	deleteCard: function (event) {
		var that = this;
		event.preventDefault();
		var $modal = $('#' + this.modalID);
		//actually tells the modal to go away
		$modal.modal('hide');
		//but if we do something that will cause a refresh
		//BEFORE a modal is completely gone, we will be screwed
		//so we must be sure the modal is gone before destroying the card
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