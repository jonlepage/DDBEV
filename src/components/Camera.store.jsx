import { store } from '@risingstack/react-easy-state';
/** Voir si on pourrait pas plutot mapper ca sur un module Camera */
export const DATA_Camera = store({
	NAME: 'DATA_Camera',
	/** uid unique du data */
	UID: '',
	_limitToBounds: true,
	_limitToWrapper: true,
	_minScale: 0.5,
	_maxScale: 1.5,
	_zoom: 1,
	defaultPositionX: 1,
	defaultPositionY: 1,
});

export const EVENT_Camera = store({
	NAME: 'EVENT_Camera',

	/**@param { React.KeyboardEvent} e  */
	onKeyDown(e) {
		const { keyCode } = e;
		switch (keyCode) {
			case 32:
				Store_Camera._spaceBar = true;
				break;
			default:
				break;
		}
	},
	/** When unFocus the Camera view */
	onKeyUp(e) {
		Store_Camera._spaceBar = false;
	},
	/** When unFocus the Camera view */
	onBlur() {
		Store_Camera._spaceBar = false;
	},
});

export const Store_Camera = store({
	NAME: 'Store_PageClass',
	/** @type {Array.<DATA_Camera>} */
	DATA: [],
	_spaceBar: false, //TODO: voir comment penser les system event ?
	getData(UID) {
		return this.DATA.find((data) => data.UID === UID);
	},
	/** create un Data Camera */
	create(UID) {
		const data = { ...DATA_Camera, UID };
		this.DATA.push(data);
		return data;
	},
	/** When unFocus the Camera view */
	onBlur(e) {},
});
