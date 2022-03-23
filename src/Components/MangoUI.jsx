import AppHeader from "../Layout/AppHeader/AppHeader";
import AppMain from "../Layout/AppMain/AppMain";
import AppFooter from "../Layout/AppFooter/AppFooter";

function MangoUI() {
  return (
    <div className="MangoUI">
      <AppHeader></AppHeader>
      <AppMain></AppMain>
      <AppFooter></AppFooter>
    </div>
  );
}

export default MangoUI;
