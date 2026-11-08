"use client";

import { MouseEvent as ReactMouseEvent, useCallback, useState } from "react";
import styles from "./button.module.scss";
import LoadingIcon from "@/icons/loading";

interface ButtonSingleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  afterClick?: () => void;
}

function ButtonSingle({
  icon,
  children,
  className,
  onClick,
  disabled,
  afterClick,
  ...rest
}: ButtonSingleProps) {
  const [isDisabled, setDisabled] = useState(disabled);

  const clickFunction = useCallback(
    async (args: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (isDisabled) return;

      setDisabled(true);
      await onClick?.(args);
      setDisabled(false);
      afterClick?.();
    },
    [onClick, isDisabled, afterClick],
  );

  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={clickFunction}
      disabled={disabled || isDisabled}
      {...rest}
    >
      {isDisabled ? <LoadingIcon /> : icon}
      {children}
    </button>
  );
}

export function ButtonSinglePrimary({
  icon,
  children,
  className,
  ...rest
}: ButtonSingleProps) {
  return (
    <ButtonSingle
      className={`${styles.buttonPrimary} ${className}`}
      icon={icon ?? null}
      {...rest}
    >
      {children}
    </ButtonSingle>
  );
}

export function ButtonSingleSecondary({
  icon,
  children,
  className,
  ...rest
}: ButtonSingleProps) {
  return (
    <ButtonSingle
      className={`${styles.buttonSecondary} ${className}`}
      icon={icon ?? null}
      {...rest}
    >
      {children}
    </ButtonSingle>
  );
}
