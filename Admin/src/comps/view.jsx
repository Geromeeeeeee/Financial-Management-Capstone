import { ScrollView, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 20,
    paddingVertical: 60,
    paddingBottom: 60,
    gap: 25,
  },
});

export default function Generic_View({ children }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {children}
    </ScrollView>
  );
}
