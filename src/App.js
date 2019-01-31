import React from 'react'
import TodoItem from './components/TodoItem'
import todosData from './data/todosData'

// function App() {
//   const task = todosData.map(item => 
//       <TodoItem key={item.id} todoText={item} />
//   )

//   return (
//     <div>
//       {task}
//     </div>
//   )
// }

// class App extends React.Component {
//   constructor() {
//     super()

//     this.state = {
//       todosData: todosData
//     }
//   }
  
//   render() {
//     const task = this.state.todosData.map(item => 
//         <TodoItem key={item.id} text={item.text} completed={item.completed} />
//       ) 

//     return (
//       <div>
//         <p>{task}</p>
//       </div>
//     )
//   }
// }


// function App() {
//   return (
//       <div>
//           <h1>You are currently logged (in/out)</h1>
//       </div>
//   )
// }

// class App extends Component {
//   constructor() {
//     super()

//     this.state = {
//       isLoggedIn: true
//     }

//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick(event) {
//     this.setState({
//       isLoggedIn: !this.state.isLoggedIn
//     })
//   }

//   render() {
//     const loggedIn = this.state.isLoggedIn
//     let wordDisplay

//     if (loggedIn) {
//       wordDisplay = 'in'
//     } else {
//       wordDisplay = 'out'
//     }

//     return (
//       <div>
//         <h1>You are currently logged {loggedIn ? 'in' : 'out'}</h1>
//         <h1>You are currently logged {wordDisplay}</h1>
//         <button onClick={this.handleClick}>Click Me</button>
//       </div>
//     )
//   }
// }

class App extends React.Component {
  constructor() {
    super() 
      this.state = {
        firstName: ''
        , lastName: ''
        , age: ''
        , selectedGender: ''
        , destination: ''
        , peanutButter: false
        , meat: false
        , eggs: false
      }

      this.handleChange = this.handleChange.bind(this)
      this.handleClick = this.handleClick.bind(this)
    }
  
  handleChange(event) {
    const target = event.target
    const name = target.name
    const value = target.type === 'checkbox' ? target.checked : target.value

    this.setState({
      [name] : value
    })
  }

  handleClick() {
    debugger
    const message = this.state

    alert([this.state])
  }
  
  render() {
    return (
      <div>
        <form>
          <input type='text'
            placeholder='First Name'
            name='firstName'
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <br />
          <input type='text'
            placeholder='Last Name'
            name='lastName'
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <br />
          <input type='text'
            placeholder='Age'
            name='age'
            value={this.state.age}
            onChange={this.handleChange}
          />
          <br />
          <label>
            <input type='radio'
              name='selectedGender'
              value='Male'
              checked={this.state.selectedGender === 'Male'}
              onChange={this.handleChange}
            />Male
          </label>
          <label>
            <input type='radio'
              name='selectedGender'
              value='Female'
              checked={this.state.selectedGender === 'Female'}
              onChange={this.handleChange}
            />Female
          </label>
          <br />
          <br />
          <select name='destination' value={this.state.value} onChange={this.handleChange}>
            <option value='Hawaii'>Hawaii</option>
            <option value='New York'>New York</option>
            <option value='Korea'>Korea</option>
            <option value='Vietnam'>Vietnam</option>
          </select>
          <br />
          <br />
          <p>Dietary Restrictions</p>
          <label>
            <input type='checkbox'
              name='peanutButter'
              checked={this.state.peanutButter}
              onChange={this.handleChange}
            />Peanut Butter
          </label>
          <label>
            <input type='checkbox'
              name='meat'
              value={this.state.meat}
              onChange={this.handleChange}
            />Meat
          </label>
          <label>
            <input type='checkbox'
              name='eggs'
              checked={this.state.eggs}
              onChange={this.handleChange}
            />Eggs
          </label>
          <br />
          <br />
          <button onClick={this.handleClick}>Submit</button>
        </form>

        <hr />
        <h2>Entered Information:</h2>
        <p>Your Name: {this.state.firstName} {this.state.lastName}</p>
        <p>Your Age: {this.state.age}</p>
        <p>Your Gender: {this.state.selectedGender}</p>
        <p>Your Destination: {this.state.destination}</p>
        <p>Your Dietary Restrictions:
        {this.state.peanutButter ? 'Peanut Butter' : null}
          {this.state.meat ? 'Meat' : null}
          {this.state.eggs ? 'Eggs' : null}
        </p>
      </div>
    )
  }
}

export default App
