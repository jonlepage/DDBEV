import React, { useState } from 'react';
import { view, store } from '@risingstack/react-easy-state';
import { Collapse, Select } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import Setting_base from './SettingBarRight/Setting_base';
import Setting_Layout from './SettingBarRight/Setting_Layout';

const { Panel } = Collapse;
const { Option } = Select;

function callback(key) {
	console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const genExtra = () => (
	<SettingOutlined
		onClick={(event) => {
			// If you don't want click extra trigger collapse, you can prevent this:
			event.stopPropagation();
		}}
	/>
);

class SettingBarRight extends React.Component {
	state = {
		expandIconPosition: 'left',
	};

	onPositionChange = (expandIconPosition) => {
		this.setState({ expandIconPosition });
	};

	render() {
		const { expandIconPosition } = this.state;
		return (
			<div
				style={{
					width: '0px',
					minWidth: '100%',
					height: '0px',
					minHeight: '100%',
					overflow: 'auto',
				}}
			>
				<Collapse
					defaultActiveKey={['0']}
					onChange={callback}
					expandIconPosition={expandIconPosition}
				>
					<Panel header='RootLayouts' key='0' extra={genExtra()}>
						<Setting_Layout />
					</Panel>
					<Panel header='Base' key='1' extra={genExtra()}>
						{/* <Setting_base /> */}
					</Panel>
					<Panel header='Connections' key='2' extra={genExtra()}>
						<div>{text}</div>
					</Panel>
					<Panel header='Styles' key='3' extra={genExtra()}>
						<div>{text}</div>
					</Panel>
				</Collapse>
				<br />
				<span>Expand Icon Position: </span>
				<Select value={expandIconPosition} onChange={this.onPositionChange}>
					<Option value='left'>left</Option>
					<Option value='right'>right</Option>
				</Select>
			</div>
		);
	}
}

export default view(SettingBarRight);
