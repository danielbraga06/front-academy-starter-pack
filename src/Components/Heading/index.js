import "./styles.css";

function Heading({children, color = "#fff", fontFamily, fontSize=22, fontWeight = 500}) {
  return <div style={{color, fontSize, fontWeight, fontFamily}}>{children}</div>;
}

export default Heading;
