class Api::ListsController < ApplicationController
  # def index
  #   @lists  = List.where(:board_id => params[:board_id])
  #   render :json => @lists
  # end
  # 
  # def show
  #   @list = List.find(params[:id])
  #   render :json => @list
  # end
  
  def create
    @list = List.new(params[:list])
    
    if @list.save
      render :json => @list
    else
      render :json => @list.errors, :status => :unprocessable_entity
    end
  end
  
  def update
  end
  
  def destroy
  end
end