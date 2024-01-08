import type { IconProps } from ".";

function RadioUnCheckedIcon({
  color = "#ffffff",
  size = 20,
}: IconProps): JSX.Element {
  switch (size) {
    case 16:
      return (
        <svg
          fill="none"
          height="16"
          viewBox="0 0 16 16"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 0C3.584 0 0 3.584 0 8C0 12.416 3.584 16 8 16C12.416 16 16 12.416 16 8C16 3.584 12.416 0 8 0ZM8 14.4C4.464 14.4 1.6 11.536 1.6 8C1.6 4.464 4.464 1.6 8 1.6C11.536 1.6 14.4 4.464 14.4 8C14.4 11.536 11.536 14.4 8 14.4Z"
            fill={color}
          />
        </svg>
      );
    case 20:
      return (
        <svg
          fill="none"
          height="20"
          viewBox="0 0 20 20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"
            fill={color}
          />
        </svg>
      );
    case 24:
      return (
        <svg
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM12 21.6C6.696 21.6 2.4 17.304 2.4 12C2.4 6.696 6.696 2.4 12 2.4C17.304 2.4 21.6 6.696 21.6 12C21.6 17.304 17.304 21.6 12 21.6Z"
            fill={color}
          />
        </svg>
      );
    case 28:
      return (
        <svg
          fill="none"
          height="28"
          viewBox="0 0 28 28"
          width="28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 0C6.272 0 0 6.272 0 14C0 21.728 6.272 28 14 28C21.728 28 28 21.728 28 14C28 6.272 21.728 0 14 0ZM14 25.2C7.812 25.2 2.8 20.188 2.8 14C2.8 7.812 7.812 2.8 14 2.8C20.188 2.8 25.2 7.812 25.2 14C25.2 20.188 20.188 25.2 14 25.2Z"
            fill={color}
          />
        </svg>
      );
    case 32:
      return (
        <svg
          fill="none"
          height="32"
          viewBox="0 0 32 32"
          width="32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 0C7.168 0 0 7.168 0 16C0 24.832 7.168 32 16 32C24.832 32 32 24.832 32 16C32 7.168 24.832 0 16 0ZM16 28.8C8.928 28.8 3.2 23.072 3.2 16C3.2 8.928 8.928 3.2 16 3.2C23.072 3.2 28.8 8.928 28.8 16C28.8 23.072 23.072 28.8 16 28.8Z"
            fill={color}
          />
        </svg>
      );
    default:
      return (
        <svg
          fill="none"
          height="16"
          viewBox="0 0 16 16"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 0C3.584 0 0 3.584 0 8C0 12.416 3.584 16 8 16C12.416 16 16 12.416 16 8C16 3.584 12.416 0 8 0ZM8 14.4C4.464 14.4 1.6 11.536 1.6 8C1.6 4.464 4.464 1.6 8 1.6C11.536 1.6 14.4 4.464 14.4 8C14.4 11.536 11.536 14.4 8 14.4Z"
            fill={color}
          />
        </svg>
      );
  }
}

export { RadioUnCheckedIcon };
