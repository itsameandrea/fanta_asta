module Api
	module V1
		class UsersController < ApplicationController
      
      def create
        user = User.new user_params

        if user.save
					auth_token = Knock::AuthToken.new payload: { sub: user.id }
					render json: { jwt: auth_token.token }
          render status: :created
        else
          render json: { error: user.errors.full_messages }, status: :unprocessable_entity
        end
      end
      
      def me 
        if current_user
          send_response current_user
        end
			end
			
			# def index
			# 	users = policy_scope(User)

			# 	send_response users
      # end

			# def show
			# 	user = policy_scope(User).find_by_id params[:id]

			# 	send_response user
			# end

			# def update
			# 	user = User.find_by_id params[:id]
			# 	user.update_attributes user_params

			# 	send_response user
			# end

			# def destroy
			# 	user = User.find_by_id params[:id]
			# 	user.destroy

			# 	render status: :no_content
			# end
			
			private

			def user_params
        params.require(:user).permit(:email, :password, :password_confirmation)
      end

			def send_response(res)
				render json: UserSerializer.new(res)
			end
		end
	end
end

