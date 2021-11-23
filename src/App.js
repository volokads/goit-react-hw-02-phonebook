import './App.css';
import { Component} from 'react';

class App extends Component{
  state = {
    contacts: [],
    name: "",
  }
  render() {
    return (
      <div className="App">
        <div>
          <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        </label>
        <button type='button' onSubmit="submit">add contact</button>
        </div>
        <div>
          <h1>Contacts</h1>
          <ul>
            <li></li>
          </ul>
      </div>
    </div>
    )
  }

  
}

export default App;
