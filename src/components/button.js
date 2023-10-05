const Button = ({ className = "", children }) => {
  return (
    <button
      className={`${className} w-full text-white h-[65px] rounded-[50px]`}
    >
      {children}
    </button>
  );
};

export default Button;
