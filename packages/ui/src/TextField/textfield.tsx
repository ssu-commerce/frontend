import type { ChangeEvent, ForwardedRef, ReactElement } from "react";
import { forwardRef, useEffect, useRef } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../utils/class-name-merge";
import type { TextFieldProps } from "./textfield.types";

export const wrapperVariant = cva(
  [
    "ui-rounded",
    "ui-inline-flex",
    "ui-gap-1",
    "ui-border-2",
    "ui-bg-slate-100",
    "ui-border-slate-200",
    "focus-within:ui-bg-white",
    "hover:ui-bg-white",
  ],
  {
    variants: {
      color: {
        default: "focus-within:ui-border-default",
        primary: "focus-within:ui-border-primary",
        secondary: "focus-within:ui-border-secondary",
        error: "focus-within:ui-border-error",
        info: "focus-within:ui-border-info",
        success: "focus-within:ui-border-success",
        warning: "focus-within:ui-border-warning",
      },
      size: {
        sm: "ui-h-8 ui-min-w-8",
        md: "ui-h-10 ui-min-w-10",
        lg: "ui-h-12 ui-min-w-12",
      },
    },
    defaultVariants: {
      color: "default",
      size: "md",
    },
  },
);

export const textAreaWRapperVariant = cva(
  [
    "ui-rounded",
    "ui-inline-flex",
    "ui-gap-1",
    "ui-border-2",
    "ui-bg-slate-100",
    "ui-border-slate-200",
    "ui-h-fit",
    "focus-within:ui-bg-white",
    "hover:ui-bg-white",
    "ui-relative",
  ],
  {
    variants: {
      color: {
        default: "focus-within:ui-border-default",
        primary: "focus-within:ui-border-primary",
        secondary: "focus-within:ui-border-secondary",
        error: "focus-within:ui-border-error",
        info: "focus-within:ui-border-info",
        success: "focus-within:ui-border-success",
        warning: "focus-within:ui-border-warning",
      },
      size: {
        sm: "ui-h-8 ui-min-w-8",
        md: "ui-h-10 ui-min-w-10",
        lg: "ui-h-12 ui-min-w-12",
      },
    },
    defaultVariants: {
      color: "default",
    },
  },
);

export const inputVariant = cva(
  [
    "ui-rounded",
    "ui-w-full",
    "ui-h-full",
    "ui-outline-none",
    "ui-bg-transparent",
    "focus: ui-outline-none",
    "ui-resize-none",
  ],
  {
    variants: {
      size: {
        sm: "ui-text-sm ui-p-1",
        md: "ui-text-md ui-p-2",
        lg: "ui-text-lg ui-p-3",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

const TextField = forwardRef<HTMLDivElement, TextFieldProps>(function TextField(
  {
    autoFocus,
    color = "default",
    defaultValue,
    disabled,
    fullWidth,
    inputProps,
    inputRef,
    maxRows,
    minRows,
    multiline,
    name,
    onChange,
    placeholder,
    required,
    rows,
    size = "md",
    type = "text",
    value,
    testId,
    className,
    ...props
  }: TextFieldProps,
  ref: ForwardedRef<HTMLDivElement>,
): ReactElement<TextFieldProps> {
  const inputControllRef = useRef<HTMLInputElement & HTMLTextAreaElement>(null);
  const hiddenTextAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleChangeTextArea = (
    e: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>,
  ): void => {
    onChange?.(e);
    if (multiline && !rows) {
      const textarea = inputRef?.current ?? inputControllRef.current;
      const hiddenTextarea = hiddenTextAreaRef.current;
      if (textarea && hiddenTextarea) {
        hiddenTextarea.value = textarea.value;
        if (
          hiddenTextarea.offsetHeight < hiddenTextarea.scrollHeight &&
          (!maxRows || hiddenTextarea.rows < maxRows)
        ) {
          hiddenTextarea.rows += 1;
          textarea.style.height = `${hiddenTextarea.scrollHeight}px`;
        }
      }
    }
  };

  useEffect(() => {
    if (autoFocus) {
      if (inputRef?.current) {
        inputRef.current.focus();
      } else if (inputControllRef.current) {
        inputControllRef.current.focus();
      }
    }
  }, [autoFocus, inputRef]);

  if (multiline)
    return (
      <div
        className={cn(
          textAreaWRapperVariant({ color }),
          disabled && "ui-opacity-30 hover:ui-opacity-30 ui-cursor-not-allowed",
          fullWidth && "ui-w-full",
          className,
        )}
        ref={ref}
        {...props}
      >
        <textarea
          className={cn(
            inputVariant({ size }),
            disabled && "ui-cursor-not-allowed",
            inputProps?.className,
          )}
          data-testid={testId}
          defaultValue={defaultValue}
          disabled={disabled}
          name={name}
          onChange={handleChangeTextArea}
          placeholder={placeholder}
          ref={inputRef ?? inputControllRef}
          required={required}
          rows={rows ?? minRows}
          value={value}
          {...inputProps}
        />
        <textarea
          aria-hidden="true"
          className={cn(
            inputVariant({ size }),
            "ui-invisible ui-h-fit ui-absolute ui-inset-0",
          )}
          defaultValue={defaultValue}
          ref={hiddenTextAreaRef}
          rows={rows ?? minRows}
          tabIndex={-1}
          value={value}
        />
      </div>
    );

  return (
    <div
      className={cn(
        wrapperVariant({ color, size }),
        disabled && "ui-opacity-30 hover:ui-opacity-30 ui-cursor-not-allowed",
        fullWidth && "ui-w-full",
        className,
      )}
      ref={ref}
      {...props}
    >
      <input
        className={cn(
          inputVariant({ size }),
          disabled && "ui-cursor-not-allowed",
          inputProps?.className,
        )}
        data-testid={testId}
        defaultValue={defaultValue}
        disabled={disabled}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        ref={inputRef ?? inputControllRef}
        required={required}
        type={type}
        value={value}
        {...inputProps}
      />
    </div>
  );
});

export { TextField };
