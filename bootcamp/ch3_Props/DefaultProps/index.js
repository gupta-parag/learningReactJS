class App extends React.Component {
  render() {
    return (
      <div>
        <Hello to="Jackie" />
        <Hello from="PG" to="Brittany" />
        <Hello from="PG" />
        <Hello />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
