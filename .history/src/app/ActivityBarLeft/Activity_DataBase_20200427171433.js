import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import { Tree, Switch } from 'antd';
import {
	CarryOutOutlined,
	FormOutlined,
	FolderOutlined,
	FolderViewOutlined,
	FilePdfOutlined,
	FileOutlined,
	FolderFilled,
	LinkOutlined,
	SettingFilled,
	CodeFilled,
	FolderAddFilled,
	DropboxOutlined,
	FileAddFilled,
} from '@ant-design/icons';
import './Activity_DataBase.css';

const treeData = [
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

export const TreeTool = ({ _toolY }) => {
	/** ajoute un dossier */
	const onClick_folder = (e) => {};
	return (
		<div
			className={'TopModuleHeader'}
			style={{
				top: `${_toolY}px`,
				position: 'relative',
				width: 'max-content',
				float: 'right',
			}}
		>
			<div className={'TopModuleR_tool'}>
				<FolderAddFilled onClick={onClick_folder} />
				<FileAddFilled />
				<DropboxOutlined />
				<SettingFilled />
			</div>
		</div>
	);
};
const Activity_DataBase = () => {
	const [_toolY, _set_toolY] = useState(0); // react hook states

	const onSelect = (selectedKeys, info) => {
		_set_toolY(info.nativeEvent.target.offsetTop);
	};
	const onMouseEnter = (e) => {
		_set_toolY(e.event.target.offsetTop);
	};

	return (
		<div>
			<TreeTool _toolY={_toolY}></TreeTool>
			<Tree
				className={'TreeDataBase'}
				showLine={true}
				showIcon={true}
				defaultExpandedKeys={['0-0-0']}
				treeData={treeData}
				onSelect={onSelect}
				onMouseEnter={onMouseEnter}
			/>
		</div>
	);
};

export default view(Activity_DataBase);
