import * as React from "react";
import * as styles from "./Container.module.css";

export const Container: React.FC = ({ children }) => <div className={styles.container}>{children}</div>;
