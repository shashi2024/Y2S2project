import React from 'react';
import Button from '../../components/Button';

function FoodItemsTable() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Manage Food Items</h1>
      <hr className="border-t border-second_background mt-2 mb-12"/>
      <table className="w-full text-left border-collapse">
        <thead className="border-t border-second_background">
          <tr className="bg-second_background">
            <th className="py-4 px-6">Item Code</th>
            <th className="py-4 px-6">Name</th>
            <th className="py-4 px-6">Category</th>
            <th className="py-4 px-6">Sub Category</th>
            <th className="py-4 px-6">Price</th>
            <th className="py-4 px-6">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Replace this with your data */}
          <tr className="border-t border-second_background">
            <td className="py-4 px-6">67346469149343983</td>
            <td className="py-4 px-6">Milk Coffee</td>
            <td className="py-4 px-6">Category 1</td>
            <td className="py-4 px-6">Coffee</td>
            <td className="py-4 px-6">$10.00</td>
            <td className="py-4 px-6">
              <Button>Edit</Button>
            </td>
          </tr>

          <tr className="border-t border-second_background">
            <td className="py-4 px-6">67346469149343983</td>
            <td className="py-4 px-6">Milk Coffee</td>
            <td className="py-4 px-6">Category 1</td>
            <td className="py-4 px-6">Coffee</td>
            <td className="py-4 px-6">$10.00</td>
            <td className="py-4 px-6">
              <Button>Edit</Button>
            </td>
          </tr>
          {/* End replace */}
        </tbody>
      </table>
    </div>
  );
}

export default FoodItemsTable;