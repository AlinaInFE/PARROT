import { Box, Paper, ThemeProvider } from "@mui/material";
import "./App.css";
import theme from "./components/theme";
import AppBar from "./components/AppBar";
import Artworks from "./pages/Artworks";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

export default function App() {

  // const getInfo = () => {
  //   "Some API with GET method"
  // }

  // useEffect(() => {
  //   getInfo()
  //   "For default loading"
  // }, [])

  return (
    <ThemeProvider theme={theme}>
      <Box className="Box" 
      sx={{placeItems: "center"}}>
        <AppBar />
        <Box sx={{width: "100%", height: "122px"}}/>
        <Artworks/>
        
        <Box
        sx={{display: {xs:"block", lg: "none"},
        width: "100%",
        height: "50px", 
        position: "fixed",
        bottom: 0,
        background: "#F5F5F5",
        zIndex: 5}}>
          <Menu/>
        </Box>
        <Footer/>
      </Box>
    </ThemeProvider>
  );
}
