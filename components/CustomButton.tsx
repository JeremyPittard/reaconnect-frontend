import Link from "next/link";
import React from "react";
import styles from "../styles/custom-button.module.scss";

const CustomButton = ({
  buttonType = "button",
  children,
  linkTarget = "self",
  linkAddress = "",
}: {
  buttonType?: "link" | "button" | "submit";
  children: React.ReactNode;
  linkTarget?: "blank" | "top" | "self";
  linkAddress?: string;
}) => {
  if (buttonType != "link") {
    return (
      <button className={styles.customButton} type={buttonType}>
        {children}
      </button>
    );
  }
  return (
    <Link
      className={styles.customButton}
      href={linkAddress}
      target={`_${linkTarget}`}
    >
      {children}
    </Link>
  );
};

export default CustomButton;
