import { h, Component } from 'preact';

/* eslint-disable */
export default class Text extends Component {
    getAdj = letter => {
        return fetch(`http://api.wordnik.com:80/v4/words.json/search/${letter}?caseSensitive=true&includePartOfSpeech=adjective&excludePartOfSpeech=verb&minCorpusCount=7&maxCorpusCount=7&minDictionaryCount=1&maxDictionaryCount=-1&minLength=7&maxLength=-1&skip=0&limit=12&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5`)
            .then(response => response.json())
    }
    componentDidMount() {
        this.getAdj(this.props.children)
            .then(adj => {
                adj = adj.searchResults[Math.floor(Math.random() * 10) + 1].word;
                this.setState({ adjective: adj });
            })
    }
    render({}, { adjective, openDialog }) {
        return (
                <div onClick={this.handleOpenDialog} style="text-transform: capitalize;" className="bold">
                    {adjective}
                </div>
        )
    }
}