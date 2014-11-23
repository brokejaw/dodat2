class Api::BoardsController < ApplicationController
  before_action :require_login!
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
    @board = current_user.boards.new(board_params)
    
    if @board.save
      render :json => @board
    else
      render :json => @board.errors, :status => :unprocessable_entity 
    end
  end
  
  def index
    @boards = Board.where(["user_id = ?", current_user.id])
    render :index
  end
  
  def show
    @board = Board.find(params[:id])
    render :show
  end
  
  private
  
  def board_params
    params.require(:board).permit(:title)
  end
end

