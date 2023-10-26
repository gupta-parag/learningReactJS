class Hello extends React.Component {
  render() {
    console.log(this.props);
    return (
      <h1>
        My name is first name :{this.props.fname} <br />
        and last name is :{this.props.lname}
      </h1>
    );
  }
}
