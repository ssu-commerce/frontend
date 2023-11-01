import type { ButtonHTMLAttributes, ReactElement } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: string;
  size?: "lg" | "md" | "sm";
};

export function Button({
  children,
  ...props
}: ButtonProps): ReactElement<ButtonProps> {
  return (
    <button
      // className={`ui-text-${color} ui-text-${size}`}
      className="ui-text-2xl ui-text-primary"
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}
