import React, { useState } from 'react';
import AnswersList from './AnswersList';

const AnswersListContainer = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div className={`content__answers ${isDisabled ? 'disabled' : ''}`}>
      <AnswersList setIsDisabled={setIsDisabled} />
    </div>
  );
};

export default React.memo(AnswersListContainer);
