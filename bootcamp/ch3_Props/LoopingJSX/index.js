class App extends React.Component {
  render() {
    const hobbies = ["reading", "programming", "front-end"];
    return (
      <div>
        <h1>My hobbies are : </h1>
        <ul>
          {hobbies.map((d) => (
            <li>{d}</li>
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
