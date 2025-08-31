import { useLocalSearchParams } from "expo-router";
import {
  FlatList,
  Text,
  View,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import posts from "../../../../assets/data/posts.json";
import PostListItem from "../../../components/PostListItem";
import comments from "../../../../assets/data/comments.json";
import CommentListItem from "../../../components/CommentListItem";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function DetailedPost() {
  const { id } = useLocalSearchParams();
  const [comment, setComment] = useState<string>("");
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);

  const insets = useSafeAreaInsets();
  const detailedPost = posts.find((post) => post.id === id);
  //filtering comments for the specific post
  const postComments = comments.filter(
    (comment) => comment.post_id === "post-1"
  );
  console.log(postComments);

  if (!detailedPost) {
    return <Text>Post not found</Text>;
  }
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <FlatList
        data={postComments}
        renderItem={({ item }) => <CommentListItem comment={item} />}
        ListHeaderComponent={
          <PostListItem post={detailedPost} isDetailedPost />
        }
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 10 }}
      />
      <View
        style={{
          paddingBottom: Math.max(insets.bottom, 10),
          borderTopWidth: 1,
          borderTopColor: "lightgray",
          padding: 10,
          backgroundColor: "white",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
          elevation: 5,
        }}
      >
        <TextInput
          placeholder="Write a comment..."
          style={{
            backgroundColor: "#E4E4E4",
            borderWidth: 1,
            borderColor: "#ccc",
            padding: 7,
            borderRadius: 5,
            maxHeight: 100,
          }}
          value={comment}
          onChangeText={(text) => setComment(text)}
          multiline
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
        />
        {isInputFocused && (
          <Pressable
            style={{
              backgroundColor: "#0d469b",
              borderRadius: 15,
              marginLeft: "auto",
              marginTop: 10,
              paddingVertical: 8,
              paddingHorizontal: 15,
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 14,
              }}
            >
              Reply
            </Text>
          </Pressable>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}