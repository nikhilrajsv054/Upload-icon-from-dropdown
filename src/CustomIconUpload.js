import React, { useState } from "react";

const CustomIconUpload = ({ onFileUpload }) => {
  const [fileInputKey, setFileInputKey] = useState(Date.now()); // Use a unique key

  const handleFileUpload = (event) => {
    const files = event.target.files;
    const newIcons = Array.from(files).map((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        onFileUpload(event.target.result);
      };
      reader.readAsText(file);
      console.log("hello1");
    });
    setFileInputKey(Date.now());
  };

  return (
    <input
      type="file"
      key={fileInputKey}
      accept=".svg"
      onChange={handleFileUpload}
      style={{ margin: "10px 0" }}
    />
  );
};

export default CustomIconUpload;
