class ApplicationController < ActionController::API
  include Pundit
	include Knock::Authenticable
	
	private
  
  def authenticate_api_user
    authenticate_for Api::V1::User
  end
end
