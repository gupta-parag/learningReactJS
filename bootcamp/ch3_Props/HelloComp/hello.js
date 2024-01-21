class Hello extends React.Component {
  render() {
    return (
      <h1>
        Hello from : {this.props.from}, Hello To: {this.props.to}
      </h1>
    );
  }
}
