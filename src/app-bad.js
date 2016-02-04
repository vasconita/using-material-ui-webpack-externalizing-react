var React=require('react');
var ReactDOM=require('react-dom');
var RaisedButton=require('material-ui/lib/raised-button');

ReactDOM.render(React.createElement(RaisedButton,{label:'Raised Button'}),
  document.getElementById('app')
);