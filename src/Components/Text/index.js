import './styles.css';

function Text({ children, color = "#fff" }) {
  return <div style={{ color }}>{children}</div>;
}

export default Text;
