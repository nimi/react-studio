import React, {Component, PropTypes} from 'react';

import ComponentList from '../../components/ComponentList';

class Navigation extends Component {
	static propTypes = {
		components: PropTypes.array,
		selectedComponent: PropTypes.string,
		handleSelect: PropTypes.func
	}

	render() {
		return (
			<div>
				<h2>react studio</h2>
				<ComponentList
					{...this.props}
				/>
			</div>
		);
	}
}

export default Navigation;
