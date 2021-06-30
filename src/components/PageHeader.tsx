import React from "react";
import { Link } from "react-router-dom";
import { InlineHeader } from "./lib/Typography";
import "./PageHeader.scss";

const Home = "Home";
const Changes = "Changes";

type Tab = typeof Home | typeof Changes;

interface NavTabProps {
  readonly to: string;
  readonly tab: Tab;
  readonly selectedTab: Tab;
  readonly setSelectedTab: (tab: Tab) => void;
}

const NavTab: React.FC<NavTabProps> = ({
  tab,
  to,
  selectedTab,
  setSelectedTab,
}) => {
  const selectedCss = selectedTab === tab ? "selected" : "unselected";

  return (
    <Link
      to={to}
      className={`PageHeader__Link ${selectedCss}`}
      onClick={() => setSelectedTab(tab)}
    >
      <InlineHeader>{tab}</InlineHeader>
    </Link>
  );
};

const PageHeader: React.FC = () => {
  const [selectedTab, setSelectedTab] = React.useState<Tab>(Home);

  return (
    <div className="PageHeader" data-hide-on-print>
      <NavTab
        to="/"
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        tab={Home}
      />
      <NavTab
        to="/changes"
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        tab={Changes}
      />
    </div>
  );
};

export default PageHeader;
