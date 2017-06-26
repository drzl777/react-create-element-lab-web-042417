import React from 'react';
import ReactDOM from 'react-dom';

// IMPORTANT!!!! uncomment the lines below to make your tests work
const awesomePerson = React.createElement('h1', {}, 'An Awesome Person')
const learningReact = React.createElement('p', {}, 'Who is learning React')
const interestList = React.createElement('ul', {className: 'my-interests'},
  [
      React.createElement('li', {}, 'JavaScript'),
      React.createElement('li', {}, 'React'),
      React.createElement('li', {}, 'Movies'),
      React.createElement('li', {}, 'Ice cream')
    ]
)
const meInReact = React.createElement('div', {className: 'me'}, awesomePerson, learningReact, interestList)

ReactDOM.render(
  meInReact,
  document.getElementById('root')
);

export default meInReact
