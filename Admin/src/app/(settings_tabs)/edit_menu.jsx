import { useEffect, useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import Add_Modal from "../../comps/add_modal";
import Header_text from "../../comps/header_text";
import Generic_View from "../../comps/view";
import useFilter from "../custom_hook/handle_filter";
import useSearch from "../custom_hook/handle_search";
import Edit_Menu_styles from "../styles/edit_menu_styles";

export default function Edit_Menu() {
  const { search, setSearch } = useSearch();
  const [filter, setFilter] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStat] = useState(null);
  useEffect(() => {
    if (!status) return;

    const timer = setTimeout(() => {
      setStat(null);
    }, 3000);

    return () => clearTimeout(timer);
  }, [status]);

  const { selectFilter } = useFilter({ setFilter, setIsFilterOpen });
  const { style } = Edit_Menu_styles({ setIsModalOpen });

  return (
    <Generic_View>
      <Header_text text={"Menu Items"} />
      <Text style={style.Header_2}>Manage Food & Drinks</Text>
      <View style={style.Container}>
        <Image source={require("@/assets/images/search.png")} />
        <TextInput
          placeholder="Search menu items..."
          style={style.searchInput}
          value={search}
          onChangeText={setSearch}
        />
      </View>
      <View style={style.actions}>
        <View style={style.filterContainer}>
          <Pressable
            style={style.filterButton}
            onPress={() => setIsFilterOpen((open) => !open)}
          >
            <Text style={{ fontFamily: "GoogleSansFlex_500Medium" }}>
              Filter: {filter}
            </Text>
            <Text>{isFilterOpen ? "▲" : "▼"}</Text>
          </Pressable>
          {isFilterOpen && (
            <View style={style.dropdown}>
              {["All", "Food", "Drinks"].map((option) => (
                <Pressable
                  key={option}
                  style={style.option}
                  onPress={() => selectFilter(option)}
                >
                  <Text>{option}</Text>
                </Pressable>
              ))}
            </View>
          )}
        </View>
        <Pressable style={style.addButton} onPress={() => setIsModalOpen(true)}>
          <Text style={style.addButtonText}>+ Add Item</Text>
        </Pressable>
      </View>
      {status && (
        <Text
          style={{
            color: status.stat === "success" ? "green" : "red",
            fontFamily: "GoogleSansFlex_500Medium",
          }}
        >
          {status.msg}
        </Text>
      )}
      <Add_Modal
        visible={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setStatus={setStat}
      />
    </Generic_View>
  );
}
