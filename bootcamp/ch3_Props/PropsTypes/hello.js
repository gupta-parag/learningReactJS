class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hello from : {this.props.from}, I am {this.props.age[0]} years old
        </h1>
        <h1>
          Hello To: {this.props.to}, I am {this.props.age[1]} years old
        </h1>
        <img src={this.props.img} alt={this.props.alt} />
      </div>
    );
  }
}
