import React, {Component, PropTypes} from 'react';
import Slider from 'react-slick';

class AwesomeSlider extends Component {
	static displayName = 'AwesomeSlider'

	static propTypes = {
		dots: PropTypes.bool,
		infinite: PropTypes.bool,
		speed: PropTypes.number,
		slidesToShow: PropTypes.number,
		slidesToScroll: PropTypes.number,
		afterChange: PropTypes.func,
		beforeChange: PropTypes.func,
		rtl: PropTypes.bool,
		autoplay: PropTypes.bool,
		prevArrow: PropTypes.element,
		nextArrow: PropTypes.element,
		obj: PropTypes.object,
		arr: PropTypes.array
	};

	static defaultProps = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		rtl: true,
		autoplay: true,
		afterChange: () => {},
		beforeChange: () => {},
		obj: {},
		arr: ['foo', 'bar', 'baz']
	};

	render() {
		return (
			<div style={{maxWidth: 350}}>
				<Slider {...this.props}>
					<div style={{ backgroundColor: 'orange'}} ><h3>1</h3></div>
					<div style={{ backgroundColor: 'pink'}}><h3>2</h3></div>
					<div style={{ backgroundColor: 'orange'}}><h3>3</h3></div>
					<div style={{ backgroundColor: 'pink'}}><h3>4</h3></div>
					<div style={{ backgroundColor: 'orange'}}><h3>5</h3></div>
					<div style={{ backgroundColor: 'pink'}}><h3>6</h3></div>
				</Slider>
			</div>
		);
	}
}

class AwesomeButton extends Component {
	static propTypes = {
		bc: PropTypes.string,
		fs: PropTypes.oneOf([
			10,
			12,
			14,
			18
		]),
		/* fs: PropTypes.oneOfType([
		   PropTypes.string,
		   PropTypes.number
		   ]), */
		padding: PropTypes.number
	}

	static defaultProps = {
		bc: 'gray',
		fs: 18,
		padding: 20
	}

	static displayName = 'AwesomeButton'

	render() {
		const {bc, fs, padding} = this.props;
		const style = {
			backgroundColor: bc,
			fontSize: fs,
			color: 'white',
			cursor: 'pointer',
			padding
		}

		return (
			<button style={style}>Awesome Button</button>
		);
	}
}

class AwesomeText extends Component {
	static propTypes = {
		c: PropTypes.string,
		fs: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number
		])
	}

	static defaultProps = {
		c: 'red',
		fs: 16
	}

	static displayName = 'AwesomeText'

	render() {
		const {c, fs} = this.props;
		const style = {
			color: c,
			fontSize: fs
		}

		return (
			<p style={style}>Awesome Text</p>
		);
	}
}

class AwesomeSvg extends Component {
	static displayName = 'AwesomeSvg';

	static propTypes = {
		backgroundColor: PropTypes.string,
		diskColor: PropTypes.string,
		labelColor: PropTypes.string,
		labelAccentColor: PropTypes.string,
		width: PropTypes.number,
		height: PropTypes.number
	};

	static defaultProps = {
		backgroundColor: 'orange',
		diskColor: '#5D699B',
		labelColor: '#333',
		labelAccentColor: '#eee',
		width: 100,
		height: 100
	}

	render() {
		const {
			backgroundColor,
			diskColor,
			labelColor,
			labelAccentColor,
			width,
			height
		} = this.props;

		return (
			<svg
				width={`${width}px`}
				height={`${height}px`}
				viewBox={`0 0 100 100`}
				preserveAspectRatio='xMidYMid meet'
			>
				<path fill={backgroundColor} d='M50,2.125c26.441,0,47.875,21.434,47.875,47.875S76.441,97.875,50,97.875C17.857,97.875,2.125,76.441,2.125,50S23.559,2.125,50,2.125z'/>
				<g>
					<path fill={diskColor} d='M72.848,75.133H27.151c-1.262,0-2.285-1.023-2.285-2.285V27.151c0-1.261,1.022-2.284,2.285-2.284h38.843l9.139,9.138v38.842C75.133,74.109,74.109,75.133,72.848,75.133z'/>
					<path d='M65.992,24.867v15.994c0,1.261-1.021,2.285-2.283,2.285H36.29c-1.262,0-2.285-1.023-2.285-2.285V24.867H65.992z'/>
					<path fill={labelAccentColor} d='M55.711,27.914h8.379v12.185h-8.379V27.914z'/>
					<path fill={labelColor} d='M65.992,75.133V53.047c0-1.261-1.021-2.285-2.283-2.285H36.29c-1.262,0-2.285,1.024-2.285,2.285v22.086H65.992z'/>
					<path fill='white' d='M39.718,58.377h20.563c0.211,0,0.381-0.17,0.381-0.379c0-0.211-0.17-0.381-0.381-0.381H39.718c-0.21,0-0.38,0.17-0.38,0.381C39.337,58.207,39.508,58.377,39.718,58.377z M60.281,63.709H39.718c-0.21,0-0.38,0.172-0.38,0.381c0,0.211,0.17,0.381,0.38,0.381h20.563c0.211,0,0.381-0.17,0.381-0.381C60.662,63.881,60.492,63.709,60.281,63.709z M60.281,69.801H39.718c-0.21,0-0.38,0.172-0.38,0.381c0,0.211,0.17,0.381,0.38,0.381h20.563c0.211,0,0.381-0.17,0.381-0.381C60.662,69.975,60.492,69.801,60.281,69.801z'/>
				</g>
			</svg>
		);
	}
}

class AwesomeList extends Component {
	static displayName = 'AwesomeList';

	static propTypes = {
		items: PropTypes.array
	}

	render() {
		const itemStyle = {
			color: '#fff',
			padding: '10px 20px',
			margin: '10px 0',
			borderRadius: 3
		};

		const {items} = this.props;
		const listItems = Boolean(items) ? items.map((item = {}, i) => {
			const {name, job, itemColor} = item;
			const style = {
				...itemStyle,
				backgroundColor: itemColor || '#333'
			};

			return (
				<li key={i} style={style}>
					Name: {name || 'no name'} Job: {job || 'no job'}
				</li>);
		}) : <div>No list items</div>;
		return (
			<ul
				style={{
						listStyleType: 'none',
						margin: 0,
						padding: 0

					}}
			>
				{listItems}
			</ul>
		);
	}
}


export default {
	components: [{
		component: AwesomeButton,
		componentName: AwesomeButton.displayName
	}, {
		component: AwesomeText,
		componentName: AwesomeText.displayName
	}, {
		component: AwesomeSlider,
		componentName: AwesomeSlider.displayName
	}, {
		component: AwesomeSvg,
		componentName: AwesomeSvg.displayName
	}, {
		component: AwesomeList,
		componentName: AwesomeList.displayName
	}]
};
