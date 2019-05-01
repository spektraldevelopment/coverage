import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faEdit, faTrashAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
//import logo from './logo.svg';

//Global Components
import Header from './components/header/header';

//Views
import MainView from './views/main-view/main-view';
import AddView from './views/add-view/add-view';
import EditView from './views/edit-view/edit-view';
import ItemView from './views/item-view/item-view';
import LoginView from './views/login-view/login-view';

//Import font awesome icons
library.add(faPlus);
library.add(faEdit);
library.add(faTrashAlt);
library.add(faSearch);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {}
    }
  }

  loginUser = (isLoggedIn, user) => {
    this.setState({
      isLoggedIn,
      user
    });
  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          
          {/* Login View */}
          <Route exact path="/" 
            render={(props) => <LoginView {...props} 
              loginUser={this.loginUser} /> }/>
          
          {/* Add View */}
          <Route exact path="/add" component={AddView}/>
          
          {/* Edit View */}
          <Route exact path="/edit/:id" component={EditView}/>
          
          {/* ItemView */}
          <Route exact path="/item/:id" component={ItemView}/>
          
          {/* Main View */}
          <Route exact path="/items" 
            render={(props) => <MainView {...props} 
              isLoggedIn={this.state.isLoggedIn}
              user={this.state.user} /> }/>
          <Redirect from="*" to='/' />
        </Switch>
      </>
    );
  }
}

export default App;