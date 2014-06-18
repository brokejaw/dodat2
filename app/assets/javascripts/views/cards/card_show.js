window.Dodat2.Views.CardShow = Backbone.View.extend({
	template: JST['cards/cardshow'],
	
	initialize: function(){
		this.modalID = "card-modal-" + this.model.id;
		this.detailID = "card-detail-modal-" + this.model.id;
	},
	
	className: 'card',
	
	tagName: 'li',
	
	events: {
		'click button.deleteCard': 'deleteCard'
	},
	
	render: function () {
		var content = this.template({
			card: this.model,
			modalID: this.modalID,
			detailID: this.detailID
		});
		
		this.$el.html(content);
		return this;
	},
	
	deleteCard: function (event) {
		var that = this;
		event.preventDefault();
		var $modal = $('#' + this.modalID);
		$modal.modal('hide');
		$modal.on('hidden.bs.modal', function() {
			that.model.destroy();
		});
	}
});