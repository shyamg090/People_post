import React from 'react';

class UserClass extends React.Component {

    constructor(props){
        super(props);

        console.log(props);
    }

    render() {
        return (
            <>
                <h1 className='absolute top-[10rem] '>This is Shyam and  .. I wrote this in class based components and {this.props.name}</h1>
            </>
        )
    }
}

export default UserClass;