import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import axios from "axios";

function CreateItemForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    try {
      console.log(JSON.stringify(data));

      data.imageUrl = "https://test.com/image.png";

      const response = await axios.post(
        "http://localhost:5000/food-item",
        data
      );
      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h1 className="text-2xl font-bold">Create Item</h1>
      <hr className="border-t border-second_background mt-2 mb-12" />

      <div>
        <label className="block text-sm font-medium">Item Code</label>
        <input
          {...register("itemCode")}
          placeholder="Enter Item Code"
          className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
          required/>
      </div>

      <div>
        <label className="block text-sm font-medium">Item Name</label>
        <input
          {...register("name")}
          placeholder="Enter Item Name"
          className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
          required />
      </div>

      <div>
        <label className="block text-sm font-medium">Category</label>
        <select
          {...register("mainCategory")}
          className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
        >
          <option value="Appetizers">Appetizers</option>
          <option value="Main Courses">Main Courses</option>
          <option value="Desserts">Desserts</option>
          <option value="Beverages">Beverages</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium">Description</label>
        <textarea
          {...register("description")}
          placeholder="Description"
          className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Price</label>
        <input
          {...register("price")}
          placeholder="Enter Price"
          className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Sub Category</label>
        <select
          {...register("subCategory")}
          className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
        >
          <option value="Vegi">Vegi</option>
          <option value="Non-Vegi">Non-Vegi</option>
          <option value="Cocktail">Cocktail</option>
          <option value="Mocktail">Mocktail</option>
          <option value="Tea">Tea</option>
          <option value="Coffee">Coffee</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium">Product Image</label>
        <div className="relative mt-1 block w-full rounded-md border-second_background shadow-sm focus-within:border-button_color focus-within:ring focus-within:ring-color focus-within:ring-opacity-5">
          <input
            {...register("image")}
            type="file"
            id="default_size"
            className="block w-full text-sm text-hovered_text border border-second_background rounded-lg cursor-pointer bg-white dark:text-hidden_text focus:outline-none dark:bg-white dark:border-second_background dark:placeholder-color"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-button_color"></span>
        </div>
      </div>

      <Button>Create Item</Button>
    </form>
  );
}

export default CreateItemForm;
