module Api
	module V1
		class TeamsController < ApplicationController

			def create
				team = Team.new team_params
				if team.save

				end
			end

			def index
				teams = Team.all
			end

			def show
				team = Team.find_by_id params[:id]
			end

			def update
				team = Team.find_by_id params[:id]
				team.update_attributes team_params
			end

			def destroy
				team = Team.find_by_id params[:id]
				team.destroy
			end

		end
	end
end
