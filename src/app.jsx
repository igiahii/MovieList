import React, { PureComponent } from 'react'
import Counters from './component/counters';
import Navbar from './component/navbar'
class App extends PureComponent {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <Navbar/>
                <Counters/>
            </React.Fragment>
        );
    }
}
 
export default App;