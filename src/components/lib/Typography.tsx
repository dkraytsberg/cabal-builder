import "./Typography.scss";

export const MainHeader: React.FC = ({ children }) => <h1>{children}</h1>;

export const SectionHeader: React.FC = ({ children }) => (
  <h2 className="SectionHeader">{children}</h2>
);

export const InlineHeader: React.FC = ({ children }) => (
  <b className="InlineHeader">{children}</b>
);

export const InlineTag: React.FC = ({ children, ...props }) => (
  <i className="InlineTag" {...props}>
    {children}
  </i>
);

export const Link: React.FC<{ onClick?: () => void }> = ({
  children,
  onClick,
}) => {
  const click = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onClick && onClick();
  };
  return (
    <button className="Link" onClick={click} data-hide-on-print>
      {children}
    </button>
  );
};
