import {Component} from 'react';
import {connect} from 'react-redux';
import {increaseCounterCommandAction} from './redux/store';

class Foo extends Component {
    render() {
        return (
            <div>
                <hr/>
                Ich bin Foo, der Counter ist {this.props.reduxState.counter}

                <button
                    onClick={ () => this.props.dispatch(increaseCounterCommandAction(5)) }
                >
                    Increase more!
                </button>
            </div>
        );
    }
}

export default connect(
    reduxState => ({ reduxState }),
    dispatch => ({ dispatch })
)(Foo);
