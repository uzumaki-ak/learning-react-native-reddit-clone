import { Stack, Redirect, router } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
import { AntDesign, MaterialIcons, Entypo } from "@expo/vector-icons";
import { View } from "react-native";

export default function AppLayout() {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <Redirect href={"/signIn"} />;
  }
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="groupSelector" options={{ headerShown: false }} />
      <Stack.Screen
        name="post/[id]"
        options={{
          headerTitle: "",
          headerStyle: { backgroundColor: "#ff7b00ff" },
          animation: "ios_from_left",
          headerLeft: () => (
            <AntDesign
              name="close"
              size={24}
              color="white"
              onPress={() => router.back()}
            />
          ),
          headerRight: () => (
            <View style={{ flexDirection: "row", gap: 10 }}>
              <AntDesign name="search1" size={24} color="white" />
              <MaterialIcons name="sort" size={24} color="white" />
              <Entypo name="dots-three-vertical" size={24} color="white" />
            </View>
          ),
        }}
      />
    </Stack>
  );
}
