

require(['react', 'react-dom', 'bootstrap', 'jsx!app/Calculator'], function(React, ReactDOM, Bootstrap, Calculator) {
  var start = new Date();
  Calculator = React.createFactory(Calculator);

  // Mount the JSX component in the app container
  ReactDOM.render(
      Calculator(),
      document.getElementById('calculator'));
});