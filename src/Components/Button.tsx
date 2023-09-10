import { ReactNode } from "react";



interface ButtonProps {
    title: string;
    onClick: () => void;// return type is void
    className?: string; // Optional prop
    children:ReactNode
  }
  
function Button({ title, onClick, className , children }: ButtonProps) {
    return <button className={className} onClick={onClick}>{title}{children}
    
    </button>;
  }

export default Button


