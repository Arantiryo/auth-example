const Button = ({ className = "", children, onClick }) => {
  return (
    <button
      className={`${className} w-full text-white h-[65px] rounded-[50px]`}
      onClick={() => (onClick ? onClick() : null)}
    >
      {children}
    </button>
  );
};

export default Button;
