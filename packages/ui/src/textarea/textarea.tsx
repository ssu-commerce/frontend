"use client";

import type { ChangeEvent, ForwardedRef, ReactElement } from "react";
import { forwardRef, useEffect, useRef } from "react";
import { ColorKey, SizeKey } from "../constants";
import type { TextAreaProps } from "./textarea.types";
import * as S from "./textarea.styles";

const TextArea = forwardRef<HTMLDivElement, TextAreaProps>(function TextArea(
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
    value,
    testId,
    id,
    loading,
    css,
    ...props
  }: TextAreaProps,
  ref: ForwardedRef<HTMLDivElement>,
): ReactElement<TextAreaProps> {
  const inputControllRef = useRef<HTMLTextAreaElement>(null);
  const hiddenTextAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>): void => {
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

  if (loading)
    return (
      <S.Loading
        colorKey={color}
        data-testid={testId}
        disabled={disabled}
        sizeKey={size}
      />
    );

  return (
    <S.TextareaWrapper
      colorKey={color}
      css={css}
      fullWidth={fullWidth}
      ref={ref}
      sizeKey={size}
      {...props}
    >
      <S.TextArea
        css={{
          height: "auto",
        }}
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
        sizeKey={size}
        value={value}
        {...inputProps}
      />
      <S.HiddenTextarea
        aria-hidden="true"
        defaultValue={defaultValue}
        ref={hiddenTextAreaRef}
        rows={rows ?? minRows}
        tabIndex={-1}
        value={value}
      />
    </S.TextareaWrapper>
  );
});

export { TextArea };
