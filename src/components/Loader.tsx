const Loader = ({ size = 32, className = "" }: { size?: number; className?: string }) => (
  <div className={`flex justify-center items-center ${className}`} style={{ height: size * 2 }}>
    <span
      className="animate-spin inline-block border-4 border-stone-700 border-t-transparent rounded-full"
      style={{ width: size, height: size }}
    ></span>
  </div>
);

export default Loader; 