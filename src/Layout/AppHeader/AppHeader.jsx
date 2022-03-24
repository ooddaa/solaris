import TopLogoBar from "./TopLogoBar/TopLogoBar";
import TopMenuBar from "./TopMenuBar/TopMenuBar";
import HeaderWithMenus from "./MantineHeaders/HeaderWithMenus";
import HeaderWithSearch from "./MantineHeaders/HeaderWithSearch";

const links = [
  {
    link: "#1",
    label: "Home",
  },
  {
    link: "#2",
    label: "Legal Entities",
  },
  {
    link: "#3",
    label: "People",
  },
  // {
  //   link: "#1",
  //   label: "Learn",
  //   links: [
  //     {
  //       link: "/docs",
  //       label: "Documentation",
  //     },
  //     {
  //       link: "/resources",
  //       label: "Resources",
  //     },
  //     {
  //       link: "/community",
  //       label: "Community",
  //     },
  //     {
  //       link: "/blog",
  //       label: "Blog",
  //     },
  //   ],
  // },
  // {
  //   link: "/about",
  //   label: "About",
  // },
  // {
  //   link: "/pricing",
  //   label: "Pricing",
  // },
  // {
  //   link: "#2",
  //   label: "Support",
  //   links: [
  //     {
  //       link: "/faq",
  //       label: "FAQ",
  //     },
  //     {
  //       link: "/demo",
  //       label: "Book a demo",
  //     },
  //     {
  //       link: "/forums",
  //       label: "Forums",
  //     },
  //   ],
  // },
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
