import { Text } from "react-native";
import Generic_View from "../../comps/view";

export default function Reservations() {
  return (
    <Generic_View>
      <Text
        style={{
          fontFamily: "GoogleSansFlex_700Bold",
          fontSize: 28,
          color: "#243119d5",
        }}
      >
        Reservations
      </Text>
      <Text
        style={{
          fontFamily: "GoogleSansFlex_500Medium",
          fontSize: 24,
          color: "#243119d5",
        }}
      >
        Upcoming
      </Text>
    </Generic_View>
  );
}
