import TopLogoBar from "./TopLogoBar/TopLogoBar";
import TopMenuBar from "./TopMenuBar/TopMenuBar";
import HeaderWithMenus from "./MantineHeaders/HeaderWithMenus";
import HeaderWithSearch from "./MantineHeaders/HeaderWithSearch";

const links = [
  {
    link: "#1",
    label: "Desktop",
  },
  {
    link: "#2",
    label: "Legal Entities",
  },
  {
    link: "#3",
    label: "People",
  },
];

function AppHeader() {
  return (
    <div className="App-header">
      {/* <TopLogoBar></TopLogoBar> */}
      {/* <HeaderWithMenus links={links} /> */}
      <HeaderWithSearch links={links} />
      {/* <TopMenuBar /> */}
    </div>
  );
}

export default AppHeader;
