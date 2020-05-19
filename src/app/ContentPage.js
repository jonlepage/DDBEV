import React from 'react';
import { view, store } from '@risingstack/react-easy-state';
import { Store_Global } from '../stores/Store_Global';

export const Store_ContentPage = store({
	onKeyDown(e) {
		if (e.keyCode === 32) {
			const { space } = Store_Global.EVENTSKEYS;
			space._active = true;
			e.preventDefault();
		}
	},
	onKeyUp() {
		const { space } = Store_Global.EVENTSKEYS;
		space._active = false;
	},
	onMouseMove(e) {
		const { coor } = Store_Global.MOUSE;
		coor.x = e.clientX;
		coor.y = e.clientY;
	},
});

/** Content page showed only if a onglet selected
 * If not , provide the default app emptyPage
 */
const ContentPage = () => {
	const { _selectedUID } = Store_Global;
	const { onKeyDown, onKeyUp, onMouseMove } = Store_ContentPage;
	// const view = Store_ContentPage.getView();
	return (
		<div
			className='ContentRoot'
			onKeyDown={onKeyDown}
			onKeyUp={onKeyUp}
			onMouseMove={onMouseMove}
			// this shit make events fired !! dont ask me why
			tabIndex={-1}
		>
			{Store_Global.getPageView(_selectedUID)}
		</div>
	);
};
export default view(ContentPage);
