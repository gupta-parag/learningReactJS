function returnNumber() {
  return Math.floor(Math.random() * 11);
}

class Message extends React.Component {
  render() {
    const num = returnNumber();
    return (
      <div>
        <h1>Message is :{num == 7 ? " You are a lucky man" : " Normal Man"}</h1>
        <h2>Your number is : {num}</h2>
      </div>
    );
  }
}

ReactDOM.render(<Message />, document.getElementById("root"));
