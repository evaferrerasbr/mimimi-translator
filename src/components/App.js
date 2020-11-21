import React from 'react';
import TextInput from './TextInput';
import MIMIMITranslator from './MIMIMITranslator';
import '../stylesheets/App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: '',
    };
  }

  handleChange(param) {
    this.setState({
      value: param,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Traductor mimimi</h1>
        <TextInput handleChange={this.handleChange} value={this.state.value} />
        <MIMIMITranslator value={this.state.value} />
      </div>
    );
  }
}

export default App;
