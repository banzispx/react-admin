//根组件
import  React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

// 组件引入
import Login from './pages/login/login.js'
import Admin from './pages/admin/admin.js'
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
//             <div>
// <Login/>

//             </div>
<BrowserRouter>
            
                <Switch>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/' component={Admin}></Route>
                </Switch>
               
            </BrowserRouter>
           
        );
    }
}

export default App;