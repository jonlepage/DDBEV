import { store } from '@risingstack/react-easy-state';

/** manage save et loader */
export const Store_Main = store({
	SaveData() {
		Store_Global.META._nbClosed++;
		localStorage.setItem('save', JSON.stringify(Store_Global));
	},
	// todo: ok petit souci, si on ajoute des truck, on doi verifier la signature, sinon , els nested son remplacer par les aciene key
	ImportData(data) {
		if (data && '') {
			alert('Data corumped reset');
			localStorage.removeItem('save');
		} else if (data) {
			//Object.assign(Store_Global, JSON.parse(data));
			console.log(Store_Global);
		}
	},
	checkSignature() {},
});

/** MODELE DATA DE BASE POUR UN ROOTPAGE*/
export const DATA_Global = store({
	/** Le id au plus haut niveau qui permet de tracker tous les info */
	rootUID: '',
	/** TODO: JE SE PAS SI VRAIMENT BESOIN DETRE UNIQUE >? peut etre pour chaque type de data ?
	 * Peut etre que oui. car sa initialise aussi des subDatas avec meme id !
	 */
	uid: '',
	/** todo: mapper ca dune autre maniere */
	_ContentPage: '',
});

/** global etabli les conextion de tous les store */
export const Store_Global = store({
	/** id when app resize */
	_appResizeID: 0,
	/** Some app status */
	APP: { _appResizeID: 0, _isMaximised: false },
	META: {
		_versions: '1.0b',
		_path: 'C:/Users/InformatiqueLepage/Documents/Dev/repo/anft_1.7',
		_projetName: 'projetName',
		_ext: '.dat',
		/** counts closed app */
		_nbClosed: 0,
	},
	/** @type {Array.<DATA_Global>} */
	DATA: [],
	create(_ContentPage, uid = '', rootUID = UTILITY.create_UUID()) {
		const data = { ...DATA_Global, rootUID, uid, _ContentPage };
		return data;
	},
	/**@param {DATA_Global} data */
	add(data) {
		this.DATA.push(data);
	},
	getData(rootUID) {
		return this.DATA.find((data) => data.rootUID === rootUID);
	},
	isExist(uid) {
		return this.DATA.find((data) => data.uid === uid);
	},
});
export const UTILITY = store({
	/** increase luminance bright, for nested grids background */
	increase_brightness(hex, percent = 20) {
		// strip the leading # if it's there
		hex = hex.replace(/^\s*#|\s*$/g, '');

		// convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
		if (hex.length == 3) {
			hex = hex.replace(/(.)/g, '$1$1');
		}

		var r = parseInt(hex.substr(0, 2), 16),
			g = parseInt(hex.substr(2, 2), 16),
			b = parseInt(hex.substr(4, 2), 16);

		return (
			'#' +
			(0 | ((1 << 8) + r + ((256 - r) * percent) / 100))
				.toString(16)
				.substr(1) +
			(0 | ((1 << 8) + g + ((256 - g) * percent) / 100))
				.toString(16)
				.substr(1) +
			(0 | ((1 << 8) + b + ((256 - b) * percent) / 100)).toString(16).substr(1)
		);
	},

	create_UUID() {
		let dt = new Date().getTime();
		const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
			/[xy]/g,
			function (c) {
				const r = (dt + Math.random() * 16) % 16 | 0;
				dt = Math.floor(dt / 16);
				return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
			}
		);
		return uuid;
	},
	isNw() {
		try {
			return typeof require('nw.gui') !== 'undefined';
		} catch (e) {
			return false;
		}
	},
});

// prevenir exit for check data
// const win = nw.Window.get();
// window.onbeforeunload = confirmExit;
// function confirmExit(e) {
// 	return true;
// }
