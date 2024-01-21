class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <h1>My name is Parag Gupta</h1>
        <Hello />
        <Hello />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
