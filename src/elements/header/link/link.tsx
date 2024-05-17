// Link.tsx
import React from 'react';
import styles from './link.module.scss';

interface LinkProps {
  before?: string | React.ReactNode;
  linkText: string | React.ReactNode;
  linkUrl: string;
  after?: string | React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ before, linkText, linkUrl, after }) => {
  return (
    <a href={linkUrl} className={styles.link}>
      {before}
      <span>{linkText}</span>
      {after}
    </a>
  );
};

export default Link;
