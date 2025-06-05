
const ColorDot = ({ color, size = 17, borderColor = '#D3D3D3' }) => {
  const dotStyle = {
    display: 'inline-block',
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: '50%',
    border: `0.5px solid ${borderColor}`,
    backgroundColor: color,
  };

  return <span style={dotStyle}></span>;
};

export default ColorDot;