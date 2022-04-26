import React from 'react';

import styles from './Heading.module.scss';

const Heading = ({ title, paragraph }) => {
  return (
    <div className={styles.heading}>
      {title && <h1 className={styles.headingTitle}>{title}</h1>}
      {paragraph && <p className={styles.headingParagraph}>{paragraph}</p>}
    </div>
  );
};

export default Heading;
