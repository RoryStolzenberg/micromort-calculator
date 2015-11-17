

require(['react', 'react-dom', 'jsx!app/Calculator'], function(React, ReactDOM, Calculator) {
  Calculator = React.createFactory(Calculator);

  // Mount the JSX component in the app container
  ReactDOM.render(
      Calculator(),
      document.getElementById('calculator'));
});