class FirstController < ApplicationController
  def get
    render :json => { a:'a', b:'b', message: 'Success', ajuda:[1,2,3,'dasdas'] }
  end

  def post
    render :json => request.body.read
  end
end
