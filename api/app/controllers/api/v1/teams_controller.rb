module Api
	module V1
		class TeamsController < ApplicationController

			def create
				team = Team.new team_params

				if team.save
					send_response team
				end
			end

			def index
				teams = policy_scope(Team)

				send_response teams
			end

			def show
				team = policy_scope(Team).find_by_id params[:id]

				send_response team
			end

			def update
				team = Team.find_by_id params[:id]
				team.update_attributes team_params

				send_response team
			end

			def destroy
				team = Team.find_by_id params[:id]
				team.destroy

				render status: :no_content
			end
			
			private

			def team_params
				params.require(:team).permit(:name, :color)
			end

			def send_response(res)
				render json: TeamSerializer.new(res)
			end
		end
	end
end
