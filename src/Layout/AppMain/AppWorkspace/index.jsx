import AppWorkspaceHeader from './AppWorkspaceHeader';
import AppWorkspaceBody from './AppWorkspaceBody';
import AppWorkspaceFooter from './AppWorkspaceFooter';

function AppWorkspace() {
  return (
    <div className="App-workspace">
      <AppWorkspaceHeader></AppWorkspaceHeader>
      <AppWorkspaceBody></AppWorkspaceBody>
      <AppWorkspaceFooter></AppWorkspaceFooter>
    </div>
  )
}

export default AppWorkspace;
