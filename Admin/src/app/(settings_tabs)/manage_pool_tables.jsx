import { useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import Header_text from "../../comps/header_text";
import Pool_Table_Modal from "../../comps/pool_table_modal";
import Generic_View from "../../comps/view";
import useSearch from "../custom_hook/handle_search";
import Edit_Menu_styles from "../styles/edit_menu_styles";

export default function Manage_Pools() {
  const { search, setSearch } = useSearch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { style } = Edit_Menu_styles({ setIsModalOpen });
  return (
    <Generic_View>
      <Header_text text={"Pool Tables"} />
      <Text style={style.Header_2}>Manage Pool Tables</Text>
      <View style={style.actions}>
        <View style={style.search}>
          <Image source={require("@/assets/images/search.png")} />
          <TextInput
            placeholder="Search tables..."
            value={search}
            onChangeText={setSearch}
          />
        </View>
        <Pressable style={style.addButton} onPress={() => setIsModalOpen(true)}>
          <Text style={style.addButtonText}>+ Add Item</Text>
        </Pressable>
      </View>
      <Pool_Table_Modal visible={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </Generic_View>
  );
}
