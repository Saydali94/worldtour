import React from "react";
import AdminLayout from "../../../layouts/AdminLayout.jsx";
import AdminListEditor from "../../../components/AdminListEditor.jsx";

const TestimonialsEditor = () => {
  return (
    <AdminLayout>
      <div className="p-6">
        <AdminListEditor
          type="testimonials"
          titlesEditable={true}
          fields={[
            { name: "name", label: "Ism" },
            { name: "role", label: "Kasbi yoki lavozimi" },
            { name: "comment", label: "Fikr", type: "textarea" },
            { name: "image", label: "Rasm", type: "image" },
            { name: "rating", label: "Bahosi (1-5)", type: "number" },
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

export default TestimonialsEditor;
