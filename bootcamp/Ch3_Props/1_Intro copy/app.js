class App extends React.Component {
  render() {
    return (
      <div>
        <Hello fname="Parag" lname="Gupta"></Hello>
        <Hello fname="Rachel" lname="Jones"></Hello>
      </div>
    );
  }
}

ReactDOM.render(<App></App>, document.getElementById("root"));
