import axios from "axios";

export default function Add_Item() {
  const addItem = async ({ name, category, price }) => {
    try {
      const response = await axios.post(
        `${process.env.EXPO_PUBLIC_API_URL}/menu.php`,
        {
          item_name: name,
          item_category: category,
          item_price: price,
        },
      );
      console.log(response.data);

      return response.data;
    } catch (error) {
      console.error("Failed to add item:", error);
    }
  };

  return { addItem };
}
