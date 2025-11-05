import React from "react";
import AdminLayout from "../../../layouts/AdminLayout.jsx";
import AdminListEditor from "../../../components/AdminListEditor.jsx";

const DestinationsEditor = () => {
  return (
    <AdminLayout>
      <div className="p-6">
        <AdminListEditor
          type="destinations"
          titlesEditable={true}
          fields={[
            { name: "title", label: "Sarlavha" },
            { name: "location", label: "Joylashuv" },
            { name: "image", label: "Rasm", type: "image" },
            { name: "toursCount", label: "Tur soni", type: "number" },
            { name: "featured", label: "Bosh sahifada ko‘rsatish", type: "checkbox" },
          ]}
        />
      </div>
    </AdminLayout>
  );
};

export default DestinationsEditor;
