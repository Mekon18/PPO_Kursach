import React, { Component } from 'react';
import axios from 'axios';

import miha from '../components/docIcons/2.jpg';
import sveta from '../components/docIcons/4.jpg';


class ProfileContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: undefined
        }
    }
    componentDidMount() {
        axios.get(`https://localhost:44391/Home/GetDoctor/` + this.props.match.params.id)
            .then(res => {
                const user = res.data;
                console.log(user);
                this.setState({ user: user });
            })

    }

    render() {
        if (!this.state.user) {
            return <div>загрузка</div>
        }
        console.log(this.state.user)
        return (
            <>
                <h2 className="text-center mt-5">{this.state.user.Name}</h2>
                <div className="text-center">
                    <img  src={this.props.match.params.id == 2 ? miha : sveta} width={275}  />
                </div>
                <h3>{this.state.user.Specialty}</h3>
                <span>{this.state.user.Category}</span>
            </>
        );
    }
}
export default ProfileContainer;

