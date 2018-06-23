import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class CheckboxField extends React.Component {
	constructor(props) {
		super(props);
		this._handleChange = this._handleChange.bind(this);
	}

	_handleChange(e) {

		var el = e.target;

		this.context.setValue(
			this.props.settingName,
			el.checked
		)
	}

	render() {
		return (<div className="gf-setting"><label>
			<input
				type="checkbox"
				className={ 'gf-setting-' + this.props.settingName }
				name={this.props.settingName}
				checked={this.props.checked}
				onChange={this._handleChange}/>{this.props.label}
		</label>
		</div>);
	}

}
CheckboxField.contextTypes = {
	setValue: PropTypes.object.isRequired
}
