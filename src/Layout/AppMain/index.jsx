import AppNav from './AppNav'
import AppWorkspace from './AppWorkspace';
import AppWidgets from './AppWidgets';

function AppMain() {
  return (
    <div className='App-main'>
      <AppNav></AppNav>
      <AppWorkspace></AppWorkspace>
      <AppWidgets></AppWidgets>
    </div>
  );
}

export default AppMain;
