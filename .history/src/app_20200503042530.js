import React, { useState } from 'react';
import { view } from '@risingstack/react-easy-state';
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';
import RectangleSelection from 'react-rectangle-selection';
import OsNav from './app/OsNav';
import ActivityBarLeft from './app/ActivityBarLeft';
import SettingBarRight from './app/SettingBarRight';
import Footer from './app/Footer';
import LeftPaneContents from './app/LeftPaneContents';
import { Store_app } from './stores/Store_App';
import ContentPage from './app/ContentPage';
import PageTopTool from './app/ContentPage/PageTopTool';

const p = 1;
const m = 1;
function App() {
	//const CLASS = useStyles();
	return (
		<>
			<RectangleSelection
				onSelect={(e, coords) => {
					console.log('coords.target: ', coords.target);
					console.log('coords.origin: ', coords.origin);
				}}
				onMouseUp={(e, coords) => {
					e;
				}}
				style={{
					backgroundColor: 'rgba(125, 125, 125, 0.47)',
					borderColor: '#ffbe00',
					mixBlendMode: 'difference',
					borderWidth: '2px',
					boxShadow: '6px 6px 4px 1px rgba(48, 48, 48, 0.49)',
				}}
			>
				<OsNav />
				{/* <NavigatorTop /> */}
				{/* style={{ display: 'contents' }} */}
				<ReflexContainer key={Store_app.resizeId} orientation='vertical'>
					<ReflexElement minSize={41} size={41} maxSize={41}>
						<ActivityBarLeft />
					</ReflexElement>
					<ReflexElement className='left-pane' minSize={1} size={100}>
						<LeftPaneContents />
					</ReflexElement>
					<ReflexSplitter propagate={true} />
					<ReflexElement className='middle-pane' minSize={200}>
						<ReflexContainer orientation='horizontal'>
							<ReflexElement size={20}>
								<PageTopTool />
							</ReflexElement>
							<ReflexSplitter />
							<ReflexElement>
								<ContentPage />
							</ReflexElement>
						</ReflexContainer>
					</ReflexElement>

					<ReflexSplitter propagate={true} />
					<ReflexElement className='right-pane' size={80} minSize={6}>
						<SettingBarRight />
					</ReflexElement>
				</ReflexContainer>
				<Footer />
			</RectangleSelection>
		</>
	);
}
export default view(App);
