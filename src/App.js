import React, { Component } from 'react';
import './App.css';

const Letter = ({character, className}) => <span className={className}>{character}</span>;

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			anagramOf: 'anagram',
			input: ''
		};
		this.cache = [];

		this.handleAnagram = this.handleAnagram.bind(this);
		this.handleCheck = this.handleCheck.bind(this);
	}

	handleAnagram(event) {
		this.setState({
			anagramOf: event.target.value
		});
	}

	handleCheck(event) {
		this.setState({
			input: event.target.value
		});
	}

	checkLetter(letter, i) {

		let inCache = this.cache.indexOf(letter);
		let isActive = true;

		if ( inCache !== -1 ) {
			this.cache.splice(inCache, 1);
			isActive = false;
		}

		return (
			<Letter key={i} character={letter} className={ isActive ? 'is-active' : 'is-inactive' } />
		);
	}

	getLetters() {
		this.cache = this.state.input.toLowerCase().split('');

		return (
			this.state.anagramOf.split('').map( (letter, i) => this.checkLetter(letter, i) )
		);
	}

	render() {
		return (
			<div className="App">

				<h1>{this.getLetters()}</h1>

				<input type="text" value={this.state.anagramOf} onChange={this.handleAnagram} placeholder="anagram" />

				<input type="text" value={this.state.input} onChange={this.handleCheck} />

			</div>
		);
	}
}

export default App;
