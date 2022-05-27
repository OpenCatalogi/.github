import { Divider, Link } from "@gemeente-denhaag/components-react";
import { navigate } from "gatsby";
import * as React from "react";
import * as styles from "./RichContentCard.module.css";
import { ExternalLinkIcon, ArrowRightIcon } from "@gemeente-denhaag/icons";

export interface RichContentCardProps {
  link: {
    label: string;
    href: string;
  };
  labelsWithIcon: {
    label: string;
    icon: JSX.Element;
  }[];
  tags: string[];
  contentLinks?: {
    title: string;
    subTitle: string;
    href: string;
  }[];
  linkIsExternal?: boolean;
}

export const RichContentCard: React.FC<RichContentCardProps> = ({
  link,
  labelsWithIcon,
  tags,
  contentLinks,
  linkIsExternal,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.link} onClick={() => navigate(link.href)}>
        <Link icon={linkIsExternal ? <ExternalLinkIcon /> : <ArrowRightIcon />} iconAlign="start">
          {link.label}
        </Link>
      </div>

      <div className={styles.labelsWithIcon}>
        {labelsWithIcon.map(({ label, icon }) => (
          <LabelWithIcon {...{ label, icon }} />
        ))}
      </div>

      <div className={styles.tags}>
        {tags.map((tag) => (
          <Tag {...{ tag }} />
        ))}
      </div>

      {contentLinks && (
        <div className={styles.contentLinks}>
          <Divider />
          {contentLinks.map(({ title, subTitle, href }) => (
            <ContentLink {...{ title, subTitle, href }} />
          ))}
        </div>
      )}
    </div>
  );
};

interface LabelWithIconProps {
  label: string;
  icon: JSX.Element;
}

const LabelWithIcon: React.FC<LabelWithIconProps> = ({ label, icon }) => {
  return (
    <div className={styles.labelWithIcon}>
      <span className={styles.labelWithIcon_icon}>{icon}</span>
      <span className={styles.labelWithIcon_label}>{label}</span>
    </div>
  );
};

interface TagProps {
  tag: string;
}

const Tag: React.FC<TagProps> = ({ tag }) => {
  return <span className={styles.tag}>{tag}</span>;
};

interface ContentLinkProps {
  title: string;
  subTitle: string;
  href: string;
}

const ContentLink: React.FC<ContentLinkProps> = ({ title, subTitle, href }) => {
  return (
    <Link className={styles.contentLink}>
      <div className={styles.contentLink_content}>
        <span className={styles.contentLink_title}>{title}</span>
        <span className={styles.contentLink_subTitle}>{subTitle}</span>
      </div>

      <div className={styles.contentLink_icon}>
        <ArrowRightIcon />
      </div>
    </Link>
  );
};
