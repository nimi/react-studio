import React, {Component, PropTypes} from 'react';
import {DragSource} from 'react-dnd';

class CanvasComponent extends Component {
	render() {
		const { connectDragSource } = this.props;

		return connectDragSource(
			<div className='CanvasComponent' {...this.props} />
		);
	}
}

const componentSource = {
	beginDrag(props, monitor, component) {
		const {id, left, top} = props;
		const type = 'canvas';
		return {id, type, left, top, component};
	}
};

export default DragSource('component', componentSource,
	(connect, monitor) => ({
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	}))(CanvasComponent);

const style = {
	position: 'absolute',
	cursor: 'move'
};
