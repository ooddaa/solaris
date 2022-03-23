import { Fragment } from 'react';

function TopMenuBar() {
  return (
    <Fragment>
      <div className="top-menu-bar">
        {/* <p className="menu">👾 Menu</p> */}
        <a href="#">Home</a>
        <a href="#">Entities</a>
        <a href="#">Graph</a>
      </div>
    </Fragment>
  );
}

export default TopMenuBar;
