import React from 'react';
import styles from './Button.module.css';
import classNames from 'classnames';
import Link from 'next/link';

type BaseButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
};

// Use simple intersection types that omit conflicting props
type ButtonAsButton = BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & {
    href?: undefined;
  };

type ButtonAsLink = BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children'> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = (props: ButtonProps) => {
  // Destructure common props
  const {
    children,
    variant = 'primary',
    fullWidth = false,
    className,
    href,
  } = props;

  // Separate common styles
  const buttonClass = classNames(
    styles.button,
    styles[variant],
    { [styles.fullWidth]: fullWidth },
    className
  );

  // If href is provided, render as Link
  if (href) {
    // Cast rest props to anchor attributes to satisfy TS
    const { href: _href, children: _children, variant: _v, fullWidth: _fw, className: _cn, ...linkProps } = props as ButtonAsLink;
    return (
      <Link href={href} className={buttonClass} {...linkProps}>
        {children}
      </Link>
    );
  }

  // Otherwise render as button
  // Cast rest props to button attributes
  const { href: _href, children: _children, variant: _v, fullWidth: _fw, className: _cn, ...buttonProps } = props as ButtonAsButton;

  return (
    <button className={buttonClass} {...buttonProps}>
      {children}
    </button>
  );
};
