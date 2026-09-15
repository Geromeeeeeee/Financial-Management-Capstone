import axios from "axios";

export default function Add_Item({ setStatus }) {
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
      setStatus(response.data);
      return response.data;
    } catch (error) {
      console.error("Failed to add item:", error);

      setStatus({
        stat: "fail",
        msg: "Failed to add item",
      });

      return null;
    }
  };

  return { addItem };
}
