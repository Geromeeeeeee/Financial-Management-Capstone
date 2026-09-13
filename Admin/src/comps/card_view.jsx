import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 15,
  },
});

export default function Card_View({ children }) {
  return <View style={styles.container}>{children}</View>;
}
