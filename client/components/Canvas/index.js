import React, {PropTypes, Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {DropTarget, DragSource} from 'react-dnd';
import Actions from '../../actions/canvas';
import snapToGrid from '../../utils/snapToGrid';
import CanvasComponent from '../CanvasComponent';
import style from './style.css';

class Canvas extends Component {
	static propTypes = {
		connectDropTarget: PropTypes.func.isRequired,
		components: PropTypes.array,
		stagedComponent: PropTypes.func,
		stagedProps: PropTypes.object
	}

	_renderComponents() {
		const {components} = this.props.canvas;

		return components.map((c, key) => {
			const Component = c.component;
			const {left, top, props, id} = c;

			return (
				<CanvasComponent
					id={id}
					key={key}
					top={top}
					left={left}
					style={{left, top, position: 'absolute'}}
				>
					<Component {...props} />
				</CanvasComponent>
			);
		})
	}

	render() {
		const { connectDropTarget, components } = this.props;

		return connectDropTarget(
			<div className={style.Canvas}>
				{this._renderComponents()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		canvas: state.canvas
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(Actions, dispatch)
	};
}

const StudioCanvas = connect(
	mapStateToProps,
	mapDispatchToProps
)(Canvas);

const componentTarget = {
	drop(props, monitor, component) {
		const item = monitor.getItem();
		const delta = monitor.getDifferenceFromInitialOffset();
		const {actions, stagedComponent, stagedProps} = component.mergedProps;

		let left = Math.round((item.left || 0) + delta.x);
		let top = Math.round((item.top || 0) + delta.y);

		[left, top] = snapToGrid(left, top);

		if (item.type === 'stage') {
			actions.addComponent({
				component: stagedComponent,
				props: stagedProps,
				top: top >= 0 ? top : 0,
				left: left >= 0 ? left : 0,
				children: []
			});
		}

		if (item.type === 'canvas') {
			actions.updateCanvasPosition({
				id: item.id,
				top: top >= 0 ? top : 0,
				left: left >= 0 ? left : 0
			});
		}
	}
};

export default DropTarget('component', componentTarget, connect => ({
	connectDropTarget: connect.dropTarget()
}))(StudioCanvas);
