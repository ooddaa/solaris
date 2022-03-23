import TopLogoBar from "./TopLogoBar/TopLogoBar";
import TopMenuBar from "./TopMenuBar/TopMenuBar";

function AppHeader() {
  return (
    <div className="App-header">
      <TopLogoBar></TopLogoBar>
      <TopMenuBar></TopMenuBar>
    </div>
  );
}

export default AppHeader;
