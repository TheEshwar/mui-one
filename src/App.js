import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import "./index.css";
import Authentication from "./pages/Authentication/Authentication";
import Database from "./pages/Database/Database";
import Functions from "./pages/Functions/Functions";
import Hosting from "./pages/Hosting/Hosting";
import MachineLearning from "./pages/MachineLearning/MachineLearning";
import Storage from "./pages/Storage/Storage";
import { ThemeProvider } from "@mui/material";
import { dashboardTheme } from "./dashboardTheme";

function App() {
	return (
		<ThemeProvider theme={dashboardTheme}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Navbar />}>
						<Route
							path="authentication"
							element={<Authentication />}
						/>
						<Route path="database" element={<Database />} />
						<Route path="functions" element={<Functions />} />
						<Route path="hosting" element={<Hosting />} />
						<Route
							path="machine-learning"
							element={<MachineLearning />}
						/>
						<Route path="storage" element={<Storage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
