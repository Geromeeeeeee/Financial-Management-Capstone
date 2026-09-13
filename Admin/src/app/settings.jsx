import { Image, Pressable, Text } from "react-native";
import Generic_View from "../comps/view";

export default function Settings() {
  const options = [
    {
      icon: require("@/assets/images/tabIcons/edit.png"),
      name: "Edit Menu Items",
    },
    {
      icon: require("@/assets/images/tabIcons/edit.png"),
      name: "Manage Pool Tables",
    },
    {
      icon: require("@/assets/images/tabIcons/person.png"),
      name: "Account Settings",
    },
    {
      icon: require("@/assets/images/tabIcons/logout.png"),
      name: "Logout",
    },
  ];
  return (
    <>
      <Generic_View>
        <Text
          style={{
            fontFamily: "GoogleSansFlex_700Bold",
            fontSize: 28,
            color: "#243119d5",
            marginBottom: 15,
          }}
        >
          Settings
        </Text>
        {options.map((option) => (
          <Pressable
            key={option.name}
            style={{
              flexDirection: "row",
              gap: 15,
              marginLeft: 10,
              marginBottom: 10,
            }}
          >
            <Image source={option.icon} />
            <Text>{option.name}</Text>
          </Pressable>
        ))}
      </Generic_View>
    </>
  );
}
