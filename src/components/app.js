import { h, Component } from 'preact';
import mdl from 'material-design-lite/material';
import { Button, Card, TextField, List, ListItem, ListItemContent } from 'preact-mdl';

import Text from './Text';

/* eslint-disable */
export default class App extends Component {
	updateText = e => {
		this.setState({ text: e.target.value });
	};
	
	acrostic = e => {
		this.setState({ letters: [] })
		this.state.text && this.setState({letters: this.state.text.toLowerCase().split('')})
	};
	
	render({ }, { text, letters }) {
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
					<br/>
					{
						text && <Card shadow={2} style={{ margin: 'auto', padding: '3px', width: '300px' }}>
							<h5 style={{ textAlign: 'center' }}>{`You Entered "${text}"`}</h5>
							{
								<List>
									{
										letters && letters.map(letter => <ListItem><ListItemContent><Text>{letter}</Text></ListItemContent></ListItem>)
									}
								</List>
							}
						</Card>
					}
				</Card>
			</div>
		);
	}
}
