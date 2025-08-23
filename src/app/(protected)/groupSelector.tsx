import {
  View,
  Text,
  TextInput,
  FlatList,
  Pressable,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Antdesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";
import groups from "../../../assets/data/groups.json";
import { useSetAtom } from "jotai";
import { selectedGroupAtom } from "../../atoms";
import { Group } from "../../types";

export default function GroupSelector() {
  const [searchValue, setSearchValue] = useState<string>("");
  const setGroup = useSetAtom(selectedGroupAtom);

  //searching
  const filteredGroups = groups.filter((group) =>
    group.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  const onGroupSelected = (group: Group) => {
    setGroup(group);
    router.back();
  };
  return (
    <SafeAreaView style={{ marginHorizontal: 10 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Antdesign
          name="close"
          size={24}
          color="black"
          onPress={() => router.back()}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            flex: 1,
            paddingRight: 30,
          }}
        >
          post to
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "lightgray",
          borderRadius: 29,
          gap: 5,
          marginVertical: 10,
          alignItems: "center",
          padding: 10,
        }}
      >
        <Antdesign name="search1" size={25} color="black" />
        <TextInput
          placeholder="search for community"
          placeholderTextColor={"grey"}
          style={{ paddingVertical: 10, flex: 1 }}
          value={searchValue}
          onChangeText={setSearchValue}
        />
        {searchValue && (
          <Antdesign
            name="closecircle"
            size={20}
            color={"#cbbcbcff"}
            onPress={() => setSearchValue("")}
          />
        )}
      </View>
      <FlatList
        data={filteredGroups}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => onGroupSelected(item)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              marginBottom: 22,
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={{ width: 40, aspectRatio: 1, borderRadius: 20 }}
            />
            <Text style={{ fontWeight: "600" }}>{item.name}</Text>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
}
