import type { ChangeEvent, ForwardedRef, ReactElement } from "react";
import { forwardRef, useEffect, useRef } from "react";
import type { TextFieldProps } from "./textfield.types";
import * as C from "./textfield.style";
import { ColorKey, SizeKey } from "../constants";

const TextField = forwardRef<HTMLDivElement, TextFieldProps>(function TextField(
  {
    autoFocus,
    color = ColorKey.Default,
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
    size = SizeKey.SM,
    type = "text",
    value,
    testId,
    className,
    id,
    ...props
  }: TextFieldProps,
  ref: ForwardedRef<HTMLDivElement>,
): ReactElement<TextFieldProps> {
  const inputControllRef = useRef<HTMLInputElement & HTMLTextAreaElement>(null);
  const hiddenTextAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleChangeTextArea = (
    e: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>,
  ): void => {
    onChange && onChange(e);

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
          textarea.rows += 1;
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
      <C.TextareaWrapper
        color={color}
        size={size}
        ref={ref}
        fullWidth={fullWidth}
        {...props}
      >
        <C.Textarea
          styleSize={size}
          data-testid={testId}
          defaultValue={defaultValue}
          disabled={disabled}
          id={id}
          name={name}
          onChange={handleChangeTextArea}
          placeholder={placeholder}
          ref={inputRef ?? inputControllRef}
          required={required}
          rows={rows ?? minRows}
          value={value}
          css={{
            height: "auto",
          }}
          {...inputProps}
        />
        <C.HiddenTextarea
          aria-hidden="true"
          defaultValue={defaultValue}
          ref={hiddenTextAreaRef}
          rows={rows ?? minRows}
          tabIndex={-1}
          value={value}
        />
      </C.TextareaWrapper>
    );

  return (
    <C.TextFieldWrapper
      color={color}
      size={size}
      fullWidth={fullWidth}
      ref={ref}
      {...props}
    >
      <C.TextInput
        styleSize={size}
        data-testid={testId}
        defaultValue={defaultValue}
        disabled={disabled}
        id={id}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        ref={inputRef ?? inputControllRef}
        required={required}
        type={type}
        value={value}
        {...inputProps}
      />
    </C.TextFieldWrapper>
  );
});

export { TextField };
