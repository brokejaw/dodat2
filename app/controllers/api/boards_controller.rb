class Api::BoardsController < ApplicationController
  def update
    @board = Board.find(params[:id])
    if @board.update_attributes(params[:board])
      render :json => @board
    else
      render :json => @board.errors, :status => :unprocessable_entity
    end
  end
  
  def destroy
    @board = Board.find(params[:id])
    @board.destroy
    render :json => @board
  end
  
  def create
    @board = Board.new(params[:board])
    
    if @board.save
      render :json => @board
    else
      render :json => @board.errors, :status => :unprocessable_entity 
    end
  end
  
  def index
    @boards = Board.all
    render :json => @boards
  end
  
  def show
    @board = Board.find(params[:id])
    render :json => @board
  end
end