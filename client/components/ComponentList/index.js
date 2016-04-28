import React, {Component, PropTypes} from 'react';

import style from './style.css';

import Actions from '../../actions/components';

class ComponentList extends Component {
	static propTypes = {
		components: PropTypes.array,
		selectedComponent: PropTypes.string,
	}

	constructor(props, context) {
		super(props, context);
	}

	_handleSelect(component, i) {
		return () => {
			const {handleSelect} = this.props;
			handleSelect(component);
		};
	}

	_renderEmptyList() {
		return <span>Sorry, no components to display.</span>;
	}

	_renderListItems() {
		const components = this.props.components
			.map((component, i) => {
				const {componentName} = component;

				return (
					<li key={i}
						onClick={this._handleSelect(component, i)}
					>
						{componentName}
					</li>
				);
			});

		return Boolean(components.length) ?
			(<ul>{components}</ul>) : this._renderEmptyList();
	}

	render() {
		return (
			<div className={style.ComponentList}>
				{this._renderListItems()}
			</div>
		);
	}
}

export default ComponentList;
