import React from "react";
import { connect } from 'react-redux';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LeftDraver from 'shared/LeftDraver';
//import AppBar from 'shared/AppBar';

import Footer from 'shared/Footer';
import Header from 'shared/Header';


const HomeComp = (props) => {
    return ([
        <Header key="1" headerText={'Welcome'}/>,
        <LeftDraver key="2"/>,
        <div key="3" className={'wraper'}>
            <div className={'container'}>
                
            </div>
        </div>,
        <Footer key="4"/>
    ]);
};

export default connect(
	state => ({
		email: state.userState.email,
		name: state.userState.name,
		surname: state.userState.surname,
		gender: state.userState.gender,
		imageUrl: state.userState.imageUrl,
		facebookImageUrl: state.userState.facebookImageUrl,
		vkImageUrl: state.userState.vkImageUrl,
		auth: state.userState.auth,
	}),
)(HomeComp);