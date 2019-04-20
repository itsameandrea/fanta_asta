module Api
	module V1
    class ClientsController < ApplicationController
      
      def create
        client = Client.new client_params

        if client.save
          send_response client
        end
      end

      def index
        clients = Client.all

        send_response clients
      end

      def show
        client = Client.find_by_id params[:client]

        send_response client
      end

      private

      def send_response(res)
        render json: ClientSerializer.new(res)
      end

      def client_params
        params.require('client').permit(:name, :subdomain, :logo)
      end

		end
	end
end
