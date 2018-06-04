import React, { Component } from 'react';

import { ActionButton } from 'office-ui-fabric-react/lib/Button';
import './App.css';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
initializeIcons(/* optional base url */);
class Buttonapp extends React.Component {




    //render function for add html elements
    render() {
    return (
        
        <div style={ { display: 'flex', alignItems: 'stretch', height: '40px', width:'100%'} }>              

<ActionButton
          data-automation-id='test'
          iconProps={ { iconName: 'CalculatorMultiply' } }
          disabled={ false }
          checked={ false }
        >
          Reset
        </ActionButton>
                
            </div>      
      );
    }
}

export default Buttonapp;
