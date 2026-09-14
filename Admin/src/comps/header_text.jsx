import { Text } from "react-native";

export default function Header_Text({ text }) {
  return (
    <Text
      style={{
        fontFamily: "GoogleSansFlex_700Bold",
        fontSize: 28,
        color: "#243119d5",
      }}
    >
      {text}
    </Text>
  );
}
