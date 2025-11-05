import React from "react";
import AdminLayout from "../../../layouts/AdminLayout.jsx";
import AdminListEditor from "../../../components/AdminListEditor.jsx";

const DealsEditor = () => {
  return (
    <AdminLayout>
      <div className="p-6">
        <AdminListEditor
          type="deals"
          titlesEditable={true}
          fields={[
            { name: "title", label: "Sarlavha" },
            { name: "description", label: "Tavsif" },
            { name: "price", label: "Narx", type: "number" },
            { name: "discountPrice", label: "Chegirma narxi", type: "number" },
            { name: "image", label: "Rasm", type: "image" },
            {
              name: "expiryDate",
              label: "Tugash sanasi (YYYY-MM-DD)",
              type: "date",
            },
            {
              name: "featured",
              label: "Bosh sahifada ko‘rsatish",
              type: "checkbox",
            },
          ]}
        />
      </div>
    </AdminLayout>
  );
};

export default DealsEditor;
