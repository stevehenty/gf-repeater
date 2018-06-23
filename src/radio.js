import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class RadioField extends React.Component {
	constructor(props) {
		super(props);
		this._handleChange = this._handleChange.bind(this);
	}

	_handleChange(e) {

		var el = e.target;

		this.context.setValue(
			this.props.settingName,
			el.value
		)
	}

	render() {

		const className = this.props.horizontal ? 'gf-radio-horizontal' : 'gf-radio-vertical';

		return (<div className={className}><label>
					<input
						type="radio"
						name={this.props.name}
						value={this.props.value}
						checked={this.props.checked}
						onChange={this._handleChange}/>{this.props.label}
				</label>
			</div>);
	}

}
RadioField.contextTypes = {
	setValue: PropTypes.object.isRequired
};
