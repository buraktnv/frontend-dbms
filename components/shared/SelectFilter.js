import React, { useState } from "react";

const SelectFilter = ({
  content = {
    title: "Renk",
    options: ["Beyaz", "Kırmızı", "Yeşil", "Mavi", "Siyah"],
    max: 3,
  },
}) => {
  const [selected, setSelected] = useState([]);

  const handleSelect = (e) => {
    let selectName = e.target.name;
    console.log(e.target, selected);
    if (e.target.checked) {
      if (content.max <= selected.length) {
        return alert(`Yalnızca ${content.max} seçebilirsiniz.`);
      }
      setSelected((pre) => [...pre, selectName]);
    } else {
      setSelected((pre) => [...pre.filter((elem) => elem != selectName)]);
    }
  };

  return (
    <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex items-center justify-between gap-2 p-4 text-gray-900 transition cursor-pointer">
        <span className="text-sm font-medium"> {content.title} </span>

        <span className="transition group-open:-rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </summary>

      <div className="bg-white border-t border-gray-200">
        <header className="flex items-center justify-between p-4">
          <span className="text-sm text-gray-700">
            {selected.length} Seçildi
          </span>

          <button
            type="button"
            className="text-sm text-gray-900 underline underline-offset-4"
            onClick={() => setSelected([])}
          >
            Sıfırla
          </button>
        </header>

        <ul className="p-4 space-y-1 border-t border-gray-200">
          {content.options.map((elem, index) => {
            return (
              <Select
                content={{ name: elem }}
                selected={selected}
                handleSelect={handleSelect}
              />
            );
          })}
        </ul>
      </div>
    </details>
  );
};

const Select = ({ content, selected, handleSelect }) => {
  return (
    <li>
      <label htmlFor={content.name} className="inline-flex items-center gap-2">
        <input
          type="checkbox"
          id={content.name}
          name={content.name}
          checked={selected.includes(content.name)}
          className="w-5 h-5 border-gray-300 rounded"
          onChange={(e) => handleSelect(e)}
        />

        <span className="text-sm font-medium text-gray-700">
          {content.name}
        </span>
      </label>
    </li>
  );
};

export default SelectFilter;
