module Api
	module V1
		class ShiftsController < ApplicationController

			def create
				shift = Shift.new shift_params
				if shift.save

				end
			end

			def index
				shifts = Shift.all
			end

			def show
				shift = Shift.find_by_id params[:id]
			end

			def update
				shift = Shift.find_by_id params[:id]
				shift.update_attributes shift_params
			end

			def destroy
				shift = Shift.find_by_id params[:id]
				shift.destroy
			end

		end
	end
end
