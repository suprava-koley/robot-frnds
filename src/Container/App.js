import React from 'react';
import  {Component} from 'react';
import Search from '../Components/Search';
import CardList from '../Components/CardList';
 import robot from '../Components/robot';
import './App.css'
import Scroll from '../Components/Scroll';


class App extends Component  {
 constructor(){
   super()
   this.state={
    robot:robot,
    searchfield:''
  }
 }

 componentDidMount(){
   fetch('http://jsonplaceholder.typicode.com/users')
   .then(response=> response.json())
   .then(users => {this.setState({robot :users})});
 }

 onSearchChange =(event)=>{
    this.setState({searchfield:event.target.value})
  }
  render(){
    const filterrobo = this.state.robot.filter(el=>{
      return el.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())});
    
            return (
                  <div className='tc'>
                   
                    <h1>Robot</h1>
                    <Search searchChange={this.onSearchChange}/>
                    <Scroll>
                    <CardList robot={filterrobo}/>
                    </Scroll>
                  </div>
            );  
 }
 
  
}

export default App;
