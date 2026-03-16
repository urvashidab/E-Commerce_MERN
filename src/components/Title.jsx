export default function Title({ text1, text2, className = "" }) {
  return (
    <div className={`flex gap-2 items-center justify-center ${className}`}>
      <h1 className="uppercase text-2xl text-gray-500 font-medium ">
        {text1} <span className="text-black">{text2}</span>
      </h1>
      <span className="linedesign"></span>
    </div>
  );
}
