// import './App.css';
// import Table from './Components/table'
// import Table1 from './Components/table1'

// import React, { Component } from 'react'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
// <h1>Hello React</h1>        
// {/* <Table /> */}
// <Table1 />

//       </div>
//     )
//   }
// }


import React, {Component} from 'react'
import Table3 from './Components/table3'





class App extends Component {
  render() {
    const characters = [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]

    return (
      <div className="container">
        <Table3 characterData={characters} />
      </div>
    )
  }
}

export default App