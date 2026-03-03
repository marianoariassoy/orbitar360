import { useState } from "react";

interface Data {
  title: string;
  icon: React.ElementType;
}

const MenuServices = ({ data }: { data: Data[] }) => {
  const [active, setActive] = useState(2);
  const BUTTON_WIDTH = 48;
  const GAP = 4;

  return (
    <div className="flex">
      <nav className="flex items-center gap-x-1 relative z-20">
        <div
          className={`absolute left-0 top-0  border border-white rounded-full h-full w-full `}
          style={{
            width: `${(active + 1) * BUTTON_WIDTH + active * GAP}px`,
          }}
        ></div>

        {data.map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              key={index}
              className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full p-3 transition-all cursor-pointer  
                ${active === index ? "bg-white text-black" : "hover:bg-white hover:text-black"}
                `}
              onClick={() => setActive(index)}
            >
              <Icon className="h-8 w-auto" />
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default MenuServices;
