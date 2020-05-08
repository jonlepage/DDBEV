import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import { Tree, Modal, Button, Select, Divider, Collapse } from 'antd';
import {
	CarryOutOutlined,
	FormOutlined,
	FolderFilled,
	FolderAddFilled,
	FileAddFilled,
} from '@ant-design/icons';
import { Store_treeSheets } from '../../stores/Store_TreeData';
import ModaleContents from './Activity_DataTree/ModaleContents';
import { Store_layouts } from '../../stores/Store_DataPage';

const treeData_old = [
	{
		title: 'DATABASE',
		key: '0-0',
		icon: <FolderFilled />,
		// disabled: true,
		// icon: ({ selected }) => (selected ? <FrownFilled /> : <FrownOutlined />),
		children: [
			{
				title: 'parent 1-0',
				key: '0-0-0',
				icon: <FolderFilled />,
				children: [
					{
						title: <div>leaf</div>,
						key: '0-0-0-0',
						icon: <CarryOutOutlined />,
						switcherIcon: <FormOutlined />,
					},
					{
						title: 'leaf',
						key: '0-0-0-1',
						icon: <CarryOutOutlined />,
						switcherIcon: <FormOutlined />,
					},
				],
			},
		],
	},
];
/**TODO: MODULE */
const { Option } = Select;
const { Panel } = Collapse;

export const TreeTool = ({ _nodeHover }) => {
	const [_modalVisible, _set__modalVisible] = useState(false);
	/** ajoute un dossier */
	const onClick_addFolder = (e) => {
		_set__modalVisible(true);
	};
	const onClick_addData = (e) => {
		Store_treeSheets.addSheet('data todo');
		// _set__modalVisible(true);
	};

	return (
		<>
			<div
				className={'TopModuleHeader'}
				style={{
					width: 'max-content',
					float: 'right',
					zIndex: 1,
					position: 'relative',
				}}
			>
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
const Activity_DataTree = () => {
	/** le node au survole de la sourit */
	const [_nodeHover, _set_nodeHover] = useState({ node: null, offsetY: 0 });

	const onSelect = (selectedKeys, info) => {
		// _set_nodeHover({ node: info.node, offsetY: info.event.target.offsetTop });
	};
	const onMouseEnter = (info) => {};
	const onMouseLeave = (info) => {};

	const treeRoot = Store_treeSheets.getTreeAntdFormat();
	Store_layouts.MAKEDEMODEBUG();
	const root = Store_layouts.getTree_DataBase();
	return (
		<>
			{treeRoot.map((data, i) => (
				<div key={i}>
					<Collapse bordered={false} defaultActiveKey={['1']}>
						<TreeTool _nodeHover={_nodeHover}></TreeTool>
						<Panel header='' key='1'>
							<Tree
								className={'TreeDataBase'}
								showLine={true}
								showIcon={true}
								defaultExpandedKeys={['0']}
								treeData={[data]}
								onSelect={onSelect}
								onMouseEnter={onMouseEnter}
								onMouseLeave={onMouseLeave}
							/>
						</Panel>
					</Collapse>
				</div>
			))}
			<Divider orientation='left'></Divider>
		</>
	);
};

export default view(Activity_DataTree);
