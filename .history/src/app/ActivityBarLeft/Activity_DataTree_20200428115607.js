import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import {
	Tree,
	Switch,
	Modal,
	Button,
	InputNumber,
	Input,
	Form,
	Radio,
	Select,
	TreeSelect,
	Cascader,
	Divider,
} from 'antd';
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
	TagFilled,
} from '@ant-design/icons';
import './Activity_DataTree.css';
import { Store_treeSheets } from '../../stores/Store_TreeData';

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
export const TreeTool = ({ _toolY, _nodeHover }) => {
	const [_modalVisible, _set__modalVisible] = useState(false);
	/** ajoute un dossier */
	const onClick_folder = (e) => {
		_set__modalVisible(true);
	};
	return (
		<>
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
				<div>
					<Form
						labelCol={{
							span: 6,
						}}
						wrapperCol={{
							span: 14,
						}}
						layout='horizontal'
						size={'small'}
					>
						<Form.Item label='Index Type' name='size'>
							<Radio.Group>
								<Radio.Button value='Number'>Small</Radio.Button>
								<Radio.Button value='String'>Middle</Radio.Button>
								<Radio.Button value='Regex'>Large</Radio.Button>
							</Radio.Group>
						</Form.Item>
						<Form.Item label='ID'>
							<Input
								size='small'
								placeholder='small size'
								prefix={<TagFilled />}
							/>
						</Form.Item>
						<Form.Item label='Index'>
							<InputNumber min={1} max={10000} defaultValue={100} />
						</Form.Item>
						<Form.Item label='Auto-Fill-Default-Value'>
							<Switch />
						</Form.Item>
						<Form.Item label='Hyarchy Class'>
							<Select
								mode='multiple'
								style={{ width: '100%' }}
								placeholder='select one country'
								optionLabelProp='label'
							>
								<Option value='Charactere' label='Charactere'>
									<div className='demo-option-label-item'>
										<span role='img' aria-label='Charactere'>
											class.
										</span>
										Charactere
									</div>
								</Option>
								<Option value='Battler' label='Battler'>
									<div className='demo-option-label-item'>
										<span role='img' aria-label='Battler'>
											extend.
										</span>
										Battler
									</div>
								</Option>
							</Select>
						</Form.Item>
					</Form>
				</div>
			</Modal>
		</>
	);
};
const Activity_DataTree = () => {
	const [_toolY, _set_toolY] = useState(0);
	/** le node au survole de la sourit */
	const [_nodeHover, _set_nodeHover] = useState(0);

	const onSelect = (selectedKeys, info) => {
		_set_toolY(info.nativeEvent.target.offsetTop);
	};
	const onMouseEnter = (info) => {
		const id = info.node.pos;
		_set_toolY(info.event.target.offsetTop);
		_set_nodeHover(id);
	};

	const treeData = Store_treeSheets.getTreeAntdFormat();

	return (
		<>
			<TreeTool _toolY={_toolY} _nodeHover={_nodeHover}></TreeTool>
			<Divider orientation='left'>DataBases</Divider>
			<div>
				{/* //DATASHEET */}

				<Tree
					className={'TreeDataBase'}
					showLine={true}
					showIcon={true}
					defaultExpandedKeys={['0']}
					treeData={treeData}
					onSelect={onSelect}
					onMouseEnter={onMouseEnter}
				/>
			</div>
			<Divider orientation='left'>Classes</Divider>
			<div>
				{/* //PROTOTYPE */}
				<Tree
					className={'TreeDataBase'}
					showLine={true}
					showIcon={true}
					defaultExpandedKeys={['0']}
					treeData={treeData}
					onSelect={onSelect}
					onMouseEnter={onMouseEnter}
				/>
			</div>
			<Divider orientation='left'>Validators</Divider>
			<div>
				{/* //PROTOTYPE */}
				<Tree
					className={'TreeDataBase'}
					showLine={true}
					showIcon={true}
					defaultExpandedKeys={['0']}
					treeData={treeData}
					onSelect={onSelect}
					onMouseEnter={onMouseEnter}
				/>
			</div>
		</>
	);
};

export default view(Activity_DataTree);
