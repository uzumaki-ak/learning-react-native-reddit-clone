import PostListItem from "../../../components/PostListItem";
import posts from "../../../../assets/data/posts.json";
import { View, FlatList, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostListItem post={item} />}
        contentContainerStyle={styles.contentContainer}
        // a taller gap between every item:
        ItemSeparatorComponent={() => <View style={{ height: 30 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Critical for full height on web
  },
  contentContainer: {
    padding: 10,
    paddingBottom: 80, // so content doesn't get hidden under tab bar
  },
});
