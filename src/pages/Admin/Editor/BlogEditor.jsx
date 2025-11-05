import React from "react";
import AdminLayout from "../../../layouts/AdminLayout.jsx";
import AdminListEditor from "../../../components/AdminListEditor.jsx";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const BlogEditor = () => {
  const [fullContent, setFullContent] = React.useState("");

  return (
    <AdminLayout>
      <div className="p-6">
        <AdminListEditor
          type="blogs"
          titlesEditable={true}
          fields={[
            { name: "title", label: "Maqola sarlavhasi" },
            { name: "author", label: "Muallif" },
            { name: "date", label: "Sana (YYYY-MM-DD)" },
            { name: "description", label: "Qisqacha tavsif (100-150 so‘z)" },
            { name: "image", label: "Rasm", type: "image" },
            { name: "link", label: "Havola (agar mavjud bo‘lsa)" },
            { name: "featured", label: "Bosh sahifada ko‘rsatish", type: "checkbox" },
            { name: "fullContent", label: "To‘liq kontent (maqola matni)", type: "html" },
          ]}
          customRenderField={(field, value, onChange) => {
            if (field.type === "html") {
              return (
                <div className="mt-4">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    {field.label}
                  </label>
                  <ReactQuill
                    theme="snow"
                    value={value || ""}
                    onChange={(val) => onChange(field.name, val)}
                    placeholder="Maqola matnini shu yerda yozing..."
                    className="bg-white rounded-lg shadow-sm border border-slate-200"
                    style={{ height: "300px", marginBottom: "60px" }}
                  />
                </div>
              );
            }
            return null;
          }}
        />
      </div>
    </AdminLayout>
  );
};

export default BlogEditor;
