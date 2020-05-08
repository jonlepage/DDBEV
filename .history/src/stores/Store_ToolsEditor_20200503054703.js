import { store } from '@risingstack/react-easy-state';

/** Store des tools */
export const Store_ToolsEditor = store({
	/** le tools selectionner */
	selected: '',
	tools: [
		{ id: 'selectRec',icon: },
		{ id: 'drawRec' },
		{ id: 'duplicator' },
		{ id: 'delete' },
	],
});
