require 'test_helper'
require 'json'

class TodosControllerTest < ActionDispatch::IntegrationTest
    test "can CRUD todos" do
        get "/api/v1/todos"
        assert_response :success

        post "/api/v1/todos", params: {
            todo: {title:'a',body:'b'}
        }
        assert_response :success

        id = JSON.parse(@response.body)['id'].to_s
        assert id

        patch "/api/v1/todos/"+id, params: {
            todo: {title:'hi',body:'hi'}
        }
        assert_response :success
        
        delete "/api/v1/todos/"+id
        assert_response :success
    end
end