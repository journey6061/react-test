import React, {Component} from 'react';
import './App.css';
import Char from './components/Char';
import Newchar from './components/Newchar';


class App extends Component {
  state={
    userInput:'',
    updatePost:['cc', 'dd', 'woshinima'],
    addPost:[]
  }
  changHandler=(e)=>{
    this.setState({userInput:e.target.value});
  }
  /* testSele=()=>{
    this.state.updatePost.map(aa=>{
      return <Char character={aa} />
    });
  } */
  /* selectHandler=()=>{

  } */
  selectTest=(index)=>{
    /* this.state.updatePost.map((aa, bb)=>{
      return <Char character={aa} clicked={()=>this.selectTest(bb)}/>
    }); */
    console.log(this.state.updatePost[index]);
    {/* <Newchar 
    addchar={this.state.updatePost[index]}
    /> */}
    this.setState({
      addPost:[...this.state.addPost, this.state.updatePost[index]]
      })
    
  }
  render(){
    /* const testSele=this.state.userInput.split('').map(aa=>{
      return <Char character={aa} />
    }); */
    const testSele=this.state.updatePost.map((aa, bb)=>{
      return <Char character={aa} clicked={()=>this.selectTest(bb)}/>
    });

    let {userInput, updatePost, addPost}=this.state;

    /* let testAdd=null;
    if
    const testAdd=(
      {

      }
    ) */
  return (
    <div className="App">
      <input 
      type='text' 
      onChange={this.changHandler} 
      value={this.state.userInput} 
      />
      <p>{this.state.userInput}</p>
{/*       <button onClick={this.testSele}>test</button>
 */}     
   
      {/* <Char 
      character={this.state.updatePost.map(aa=>{
        return <Char character={aa} clicked={this.selectHandler} />
      })}
      //clicked={this.selectHandler}
      /> */}
      {testSele}
      <ul>
        {
          addPost.map((item,bb)=>{
              return (<li key={bb}>{item}</li>)
          })
        }
      </ul>
    </div>
  );
}
}

export default App;
