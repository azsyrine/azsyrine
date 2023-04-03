import React, {useState} from 'react'
import axios from 'axios';

const FileUpload = () => {

    const [file, setFile] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("File uploaded successfully");
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
    </form>
    
    </>
   
  );
}

export default FileUpload