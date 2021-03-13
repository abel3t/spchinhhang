import React from 'react';
import DividerWrapper from './VerticalDivider.style'

type DividerProps = {
    props?: any;
};

const Divider: React.FC<DividerProps & any> = ({
    ...props
}) => {
    return (
        <>
            <DividerWrapper {...props}>|</DividerWrapper>
        </>
    );
};

export default Divider;
