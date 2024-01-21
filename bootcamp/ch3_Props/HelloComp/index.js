class App extends React.Component {
  render() {
    return (
      <div>
        <Hello from="Parag" to="Jackie" />
        <Hello from="PG" to="Brittany" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
