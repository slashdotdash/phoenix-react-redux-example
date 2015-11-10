defmodule PhoenixReactReduxExample.TodoServer do
  def start_link do
    Agent.start_link(fn -> [] end, name: __MODULE__)
  end

  @doc "Get list of all TODOs"
  def all() do
    Agent.get(__MODULE__, fn todos -> todos end)
  end

  @doc "Add a new incomplete TODO"
  def add(text) do
    todo = %{
      :text => text,
      :completed => false
    }
    Agent.update(__MODULE__, fn todos -> todos ++ [todo] end)
  end
end