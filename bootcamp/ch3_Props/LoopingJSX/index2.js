class App extends React.Component {
  render() {
    const hobbies = ["reading", "programming", "front-end"];
    let listOfhobbies = hobbies.map((d) => <li>{d}</li>);
    return (
      <div>
        <h2>Making hobbies JSX array in JS </h2>
        <ul>{listOfhobbies}</ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
