import React, { useState } from 'react';
import { SwipeableDrawer } from '@material-ui/core';

type MobileDrawerProps = {
  deviceType?: any
}
const MobileDrawer: React.FunctionComponent<MobileDrawerProps> = ({ deviceType }) => {
  const [ isOpen, setIsOpen ] = useState(false);

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setIsOpen(open);
  };

  return (
    <SwipeableDrawer
      anchor="left"
      open={isOpen}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      Hello
    </SwipeableDrawer>
  );
};

export default MobileDrawer;
