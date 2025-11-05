import React from "react";
import AdminLayout from "../../../layouts/AdminLayout.jsx";
import AdminListEditor from "../../../components/AdminListEditor.jsx";

const ServicesEditor = () => {
  return (
    <AdminLayout>
      <div className="p-6">
        <AdminListEditor
          type="services"  // ❗ aynan shu nom bo‘lishi kerak
          titlesEditable={true}
          fields={[
            { name: "title", label: "Xizmat nomi" },
            { name: "description", label: "Tavsif" },
            { name: "image", label: "Rasm", type: "image" },
            { name: "price", label: "Narx ($)", type: "number" },
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

export default ServicesEditor;
