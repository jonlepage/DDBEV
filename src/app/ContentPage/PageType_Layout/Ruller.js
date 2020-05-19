import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';

const Ruller = () => {
	const ruleLabels = Array.from({ length: cols }, (x, i) => (
		<label style={{ width: `${width / cols}px` }} key={i}>
			{i}
		</label>
	));
	return (
		<div
			className='Ruller'
			style={{
				transform: `translate3d(${-0}px, ${-positionY / scale}px, 0px)`,
				backgroundSize: `${width / cols}px 20px`,
			}}
		>
			{ruleLabels}
		</div>
	);
};

export default view(Ruller);
