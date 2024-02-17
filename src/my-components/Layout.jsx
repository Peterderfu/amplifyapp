import { Outlet } from "react-router-dom";
import MySideBar from "./MySideBar";
import { Flex } from "@aws-amplify/ui-react";
import { NavBarHeader } from "../ui-components";
const Layout = () => {
    return (
        <Flex direction={"column"}>
            <NavBarHeader />
            <Flex direction={"row"}>
                <MySideBar />
                <Outlet />
            </Flex>
        </Flex>
    );
};

export default Layout;
