import React from 'react'
import store from '../store'
import {addRow} from '../store'
console.log(addRow)

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.addRow = this.addRow.bind(this)
    }
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
    }
    componentWillUnmount() {
        this.unsubscribe()
    }

    addRow() {
        store.dispatch(addRow())
    }

    render() {
        return (
            <div id='pixelate'>
                <h1>Pixelate</h1>
                <div>
                    <button id="add-row" onClick={this.addRow}>Add a row</button>
                    <select>
                        <option value="red">Red</option>
                        <option value="orange">Orange</option>
                        <option value="yellow">Yellow</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                        <option value="indigo">Indigo</option>
                        <option value="violet">Violet</option>
                        <option value="black">Black</option>
                        <option value="white">White</option>
                        <option value="brown">Brown</option>
                    </select>
                </div>
                <table>
                    <tbody>{this.state.grid.map((row, idx) =>
                        <tr key={idx}>
                            {row.map((pixel, idx) => <td key={idx} value={pixel}></td>)}
                        </tr>)}
                    </tbody>
                </table>
            </div>)
    }
}