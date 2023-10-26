class Hello extends React.Component {
  render() {
    const { name, hobbies } = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <ul>
          {hobbies.map((d) => (
            <li>{d}</li>
          ))}
        </ul>
      </div>
    );
  }
}
