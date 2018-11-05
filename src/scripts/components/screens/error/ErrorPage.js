import React from "react";
import { connect } from 'react-redux';

const dictionary = require('lib/dictionary.json');


const ErrorPage = (props) => {
    return([
        <h2 key="2">{dictionary[props.language].errors.notFound}</h2>

    ])
}

export default ErrorPage;
