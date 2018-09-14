import React, { Component } from 'react';
import axios from 'axios';
import List from './components/list/List';
import { items } from './Static-Data';  
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

class App extends Component {
  state = {
    items: {},
    loading: false
  };

  loadLocalPosts() {
    this.setState({
      items: items
    });
  }

  loadRemotePosts() {
    this.setState({
      loading: true,
      items: {}
    });

    axios.get('https://www.reddit.com/r/angular.json').then(response => {
      this.setState({
        items: response.data,
        loading: false
      });
    })
  }

  sortByScore() {
    let children = this.state.items.data.children.slice(0);
    children.sort(function(a, b) { 
      return b.data.score - a.data.score;
    });

    this.setState({
      items: {
        data: {
          children 
        }
      }
    });
  }

  hidePost = (item) => {
    let index = -1;
    for(let i in this.state.items.data.children) {
      if(this.state.items.data.children[i].data.id === item.id) {
        index = i;
      }
    }

    let children = this.state.items.data.children.slice(0);
    children.splice(index, 1);

    this.setState({
      items: {
        data: {
          children: children
        }
      }
    });
  }

  render() {
    return (
      <div className="Reddit">
        <div className="Controls">
          <button onClick={() => this.loadLocalPosts()}>Load local posts</button>
          <button onClick={() => this.loadRemotePosts()}>Load remote posts</button> 
          {this.state.items.data && <button onClick={() => this.sortByScore()}>Sort post by score</button>}
        </div>
        {(!this.state.loading && <List onHidePost={this.hidePost} items={this.state.items} />) || <i className="fa fa-spinner fa-spin"></i>}
      </div>
    );
  }
}

export default App;
