import { useState } from "react";
import {
    Modal,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

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

export default function Add_Modal({ visible, setIsModalOpen }) {
  const [category, setCategory] = useState("");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  return (
    <Modal transparent={true} animationType="fade" visible={visible}>
      <View style={style.modalOverlay}>
        <View style={style.modalContent}>
          <Text style={style.modalTitle}>Add Menu Item</Text>
          <TextInput placeholder="Item name" style={style.modalInput} />

          <Pressable
            style={style.dropdown}
            onPress={() => setIsCategoryOpen(!isCategoryOpen)}
          >
            <Text>{category || "Select category"}</Text>
          </Pressable>

          {isCategoryOpen && (
            <View style={style.dropdownOptions}>
              {["Food", "Beverage"].map((option) => (
                <Pressable
                  key={option}
                  style={style.dropdownOption}
                  onPress={() => {
                    setCategory(option);
                    setIsCategoryOpen(false);
                  }}
                >
                  <Text>{option}</Text>
                </Pressable>
              ))}
            </View>
          )}

          <TextInput
            placeholder="Price"
            keyboardType="numeric"
            style={style.modalInput}
          />
          <View style={style.modalActions}>
            <Pressable onPress={() => setIsModalOpen(false)}>
              <Text>Cancel</Text>
            </Pressable>

            <Pressable>
              <Text>Add Item</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}
