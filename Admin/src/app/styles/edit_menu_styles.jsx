import { StyleSheet } from "react-native";

export default function Edit_Menu_styles() {
  console.log("🔥 EDIT MENU STYLES LOADED");
  const style = StyleSheet.create({
    Header_2: {
      fontFamily: "GoogleSansFlex_500Medium",
      fontSize: 20,
      color: "#243119d5",
    },
    Container: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      height: 50,
      boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.15)",
      borderRadius: 10,
      paddingHorizontal: 10,
    },
    searchInput: {
      flex: 1,
      marginLeft: 8,
      fontFamily: "GoogleSansFlex_400Regular",
      fontSize: 16,
    },
    actions: {
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 10,
    },
    filterContainer: {
      position: "relative",
      zIndex: 1,
    },
    filterButton: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 15,
      borderRadius: 10,
      boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.15)",
    },
    dropdown: {
      position: "absolute",
      top: "100%",
      left: 0,
      right: 0,
      marginTop: 4,
      borderRadius: 8,
      backgroundColor: "#fff",
      boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
    },
    option: {
      padding: 12,
    },
    addButton: {
      padding: 15,
      borderRadius: 10,
      height: 50,
      boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
    },
    addButtonText: {
      color: "#243119",
      fontFamily: "GoogleSansFlex_500Medium",
    },
    search: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.15)",
      borderRadius: 10,
      paddingLeft: 10,
      height: 50,
    },
  });
  return { style };
}
