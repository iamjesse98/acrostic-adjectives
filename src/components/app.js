import { h, Component } from 'preact';
import mdl from 'material-design-lite/material';
import { Button, Card, TextField } from 'preact-mdl';

// async function getAdj(letter) {
// 	let response = await fetch(`http://api.wordnik.com:80/v4/words.json/search/${letter}?caseSensitive=true&includePartOfSpeech=adjective&excludePartOfSpeech=verb&minCorpusCount=7&maxCorpusCount=7&minDictionaryCount=1&maxDictionaryCount=-1&minLength=7&maxLength=-1&skip=0&limit=12&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5`);
// 	let data = await response.json();
// 	return data;
// }

/* eslint-disable */
export default class App extends Component {
	updateText = e => {
		this.setState({ text: e.target.value });
	};
	getAdj = letter => {
		return fetch(`http://api.wordnik.com:80/v4/words.json/search/${letter}?caseSensitive=true&includePartOfSpeech=adjective&excludePartOfSpeech=verb&minCorpusCount=7&maxCorpusCount=7&minDictionaryCount=1&maxDictionaryCount=-1&minLength=7&maxLength=-1&skip=0&limit=12&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5`)
			.then(response => response.json())
	}
	acrostic = e => {
		this.state.text && this.state.text.split('').map(letter => {
			this.getAdj(letter)
				.then(adj => this.setState({ adjs: [ ...this.state.adjs, adj.searchResults[Math.floor(Math.random() * 11) + 1].word ] }));
		});
	}
	render({ }, { text, adjs }) {
		return (
			<div id="app">
				<h3 style={{ textAlign: 'center' }}>Acrostic Adjective Poem Generator</h3>
				
				<Card shadow={2} style={{ width: '100%', margin: 'auto', padding: '10px' }}>
					<TextField
						label="Title Here..."
						floatingLabel
						style={{ width: '100%' }}
						value={text}
						onInput={this.updateText}
					/>
					<Button style={{ background: 'dodgerblue', marginBottom: '2px' }} onClick={this.acrostic}>Generate</Button>
					{
						text && `You Entered "${text}"`
					}
					{
						adjs && this.state.adjs.map( adj => { <p>{ adj }</p> })
					}
				</Card>
			</div>
		);
	}
}
