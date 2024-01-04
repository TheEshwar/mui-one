import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import { useParams, useNavigate, Outlet } from "react-router-dom";
import { mainNavbarItems } from "./consts/navbarItems";
import { Grid } from "@mui/material";

function Navbar() {
    const navigate = useNavigate()

	const drawerWidth = 240;
	return (
		<Grid container>
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: drawerWidth,
						boxSizing: "border-box",
						backgroundColor: "#101F33",
						color: "rgba(255, 255, 255, 0.7)",
					},
				}}
				variant="permanent"
				anchor="left"
			>
				<Toolbar />
				<Divider />
				<List>
					{mainNavbarItems.map((item, index) => (
						<ListItem key={item.id} disablePadding onClick={()=>{
                            navigate(item.route)
                        }} >
							<ListItemButton>
								<ListItemIcon
									sx={{
										color: "rgba(255, 255, 255, 0.7)",
									}}
								>
									{item.icon}
								</ListItemIcon>
								<ListItemText primary={item.label} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
				<Divider />
			</Drawer>
            <Outlet/>
		</Grid>
	);
}

export default Navbar;
