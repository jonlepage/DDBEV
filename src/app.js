import React from 'react';
import { view, store } from '@risingstack/react-easy-state';
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';
import OsNav from './app/OsNav';
import ActivityBarLeft from './app/ActivityBarLeft';
import Footer from './app/Footer';
import ContentPage from './app/ContentPage';
import NavigatorTop from './app/NavigatorTop';
import Modales from './app/Modales';
import LeftPaneContents from './app/LeftPaneContents';

/** le store globaux app */
export const Store_App = store({
	/** fixing update issue when rezine nwjs */
	resizeId: 0,
	/**current level editor */
	levelEditor: 0,
	updateResize() {
		this.resizeId = this.resizeId + 1;
	},
});

window.addEventListener('resize', () => {
	Store_App.updateResize();
});

const App = () => {
	const { resizeId } = Store_App;
	return (
		<>
			<Modales />
			<OsNav />
			<NavigatorTop />
			<ReflexContainer key={resizeId} orientation='vertical'>
				<ReflexElement minSize={41} maxSize={41}>
					<ActivityBarLeft />
				</ReflexElement>
				<ReflexElement className='left-pane' minSize={1} size={100}>
					<LeftPaneContents />
				</ReflexElement>
				<ReflexSplitter />
				<ReflexElement className='right-pane'>
					<ContentPage />
				</ReflexElement>
			</ReflexContainer>
			<Footer />
		</>
	);
};
export default view(App);
