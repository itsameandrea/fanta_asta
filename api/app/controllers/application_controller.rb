class ApplicationController < ActionController::API
  include Pundit
  include Knock::Authenticable
  
  before_action :set_current_request_details

  def set_current_request_details
    Current.user = current_user if current_user
    client = Client.find_by_subdomain request.subdomain
    Current.client = client if client
  end
	
  private
  
  def authenticate_api_user
    authenticate_for Api::V1::User
  end
end
