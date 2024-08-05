import {Box} from "@mui/material";

const Header = () => (
    <Box className="page-header">
        <img src="/Header.png" alt="Header" width="100%" height="50px"/>
        <Box component="img" src="/Logo.svg" alt="Logo" sx={{height: 50, position: 'absolute', top: 50, left: 50}}/>
    </Box>
);

export default Header;