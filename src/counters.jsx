import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0},
        ]
     } 
    
    resetHandler = () => {
        const counters = this.state.counters.map (c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    }

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
    };

    handleDecrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value--;
        this.setState({counters});
    };

    deleteHandler = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters});
    }

    render() { 
        return (
            <div>
                <button onClick={this.resetHandler} className='btn btn-primary btn-sm m-2'>Reset</button>
                {this.state.counters.map(
                    counter => <Counter onIncrement={this.handleIncrement}
                                        onDecrement={this.handleDecrement}
                                        onDelete={this.deleteHandler}
                                        counter= {counter} > 
                                   <h4>Counter #{counter.id} </h4>     
                                </Counter>
                                        )}
            </div>
        );
    }
}
 
export default Counters;