export default function Add_Item() {
  const addItem = async ({ name, category, price }) => {
    // API request will go here later

    console.log({
      name,
      category,
      price,
    });
  };

  return { addItem };
}
