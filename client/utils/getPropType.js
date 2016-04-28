import React from 'react';

const BasicComponent = () => <span />;

export default function getPropType(validate) {

	const types = {
		array: [],
		string: '',
		number: 0,
		bool: true,
		func: () => {},
		element: (<BasicComponent />),
		object: {},
		oneOf: '____'
	};

	const defaultProps = {
		type: 'unknown',
		values: undefined
	}

	return Object.keys(types)
		.reduce((prev, type) => {
			const errors = validate({name: types[type]}, 'name');
			let typeProps = prev;

			if (!errors && types[type] !== '____') {
				typeProps = Object.assign({}, prev, {
					type,
					values: type =='element' ? undefined : types[type]
				});
			}

			if (!errors && prev.type !== 'unknown' && types[type] !== '____') {
				typeProps = Object.assign(typeProps, {
					options: Boolean(prev.options) ? prev.options.push(type) : [prev.type, type],
				});
			}

			if (!errors && prev.options && prev.options.length > 1 && types[type] === '____') {
				typeProps = Object.assign(typeProps, {
					type,
					values: null
				});
			}

			return typeProps;

		}, defaultProps);
}
