import React, { Component } from 'react';

class Counter extends Component {
    
    formatCounterHandler () {
        const { value } = this.props.counter
        const x = <h3>Zero</h3>
        return value === 0 ? x : value;
    }

     getBadgeClasses () {
        let classes = 'badge m-2 bg-';
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }

   
    render() { 
        
        return (
            <div>
                <span className={ this.getBadgeClasses() }>{this.formatCounterHandler()}</span> 
                <button 
                    onClick={() => this.props.onIncrement(this.props.counter)} 
                    className='btn btn-success btn-sm m-2'>
                        Increment
                </button>
                <button 
                    onClick={() => this.props.onDecrement(this.props.counter)} 
                    className='btn btn-secondary btn-sm m-2'>
                        Decrement
                </button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className='btn btn-danger btn-sm m-2'>
                    delete
                </button>
            </div>
        );
    }

   
}
 
export default Counter;