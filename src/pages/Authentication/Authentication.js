import React from "react";
import { Grid } from "@mui/material";
import CommonButton from "../../components/commonButton/CommonButton";

function Authentication() {
	const buttonStyles = {
		fontSize: 20,
		fontWeight: 800,
		backgroundColor: "red",
		color: "yellow"
	}
	return (
		<Grid item xs={8}>
			<h1>This is Authentication Page</h1>
			<CommonButton  size="small" variant="" sx={buttonStyles} >
				Text is Text
			</CommonButton>
		</Grid>
	);
}

export default Authentication;
