import React from 'react';
import styled from 'styled-components';
import {getSizeFormated} from '../utils';

const StyledWrapper = styled.section`
  padding: 1rem 1.2rem;
  background-color: rgba(222, 222, 222, 0.8);
  border: 2px dashed #333;
  border-radius: 5px;
  display: flex;
  align-items: center;

  .tip {
    font-size: 1rem;
  }

  .percent {
    font-size: 1.5rem;
    font-weight: 800;
  }

  .size {
    font-size: 0.6rem;
    font-weight: 800;
    color: #7eb631;
    align-self: flex-end;
    margin-left: 1rem;
  }
`;
export default function Summary({visible = false, totalSize = 0, totalCompressedSize = 0}) {
    const reduceSize = totalSize - totalCompressedSize;
    return (
        <StyledWrapper className={visible ? '' : 'hidden'}>
            <div className="tip">Save for you：</div>
            <div className="percent">{`${Math.floor((reduceSize * 100) / totalSize)}%`}</div>
            <div className="size">{`${getSizeFormated(reduceSize)}`}</div>
        </StyledWrapper>
    );
}
