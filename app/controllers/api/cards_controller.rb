class Api::CardsController < ApplicationController
  before_action :require_login!
  def create
    @card = Card.new(card_params)
    
    if @card.save
      render :json => @card
    else
      render :json => @card.errors, :status => :unprocessable_entity
    end
  end
  
  def show
    @card = Card.find(params[:id])
    render :json => @card
  end
  
  def destroy
    @card = Card.find(params[:id])
    @card.destroy
    render :json => @card
  end
  
  private
  def card_params
    params.require(:card).permit(:title, :description, :list_id)
  end
end
