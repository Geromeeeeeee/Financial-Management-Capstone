import { router } from "expo-router";
import { Image, Pressable, Text } from "react-native";
import Header_text from "../../comps/header_text";
import Generic_View from "../../comps/view";

export default function Settings() {
  const options = [
    {
      icon: require("@/assets/images/tabIcons/edit.png"),
      name: "Edit Menu Items",
      route: "/edit_menu",
    },
    {
      icon: require("@/assets/images/tabIcons/edit.png"),
      name: "Manage Pool Tables",
      route: "/edit_menu",
    },
    {
      icon: require("@/assets/images/tabIcons/person.png"),
      name: "Account Settings",
      route: "/edit_menu",
    },
    {
      icon: require("@/assets/images/tabIcons/logout.png"),
      name: "Logout",
      route: "/edit_menu",
    },
  ];
  return (
    <>
      <Generic_View>
        <Header_text text={"Settings"} />
        {options.map((option) => (
          <Pressable
            key={option.name}
            style={{
              flexDirection: "row",
              gap: 15,
              marginLeft: 10,
              marginBottom: 10,
            }}
            onPress={() => router.push(option.route)}
          >
            <Image source={option.icon} />
            <Text>{option.name}</Text>
          </Pressable>
        ))}
      </Generic_View>
    </>
  );
}
