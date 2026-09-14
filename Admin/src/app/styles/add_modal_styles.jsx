import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalContent: {
    width: "85%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
  },

  modalTitle: {
    fontFamily: "GoogleSansFlex_600SemiBold",
    fontSize: 20,
    marginBottom: 20,
  },

  modalInput: {
    height: 48,
    borderWidth: 1,
    borderColor: "#D6DCCF",
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 12,
  },

  modalActions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 16,
    marginTop: 10,
  },

  dropdown: {
    borderWidth: 1,
    borderColor: "#D6DCCF",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 14,
    marginBottom: 12,
  },

  dropdownOptions: {
    borderWidth: 1,
    borderColor: "#D6DCCF",
    borderRadius: 10,
    marginBottom: 12,
    overflow: "hidden",
  },

  dropdownOption: {
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
});

export default function Add_Modal_Styles() {
  return { style };
}
