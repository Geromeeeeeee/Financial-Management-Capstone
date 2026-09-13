import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  card: {
    width: 160,
    height: 125,
    boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.15)",
    borderRadius: 10,
    padding: 15,
  },
});

export default function Summary_Card({ number, text }) {
  return (
    <View style={styles.card}>
      <Text
        style={{
          fontFamily: "GoogleSansFlex_700Bold",
          fontSize: 26,
          color: "#243119d5",
        }}
      >
        {number}
      </Text>
      <Text
        style={{
          fontFamily: "GoogleSansFlex_400Regular",
          fontSize: 16,
          color: "#243119d5",
        }}
      >
        {text}
      </Text>
    </View>
  );
}
