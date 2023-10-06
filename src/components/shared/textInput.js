import Image from "next/image";

const TextInput = ({
  id,
  label,
  type = "text",
  className = "",
  isRequired = false,
  iconPath,
  minLength,
  error = "",
  // inputRef,
}) => {
  return (
    <div className="relative">
      <label className="text-white font-bold" htmlFor={id}>
        {label}
      </label>
      <Image
        className="absolute pointer-events-none top-[40px] transform left-4 w-5 h-5"
        width={20}
        height={20}
        src={iconPath}
        alt="input icon"
      />
      <input
        className={`${className} w-full mt-[9px] rounded-[22.5px] bg-white pl-[50px] pr-[20px] py-[15px]`}
        type={type}
        id={id}
        name={id}
        placeholder={label}
        required={isRequired}
        autoComplete="off"
        minLength={minLength ? minLength : null}
        // ref={inputRef ? inputRef : null}
        // pattern={type === "tel" ? "[0-9]{8,12}" : ".*"}
        // title={type === "tel" ? "Must only contain digits 0 through 9." : ""}
      />
      <div className=" pt-[10px] text-red-500">{!!error ? error : ""}</div>
    </div>
  );
};

export default TextInput;
