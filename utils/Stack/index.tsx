import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../../src/screens/Home";
import { Login } from "../../src/screens/Login";

const Stack = createStackNavigator()

export function MyStack() {
    return (
        <Stack.Navigator
            initialRouteName="Login"
        >
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }} />
        </Stack.Navigator>
    )
}