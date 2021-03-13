import React, { useState, useEffect } from 'react';
import PopoverWrapper from './Popover.style';

type PopoverProps = {
  className?: string;
  handler: React.ReactNode;
  content: React.ReactNode;
  direction?: 'left' | 'right';
  disableCloseOnSelect?: boolean,
  handleToggle?: () => void;
};

const Popover: React.FC<PopoverProps> = ({
  className,
  handler,
  content,
  direction,
  disableCloseOnSelect
}) => {
  // Popover State
  const [state, setState] = useState(false);

  // Add all classs to an array
  const addAllClasses: string[] = ['popover-wrapper'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  // Add direction class on popover content
  if (direction) {
    addAllClasses.push(direction);
  }

  // Toggle Popover content
  const handleToggle = e => {
    e.stopPropagation();
    setState(state => !state);
  };

  // Handle document click
  const handleDocumentClick = e => {
    e.stopPropagation();
    const popup = document.querySelector('.popover-content')
    if (popup && popup.contains(e.target)) {
      return
    }
    if (state) {
      handleToggle(e);
    }
  };

  // Handle window event listener
  useEffect(() => {
    window.addEventListener('click', handleDocumentClick);
    return () => {
      window.removeEventListener('click', handleDocumentClick);
    };
  });

  return (
    <PopoverWrapper className={addAllClasses.join(' ')}>
      <div className='popover-handler' onClick={handleToggle}>
        {handler}
      </div>
      {state && (
        <div className='popover-content'>
          {content && (
            <div className='inner-wrap' onClick={ disableCloseOnSelect ? null : handleToggle}>
              {content}
            </div>
          )}
        </div>
      )}
    </PopoverWrapper>
  );
};

export default Popover;
