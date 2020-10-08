import React from 'react';
//import axios from 'axios';


class deletePlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [],
            currentPlayer: {},
        }
    }


    render() {
        return (
            <div className="col s12" onDelete={this.onDelete.bind(this)}>
                <button className="btn waves-effect waves-light" type="delete"
                    nme="action">Delete</button>
            </div>
        )
    }

}
export default deletePlayer;