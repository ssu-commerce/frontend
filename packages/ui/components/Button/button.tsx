import './button.css';

interface ButtonProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export default function Button({
  backgroundColor,
  label,
  ...props
}: ButtonProps) {
  return (
    <button className="" style={{ backgroundColor }} type="button" {...props}>
      {label}
    </button>
  );
}
