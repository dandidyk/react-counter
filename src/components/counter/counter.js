import React, { Component } from 'react'

export default class Counter extends Component {


    state = {
        counter: 0
    };

    updateCounter = () => {

        let intTime = 1;
        const { to } = this.props

        this.setState(() => {
            return {
                counter: Math.floor(to * 0.95)
            };
        });


        const tick = () => {
            const { counter } = this.state;
            if (counter > to - 20 && counter < to) {
                this.setState(({ counter }) =>
                    ({ counter: counter + 1 }));
                timerId = setTimeout(tick, intTime + 50);
            } else if (counter < to) {

                this.setState(({ counter }) =>
                    ({ counter: counter + 11 }));
                timerId = setTimeout(tick, intTime);
            }
        }

        let timerId = setTimeout(tick, intTime);


    };

    componentDidMount() {
        this.updateCounter()
    }

    render() {
        return (
            <div>
                {this.state.counter}
            </div>
        )
    }
}