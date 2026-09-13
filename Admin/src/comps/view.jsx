import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 60,
    gap: 25,
  },
});

export default function Generic_View({ children }) {
  return <View style={styles.container}>{children}</View>;
}
