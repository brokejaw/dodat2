class Api::BoardsController < ApplicationController
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