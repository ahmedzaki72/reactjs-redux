import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Increment, Decrement } from './action/action';



class Counter extends Component {

    render() {
        // console.log(this.props)
        return (
            <React.Fragment>
                <h2>counter</h2>
                <div>
                    <button type="button" className="btn btn-danger" onClick={this.props.decrement}>-</button>
                    <span className="badge badge-secondary">{this.props.count}</span>
                    <button type="button" className="btn btn-success" onClick={this.props.increment} >+</button>
                </div>
            </React.Fragment>
        );
    }
}

// const Action1 = {
//     type: 'INCREMENT'
// }

// const Action2 = {
//     type: 'DECREMENT'
// }

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(Increment()),
        decrement: () => dispatch(Decrement())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

////// if i need use mapDispatchToProps only i will  use this syntax connect( null , mapDispatchToProps)


