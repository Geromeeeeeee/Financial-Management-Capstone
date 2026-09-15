import { StyleSheet, Text, View } from "react-native";

const style = StyleSheet.create({
  container: {
    boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.15)",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
  },
  name: {
    fontFamily: "GoogleSansFlex_700Bold",
    fontSize: 26,
    color: "#243119d5",
  },
  description: {
    fontFamily: "GoogleSansFlex_400Regular",
    fontSize: 16,
    color: "#243119d5",
  },
});

export default function Item_Card({ name, price, type }) {
  return (
    <View style={style.container}>
      <Text style={style.name}>{name}</Text>
      <Text style={style.description}>{type}</Text>
      <Text style={style.description}>PHP: {price}</Text>
    </View>
  );
}
