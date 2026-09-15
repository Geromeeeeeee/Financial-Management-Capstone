import { useState } from "react";
import { Modal, Pressable, Text, TextInput, View } from "react-native";
import Add_Modal_Styles from "../app/styles/add_modal_styles";

const { style } = Add_Modal_Styles();

export default function Pool_Table_Modal({ visible, setIsModalOpen }) {
  const [category, setCategory] = useState("");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  return (
    <Modal transparent={true} animationType="fade" visible={visible}>
      <View style={style.modalOverlay}>
        <View style={style.modalContent}>
          <Text style={style.modalTitle}>Add New Pool Table</Text>
          <TextInput
            placeholder="Table Number"
            keyboardType="numeric"
            style={style.modalInput}
          />

          <Pressable
            style={style.dropdown}
            onPress={() => setIsCategoryOpen(!isCategoryOpen)}
          >
            <Text>{category || "Select category"}</Text>
          </Pressable>

          {isCategoryOpen && (
            <View style={style.dropdownOptions}>
              {["Available", "Unavailable"].map((option) => (
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

          <View style={style.modalActions}>
            <Pressable onPress={() => setIsModalOpen(false)}>
              <Text style={{ fontFamily: "GoogleSansFlex_500Medium" }}>
                Cancel
              </Text>
            </Pressable>

            <Pressable>
              <Text style={{ fontFamily: "GoogleSansFlex_500Medium" }}>
                Add Table
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}
