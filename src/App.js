import './App.css';
import Name from './Name';
import {Component} from 'react';
import {connect} from 'react-redux';
import {increaseCounterCommandAction} from './redux/store';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputValue: ''
        };
    }

    handleAddClicked = () => {
        this.props.dispatch(increaseCounterCommandAction(1));
    }

    handleInputChanged = (event) => {
        this.setState({ inputValue: event.target.value });
    };

    render() {

        const nameElements = this.props.reduxState.names.map(
            salutation => <Name salutation={salutation} />
        );

        return (
            <div className="App">
                <div>
                    We have {this.props.reduxState.counter} names:
                </div>

                <div>
                    <Name salutation={this.props.reduxState.counter} />
                </div>

                {nameElements}

                <div>

                    <input type='text' onChange={this.handleInputChanged} />

                    <br/>

                    <button onClick={this.handleAddClicked}>
                        Increase
                    </button>
                </div>
            </div>
        );
    }
}

export default connect(
    reduxState => ({ reduxState }),
    dispatch => ({ dispatch })
)(App);
