import React from 'react';
import ReactDOM from 'react-dom';
import Repeater from './repeater';
import PropTypes from 'prop-types';


export default class NestedRepeater extends Repeater {}

NestedRepeater.defaultProps = {stateful: false};
NestedRepeater.contextTypes = {
	setValue: PropTypes.object.isRequired
};
