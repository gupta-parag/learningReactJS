class Hello extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>{this.props.data.join(" ")}</h3>
        <h2>
          {this.props.data[0] === this.props.data[1] &&
          this.props.data[0] === this.props.data[2]
            ? "You win!!"
            : "You lose"}
        </h2>
      </div>
    );
  }
}
