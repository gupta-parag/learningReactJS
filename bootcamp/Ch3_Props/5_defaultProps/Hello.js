class Hello extends React.Component {
  static defaultProps = {
    fname: "Rachel",
    lname: "Czechnizky",
  };
  render() {
    return (
      <h1>
        My name is {this.props.fname} {this.props.lname}
      </h1>
    );
  }
}
