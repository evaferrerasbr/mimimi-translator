import React from 'react';
import '../stylesheets/App.scss';

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    return this.props.handleChange(ev.currentTarget.value);
  }

  render() {
    return (
      <form>
        <textarea
          onChange={this.handleChange}
          value={this.props.value}
          className="textarea"
        ></textarea>
      </form>
    );
  }
}

export default TextInput;
