function moodType() {
  let moods = ["angry", "hungry", "annoyed", "frustrated", "irritated"];
  return moods[Math.floor(Math.random() * 5)];
}

class JSXDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>My mood is : {moodType()}</h1>
      </div>
    );
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById("root"));
