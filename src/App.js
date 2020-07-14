import React from 'react';
import Form from './containers/Form/Form'
import NetworkError from './hoc/NetworkError'

function App(props) {


  return (
    <div>

      <Form isDisconnected={props.isDisconnected} />

    </div>
  );
}


export default NetworkError(App);
