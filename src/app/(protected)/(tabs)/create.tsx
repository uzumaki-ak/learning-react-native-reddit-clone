import { useState } from "react";
import {
  Pressable,
  Text,
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { useAtom } from "jotai";
import { selectedGroupAtom } from "../../../atoms";

const { height: screenHeight } = Dimensions.get("window");

export default function CreateScreen() {
  const [title, setTitle] = useState<string>("");
  const [bodyText, setBodyText] = useState<string>("");
  const [group, setGroup] = useAtom(selectedGroupAtom);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <AntDesign
          name="close"
          size={30}
          color="black"
          onPress={() => router.back()}
        />
        <Pressable
          onPress={() => console.error("pressed")}
          style={{ marginLeft: "auto" }}
        >
          <Text style={styles.postText}>Post</Text>
        </Pressable>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 50}
      >
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{
            paddingVertical: 10,
            flexGrow: 1, // Better than fixed minHeight
          }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          nestedScrollEnabled={true}
        >
          {/* Community Selector */}
          <Link href={"groupSelector"} asChild>
            <Pressable style={styles.communityContainer}>
              {group ? (
                <>
                  <Image
                    source={{ uri: group.image }}
                    style={{ width: 20, height: 20, borderRadius: 10 }}
                  />
                  <Text>{group.name}</Text>
                </>
              ) : (
                <>
                  <Text style={styles.rStyles}>r/</Text>
                  <Text style={{ fontWeight: "600" }}>select a community</Text>
                </>
              )}
            </Pressable>
          </Link>

          {/* Title Input */}
          <TextInput
            placeholder="Title"
            style={styles.titleInput}
            value={title}
            onChangeText={setTitle}
            multiline={true}
            textAlignVertical="top"
            scrollEnabled={false}
          />

          {/* Body Text Input */}
          <TextInput
            placeholder="Body text (optional)"
            value={bodyText}
            onChangeText={setBodyText}
            multiline={true}
            textAlignVertical="top"
            scrollEnabled={false}
            style={styles.bodyInput}
          />

          {/* Small bottom padding for comfortable scrolling */}
          <View style={{ height: 50 }} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingHorizontal: 12,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  postText: {
    color: "orange",
    backgroundColor: "#11a5caff",
    fontWeight: "bold",
    paddingVertical: 2,
    paddingHorizontal: 7,
    borderRadius: 10,
  },
  rStyles: {
    backgroundColor: "black",
    color: "white",
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 11,
    fontWeight: "bold",
  },
  communityContainer: {
    backgroundColor: "#EDEDED",
    flexDirection: "row",
    padding: 10,
    borderRadius: 12,
    gap: 11,
    alignSelf: "flex-start",
    marginVertical: 10,
  },
  titleInput: {
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 20,
    minHeight: 80,
    borderBottomWidth: 1,
    borderBottomColor: "#EDEDED",
  },
  bodyInput: {
    fontSize: 16,
    paddingVertical: 20,
    minHeight: 200,
  },
});
