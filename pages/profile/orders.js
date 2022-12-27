import React from "react";

const orders = () => {
  return (
    <div>
      <h3 className="py-4 text-lg font-medium text-gray-700">Siparişlerim</h3>
      <Table />
    </div>
  );
};

const TableHead = () => {
  return (
    <thead className="bg-gray-100">
      <tr>
        <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
          Sipariş No
        </th>
        <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
          Ürün No
        </th>
        <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
          Ürün İsmi
        </th>
        <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
          Alım tarihi
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
      id: "1",
      orderId: "2",
      productId: "3",
      productName: "T-Shird",
      orderDate: "11.01.01",
      address: "Kırklareli",
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
                  {content?.orderId}
                </td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                  {content?.productId}
                </td>
                <td className="px-4 py-2 text-gray-700 uppercase whitespace-nowrap">
                  {content?.productName}
                </td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                  {content?.orderDate}
                </td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
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

export default orders;
