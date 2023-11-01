import type { ButtonHTMLAttributes } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: string;
};

export default function Button({
  color,
  type = 'button',
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={`ui-text-${color}`} type={type} {...props}>
      {children}
    </button>
  );
}
