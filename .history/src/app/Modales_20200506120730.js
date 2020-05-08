import React, { useState } from 'react';
import { view } from '@risingstack/react-easy-state';
import { FolderAddFilled, FileAddFilled } from '@ant-design/icons';
import Modal from 'antd/lib/modal';
import { Button } from 'antd';
import ModaleContents from './Modales/ModaleContents';
import { Store_treeSheets } from '../stores/Store_TreeData';
import ModaleType_dataClass from './Modales/ModaleType_dataClass';

function ModaleProvider(type, _modalVisible) {
	// Store_treeSheets.node_selected
	return <ModaleType_dataClass />;
}
/** Store Componment */
export const Store_Modales = store({
	_currentSelect: 0,
	data: [],
});
/** tool qui apelle des modale */
const Modales = () => {
	const [_modalVisible, _set__modalVisible] = useState(false);
	/** ajoute un dossier */
	const onClick_addFolder = (e) => {};
	const onClick_addData = (e) => {
		_set__modalVisible(true);
	};

	return (
		<>
			<div className='ModaleTools'>
				<div className={'TopModuleR_tool'}>
					<FolderAddFilled onClick={onClick_addFolder} />|
					<FileAddFilled onClick={onClick_addData} />
				</div>
			</div>
			{_modalVisible && ModaleProvider()}
		</>
	);
};

export default view(Modales);
