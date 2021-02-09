import React, { useContext } from 'react';
import Context from '@/presentation/contexts/form/formContext';
import Spinner from '../Spinner/Spinner';
import Styles from './FormStatus.scss';

const FormStatus: React.FC = () => {
  const { state, errorState } = useContext(Context);
  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {state.isLoading && <Spinner className={Styles.spinner} />}
      {errorState.main && (
        <span className={Styles.error}>{errorState.main}</span>
      )}
    </div>
  );
};

export default FormStatus;
