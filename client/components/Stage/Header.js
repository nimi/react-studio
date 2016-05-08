import React, {Component, PropTypes} from 'react';

import style from './style.css';

export default function Header({name, expanded, toggle}) {
	const headingStyle = !expanded ? sx.headingStyle.collapse : null;
	const chevronStyle = !expanded ? sx.buttonStyle.collapse : null;

	return (() => {
		return name ?
			<div className={style.Header}>
				<h5 style={headingStyle}>Staging area</h5>
				<button onClick={toggle} style={chevronStyle}>
					<span
						className={style.Chevron}
					/>
				</button>
			</div> :
			null
	})();
}

Header.propTypes = {
	expanded: PropTypes.bool,
	name: PropTypes.string
};

Header.defaultProps = {
	expanded: true
};

const sx = {
	headingStyle: {
		collapse: {
			color: 'var(--primary-text-light)'
		}
	},
	buttonStyle: {
		collapse: {
			transform: 'rotate(0deg)'
		}
	}
};
