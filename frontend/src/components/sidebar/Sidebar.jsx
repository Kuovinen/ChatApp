import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div className="sidebar rounded-lg overflow-hidden border-none flex  flex-col bl015">
      <SearchInput />

      <Conversations />
      <LogoutButton />
    </div>
  );
};
export default Sidebar;
