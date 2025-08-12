import { Tabs } from "expo-router";
import { Feather, Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { useAuth } from "@clerk/clerk-expo";

export default function TabLayout() {
  const { signOut } = useAuth();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
        headerRight: () => (
          <MaterialCommunityIcons
            name="power-standby"
            size={24}
            color="black"
            style={{ paddingRight: 10 }}
            onPress={() => signOut()}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Rediot",
          headerTintColor: "#fff200ff",
          title: "home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-flood" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          headerTitle: "Chat",
          headerTintColor: "#0e16e5ff",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="wechat" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          headerTitle: "Create",
          headerTintColor: "#0ee5c5ff",
          tabBarIcon: ({ color }) => (
            <AntDesign name="plus" size={24} color={color} />
          ),
          headerShown: false,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          headerTitle: "Inbox",
          headerTintColor: "#f10bb3ff",
          title: "inbox",
          tabBarIcon: ({ color }) => (
            <AntDesign name="notification" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="communities"
        options={{
          headerTitle: "Community",
          headerTintColor: "#f10b0bff",
          title: "community",
          tabBarIcon: ({ color }) => (
            <Feather name="users" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
