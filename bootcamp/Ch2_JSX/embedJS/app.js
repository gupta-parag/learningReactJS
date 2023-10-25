function mood() {
  let moods = ["angry", "anxious", "hungry", "motivated"];
  return moods[Math.floor(Math.random() * moods.length)];
}

class FirmName extends React.Component {
  render() {
    return <h3>Census Application</h3>;
  }
}

class JSXDemo extends React.Component {
  render() {
    let height = 1200;
    return (
      <div>
        <FirmName></FirmName>
        <h1>My mood is : {mood()}</h1>
      </div>
    );
  }
}

ReactDOM.render(<JSXDemo></JSXDemo>, document.getElementById("root"));
