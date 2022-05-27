import * as React from "react";
import * as styles from "./TopNav.module.css";
import { Link } from "@gemeente-denhaag/components-react";
import { navigate } from "gatsby";
import clsx from "clsx";

export interface ITopNavItem {
  label: string;
  href: string;
  icon?: JSX.Element;
  layoutClassName?: string;
}

interface TopNavItemsProps {
  items: ITopNavItem[];
}

interface TopNavProps {
  layoutClassName?: string;
}

export const PrimaryTopNav: React.FC<TopNavItemsProps & TopNavProps> = ({ items, layoutClassName }) => {
  return (
    <div className={clsx([layoutClassName && layoutClassName])}>
      <nav className={styles.primary}>
        <ul className={styles.ul}>
          {items.map(({ label, href, icon }, idx) => (
            <li className={styles.li} key={idx} onClick={() => navigate(href)}>
              <Link icon={icon} iconAlign="start">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export const SecondaryTopNav: React.FC<TopNavItemsProps & TopNavProps> = ({ items, layoutClassName }) => {
  return (
    <div className={clsx([layoutClassName && layoutClassName])}>
      <nav>
        <ul className={styles.ul}>
          {items.map(({ label, href, icon }, idx) => (
            <li className={styles.li} key={idx} onClick={() => navigate(href)}>
              <Link icon={icon} iconAlign="start">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
