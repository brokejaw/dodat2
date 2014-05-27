window.Dodat2.Views.BoardShow = Backbone.View.extend({
	template: JST['boards/show'],
	
	//this.model = board(:id)
	
	initialize: function () {
		this.listenTo(this.model, "sync", this.render);
		this.listenTo(this.model.lists(), "sync", this.render);
		this.listenTo(allBoards, 'add', this.render)
	},
	
	events: {
		'click button.deleteBoard': 'deleteBoard',
		'click .newList': 'newList'
	},
	
	deleteBoard: function (event) {
		var boardID = this.model.id;
		this.model.destroy({
			success: function () {
			Dodat2.Router.navigate('#', { trigger: true })
			}
		});
	},
	
	newList: function (event) {
		alert('hey');
		event.preventDefault();
		
		var view = new Dodat2.Views.ListNew({
			board: this.model
		});
		alert('hey again');
		$(event.currentTarget).replaceWith(view.render().$el);
	},
	
	render: function () {
		var content = this.template({
			board: this.model,
			lists: this.model.lists()
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
	},
	
	
	addSubView: function (selector, subview) {
		
		//key is the selector, which is a string like '#lists'
		//we look in our _subviews POJO, if a key already exists, use that,
		//otherwise assign a new empty array to they key
		
		var selectorSubViews;
		this.subviews()[selector] || (this.subviews()[selector] = []);
			
		if (this.subviews()[selector]){
			//if we have already created an array for this selector
			selectorSubViews = this.subviews()[selector];
		} else {
			//we need to create a new array for this selector
			this.subviews()[selector] = [];
			selectorSubViews = this.subviews()[selector];
		}
	
		// [].push("")
		//we add our new subview to the array that is the value in our 
		//subviews POJO
		selectorSubViews.push(subview);
			
		//this.$(selector)  ===  this.$el.find(selector)
		// here we actually get the jQuery selector for the selector
		// note that we are looking in our internal $el, NOT the dom
		// because it might not be in the DOM.
		var $selectorEl = this.$(selector);
			
		//subview.$el = <div><h3>To do</h3> "Clean the house" </div>
		// we actually add our subview to our internal $el
		$selectorEl.append(subview.$el);
	},
	
	subviews: function () {
		if (!this._subviews) {
			this._subviews = {};
		}
		return this._subviews;
	}
});