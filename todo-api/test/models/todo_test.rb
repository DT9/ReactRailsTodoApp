require 'test_helper'

class TodoTest < ActiveSupport::TestCase
  test "todo model" do
    todo = todos(:one)
    assert_equal "MyString", todo.title
  end
end
