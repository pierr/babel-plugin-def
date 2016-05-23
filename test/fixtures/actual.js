import React, {Component, PropTypes} from 'react';

const MyComponent = ({name, age}) => <div>{name} {age}</div>

//My awesome propTypes description
MyComponent.propTypes = {
  // Name is describe now.
  name: PropTypes.string.isRequired,
  // Age props.
  age: PropTypes.number
};

const MyComp = React.createClass({
  propTypes:{
    // Name is describe now.
    name: PropTypes.string.isRequired,
    // Age props.
    age: PropTypes.number
  }
})


class MyOtherComp extends Component{
  render(){
    return <div>{hello}</div>;
  }
}

MyOtherComp.propTypes = {
  // Name is describe now.
  name: PropTypes.string.isRequired,
  // Age props.
  age: PropTypes.number
}

export default MyComponent;
