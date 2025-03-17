import React, {useState, useEffect} from 'react';
import imageCompression from 'browser-image-compression';
// import LeaveConfirm from './components/LeaveConfirm';
// import InfoModal from './components/InfoModal';
import Summary from './components/Summary';
import Reset from './components/Reset';
import DownloadAll from './components/DownloadAll';
import Input from './components/Input';
import Output from './components/Output';
// import {useTranslation} from 'react-i18next';
import Description from './components/Description'
import styled from 'styled-components';

const StyledBody = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem 0;
  max-width: 42rem;

  .opts {
    width: 15rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .hidden {
    //visibility: hidden;
    display: none;
  }


`;
const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
};
const App = () => {
    // const {t, i18n} = useTranslation();
    //
    // const changeLanguage = (language) => {
    //     i18n.changeLanguage(language); // 切换语言
    // };

    const [compressing, setCompressing] = useState(false);
    const [originSize, setOriginSize] = useState(0);
    const [compressSize, setCompressSize] = useState(0);
    const [images, setImages] = useState([]);
    const handleCompress = async files => {
        setCompressing(true);
        console.log(files);
        const fileArr = [...files];
        setImages(prev => {
            return [...prev, ...fileArr];
        });
        const ds = [];
        try {
            const promises = [...files].map(async img => {
                console.log(`Received File`, img);
                // const blob = b64toBlob(e.target.result);
                const compressedFile = await imageCompression(img, options);
                console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                console.log(`compressedFile size ${compressedFile.size / 1024} KB`); // smaller than maxSizeMB
                ds.push(compressedFile);
                img.compressed = compressedFile;
                setImages(prev => {
                    const tmpIdx = prev.findIndex(file => file.name === img.name);
                    prev[tmpIdx] = img;
                    return [...prev];
                });
            });

            await Promise.all(promises);
        } catch (error) {
            console.log(error);
        }
        console.log({ds});
        setCompressing(false);
    };
    useEffect(() => {
        let originSize = 0;
        let compressedSize = 0;
        images.forEach(img => {
            const {size, compressed} = img;
            const {size: cSize} = compressed || {size: 0};
            originSize = originSize + size;
            compressedSize = compressedSize + (cSize > size ? size : cSize);
        });
        setOriginSize(originSize);
        setCompressSize(compressedSize);
    }, [images]);
    const resetAll = () => {
        setImages([]);
    };
    return (
        <StyledBody>
            {/*<LeaveConfirm trigger={images.length > 0} />*/}
            {/*<button onClick={() => changeLanguage('en')}>English</button>*/}
            {/*<button onClick={() => changeLanguage('zh')}>中文</button>*/}

            <Input compressImages={handleCompress}/>
            <div className={`${images.length === 0 ? 'hidden' : ''}`}>
                <Output images={images}/>
                <div className={`opts ${images.length === 0 ? 'hidden' : ''}`}>
                    <Reset disabled={compressing} resetAll={resetAll}/>{' '}
                    <DownloadAll disabled={compressing} images={images}/>
                </div>
                <Summary
                    visible={images.length > 0}
                    totalSize={originSize}
                    totalCompressedSize={compressSize}
                />
            </div>

            <Description/>

            {/*<h2>Frequently Asked Questions</h2>*/}
            {/*<div className="faq">*/}
            {/*    <h3>How can I reduce the MB size of a photo?</h3>*/}
            {/*    <p>Our free <strong>photo compressor</strong> allows you to <strong>reduce the MB size of*/}
            {/*        photos</strong> directly*/}
            {/*        in your browser. Simply upload your image and let our tool handle the rest.</p>*/}

            {/*    <h3>Can I compress images without losing quality?</h3>*/}
            {/*    <p>Yes, with our <strong>image compressor</strong>, you can <strong>compress images without losing*/}
            {/*        quality</strong>.*/}
            {/*        This ensures your photos remain sharp and clear.</p>*/}
            {/*</div>*/}

            {/*<InfoModal />*/}
        </StyledBody>
    );
};
export default App;
