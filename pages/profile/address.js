import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const address = () => {
  const [modal, setModal] = useState(true);
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between max-w-6xl px-4">
        <h2>Adreslerim</h2>
        <button
          className="px-4 py-2 text-gray-700 underline rounded-full"
          onClick={() => setModal((e) => !e)}
        >
          Adres Ekle
        </button>
      </div>
      {modal && <Modal closeModal={() => setModal(false)} />}
      <Table />
    </div>
  );
};

const Modal = ({ closeModal }) => {
  const [addressData, setAddressDate] = useState({});
  const springs = useSpring({
    from: { y: -430, opacity: 0, height: "0px" },
    to: { y: 0, opacity: 1, height: "430px" },
    config: {
      mass: 10,
      friction: 80,
    },
  });

  const handleChange = (e) => {
    setAddressDate((pre) => {
      return { ...pre, [e.target.id]: e.target.value };
    });
  };

  const submit = () => {
    closeModal();
  };

  console.log(addressData);
  return (
    <animated.div style={{ ...springs }}>
      <div className="z-40 flex flex-col max-w-6xl gap-4 mx-auto my-auto bg-white">
        <div className="grid grid-cols-2 gap-4">
          <Input
            content={{
              label: "Adres Başlığı",
              type: "text",
              id: "addressName",
              placeholder: "Adres başlığını giriniz.",
            }}
            handleChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Input
            content={{
              label: "İsim",
              type: "text",
              id: "name",
              placeholder: "İsminizi giriniz.",
            }}
            handleChange={handleChange}
          />
          <Input
            content={{
              label: "Soyisim",
              type: "text",
              id: "surname",
              placeholder: "Soyisminizi giriniz.",
            }}
            handleChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Input
            content={{
              label: "Telefon Numarası",
              type: "text",
              id: "telNo",
              placeholder: "Telefon numaranızı giriniz.",
            }}
            handleChange={handleChange}
          />
          <Input
            content={{
              label: "Şehir",
              type: "text",
              id: "city",
              placeholder: "Şehir bilginizi giriniz.",
            }}
            handleChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Input
            content={{
              label: "İlçe",
              type: "text",
              id: "town",
              placeholder: "İlçe bilginizi giriniz.",
            }}
            handleChange={handleChange}
          />
          <Input
            content={{
              label: "Mahalle",
              type: "text",
              id: "neighborhood",
              placeholder: "Mahalle bilginizi giriniz.",
            }}
            handleChange={handleChange}
          />
        </div>
        <Input
          content={{
            label: "Adres",
            type: "text",
            id: "address",
            placeholder: "Adresinizi giriniz.",
          }}
          handleChange={handleChange}
        />
        <button
          onClick={submit}
          className="px-8 py-1 text-gray-700 transition border rounded-full shadow hover:bg-gray-50 w-max"
        >
          Ekle
        </button>
      </div>
    </animated.div>
  );
};

const Input = ({ content, handleChange }) => {
  return (
    <div>
      <label
        htmlFor={content.id}
        className="block text-xs font-medium text-gray-700"
      >
        {content.label}
      </label>

      <input
        type={content.type}
        id={content.id}
        placeholder={content.placeholder}
        onChange={handleChange}
        className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
      />
    </div>
  );
};

const TableHead = () => {
  return (
    <thead className="bg-gray-100">
      <tr>
        <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
          Adres Başlığı
        </th>
        <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
          Ad
        </th>
        <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
          Soyad
        </th>
        <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
          Telefon
        </th>
        <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
          İl
        </th>
        <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
          İlçe
        </th>
        <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
          Mahalle
        </th>
        <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
          Adres
        </th>
        <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
          Sil
        </th>
      </tr>
    </thead>
  );
};

const Table = ({
  tableData = [
    {
      id: Math.floor(Math.random() * 10000),
      addressName: "Ev",
      name: "Burak",
      surname: "Tanrıverdi",
      telNo: "+90 545 677 37 12",
      city: "Kırklareli",
      town: "Merkez",
      neighborhood: "Bademlik Mahallesi",
      address:
        "Kırklareli-Babaeski Karahalil Birlik Mahallesi Zübeyde Hanım caddesi No:15",
    },
  ],
}) => {
  return (
    <div className="mx-auto overflow-x-auto">
      <table className="min-w-full text-sm divide-y divide-gray-200">
        <TableHead />
        <tbody className="divide-y divide-gray-200">
          {tableData.map((content) => {
            return (
              <tr>
                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                  {content?.addressName}
                </td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                  {content?.name}
                </td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                  {content?.surname}
                </td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                  {content?.telNo}
                </td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                  {content?.city}
                </td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                  {content?.town}
                </td>
                <td className="px-4 py-2 text-gray-700 whitespace-pre">
                  {content?.neighborhood}
                </td>
                <td className="px-4 py-2 text-gray-700 whitespace-pre-line">
                  {content?.address}
                </td>
                <td className="px-4 py-2 font-medium">
                  <button className="text-red-600">Sil</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default address;
