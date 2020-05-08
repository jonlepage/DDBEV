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
} from '@ant-design/icons';
import './Activity_DataBase.css';

const Activity_DataBase = () => {
	const [_toolY, _set_toolY] = useState(0); // react hook states
	const treeData = [
		{
			title: 'DATABASE',
			key: '0-0',
			icon: <FolderFilled />,
			disabled: true,
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

	const onSelect = (selectedKeys, info, e, ee) => {
		console.log('e,ee: ', e, ee);
		console.log('selected', selectedKeys, info);
		console;
		_set_toolY(info.nativeEvent.target.offsetTop);
	};
	const onMouseEnter = (e, e, ee) => {
		console.log('e,ee: ', e, ee);
		console.log('selected', selectedKeys, info);
		console;
	};
	return (
		<div>
			<div
				className={'TopModuleHeader'}
				style={{ top: `${_toolY}px`, position: 'relative' }}
			>
				<div className={'TopModuleL_name'}>#string</div>
				<div className={'TopModuleR_tool'}>
					<LinkOutlined />
					<SettingFilled />
					<CodeFilled />
				</div>
			</div>
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
