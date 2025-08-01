import { Redirect, Stack } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

export default function AuthLayout() {
  const { isSignedIn } = useAuth();
  if (isSignedIn) {
    return <Redirect href={"/"} />;
  }
  return (
    <Stack>
      <Stack.Screen
        name="signIn"
        options={{ headerTitle: "Sign In", headerTintColor: "#0e16e5ff" }}
      />
      <Stack.Screen
        name="signUp"
        options={{ headerTitle: "Sign Up", headerTintColor: "#0ee5c5ff" }}
      />
    </Stack>
  );
}
