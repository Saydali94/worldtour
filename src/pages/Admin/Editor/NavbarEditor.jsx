import React, { useState } from "react";
import AdminLayout from "../../../layouts/AdminLayout.jsx";
import {
  DragDropContext,
  Droppable,
  Draggable,
} from "@hello-pangea/dnd";

const NavbarEditor = () => {
  const [logo, setLogo] = useState(null);

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setLogo(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const [menuItems, setMenuItems] = useState([
    {
      id: "1",
      title: "Home",
      link: "/",
      subItems: [],
    },
    {
      id: "2",
      title: "About",
      link: "#",
      subItems: [
        { id: "2-1", title: "About Us", link: "/about-us" },
        { id: "2-2", title: "Team", link: "/team" },
        { id: "2-3", title: "Testimonials", link: "/testimonials" },
      ],
    },
    {
      id: "3",
      title: "Tours",
      link: "/tours",
      subItems: [],
    },
  ]);

  // 🔹 Drag & drop event
  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination, type } = result;

    if (type === "MENU") {
      const updated = Array.from(menuItems);
      const [moved] = updated.splice(source.index, 1);
      updated.splice(destination.index, 0, moved);
      setMenuItems(updated);
    } else if (type.startsWith("SUB_")) {
      const parentId = type.split("_")[1];
      const parentIndex = menuItems.findIndex((i) => i.id === parentId);
      const subItems = Array.from(menuItems[parentIndex].subItems);
      const [moved] = subItems.splice(source.index, 1);
      subItems.splice(destination.index, 0, moved);

      const updated = [...menuItems];
      updated[parentIndex].subItems = subItems;
      setMenuItems(updated);
    }
  };

  // 🔹 CRUD funksiyalar
  const addMenuItem = () => {
    const newItem = {
      id: Date.now().toString(),
      title: "",
      link: "",
      subItems: [],
    };
    setMenuItems([...menuItems, newItem]);
  };

  const deleteMenuItem = (index) => {
    const updated = [...menuItems];
    updated.splice(index, 1);
    setMenuItems(updated);
  };

  const handleMenuChange = (index, field, value) => {
    const updated = [...menuItems];
    updated[index][field] = value;
    setMenuItems(updated);
  };

  const addSubItem = (menuIndex) => {
    const updated = [...menuItems];
    updated[menuIndex].subItems.push({
      id: Date.now().toString(),
      title: "",
      link: "",
    });
    setMenuItems(updated);
  };

  const handleSubChange = (menuIndex, subIndex, field, value) => {
    const updated = [...menuItems];
    updated[menuIndex].subItems[subIndex][field] = value;
    setMenuItems(updated);
  };

  const deleteSubItem = (menuIndex, subIndex) => {
    const updated = [...menuItems];
    updated[menuIndex].subItems.splice(subIndex, 1);
    setMenuItems(updated);
  };

  const handleSave = () => {
    const data = { logo, menuItems };
    localStorage.setItem("navbarData", JSON.stringify(data));
    alert("✅ Navbar maʼlumotlari saqlandi!");
  };

  return (
    <AdminLayout>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Chap panel */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow">
          <h2 className="text-lg font-bold mb-4 text-blue-600">
            Navbar sozlamalari
          </h2>

          {/* Logo yuklash */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">Logo yuklash</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleLogoUpload}
              className="border p-2 rounded w-full"
            />
            {logo && (
              <img
                src={logo}
                alt="Logo preview"
                className="mt-3 h-16 object-contain border rounded"
              />
            )}
          </div>

          {/* DragDropContext */}
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="menuList" type="MENU">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {menuItems.map((item, i) => (
                    <Draggable key={item.id} draggableId={item.id} index={i}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          className="mb-4 border rounded-lg p-3 bg-gray-50 dark:bg-slate-700"
                        >
                          <div className="flex justify-between items-center mb-2">
                            <div
                              {...provided.dragHandleProps}
                              className="cursor-move text-gray-500 text-sm"
                            >
                              ☰
                            </div>
                            <span className="font-semibold text-blue-600">
                              {item.title || "Yangi menyu"}
                            </span>
                            <button
                              onClick={() => deleteMenuItem(i)}
                              className="text-red-500 hover:underline text-sm"
                            >
                              ❌
                            </button>
                          </div>

                          <input
                            type="text"
                            value={item.title}
                            onChange={(e) =>
                              handleMenuChange(i, "title", e.target.value)
                            }
                            placeholder="Bo‘lim nomi"
                            className="w-full border p-2 rounded mb-2"
                          />
                          <input
                            type="text"
                            value={item.link}
                            onChange={(e) =>
                              handleMenuChange(i, "link", e.target.value)
                            }
                            placeholder="Havola (masalan: /about)"
                            className="w-full border p-2 rounded mb-2"
                          />

                          {/* Sub menyular */}
                          <Droppable
                            droppableId={`sub-${item.id}`}
                            type={`SUB_${item.id}`}
                          >
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                              >
                                {item.subItems.map((sub, j) => (
                                  <Draggable
                                    key={sub.id}
                                    draggableId={sub.id}
                                    index={j}
                                  >
                                    {(provided) => (
                                      <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className="ml-4 mb-2 p-2 border-l border-blue-400 bg-white/40 rounded cursor-move"
                                      >
                                        <div className="flex justify-between items-center mb-1">
                                          <span className="text-sm font-medium">
                                            {sub.title || "Sub-menyu"}
                                          </span>
                                          <button
                                            onClick={() =>
                                              deleteSubItem(i, j)
                                            }
                                            className="text-xs text-red-500 hover:underline"
                                          >
                                            ✖
                                          </button>
                                        </div>
                                        <input
                                          type="text"
                                          value={sub.title}
                                          onChange={(e) =>
                                            handleSubChange(
                                              i,
                                              j,
                                              "title",
                                              e.target.value
                                            )
                                          }
                                          placeholder="Sub nomi"
                                          className="w-full border p-2 rounded mb-1 text-sm"
                                        />
                                        <input
                                          type="text"
                                          value={sub.link}
                                          onChange={(e) =>
                                            handleSubChange(
                                              i,
                                              j,
                                              "link",
                                              e.target.value
                                            )
                                          }
                                          placeholder="Havola"
                                          className="w-full border p-2 rounded mb-1 text-sm"
                                        />
                                      </div>
                                    )}
                                  </Draggable>
                                ))}
                                {provided.placeholder}
                              </div>
                            )}
                          </Droppable>

                          <button
                            onClick={() => addSubItem(i)}
                            className="text-sm text-blue-600 underline mb-2"
                          >
                            ➕ Sub-menyu qo‘shish
                          </button>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>

          <div className="flex gap-3 mt-4">
            <button
              onClick={addMenuItem}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              + Menyu qo‘shish
            </button>
            <button
              onClick={handleSave}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              💾 Saqlash
            </button>
          </div>
        </div>

        {/* O‘ng panel (ko‘rinish) */}
        <div className="bg-gray-100 dark:bg-slate-900 p-6 rounded-xl shadow">
          <h2 className="text-lg font-bold mb-4 text-blue-600">Ko‘rinishi</h2>

          <nav className="flex gap-6 bg-[#001b44] text-white p-4 rounded items-center relative">
            {logo && (
              <img
                src={logo}
                alt="logo"
                className="h-10 object-contain mr-4"
              />
            )}
            {menuItems.map((item) => (
              <div key={item.id} className="relative group">
                <span className="cursor-pointer hover:text-blue-400">
                  {item.title}
                </span>
                {item.subItems.length > 0 && (
                  <div className="absolute left-0 top-full bg-[#001b44]/95 mt-2 rounded-md hidden group-hover:block shadow-lg z-20">
                    {item.subItems.map((sub) => (
                      <a
                        key={sub.id}
                        href={sub.link}
                        className="block px-4 py-2 hover:text-blue-400 whitespace-nowrap border-b border-white/10"
                      >
                        {sub.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </AdminLayout>
  );
};

export default NavbarEditor;
