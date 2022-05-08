import React from 'react';
import PropTypes from 'prop-types';
import s from '../Section/Section.module.css';

const Section = ({ titleMain, subtitle, children }) => {
  return (
    <div className={s.sectionMain}>
      <h1>{titleMain}</h1>
      <h2>{subtitle}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  titleMain: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};

export default Section;
