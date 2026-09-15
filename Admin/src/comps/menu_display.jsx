import { View } from "react-native";
import Item_Card from "./item_card";

export default function Menu_Display({ menuItems }) {
  return (
    <View>
      {menuItems.map((items) => (
        <Item_Card
          key={items.item_id}
          name={items.item_name}
          price={items.item_price}
          type={items.item_cat}
        />
      ))}
    </View>
  );
}
