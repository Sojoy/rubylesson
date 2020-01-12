class Api::V1::CoursesController < ApplicationController
  def index
  end

  def create
    episode = Episode.create!(episode_params)
    if episode
      render json: episode
    else
      render json: episode.errors
    end
  end

  def show
    if episode
      render json: episode
    else
      render json: episode.errors
    end
  end

  def destroy
    episode&.destroy
    render json: { message: 'Episode deleted!' }
  end

  def episodes
    @episodes = Course.first.episodes
    render json: { data: @episodes }
  end

  private

  def episode_params
    params.permit(:title, :description, :url, :section_id)
  end

  def episode
    @episode ||= Episode.find(params[:id])
  end
end
