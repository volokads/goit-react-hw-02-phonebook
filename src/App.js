import './App.css';
import { Component} from 'react';
import { nanoid } from 'nanoid';

class App extends Component{
  state = {
    contacts: [],
    name: "",
    number: "",
  }
  handleChange = (e) => {
    // this.setState((prev) =>
    // prev[{ [e.target.name]: e.target.value }])
    this.setState(
    { [e.target.name]: e.target.value })
  }

  handlePhoneChange = (e) => {
    this.setState(
    { [e.target.name]: e.target.value })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // const id = nanoid()
    // this.setState((prev) => {
      
    // })
    this.state.contacts.push({ name: this.state.name,number: this.state.number, naID : nanoid() })
    console.log(this.state);
  }
  render() {
    return (
      <div className="App">
        <div>
          <form onSubmit={this.handleSubmit}>
          <label>
        Name
        <input
          type="text"
          name="name"
          value={this.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleChange}
        />
        </label>
        <label>
              Phone Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handlePhoneChange}
          />
        </label>
        <button type='submit' >add contact</button>
        </form>
        </div>
        <div>
          <h1>Contacts</h1>
          <ul>
            {this.state.contacts.map((contact) =>
            { return <li id={contact.id} key={contact.id} name={contact.name}>{contact.name}, { contact.number}</li>})}
          </ul>
      </div>
    </div>
    )
  }

  
}

export default App;
