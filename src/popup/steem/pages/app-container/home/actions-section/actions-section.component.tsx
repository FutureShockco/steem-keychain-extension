import { ActionButtonList } from '@popup/steem/pages/app-container/home/actions-section/action-button.list';
import { ActionButtonComponent } from '@popup/steem/pages/app-container/home/actions-section/action-button/action-button.component';
import React from 'react';

type Props = {
  additionalClass?: string;
};
export const ActionsSectionComponent = ({ additionalClass }: Props) => {
  return (
    <div className={`actions-section ${additionalClass ?? ''}`}>
      {ActionButtonList.map((actionButton, index) => (
        <ActionButtonComponent
          key={index}
          label={actionButton.label}
          icon={actionButton.icon}
          nextScreen={actionButton.nextScreen}
          nextScreenParams={actionButton.nextScreenParams}
        />
      ))}
    </div>
  );
};
