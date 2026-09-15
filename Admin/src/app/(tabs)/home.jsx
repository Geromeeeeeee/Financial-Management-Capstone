import Card_View from "../../comps/card_view";
import Header_text from "../../comps/header_text";
import Summary_Card from "../../comps/summary_cards";
import Generic_View from "../../comps/view";

export default function Home() {
  return (
    <>
      <Generic_View>
        <Header_text text={"Home"} />
        <Card_View>
          <Summary_Card number={"4"} text={"Total Tables"} />
          <Summary_Card number={"2"} text={"Available Tables"} />
          <Summary_Card number={"10,800"} text={"Today's Sales"} />
          <Summary_Card number={"14"} text={"Pool Table Sessions"} />
        </Card_View>
        <Header_text text={"Live Tables"} />
      </Generic_View>
    </>
  );
}
