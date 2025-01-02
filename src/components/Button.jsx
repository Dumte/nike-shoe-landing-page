const Button = ({ label, iconURL, backgroundColor, textColor, borderColor, fullWidth }) => {
  return (
    <button className={`flex justify-center items-center rounded-full text-lg gap-2  px-7 py-4 border font-montserrat leading-none

     ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : "text-white border-coral-red bg-coral-red rounded-full"} rounded-full ${fullWidth && 'w-full'}"}`}>
      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt="button arrow icon"
          className="w-5 h-5 ml-2 rounded-full"
        />
      )}
    </button>
  );
};

export default Button;
