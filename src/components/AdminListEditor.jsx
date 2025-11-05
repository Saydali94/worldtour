import React, { useState, useEffect, useRef } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const ITEMS_PER_PAGE = 6;

export default function AdminListEditor({ type, fields, titlesEditable = false }) {
  const [items, setItems] = useState([]);
  const [limit, setLimit] = useState(6);
  const [titles, setTitles] = useState({
    subtitle: `Explore Our Adventure ${type}`,
    mainTitle: `Our ${type.charAt(0).toUpperCase() + type.slice(1)}`,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [modalImage, setModalImage] = useState(null); // 🔹 Modal uchun rasm
  const hasLoaded = useRef(false);

  // 🔹 LocalStorage'dan yuklash
  useEffect(() => {
    if (hasLoaded.current) return;
    hasLoaded.current = true;

    const stored = localStorage.getItem(type);
    const storedLimit = localStorage.getItem(`${type}Limit`);
    const storedTitles = localStorage.getItem(`${type}Titles`);

    if (stored) setItems(JSON.parse(stored));
    if (storedLimit) setLimit(parseInt(storedLimit));
    if (storedTitles) setTitles(JSON.parse(storedTitles));
  }, [type]);

  // 🔹 LocalStorage'ga yozish
  useEffect(() => {
    localStorage.setItem(type, JSON.stringify(items));
  }, [items, type]);

  // 🔹 Qo‘shish
  const addItem = () => {
    const newItem = fields.reduce(
      (acc, f) => ({ ...acc, [f.name]: f.defaultValue || "", editing: true }),
      {}
    );
    setItems([newItem, ...items]);
    setCurrentPage(1);
  };

  // 🔹 O‘zgartirish
  const handleChange = (index, field, value) => {
    const updated = [...items];
    updated[index][field] = value;
    setItems(updated);
  };

  // 🔹 Rasm yuklash
  const handleImageUpload = (index, file, field) => {
    const reader = new FileReader();
    reader.onload = () => {
      const updated = [...items];
      updated[index][field] = reader.result;
      setItems(updated);
    };
    reader.readAsDataURL(file);
  };

  // 🔹 Drag & Drop
  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const pageItems = items.slice(startIndex, endIndex);

    const [moved] = pageItems.splice(result.source.index, 1);
    pageItems.splice(result.destination.index, 0, moved);

    const updated = [...items];
    updated.splice(startIndex, ITEMS_PER_PAGE, ...pageItems);
    setItems(updated);
  };

  // 🔹 Tahrirlash
  const toggleEdit = (index) => {
    const updated = [...items];
    updated[index].editing = !updated[index].editing;
    setItems(updated);
  };

  // 🔹 O‘chirish
  const deleteItem = (index) => {
    if (window.confirm("Ushbu element o‘chirilsinmi?")) {
      setItems(items.filter((_, i) => i !== index));
    }
  };

  // 🔹 Barchasini o‘chirish
  const clearAll = () => {
    if (window.confirm("Haqiqatan ham barcha elementlarni o‘chirmoqchimisiz?")) {
      setItems([]);
      localStorage.removeItem(type);
    }
  };

  // 🔹 Saralash
  const sortItems = (array) => {
    let sorted = [...array];
    switch (sortOption) {
      case "title-asc":
        sorted.sort((a, b) => (a.title || "").localeCompare(b.title || ""));
        break;
      case "title-desc":
        sorted.sort((a, b) => (b.title || "").localeCompare(a.title || ""));
        break;
      case "featured":
        sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      default:
        break;
    }
    return sorted;
  };

  // 🔍 Qidiruv + saralash
  const filteredItems = sortItems(
    items.filter((item) =>
      Object.values(item)
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase())
    )
  );

  // 🔹 Sahifalash
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginated = filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // 🔹 Saqlash
  const saveAll = () => {
    localStorage.setItem(type, JSON.stringify(items));
    localStorage.setItem(`${type}Limit`, limit);
    localStorage.setItem(`${type}Titles`, JSON.stringify(titles));
    alert("✅ Ma’lumotlar muvaffaqiyatli saqlandi!");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-blue-700 capitalize">
        ✏️ {type} Editor
      </h2>

      {/* 🔹 Sarlavhalar */}
      {titlesEditable && (
        <div className="bg-white p-5 rounded-lg shadow mb-8 border border-slate-200">
          <h3 className="text-lg font-semibold text-blue-700 mb-4">
            Sahifa sarlavhalari
          </h3>
          <input
            type="text"
            value={titles.subtitle}
            onChange={(e) => setTitles({ ...titles, subtitle: e.target.value })}
            placeholder="Kichik sarlavha"
            className="w-full border p-2 mb-3 rounded focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            value={titles.mainTitle}
            onChange={(e) => setTitles({ ...titles, mainTitle: e.target.value })}
            placeholder="Asosiy sarlavha"
            className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-400"
          />
        </div>
      )}

      {/* 🔎 Qidiruv / Saralash / Limit */}
      <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
        <div className="flex gap-3 items-center">
          <input
            type="text"
            placeholder="🔍 Qidiruv..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2"
          />
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2"
          >
            <option value="default">Saralash: Default</option>
            <option value="title-asc">A–Z</option>
            <option value="title-desc">Z–A</option>
            <option value="featured">Featured birinchi</option>
          </select>
        </div>

        <div className="flex gap-3 items-center">
          <label className="font-semibold text-slate-700">
            Bosh sahifada nechta chiqsin:
          </label>
          <select
            value={limit}
            onChange={(e) => setLimit(parseInt(e.target.value))}
            className="border border-slate-300 rounded-lg px-4 py-2"
          >
            {[4, 6, 8, 10, 12].map((num) => (
              <option key={num} value={num}>
                {num} ta
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 🔹 Ro‘yxat */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="list">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {paginated.map((item, i) => {
                const globalIndex = startIndex + i;
                return (
                  <Draggable
                    key={globalIndex}
                    draggableId={`${type}-${globalIndex}`}
                    index={i}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="bg-white rounded-lg shadow-md p-4 border border-slate-200 hover:shadow-lg transition"
                      >
                        <div className="flex justify-between items-center mb-3">
                          <h4 className="font-semibold text-blue-600">
                            {type} #{globalIndex + 1}
                          </h4>
                          <div className="flex gap-2">
                            <button
                              onClick={() => toggleEdit(globalIndex)}
                              className={`px-3 py-1 rounded text-sm font-semibold ${
                                item.editing
                                  ? "bg-green-600 text-white hover:bg-green-500"
                                  : "bg-yellow-500 text-white hover:bg-yellow-400"
                              }`}
                            >
                              {item.editing ? "✅ Saqlash" : "✏️ Tahrirlash"}
                            </button>
                            <button
                              onClick={() => deleteItem(globalIndex)}
                              className="text-red-500 hover:text-red-600 text-sm font-medium"
                            >
                              ✖
                            </button>
                          </div>
                        </div>

                        {item.editing ? (
                          <>
                            {fields.map((f) => {
                              if (f.type === "image") {
                                return (
                                  <div key={f.name} className="mb-4">
                                    <input
                                      type="text"
                                      placeholder={`${f.label} URL`}
                                      value={item[f.name] || ""}
                                      onChange={(e) =>
                                        handleChange(
                                          globalIndex,
                                          f.name,
                                          e.target.value
                                        )
                                      }
                                      className="w-full border p-2 mb-2 rounded focus:ring-2 focus:ring-blue-400"
                                    />
                                    <label className="block mb-2 text-sm text-slate-700">
                                      Yoki kompyuterdan rasm yuklash:
                                      <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) =>
                                          handleImageUpload(
                                            globalIndex,
                                            e.target.files[0],
                                            f.name
                                          )
                                        }
                                        className="block w-full mt-1 text-sm"
                                      />
                                    </label>
                                    {item[f.name] && (
                                      <img
                                        src={item[f.name]}
                                        alt="preview"
                                        onClick={() =>
                                          setModalImage(item[f.name])
                                        }
                                        className="w-full h-40 object-cover rounded border cursor-pointer hover:opacity-80 transition"
                                      />
                                    )}
                                  </div>
                                );
                              } else if (f.type === "checkbox") {
                                return (
                                  <label
                                    key={f.name}
                                    className="flex items-center gap-2 text-sm text-slate-700 mb-2"
                                  >
                                    <input
                                      type="checkbox"
                                      checked={item[f.name] || false}
                                      onChange={(e) =>
                                        handleChange(
                                          globalIndex,
                                          f.name,
                                          e.target.checked
                                        )
                                      }
                                    />
                                    {f.label}
                                  </label>
                                );
                              } else {
                                return (
                                  <input
                                    key={f.name}
                                    type={f.type || "text"}
                                    placeholder={f.label}
                                    value={item[f.name] || ""}
                                    onChange={(e) =>
                                      handleChange(
                                        globalIndex,
                                        f.name,
                                        e.target.value
                                      )
                                    }
                                    className="w-full border p-2 mb-2 rounded focus:ring-2 focus:ring-blue-400"
                                  />
                                );
                              }
                            })}
                          </>
                        ) : (
                          <>
                            {item.image && (
                              <img
                                src={item.image}
                                alt={item.title}
                                onClick={() => setModalImage(item.image)}
                                className="w-full h-40 object-cover rounded-md mb-3 border cursor-pointer hover:opacity-80 transition"
                              />
                            )}
                            <h3 className="text-lg font-bold text-blue-800">
                              {item.title || "—"}
                            </h3>
                          </>
                        )}
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {/* 🔹 Pastki tugmalar */}
      <div className="flex flex-wrap justify-between items-center mt-8 gap-4">
        <div className="flex gap-4">
          <button
            onClick={addItem}
            className="bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-lg shadow font-semibold"
          >
            ➕ Yangi qo‘shish
          </button>
          <button
            onClick={saveAll}
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg shadow font-semibold"
          >
            💾 Saqlash
          </button>
        </div>
        <button
          onClick={clearAll}
          className="bg-red-600 hover:bg-red-500 text-white px-6 py-2 rounded-lg shadow font-semibold"
        >
          🗑️ Barchasini o‘chirish
        </button>
      </div>

      {/* 🔹 Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-10 gap-2">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-md border ${
                currentPage === i + 1
                  ? "bg-blue-600 text-white"
                  : "bg-white hover:bg-blue-100"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}

      {/* 🖼️ Modal oynasi (katta preview) */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setModalImage(null)}
        >
          <img
            src={modalImage}
            alt="preview"
            className="max-w-4xl max-h-[90vh] rounded-lg shadow-2xl border border-white"
          />
        </div>
      )}
    </div>
  );
}
