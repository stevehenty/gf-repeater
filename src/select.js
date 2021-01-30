import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class SelectField extends React.Component {
	constructor(props) {
		super(props);
		this._handleChange = this._handleChange.bind(this);
	}

	_handleChange(e) {

		var el = e.target;
		var type = el.type;

		var value;

		if ( type === 'select-multiple' ) {
			value = [];
			for (var i = 0, l = e.target.options.length; i < l; i++) {
				if (e.target.options[i].selected) {
					value.push(e.target.options[i].value);
				}
			}

		} else {
			value = e.target.value;
		}

		this.context.setValue(
			this.props.settingName,
			value
		)
	}


	render() {

		var options;

		options = this.props.choices.map( function( choice, index) {
			if ( choice.choices ) {
				var subOptions = choice.choices.map( function( choice, index) {
					return <option value={choice.value} key={index}>{choice.label}</option>
				});
				return <optgroup label={choice.label}>{subOptions}</optgroup>
			}
			return <option value={choice.value} key={index}>{choice.label}</option>
		});

		const label = this.props.label ? <div><label>{this.props.label}</label></div> : '';

		return (<div className="gf-repeater-setting">{label}
			<select
				className={ this.props.className }
				type="select"
				multiple={this.props.multiple}
				name={this.props.settingName}
				value={this.props.value}
				onChange={this._handleChange} >
				{options}
			</select>
		</div>);
	}

}

SelectField.contextTypes = {
	setValue: PropTypes.object.isRequired
}
