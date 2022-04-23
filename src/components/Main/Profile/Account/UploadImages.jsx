import React, {useEffect, useState} from 'react';
import {getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage';
import {v4 as uuidv4} from 'uuid';
// import arrowUp from '../../assets/png/arrow-up.png';
import {useDispatch, useSelector} from 'react-redux';
import {fb} from '../../../../firebaseFiles/config/firebaseConfig';

export default function UploadImages() {
    const dispatch = useDispatch();
    const [selector, setSelector] = useState([]);
    const [download, setDownload] = useState(false);

    useEffect(() => {
        setDownload(selector.images.length);
    }, [selector.images]);

    const formHandler = e => {
        e.preventDefault();
        const file = e.target.files;
        uploadFiles(file);
    };

    const uploadFiles = file => {
        for (let i = 0; i < file.length; i++) {
            if (!file[i]) return;
            const storageRef = ref(fb, `/images/${uuidv4()}`);
            const uploadTask = uploadBytesResumable(storageRef, file[i]);

            uploadTask.on(
                'state_changed',
                snapshot => {},
                err => console.log(err),
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(url =>
                        setSelector([...selector, url])
                    );
                }
            );
        }
    };

    return (
        <div className={`d-flex row mt-5`}>
            <div className={`col-6 text-center`}>
                <img
                    // className={`${style.addFileIcon}`}
                    // src={arrowUp}
                    alt={''}
                />
                <p /* className={`${style.smallerTextBlack}`} */>
                    Drag and drop photos or
                </p>
                <label
                    // className={`${style.addFileLabel}`}
                    htmlFor={'fileInput'}
                >
                    Browse
                </label>
            </div>
            <div className={`col-6 mb-3`}>
                {/*                  ${style.divInput}
                 */}{' '}
                <input
                    // className={`${style.addFileInput}`}
                    onChange={formHandler}
                    type={'file'}
                    id={'fileInput'}
                    name={'fileInput'}
                    multiple
                    accept={'image/*, image/jpeg'}
                />
            </div>
            <span className={` text-center`}>
                {/* ${style.smallerTextBlack} */}
                {download} images download
            </span>
        </div>
    );
}
