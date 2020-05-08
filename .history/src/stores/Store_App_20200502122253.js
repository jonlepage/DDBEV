import React from 'react';
import { store } from '@risingstack/react-easy-state';

/** le store globaux app */
export const Store_app = store({
	resizeId: 0,
	/**current level editor */
	levelEditor: 0,
	updateResize() {
		Store_app.resizeId = Store_app.resizeId + 1;
	},
});

window.addEventListener('resize', (e) => {
	console.log('Store_app.resizeId: ', Store_app.resizeId);
	Store_app.updateResize();
});
