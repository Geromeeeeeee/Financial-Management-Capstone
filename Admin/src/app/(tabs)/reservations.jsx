import { Text } from "react-native";
import Header_text from "../../comps/header_text";
import Generic_View from "../../comps/view";

export default function Reservations() {
  return (
    <Generic_View>
      <Header_text text={"Reservation"} />
      <Text
        style={{
          fontFamily: "GoogleSansFlex_500Medium",
          fontSize: 20,
          color: "#243119d5",
        }}
      >
        Upcoming
      </Text>
    </Generic_View>
  );
}
