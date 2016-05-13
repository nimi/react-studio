import React, {PropTypes, Component} from 'react';
import {DragSource} from 'react-dnd';

class StagedComponent extends Component {
	render() {
		const {connectDragSource} = this.props;
		const sx = {
			...style
		};

		return connectDragSource(
			<div style={sx}>
				{this.props.children}
			</div>
		);
	}
}

const componentSource = {
	beginDrag(props, monitor, component) {
		const {id, left, top} = props;
		const type = 'stage';
		return {id, type, left, top, component};
	}
};

export default DragSource('component', componentSource,
	(connect, monitor) => ({
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	}))(StagedComponent);

const style = {
	cursor: 'move'
}
