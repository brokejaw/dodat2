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
    @board = Board.new(board_params)
    
    if @board.save
      render :json => @board
    else
      render :json => @board.errors, :status => :unprocessable_entity 
    end
  end
  
  def index
    @boards = Board.all
    render :index
  end
  
  def show
    @board = Board.find(params[:id])
    render :show
  end
  
  private
  def board_params
    params.require(:board).permit(:title, :user_id)
  end
end