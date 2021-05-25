
import React from 'react';
import ReactDOM from 'react-dom';
//import PropTypes from 'prop-types';
import './styles/style.css';
import data from './quotes.json'

 
const quotes = data.quotes; // this is an array of objects

class RandomQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: this.randomIndex(),
      get quote() {
        return quotes[this.index].quote;
      },
      get author() {
        return quotes[this.index].author;
      } 
    };
    this.randomIndex = this.randomIndex.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  randomIndex () {
    return Math.floor((Math.random() * quotes.length));
  }

  handleClick() {
    const index = this.randomIndex();
    this.setState({
      index: index,
      quote: quotes[index].quote,
      author: quotes[index].author
    });
  }

  render() {
    return (
      <div>
        <section id="quote-box" className="text-center" >
          <div id="quote-container" className="jumbotron">
            <h1 className="display-4" id="text">
            <i className="fa fa-quote-left fa-2x fa-pull-left"></i>
              {this.state.quote}
            </h1>
            <p id="author" className="author">{this.state.author}</p>
          </div>
          <div id="button-container" className="button">
            <button type="button" onClick={this.handleClick} className="btn btn-light" id="new-quote">New Quote</button>
          </div>
          <div id="social-media-container" className="button">
            <a href="www.twitter.com/intent/tweet" target="_blank" id="tweet-quote" title="Tweet this Quote!">
              <div>
                <i className="fa fa-twitter fa-3x"></i>
              </div>
            </a>
          </div>
        </section>
      </div>
    );
  }
}


// ReactDOM.render(componentToRender, targetNode)
ReactDOM.render(<RandomQuote />,
  document.getElementById('root')
);

