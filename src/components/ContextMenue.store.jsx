import { store } from '@risingstack/react-easy-state';
import { Store_Windows } from '../app/Windows.store';

export const Store_ContextMenue = store({
	_title: '',
	_visible: false,
	x: 0,
	y: 0,
	data: null,
	setting: null,
	/**@param {React.MouseEvent} e
	 * Defeni un context qui permet afficher le context menue */
	setContext(e, UID, data, setting) {
		this._title = UID;
		this._visible = true;
		this.x = e.clientX;
		this.y = e.clientY;
		this.data = data;
		this.setting = setting;
		e.stopPropagation();
		e.preventDefault();
	},
	/** TODO: creer un DATA pour rendre ca plus dynamic et cooherent */
	onClick(key) {
		switch (key) {
			case 'Settings':
				Store_Windows.open(this.data, this.setting);
				break;

			default:
				break;
		}
		this._visible = false;
	},
});
