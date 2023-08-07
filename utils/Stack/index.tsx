import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../../src/screens/Home";
import { Login } from "../../src/screens/Login";
import { SingUp } from "../../src/screens/SingUp";
import { ProductPage } from "../../src/screens/ProductPage";
import { EditProfile } from "../../src/screens/EditProfile";
import { ManageProducts } from "../../src/screens/ManageProducts";

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
                name="SignUp"
                component={SingUp}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }} />

            <Stack.Screen
                name="ProductPage"
                component={ProductPage}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="EditProfile"
                component={EditProfile}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="ManageProducts"
                component={ManageProducts}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}