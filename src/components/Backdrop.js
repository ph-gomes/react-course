const Backdrop = (props) => {
  const { onClick } = props;
  return <div className="backdrop" onClick={onClick} />;
};

export default Backdrop;
