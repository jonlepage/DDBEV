import { store } from '@risingstack/react-easy-state';

/** Store des tools */
export const Store_ToolsEditor = store({
	resizeId: 0,
	/**current level editor */
	levelEditor: 0,
	updateResize() {
		Store_app.resizeId = Store_app.resizeId + 1;
	},
});
