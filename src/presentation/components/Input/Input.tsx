/* eslint-disable no-param-reassign */
import React, { useContext } from 'react';
import Context from '@/presentation/contexts/form/formContext';
import Styles from './Input.scss';

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input: React.FC<Props> = (props: Props) => {
  const { state, setState } = useContext(Context);
  const error = state[`${props.name}Error`];

  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false;
  };

  const handleChange = (event: React.FocusEvent<HTMLInputElement>): void => {
    setState(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const getStatus = (): string => {
    return '🔴';
  };

  const getTitle = (): string => {
    return error;
  };
  return (
    <div className={Styles.inputWrap}>
      <input
        {...props}
        data-testid={props.name}
        readOnly
        onFocus={enableInput}
        onChange={handleChange}
      />
      <span
        data-testid={`${props.name}-status`}
        title={getTitle()}
        className={Styles.status}
      >
        {getStatus()}
      </span>
    </div>
  );
};

export default Input;
