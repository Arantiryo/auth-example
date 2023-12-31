const Button = ({
  className = "",
  children,
  onClick,
  isDisabled = false,
  name,
  type,
}) => {
  return (
    <button
      className={`${className} ${isDisabled ? "!text-gray" : ""} 
        w-full text-white h-[65px] rounded-[50px]`}
      onClick={() => (onClick ? onClick() : null)}
      disabled={isDisabled}
      name={!!name ? name : null}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
