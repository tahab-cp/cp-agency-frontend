import { Input } from "../ui/input";

const PitchDeckInput = ({
  placeholder = "Enter your text",
  type = "text",
  value,
  onChange,
}) => {
  return (
    <Input
      className="text-text-primary h-[5rem] w-full rounded-[1.6rem] bg-black/15 px-[2.4rem] text-[1.6rem] leading-[2.4rem] font-medium outline-0 placeholder:text-[#333333] md:h-[6.2rem]"
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default PitchDeckInput;
