import React from 'react';
import styled from 'styled-components';
import ImageUpload from '../assets/img/image-upload.svg';
import {useTranslation} from 'react-i18next';

const StyledWrapper = styled.section`
  position: relative;
  width: 22rem;
  background-color: #d0d4d3;
  box-shadow: 0 0 6px 0px #d0d4ee;
  border: 2px dashed #555;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 1rem;

  &:hover {
    opacity: 0.6;
  }

  .img {
    width: 3rem;
    margin-bottom: 1rem;
  }

  .title {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: #000;
    font-weight: 800;
  }

  .desc {
    font-size: 0.6rem;
    color: #666;
  }

  input[type='file'] {
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
    left: 0;
    top: 0;
    opacity: 0;
  }
`;

export default function Input({compressImages}) {
    const {t} = useTranslation();

    const handleChange = evt => {
        compressImages(evt.target.files);
    };
    return (
        <StyledWrapper>
            <input
                accept="image/jpg,image/png,image/jpeg"
                multiple
                onChange={handleChange}
                type="file"
                name="images"
                id="images"
                title="请上传图片，可多选"
            />
            <img className="img" src={ImageUpload} alt="upload image"/>
            <h2 className="title">{t('title')}</h2>
            <h3 className="desc">{t('description')}</h3>
        </StyledWrapper>
    );
}
