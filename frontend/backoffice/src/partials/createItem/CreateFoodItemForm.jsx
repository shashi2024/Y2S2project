import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import axios from "axios";

function CreateItemForm() {
  const { register, handleSubmit,watch, formState: { errors } } = useForm();

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
          {...register("itemCode", { required: "Item code is required" })}
          placeholder="Enter Item Code"
          className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
        />
        {errors.itemCode && <p className="text-red-500">{errors.itemCode.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">Item Name</label>
        <input
          {...register("name", { required: "Item name is required" })}
          placeholder="Enter Item Name"
          className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">Category</label>
        <select
          {...register("mainCategory", { required: "Category is required" })}
          className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
        >
          <option value="">Select a Category</option>
          <option value="Appetizers">Appetizers</option>
          <option value="Main Courses">Main Courses</option>
          <option value="Desserts">Desserts</option>
          <option value="Beverages">Beverages</option>
        </select>
        {errors.mainCategory && <p className="text-red-500">{errors.mainCategory.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">Description</label>
        <textarea
          {...register("description", { required: "Description is required" })}
          placeholder="Description"
          className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
        />
        {errors.description && <p className="text-red-500">{errors.description.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">Price</label>
        <input
          {...register("price", { required: "Price is required", valueAsNumber: true, min: { value: 0, message: "Price must be a positive number" } })}
          placeholder="Enter Price"
          className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
        />
        {errors.price && <p className="text-red-500">{errors.price.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">Sub Category</label>
        <select
          {...register("subCategory", { required: "Sub category is required" })}
          className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
        >
          <option value="">Select a Sub Category</option>
          <option value="Vegi">Vegi</option>
          <option value="Non-Vegi">Non-Vegi</option>
          <option value="Cocktail">Cocktail</option>
          <option value="Mocktail">Mocktail</option>
          <option value="Tea">Tea</option>
          <option value="Coffee">Coffee</option>
        </select>
        {errors.subCategory && <p className="text-red-500">{errors.subCategory.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">Product Image</label>
        <div className="relative mt-1 block w-full rounded-md border-second_background shadow-sm focus-within:border-button_color focus-within:ring focus-within:ring-color focus-within:ring-opacity-5">
          <input
            {...register("image", { required: "Image is required" })}
            type="file"
            id="default_size"
            className="block w-full text-sm text-hovered_text border border-second_background rounded-lg cursor-pointer bg-white dark:text-hidden_text focus:outline-none dark:bg-white dark:border-second_background dark:placeholder-color"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-button_color"></span>
        </div>
        {errors.image && <p className="text-red-500">{errors.image.message}</p>}
      </div>

      <Button>Create Item</Button>
    </form>
  );
}

export default CreateItemForm;
