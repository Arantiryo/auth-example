const FileInput = ({
  className = "",
  children,
  // onClick,
  isDisabled = false,
  accept,
  name,
  // type,
}) => {
  return (
    <button
      className={`${className} ${isDisabled ? "!text-gray" : ""} 
        w-full text-white h-[65px] rounded-[50px]`}
      // onClick={() => (onClick ? onClick() : null)}
      disabled={isDisabled}
      accept={!!accept ? accept : null}
      name={!!name ? name : null}
      type="file"
    >
      {children}
    </button>
  );
};

export default FileInput;
