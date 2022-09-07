import styled from "@emotion/styled";
import { Box, Grid, Paper } from "@mui/material";
import Menu from "./Menu"


// const iconsArr = [
//     "./Home Icon.png",
//     {name: "./Cross.png",
//     add: "..."},
//     {name: "./Cross (1).png",
//     add: "./Cross (2).png"}
// ]

export default function AppBar(){

    return(
        
        <Paper className="Box"
        sx={{
            height: "122px", 
            mt: 0,
            display: "flex",
            placeItems: "center",
            position: "fixed", 
            background: "rgba(255,255,255,0.8)",
            top: 0,
            zIndex: 5}}>
        <Grid container justifyContent="center" alignItems="center" columns={13}>
            
            <Grid item xs={12} md={4} sx={{ml: {xs: "20%", sm:"35%", lg: 20}}}>
            <Box
            justifyContent="center" alignItems="center"
            sx={{
                width:"100%",
                pt: "43px",
                // ml: {xs: "30%", md: 3}
                }}>
                <img
                style={{height: "26px",width: "176px",}}
                src="./Logo Imagine.png"/>
            </Box>
            </Grid>
            
            <Grid item md={2} sx={{display:{xs:"none", md: 'block'}, width: "100%"}}/>
            
            <Grid item xs={0} md={4} sx={{width:"100%"}}>
            <Box 
            sx={{
                display: {xs: "none", lg: "block"},
                mt:2
            }}>
            <Menu/>
            </Box>
            </Grid>
        </Grid>
        </Paper>
    )
}