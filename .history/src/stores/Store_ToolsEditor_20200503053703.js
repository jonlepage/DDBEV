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
