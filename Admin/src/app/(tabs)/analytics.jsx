import { Text } from "react-native";
import Card_View from "../../comps/card_view";
import Summary_Card from "../../comps/summary_cards";
import Generic_View from "../../comps/view";

export default function Analytics() {
  return (
    <>
      <Generic_View>
        <Text
          style={{
            fontFamily: "GoogleSansFlex_700Bold",
            fontSize: 28,
            color: "#243119d5",
          }}
        >
          Analytics
        </Text>
        <Card_View>
          <Summary_Card number={"37,500"} text={"Total Sales"} />
          <Summary_Card number={"4"} text={"Total Tables"} />
          <Summary_Card number={"2,500"} text={"Average Sales"} />
          <Summary_Card number={"230"} text={"Total Pool Table Sessions"} />
        </Card_View>
        <Text
          style={{
            fontFamily: "GoogleSansFlex_700Bold",
            fontSize: 28,
            color: "#243119d5",
          }}
        >
          Sales Overview
        </Text>
      </Generic_View>
    </>
  );
}
