function mood() {
  let moods = ["angry", "anxious", "hungry", "motivated"];
  return moods[Math.floor(Math.random() * moods.length)];
}

class JSXDemo extends React.Component {
  render() {
    let height = 1200;
    return (
      <div>
        <h1>My mood is : {mood()}</h1>
      </div>
    );
  }
}
