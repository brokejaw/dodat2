class Api::CardsController < ApplicationController
  def create
    @card = Card.new(params[:card])
    
    if @card.save
      render :json => @card
    else
      render :json => @card.errors, :status => :unprocessable_entity
    end
  end
end
