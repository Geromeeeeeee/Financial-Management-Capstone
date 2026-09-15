import { useState } from "react";
import { Modal, Pressable, Text, TextInput, View } from "react-native";
import Add_Item from "../app/custom_hook/handle_add_item";
import Add_Modal_Styles from "../app/styles/add_modal_styles";

const { style } = Add_Modal_Styles();

export default function Add_Modal({
  visible,
  setIsModalOpen,
  setStatus,
  refreshMenu,
}) {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const { addItem } = Add_Item({ setStatus });

  const handleSubmit = async () => {
    const result = await addItem({
      name,
      category,
      price,
    });

    if (result && result.stat === "success") {
      setIsModalOpen(false);

      setName("");
      setCategory("");
      setPrice("");
      setIsCategoryOpen(false);

      await refreshMenu();
    }
  };

  return (
    <Modal transparent={true} animationType="fade" visible={visible}>
      <View style={style.modalOverlay}>
        <View style={style.modalContent}>
          <Text style={style.modalTitle}>Add Menu Item</Text>
          <TextInput
            placeholder="Item name"
            style={style.modalInput}
            value={name}
            onChangeText={setName}
          />

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
            value={price}
            onChangeText={setPrice}
          />
          <View style={style.modalActions}>
            <Pressable onPress={() => setIsModalOpen(false)}>
              <Text style={{ fontFamily: "GoogleSansFlex_500Medium" }}>
                Cancel
              </Text>
            </Pressable>

            <Pressable onPress={handleSubmit}>
              <Text style={{ fontFamily: "GoogleSansFlex_500Medium" }}>
                Add Item
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}
