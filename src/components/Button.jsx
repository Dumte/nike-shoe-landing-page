const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center rounded-full text-lg gap-2 bg-coral-red px-7 py-4 border font-montserrat text-white border-coral-red">
      {label}

      {/* button icon */}
      <img
        src={iconURL}
        alt="button arrow icon"
        className="w-5 h-5 ml-2 rounded-full"
      />
    </button>
  );
};

export default Button;
