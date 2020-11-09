import React from 'react';
import '../stylesheets/App.scss';

class MIMIMITranslator extends React.Component {
  render() {
    return (
      <p className="text">
        {this.props.preparedText.replace(/[aeiou-áéíóú]/gi, 'i')}
      </p>
    );
  }
}

export default MIMIMITranslator;
