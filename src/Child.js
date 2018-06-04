import React, { Component } from 'react';

import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup';
import './App.css';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
initializeIcons(/* optional base url */);
class Childapp extends React.Component {



  _onChange()
  {

  }

    //render function for add html elements
    render() {
    return (<div id="custom-radio">
        
                <ChoiceGroup
                    defaultSelectedKey='A'
                    options={[
                        {
                            key: 'A',
                            text: 'Or',
                        },
                        {
                            key: 'B',
                            text: 'And',
                        }
                    ]}
                    onChange={this._onChange}
                    required={true}
                />
            </div>      
      );
    }
}

export default Childapp;