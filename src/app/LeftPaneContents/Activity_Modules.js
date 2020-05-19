import React from 'react';
import { view, store } from '@risingstack/react-easy-state';
import { Space, Collapse } from 'antd';
import { Typography } from 'antd';
import { Store_Module_inputString } from './Activity_Modules/Inputs_string';
import { Store_Inputs_tag } from './Activity_Modules/Inputs_tag';
import { Checkbox } from 'antd';
import { Store_Module_layout } from './Activity_Modules/Module_layout';
const CheckboxGroup = Checkbox.Group;
const { Text } = Typography;
const { Panel } = Collapse;

/**
 * @typedef {Object} MODULES_TYPE - Les types de modules qui reference leur stores
 * @property {Store_Module_inputString} string - Largeur maximal du layout
 * @property {Store_Inputs_tag} tag - Largeur maximal du layout
 * @property {Store_Module_layout} layout - Largeur maximal du layout

 */

/** Store Input? */
export const Store_Modules = store({
	STORES: {
		string: Store_Module_inputString,
		tag: Store_Inputs_tag,
		layout: Store_Module_layout,
	},
	/** Static, dropData lorsque dnd */
	DROPDATA: { i: 'dropTest', h: 1, w: 1, type: 'tag' },
	/** data du dnd en cours */
	dropData: null,
	/** quand on drag un module */
	onDragStart(type) {
		this.dropData = { ...this.DROPDATA, type };
	},
	onDragEnd() {
		this.dropData = null;
	},
	//TODO: FAIRE UN GETVIEW GETSTORE ?
	//
	/** return input view selon type, passe par le store respectif du input pour creer un view */
	/**@param {'string'} type */
	getInputView(type, id) {
		const store = this.STORES[type]; // store du input
		if (!store) {
			return <>Fatal error , type not existe</>;
		}
		return store.getView(id);
	},

	getStore(type) {
		return this.STORES[type];
	},
});
/** list des elements modules implementable */
const Activity_Modules = () => {
	const onDragStart = (type) => {
		// const data = Store_DataBaseStorage.createData(type);
		// Store_DataBaseStorage.setDropper(data);
		//e.dataTransfer.setData('text', JSON.stringify(data));
	};
	return (
		<div className={'Activity_Modules'}>
			<CheckboxGroup options={['decorative', 'strings', 'numbers']} />
			<Collapse defaultActiveKey={['SingleModules']}>
				<Panel header='Single Modules' key='SingleModules'>
					{Object.keys(Store_Modules.STORES).map((type, i) => {
						// pour chaque data, affiche modules
						return (
							<div
								key={i}
								className='ModuleDragger'
								draggable={true}
								onDragStart={(e) => Store_Modules.onDragStart(type)}
								onDragEnd={(e) => Store_Modules.onDragEnd()}
							>
								<div className={'ModuleTitle'}>
									<Text type='secondary'>#{type}</Text>
								</div>
								{Store_Modules.getInputView(type)}
							</div>
						);
					})}
				</Panel>
				<Panel header='Group Modules' key='GroupModules'>
					{/* <Setting_base /> */}
				</Panel>
			</Collapse>
			<Space direction='vertical'>
				{/* <div
					id={'Inputs_string'}
					draggable={true}
					onDragStart={(e) => onDragStart('Inputs_string')}
					className={'ModuleInput'}
				>
					<div
						style={{
							width: '100px',
							height: '40px',
							background: 'rgba(255, 255, 255, 0.27)',
							borderStyle: 'dashed',
						}}
					>
						zone 1x1
					</div>
				</div> */}
				{/* <div
					id={'Inputs_string'}
					draggable={true}
					onDragStart={(e) => onDragStart('Inputs_string')}
					className={'ModuleInput'}
				>
					<Inputs_string />
				</div> */}
				{/* <div draggable={true} className={'ModuleInput'}>
					<Text type='secondary'>#textarea</Text>
					<br />
					<TextArea
						placeholder='string multiLine '
						autoSize={{ minRows: 2, maxRows: 6 }}
					/>
				</div> */}
				{/* <div draggable={true} className={'ModuleInput'}>
					<Text type='secondary'>#numbers</Text>
					<br />
					<InputNumber size='small' min={1} max={100000} />
				</div> */}
				{/* <div draggable={true} className={'ModuleInput'}>
					<Text type='secondary'>#checkboxs</Text>
					<br />
					<Checkbox>Checkbox</Checkbox>
				</div> */}
				{/* <div draggable={true} className={'ModuleInput'}>
					<Text type='secondary'>#radios</Text>
					<br />
					<Radio>Radio</Radio>
				</div> */}
				{/* 
				<div draggable={true} className={'ModuleInput'}>
					<Text type='secondary'>#switchs</Text>
					<br />
					<Switch checkedChildren='true' unCheckedChildren='false' />
				</div> */}
				{/* 
				<div draggable={true} className={'ModuleInput'}>
					<Text type='secondary'>#sliders</Text>
					<br />
					<Slider
						range
						marks={{
							0: 'n',
							26: 'm',
							37: 'h',
							100: {
								style: {
									color: '#f50',
								},
								label: <strong>e</strong>,
							},
						}}
						defaultValue={[26, 37]}
					/>
				</div> */}
				{/* 
				<div draggable={true} className={'ModuleInput'}>
					<Text type='secondary'>#selects</Text>
					<br />
					<Select defaultValue='option0' style={{ width: 120 }}>
						<Option value='option0'>options</Option>
						<Option value='option2'>option2</Option>
						<Option value='option3' disabled>
							option3
						</Option>
						<Option value='option4'>option4</Option>
					</Select>
				</div> */}
				{/* <div draggable={true} className={'ModuleInput'}>
					<Text type='secondary'>#shape</Text>
					<br />
					<Avatar shape='square' icon={<UserOutlined />} />
				</div> */}
			</Space>
		</div>
	);
};

export default view(Activity_Modules);
