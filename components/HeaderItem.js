export const HeaderItem = ({ Icon, text }) => {
  return (
    <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white">
      <Icon className="h-7 mb-0.5 group-hover:animate-bounce" />
      <p className="opacity-0 group-hover:opacity-100 tracking-widest ">
        {text}
      </p>
    </div>
  );
};
