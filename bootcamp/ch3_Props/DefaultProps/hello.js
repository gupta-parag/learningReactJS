class Hello extends React.Component {
  static defaultProps = {
    from: "Alexander",
    to: "Canute",
  };
  render() {
    return (
      <h1>
        Hello from : {this.props.from}, Hello To: {this.props.to}
      </h1>
    );
  }
}
