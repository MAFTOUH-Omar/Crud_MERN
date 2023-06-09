import { AppBar, Toolbar,styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const Tabs = styled(NavLink)`
    font-size:20px;
    margin-right:20px;
    color: inherit;
    text-decoration:none;

`;



const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Tabs to='/'>Code for Interview</Tabs>
                <Tabs to='/all'>All Users</Tabs>
                <Tabs to='/add'>Add User</Tabs>

            </Toolbar>
        </AppBar>
    )
}

export default NavBar;