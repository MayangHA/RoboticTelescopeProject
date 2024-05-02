import { Stack } from "@chakra-ui/react";
import SignIn from "./button-Login";
import SignUp from "./button-signUp";
import useToken from "./Login/useToken";

const LoginButton = () => {
    const { setToken } = useToken();
    return(
        <Stack direction='row' spacing={'5'}>
            <SignIn setToken ={setToken}/>
            <SignUp/>
        </Stack>
    )

}
export default LoginButton;