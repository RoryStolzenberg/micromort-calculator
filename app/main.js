

require(['react', 'react-dom', 'bootstrap', 'jsx!app/Calculator'], function(React, ReactDOM, Bootstrap, Calculator) {
  Calculator = React.createFactory(Calculator);

  // Mount the JSX component in the app container
  ReactDOM.render(
      Calculator(),
      document.getElementById('calculator'));
});