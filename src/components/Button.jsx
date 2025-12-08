import React from "react";

export default function Button({
  variant = "outline",
  href,
  children,
  className = "",
  full = false,
  ...rest
}) {
  const baseClass = variant === "primary" ? "btn-primary" : "btn-outline";
  const widthClass = full ? "w-full sm:w-full" : "";
  const classes = [baseClass, widthClass, className].filter(Boolean).join(" ");

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
