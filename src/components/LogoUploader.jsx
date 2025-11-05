import React, { useState } from "react";

const LogoUploader = ({ onUpload }) => {
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
        onUpload(reader.result); // logoni parent componentga qaytarish
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Logo yuklash</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="border p-2 rounded w-full"
      />
      {preview && (
        <img
          src={preview}
          alt="Logo preview"
          className="mt-3 h-16 object-contain border rounded"
        />
      )}
    </div>
  );
};

export default LogoUploader;
