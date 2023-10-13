const RoutineThumbNail = props => {
  const { className, alt, src, onChange, value } = props;

  return (
    <div className="routineThumbNail">
      <img
        className={`routineThumbNailComponent${className}`}
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default RoutineThumbNail;
