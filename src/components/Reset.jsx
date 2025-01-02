import React from 'react';
import StyledButton from './StyledButton';
import {useTranslation} from 'react-i18next';

export default function Reset({disabled = false, resetAll}) {
    const {t} = useTranslation();

    const handleClick = () => {
        resetAll()
        // if (window.confirm('您确定要清空所有数据？')) {
        //   resetAll();
        // }
    };
    return (
        <StyledButton disabled={disabled} onClick={handleClick} className="reset">
            {t('reset')}
        </StyledButton>
    );
}
