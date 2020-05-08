import React, { useState } from 'react';
import { view } from '@risingstack/react-easy-state';
import { FolderAddFilled, FileAddFilled } from '@ant-design/icons';
import Modal from 'antd/lib/modal';
import { Button } from 'antd';
import ModaleContents from './ModaleContents';
import { Store_treeSheets } from '../../../stores/Store_TreeData';

/** tool qui apelle des modale */
const ModaleTools = ({ _nodeHover }) => {
	const [_modalVisible, _set__modalVisible] = useState(false);
	/** ajoute un dossier */
	const onClick_addFolder = (e) => {
		_set__modalVisible(true);
	};
	const onClick_addData = (e) => {
		// Store_treeSheets.addSheet('data todo');
		// _set__modalVisible(true);
	};

	return (
		<>
			<div className={'ModaleTools'}>
				<div className={'TopModuleR_tool'}>
					<FolderAddFilled onClick={onClick_addFolder} />|
					<FileAddFilled onClick={onClick_addData} />
				</div>
			</div>

			<Modal
				title={
					<div>
						Create DataSheet
						<p>
							DataSheet it a SUPER Class thats manage sub index sheets
							collections
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
		</>
	);
};

export default view(ModaleTools);
