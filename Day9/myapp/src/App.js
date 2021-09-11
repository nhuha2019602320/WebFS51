import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './component/header'
import Footer from "./component/footer"
import LifeCycle from './component/lifecycle'
import newJson from './new.json'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lifeCycleActive: true,
      footerText: "hải tran nhu",
      news: newJson,
      filtered: newJson
    }
  }

  getKeyWord = (event) => {
    let keyword = event.target.value;
    let filtered = this.state.news.filter((item) => {
      return item.title.indexOf(keyword) > -1;
    });
    this.setState({filtered})
    console.log(keyword)
  }

  render () {
    const {filtered} = this.state
    return(
      <>
        <Header onchangeKeyword={this.getKeyWord} />
        {this.state.lifeCycleActive ? <LifeCycle /> : null}
        <button onClick={() => this.setState({lifeCycleActive: !this.state.lifeCycleActive})} >action</button>
        <Footer footerText={this.state.footerText}></Footer>
      </>
    )
  }
}

export default App;
