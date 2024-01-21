function smiley() {
  const sm = ["apple", "orange", "grapes"];
  return sm[Math.floor(Math.random() * 3)];
}

class Slot extends React.Component {
  render() {
    const x = [smiley(), smiley(), smiley()];
    return (
      <div>
        <h2>{x.join(" ")}</h2>
        <h2>{x[0] === x[1] && x[1] === x[2] ? "You Win!" : "You lose!"}</h2>
      </div>
    );
  }
}
