import React, { Component} from 'react';


class Calc extends Component() {
    state ={
        msg: "",
    }

    handleClick = (e)=>{
        const{msg} = this.state;
        
this.state.msg = 'Hello world';
    };

    render (){
       return <div>
       <button onClick={this.handleClick}>Click</button>
       <div>{this.state.msg}</div>
      </div>
    };
  }
  
  export default Calc;