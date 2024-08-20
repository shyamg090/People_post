import React from 'react';

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            count2: 1,
            api : { }
        }
        
        console.log(props);
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/shyamg090");
        const json = await data.json();
console.log(json);
        this.setState({
            api : json,
        })
    }

    render() {

        const {name , location, api } = this.state

        return (
            <>
                <button style={{ backgroundColor: "black", margin: "5rem" }}
                    onClick={() => {
                        this.setState({
                            count: this.state.count + 1,
                        })
                    }}>increase </button>
                <h1>{this.state.count}</h1>

                <br>
                </br>
                <h1>
                    Github <h2>-</h2>
                    {api.name} br -- {api.company}
                </h1>
                <h1 className='absolute top-[10rem] '>This is Shyam and  .. I wrote this in class based components and {this.props.name}</h1>
            </>
        )
    }
}

export default UserClass;