import * as React from "react";
import * as styles from "./MetaIcon.module.css";

export interface MetaIconProps {
  icon: JSX.Element;
  label: string;
  value: string;
}

export const MetaIcon: React.FC<MetaIconProps> = ({ icon, label, value }) => (
  <div className={styles.container}>
    <span className={styles.icon}>{icon}</span>

    <span>{label}</span>

    <span className={styles.value}>{value}</span>
  </div>
);
