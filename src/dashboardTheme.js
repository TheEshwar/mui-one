import { createTheme } from "@mui/material";

export const dashboardTheme = createTheme({
    components: {
        MuiButton: {
            styleOverrides:{
                root: {
                    fontSize: '5rem',
                    backgroundColor: "yellow"
                }
            }
        }
    }
})