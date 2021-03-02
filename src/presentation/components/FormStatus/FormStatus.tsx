import React, { useContext } from 'react';
import Context from '@/presentation/contexts/form/formContext';
import Spinner from '../Spinner/Spinner';
import Styles from './FormStatus.scss';

const FormStatus: React.FC = () => {
  const { state } = useContext(Context);
  const { isLoading, mainError } = state;
  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {isLoading && <Spinner className={Styles.spinner} />}
      {mainError && <span className={Styles.error}>{mainError}</span>}
    </div>
  );
};

export default FormStatus;
