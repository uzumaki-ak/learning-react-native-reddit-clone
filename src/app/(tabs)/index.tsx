import PostListItem from "../../components/PostListItem";
import posts from "../../../assets/data/posts.json";
import { View, FlatList } from "react-native";
export default function HomeScreen() {
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostListItem post={item} />}
      ></FlatList>
    </View>
  );
}
