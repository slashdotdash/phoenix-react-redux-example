defmodule PhoenixReactReduxExample.TodoChannel do
  use PhoenixReactReduxExample.Web, :channel

  def join("todos:" <> todo_id, _params, socket) do
    {:ok, assign(socket, :todo_id, todo_id) }
  end

  def handle_in("new:todo", params, socket) do
    broadcast! socket, "new:todo", %{
      text: params["text"]
    }

    {:reply, :ok, socket}
  end
end