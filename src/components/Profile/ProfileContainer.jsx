import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";


class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 7873;
        }

            profileAPI.setProfile(userId).then(data => {
                this.props.setUserProfile(data);
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => {
    return {profile: state.profileReducer.profile}
};


let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent);