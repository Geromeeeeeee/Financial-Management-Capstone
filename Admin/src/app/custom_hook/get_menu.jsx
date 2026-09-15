import axios from "axios";

export default function Get_Menu({ setMenuItems }) {
  const getMenuItems = async () => {
    try {
      const response = await axios.get(
        `${process.env.EXPO_PUBLIC_API_URL}/menu.php`,
      );

      setMenuItems(response.data);
    } catch (error) {
      console.error("MENU ERROR:", error);
    }
  };

  return { getMenuItems };
}
