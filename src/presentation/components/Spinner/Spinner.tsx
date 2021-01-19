/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Styles from './Spinner.styles.scss';

type Props = React.HTMLAttributes<HTMLDivElement>;

const Spinner: React.FC<Props> = (props: Props) => {
  return (
    <div {...props} className={[Styles.spinner, props.className].join(' ')}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export default Spinner;
