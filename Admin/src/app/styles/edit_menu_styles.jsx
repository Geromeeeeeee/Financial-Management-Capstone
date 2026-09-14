import { StyleSheet } from "react-native";

export default function Edit_Menu_styles() {
  const style = StyleSheet.create({
    Header_2: {
      fontFamily: "GoogleSansFlex_500Medium",
      fontSize: 20,
      color: "#243119d5",
    },
    Container: {
      flexDirection: "row",
      alignItems: "center",
      height: "10%",
      boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.15)",
      borderRadius: 10,
      padding: 10,
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
    },
    filterContainer: {
      position: "relative",
      zIndex: 1,
    },
    filterButton: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      minWidth: 140,
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
      boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
    },
    addButtonText: {
      color: "#243119",
      fontFamily: "GoogleSansFlex_500Medium",
    },
  });
  return { style };
}
