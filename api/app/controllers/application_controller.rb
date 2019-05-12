class ApplicationController < ActionController::API
  include Pundit
  include Knock::Authenticable
  
  before_action :set_current_request_details

  def set_current_request_details
    Current.user = current_user if current_user
    Current.client = current_user.client if current_user
  end

end