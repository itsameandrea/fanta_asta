class Api::V1::UserTokenController < Knock::AuthTokenController
  def create
    response.set_header('x-auth-token', auth_token.token)
    render json: {}, status: :created
  end
end