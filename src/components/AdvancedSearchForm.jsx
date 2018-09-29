import React from 'react';
import PropTypes from 'prop-types';
import config from '../config';
import AdvancedSearchInput from './AdvancedSearchInput';
import styles from '../../styles/cspace/AdvancedSearchForm.css';

const propTypes = {
  isOpen: PropTypes.bool,
};

const defaultProps = {
  isOpen: false,
};

export default function AdvancedSearchForm(props) {
  const { isOpen } = props;
  const fields = config.get('advancedSearchFields');

  return (
    <div className={styles.common} style={{ display: isOpen ? 'block' : 'none' }}>
      {fields.map(field => (
        <AdvancedSearchInput
          key={field.id}
          {...field}
        />
      ))}
    </div>
  );
}

AdvancedSearchForm.propTypes = propTypes;
AdvancedSearchForm.defaultProps = defaultProps;
