module Api
  module V1
    class UsersController < ApplicationController

      def create
        user = User.new user_params

        if user.save
          # If your User model has a `to_token_payload` method, you should use that here
          auth_token = Knock::AuthToken.new payload: { sub: user.id }
          puts auth_token.inspect
          response.set_header('x-auth-token', auth_token.token)
          render status: :created
        else
          render json: { error: user.errors.full_messages }, status: :unprocessable_entity
        end
      end

      private

      def user_params
        params.require(:user).permit(:email, :password, :password_confirmation)
      end
    end
  end
end
