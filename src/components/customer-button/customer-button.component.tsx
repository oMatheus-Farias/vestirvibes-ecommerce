import { ReactNode, ButtonHTMLAttributes } from "react";

interface CustomerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
  icon: ReactNode;
  children: string;
}

const CustomerButton = ({ color, icon, children }: CustomerButtonProps) => {
  return (
    <button
      className="w-full h-11 rounded-[10px] text-white font-semibold flex items-center justify-center gap-2 hover:opacity-70 transition-all"
      style={{ backgroundColor: color }}
    >
      {icon}
      {children}
    </button>
  );
};

export default CustomerButton;
