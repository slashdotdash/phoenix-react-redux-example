# Phoenix + React + Redux Example

[Integrating React and Redux with the Phoenix web framework](http://10consulting.com/2015/11/18/phoenix-react-redux-example/).

Heavily inspired by @[ryanswapp](https://github.com/ryanswapp)'s [elixir-react-redux-example](https://github.com/ryanswapp/elixir-react-redux-example).

Implementation of the basic TODO example from the [Redux documentation](http://rackt.org/redux/docs/basics/UsageWithReact.html). 

Uses an Elixir agent for in-memory persistence of the TODO list. 

Phoenix channels (websocket) are used for client <=> server communication and to support multiple users.

Demonstrates an end-to-end integration of the following tools.

- [Phoenix web framework](http://phoenixframework.org)
- [React](https://facebook.github.io/react/)
- [Redux](https://github.com/rackt/redux) (`redux`)
- [React Redux](https://github.com/rackt/react-redux) (`react-redux`) 
- [Webpack](https://webpack.github.io/)

## Quickstart guide

  1. Clone repository with `git clone https://github.com/slashdotdash/phoenix-react-redux-example.git`  
  2. Install npm dependencies with `npm install`
  3. Install Phoenix dependencies with `mix deps.get`
  4. Start Phoenix endpoint with `mix phoenix.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.
