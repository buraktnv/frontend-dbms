import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const Wallet = () => {
  const [modal, setModal] = useState(true);
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between px-4">
        <h2>Adreslerim</h2>
        <button
          className="px-4 py-2 text-gray-700 underline rounded-full"
          onClick={() => setModal((e) => !e)}
        >
          Kredi Kartı Ekle
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
      <div className="z-40 flex flex-col max-w-xl gap-4 mx-auto my-auto bg-white">
        <div className="grid grid-cols-2 gap-4">
          <Input
            content={{
              label: "Kredi Kartı Başlığı",
              type: "text",
              id: "creditCardName",
              placeholder: "Kredi kartı başlığını giriniz.",
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

        <Input
          content={{
            label: "Kredi Kartı Numarası",
            type: "text",
            id: "cardNumber",
            placeholder: "**** **** **** ****",
          }}
          handleChange={handleChange}
        />
        <div className="grid grid-cols-2 gap-4">
          <Input
            content={{
              label: "Son Kullanma Tarihi",
              type: "text",
              id: "vDate",
              placeholder: "Ay / Yıl",
            }}
            handleChange={handleChange}
          />
          <Input
            content={{
              label: "CVV Kodu",
              type: "text",
              id: "cvv",
              placeholder: "CVV Kodunu Giriniz",
            }}
            handleChange={handleChange}
          />
        </div>

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
          Kredi Kartı Adı
        </th>
        <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
          Ad
        </th>
        <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
          Soyad
        </th>
        <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
          Kart Numarası
        </th>
        <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
          SKT
        </th>
        <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
          CVV
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
      id: "1231",
      creditCardName: "Akbank",
      name: "Burak",
      surname: "Tanrıverdi",
      cardNumber: "4666 4777 4888 4999",
      vDate: "26/39",
      cvv: "666",
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
                  {content?.creditCardName}
                </td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                  {content?.name}
                </td>
                <td className="px-4 py-2 text-gray-700 uppercase whitespace-nowrap">
                  {content?.surname}
                </td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                  {content?.cardNumber}
                </td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                  {content?.vDate}
                </td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                  {content?.cvv}
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

export default Wallet;
