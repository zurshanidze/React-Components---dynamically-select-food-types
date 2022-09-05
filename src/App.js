import { Component, Fragment } from 'react';
import './App.css';
import Fruits from './Fruits';
import Vegetables from './Vegetables';
import Home from './Home'

  
  // var yourVar = condition1 ? someValue
  //           : condition2 ? anotherValue
  //           : defaultValue;

class TypesOfFood extends Component{

  constructor(props) {
    super(props);

    this.state ={
      fruits: <Fruits/>,
      vegetables: <Vegetables/>,
      home: <Home/>
    }
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }

  setComponent =()=>{
    if(this.state.value === "fruits"){
      return <Fruits/>
    } else if (this.state.value === "vegetables"){
      return <Vegetables/>
    } else if (this.state.value === "home") {
      return <Home/>
    }
  }

  render() {
    return (
      <Fragment>
        <div className="App">
        <h1>Types of Food:</h1>
          <select id="select" name="choose" value={this.setState.value} placeholder='choose product' onChange={this.onChange}>
            <option id="fruits" name="choose1" value="fruits" placeholder='Fruits'>Fruits</option>
            <option id="vegetables" name="choose2" value="vegetables" placeholder='Vegetables'>Vegetables</option>
            <option id="home" name="choose3" value="home" placeholder='Home'>Home</option>
          </select>
        </div>
          <div>
            {this.setComponent()}
          </div>
      </Fragment>
    );
  }
}

export default TypesOfFood;
