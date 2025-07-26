import { Image, StyleSheet, Text, View } from "react-native";
import { formatDistanceToNowStrict } from "date-fns";
import posts from "../../assets/data/posts.json";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Post } from "../types";

type PostListItemProps = {
  post: Post;
};

export default function PostListItem({ post }: PostListItemProps) {
  return (
    <View style={{ paddingHorizontal: 15, paddingVertical: 10 }}>
      {/* post header  */}
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Image source={{ uri: post.group.image }} style={styles.imageStyle} />
        <Text style={{ fontWeight: "bold" }}>{post.group.name}</Text>
        <Text style={{ color: "grey" }}>
          {formatDistanceToNowStrict(new Date(post.created_at))}
        </Text>
        <View style={{ marginLeft: "auto" }}>
          <Text style={styles.joinButton}>join</Text>
        </View>
      </View>
      {/* content  */}

      <Text style={styles.title}>{post.title}</Text>
      {post.image && (
        <Image
          source={{ uri: post.image }}
          style={{ width: "100%", aspectRatio: 4 / 3, borderRadius: 15 }}
        />
      )}
      {!post.image && post.description && (
        <Text numberOfLines={4}>{post.description}</Text>
      )}
      {/* post footer  */}
      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <View style={[{ flexDirection: "row" }, styles.iconBox]}>
            <MaterialCommunityIcons
              name="arrow-up-bold-outline"
              size={19}
              color="black"
            />
            <Text
              style={{ fontWeight: "500", marginLeft: 5, alignSelf: "center" }}
            >
              {post.upvotes}
            </Text>
            <View
              style={{
                width: 1,
                backgroundColor: "#D4D4D4",
                height: 14,
                marginHorizontal: 7,
                alignSelf: "center",
              }}
            />
            <MaterialCommunityIcons
              name="arrow-down-bold-outline"
              size={19}
              color="black"
            />
          </View>
          <View style={[{ flexDirection: "row" }, styles.iconBox]}>
            <MaterialCommunityIcons
              name="comment-outline"
              size={19}
              color="black"
            />
            <Text
              style={{ fontWeight: "500", marginLeft: 5, alignSelf: "center" }}
            >
              {post.nr_of_comments}
            </Text>
          </View>
        </View>
        <View style={{ marginLeft: "auto", flexDirection: "row", gap: 10 }}>
          <MaterialCommunityIcons
            name="trophy-outline"
            size={19}
            color="black"
            style={styles.iconBox}
          />
          <MaterialCommunityIcons
            name="share-outline"
            size={19}
            color="black"
            style={styles.iconBox}
          />
        </View>
      </View>
    </View>
  );
}

//!stylesheet

const styles = StyleSheet.create({
  joinButton: {
    backgroundColor: "#75052e",
    color: "#ffebf2",
    paddingVertical: 2,
    paddingHorizontal: 7,
    borderRadius: 10,
    fontWeight: "bold",
  },
  imageStyle: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 0.6,
    marginBottom: 7,
  },
  iconBox: {
    borderWidth: 0.5,
    borderColor: "#D4D4D4",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
});
