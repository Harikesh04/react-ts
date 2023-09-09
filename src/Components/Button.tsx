


interface ButtonProps {
    title: string;
    onClick: () => void;
    className?: string; // Optional prop
  }
  
function Button({ title, onClick, className }: ButtonProps) {
    return <button className={className} onClick={onClick}>{title}</button>;
  }

export default Button