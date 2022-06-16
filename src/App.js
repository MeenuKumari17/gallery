import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {

  const [selectedImages, setSelectedImages] = useState([]);

  const imageHandler = (e) => {
    // console.log(e.target.files);
    if(e.target.files) {
      const fileArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
      // console.log(fileArray)

      setSelectedImages((prevImages) => prevImages.concat(fileArray));
    }
  }

  const renderImages = (s) => {
    return s.map((image) => {
      return <img src={image} key={image}/>
    })
  }


  return (
    <div className="app">
      <div className="heading">
        ...Mini Gallery...
      </div>
      <div>
        <input type="file" multiple id="file" onChange={imageHandler}/>
        <div className="label-holder">
          <label htmlFor="file" className="label">
            <p className='tag'>Select Image</p>
          </label>
        </div>
        <div className="result">
          {renderImages( selectedImages)}
        </div>
      </div>
    </div>
  );
}

export default App;
