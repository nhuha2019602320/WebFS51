import React, {Component} from 'react'
class Lifecycle extends Component {
    constructor(props) {
        super(props);
        this.state = { action:  ''}
        console.log('1')
    }

    static getDerivedStateFromProps() {
        console.log('2')
        return null;
    }
    componentDidMount() {
        console.log('4')
    }
    componentWillMount() {
        console.log('5')
    }

    render() {
        console.log('3')
        return(
            <h2>
                Component Lifecycle
            </h2>
        )
    }
}

export default Lifecycle;
