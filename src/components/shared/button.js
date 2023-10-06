const Button = ({ className = "", children, onClick, isDisabled = false }) => {
  return (
    <button
      className={`${className} ${isDisabled ? "!text-gray" : ""} 
        w-full text-white h-[65px] rounded-[50px]`}
      onClick={() => (onClick ? onClick() : null)}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
