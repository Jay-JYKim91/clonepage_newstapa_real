class MansController < ApplicationController
  def index
    @mans = Man.all
  end
end
