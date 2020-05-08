import React, { useState } from 'react';
import { view } from '@risingstack/react-easy-state';
import { FolderAddFilled, FileAddFilled } from '@ant-design/icons';
import Modal from 'antd/lib/modal';
import { Button } from 'antd';
import ModaleContents from './ModaleContents';
import { Store_treeSheets } from '../../../stores/Store_TreeData';
import ModaleType_dataClass from './ModaleType_dataClass';

function ModaleProvider(type, _modalVisible) {
	return <ModaleType_dataClass />;
}
/** modale de craction dun dataClass */
function ModaleType_DataSheets(type, _modalVisible) {
	return (
		<Modal
			title={
				<div>
					Create DataSheet
					<p>
						DataSheet it a SUPER Class thats manage sub index sheets collections
					</p>
				</div>
			}
			visible={_modalVisible}
			footer={[
				<Button key='back'>cancel</Button>,
				<Button key='submit' type='primary'>
					create
				</Button>,
			]}
		>
			<ModaleContents />
		</Modal>
	);
}
/** modale de craction dun dataClass */
function ModaleType_DataClasses(type, _modalVisible) {
	return (
		<Modal
			title={
				<div>
					Create Data Modele Classes
					<p>DataClasses are a modele sheets to share in your dataBases</p>
				</div>
			}
			visible={_modalVisible}
			footer={[
				<Button key='back'>cancel</Button>,
				<Button key='submit' type='primary'>
					create
				</Button>,
			]}
		>
			<ModaleContents />
		</Modal>
	);
}
/** tool qui apelle des modale */
const ModaleTools = () => {
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
			{ModaleProvider(Store_treeSheets.node_selected, _modalVisible)}
		</>
	);
};

export default view(ModaleTools);
