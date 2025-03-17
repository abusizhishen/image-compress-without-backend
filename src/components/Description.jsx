import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.section`
  width: 100%;
  //height: 3rem;
  //background-color: #d0d4d3;
  //box-shadow: 0 0 6px 0px #d0d4ee;
  //border: 2px dashed #555;
  border-radius: 10px;
  //display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 1rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  //font-size: 0.7rem;

  * {
    //user-select: auto;
  }

  .ul {
    margin-top: 0.5rem;

    ul {
      padding-top: 0.2rem;

    }
  }

  li, p {
    font-size: 0.5rem;
  }
`;

export default function Description({}) {
    return (
        <StyledWrapper>
            <h1>Free Image Compressor - Reduce Image Size Online</h1>
            <p>Looking for a free and secure way to compress your images? Use our <strong>image
                compressor</strong> to <strong>reduce
                image size</strong> or <strong>compress JPG (JPEG)</strong> files without losing quality. All operations
                are
                performed
                directly in your browser, ensuring privacy.</p>
            <br/>
            <div className={"ul"}>
                <h2>Why Use Our Photo Compressor?</h2>
                <ul>
                    <li>Compress JPG (JPEG) and PNG files easily.</li>
                    <li>Reduce image size to save storage space.</li>
                    <li>Online, free, and no uploads required.</li>
                </ul>
            </div>
            {/*<Card*/}
            {/*    hoverable*/}
            {/*    style={{width: 240}}*/}
            {/*    // cover={<img alt="example" src="https://via.placeholder.com/240"/>}*/}
            {/*>*/}
            {/*    <Meta title="Card Title" description="This is the description"/>*/}
            {/*</Card>*/}
        </StyledWrapper>
    );
}
