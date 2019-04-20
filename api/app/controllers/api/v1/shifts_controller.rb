module Api
	module V1
		class ShiftsController < ApplicationController

			def create
				shift = Shift.new shift_params

				if shift.save
					send_response shift
				end
			end

			def index
				shifts = policy_scope(Shift)

				send_response shifts
			end

			def show
				shift = policy_scope(Shift).find_by_id params[:id]

				send_response shift
			end

			def update
				shift = policy_scope(Shift).find_by_id params[:id]
				
				if shift.update_attributes shift_params
					send_response shift
				end
			end

			def destroy
				shift = policy_scope(Shift).find_by_id params[:id]
				shift.destroy
			end

			private

			def shift_params
        params.require(:shift).permit(:team_id, :date, :start_time, :end_time, :employee_id)
      end

			def send_response(res)
				render json: ShiftSerializer.new(res)
			end

		end
	end
end
