import React from 'react';
import { view } from '@risingstack/react-easy-state';
import Panel_Module from './PanelContent/Panel_Module';
import { Store_ActivityBar } from './ActivityBar.store';
import { VIEW_PanelContent } from './PanelContent.store';

function getView(VIEW) {
	switch (VIEW) {
		case VIEW_PanelContent.PanelModule:
			return <Panel_Module />;
		default:
			return <div>getView VIEW?{VIEW}</div>;
	}
}

const PanelContent = () => {
	const { _active } = Store_ActivityBar;
	if (_active) {
		const { VIEW, _title, _description } = Store_ActivityBar.getData(_active);
		const view = getView(VIEW);
		return (
			<div className='PanelContent'>
				<div>{_title}</div>
				<div>{_description}</div>
				{view}
			</div>
		);
	}
};

export default view(PanelContent);
