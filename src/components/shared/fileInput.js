const FileInput = ({
  className = "",
  children,
  isDisabled = false,
  accept,
  name,
}) => {
  return (
    <button
      className={`${className} ${isDisabled ? "!text-gray" : ""} 
        w-full text-white h-[65px] rounded-[50px]`}
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
