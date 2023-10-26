class Hello extends React.Component {
  render() {
    const winOrLose =
      this.props.data[0] === this.props.data[1] &&
      this.props.data[0] === this.props.data[2];
    console.log(this.props);
    return (
      <div className={winOrLose ? "winner" : "loser"}>
        <h3>{this.props.data.join(" ")}</h3>
        <h2>{winOrLose ? "You win!!" : "You lose"}</h2>
      </div>
    );
  }
}
