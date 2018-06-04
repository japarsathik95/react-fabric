import React from 'react';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import './App.css';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import Childapp from './Child';
import Button from './Button'
import ReactDOM from 'react-dom';

initializeIcons(/* optional base url */);
class App extends React.Component {
  //constructor function to initialize the state values
  constructor() {
    super()
    this.state = {
      selectedItem: undefined,
      selectedItems: []
    }
    
  }


  //Function to append the ChoiceGroup with Dropdown component
changeState() {  
    
 
}



addchoicegroup()
{

  setTimeout(function(){   
   
    if(document.getElementById("Dropdown0-list") != null)
    {
    // temporary render target
    var temp = document.createElement("div");
    // render
    ReactDOM.render(<Childapp />, temp);
    // grab the container
    var container = document.getElementById("Dropdown0-list");
    // and append the child
    container.insertBefore(temp,document.getElementById("Dropdown0-list").childNodes[0]);
    

    var tempbutton = document.createElement("div")
    ReactDOM.render(<Button />, tempbutton);
    container.appendChild(tempbutton);
    }
    
      },0);
      
}

  

  //render function for add html elements
  render() {

    return (
        
        <div className='docs-DropdownExample' onClick={this.addchoicegroup}>
          <Dropdown
            placeHolder='Select options'
            label='Multi-Select:'
            defaultSelectedKeys={['Apple']}
            //onChanged={this.changeState}
            multiSelect
            options={
              [
                { key: 'Apple', text: 'apple' },
                { key: 'Banana', text: 'banana' },
                { key: 'Orange', text: 'orange' },
                { key: 'Grape', text: 'grape' },

              ]
            }
          />
          
        </div>
       
      
    );
  }
}

export default App;