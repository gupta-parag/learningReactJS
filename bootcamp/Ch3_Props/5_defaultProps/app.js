class App extends React.Component {
  render() {
    return (
      <div>
        <Hello fname="Parag" lname="Gupta"></Hello>
        <Hello></Hello>
        <Hello fname="Adam" lname="Mansion"></Hello>
        <Hello fname="Neufert"></Hello>
      </div>
    );
  }
}

ReactDOM.render(<App></App>, document.getElementById("root"));
