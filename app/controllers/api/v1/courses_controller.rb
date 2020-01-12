class Api::V1::CoursesController < ApplicationController
  def index
  end

  def create
  end

  def show
  end

  def destroy
  end

  def episodes
    @episodes = Course.first.episodes
    render json: { data: @episodes }
  end
end
