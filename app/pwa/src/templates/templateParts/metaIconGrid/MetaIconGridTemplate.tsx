import * as React from "react";
import * as styles from "./MetaIconGridTemplate.module.css";
import { MetaIcon, MetaIconProps } from "../../../components/metaIcon/MetaIcon";
import { Divider } from "@gemeente-denhaag/components-react";
import clsx from "clsx";

interface MetaIconGridTemplateProps {
  metaIcons: MetaIconProps[];
}

export const MetaIconGridTemplate: React.FC<MetaIconGridTemplateProps> = ({ metaIcons }) => {
  return (
    <div className={styles.container}>
      {metaIcons.map((metaIcon, idx) => {
        return (
          <div key={idx} className={styles.content}>
            <MetaIcon {...metaIcon} />

            <Divider orientation="vertical" className={clsx(metaIcons.length - 1 === idx && styles.dividerHidden)} />
          </div>
        );
      })}
    </div>
  );
};
