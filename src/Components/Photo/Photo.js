import "./Photo.css";

const Photo = (props) => {
  const { imgSrc } = props;
  const photoStyle = { backgroundImage: `url(${imgSrc})`};
  return <div className="photo" style={photoStyle}></div>;
};

export default Photo;
