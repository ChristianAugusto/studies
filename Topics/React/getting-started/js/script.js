


// ReactDOM.render(
//   <h1>Hello World - by React</h1>, 
//   document.getElementById("app")
// );


const Title = React.createClass({
  render() {
    return (
      <h1>Hello World - by React</h1>
    );
  }
});

ReactDOM.render(
  <Title />,
  document.getElementById("app")
);