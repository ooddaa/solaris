import AppWorkspaceHeader from "./AppWorkspaceHeader/AppWorkspaceHeader";
import AppWorkspaceBody from "./AppWorkspaceBody/AppWorkspaceBody";
import AppWorkspaceFooter from "./AppWorkspaceFooter/AppWorkspaceFooter";

function AppWorkspace({ acceptedFiles }) {
  return (
    <div className="App-workspace">
      {/* <AppWorkspaceHeader/> */}
      <AppWorkspaceBody acceptedFiles={acceptedFiles} />
      <AppWorkspaceFooter />
    </div>
  );
}

export default AppWorkspace;
