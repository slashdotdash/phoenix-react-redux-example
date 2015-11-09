defmodule PhoenixReactReduxExample.PageController do
  use PhoenixReactReduxExample.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
