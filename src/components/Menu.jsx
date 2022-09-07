import { Badge, Box, Button, Grid, IconButton, Menu, MenuItem } from "@mui/material";
import ArrowIcon from "./theme/ArrowIcon"
import { useState } from "react";



export default function MenuButtons(){
    const [invisible, setInvisible] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <Grid container columns={12} spacing={3} sx={{width:"100%"}} justifyContent="center" alignItems="center">
            <Box
            sx={{width: "100%", 
            height: "100%",
            display: "flex",
            pt: 4, 
            placeItems: "center",
            zIndex: 5,
            }}>
                <Grid item xs={2}/>
                <Grid item xs={2}>
                <Button
                variant="text"
                classes={{root: 'buttonMenu'}}
                sx={{ 
                minWidth: "35px"}}>
                    <img
                    src="./Home Icon.png"/>
                </Button>
                </Grid>

                <Grid item xs={2}>
                <Button
                variant="text"
                classes={{root: 'buttonMenu'}}
                sx={{ 
                minWidth: "35px",
                }}>
                    <Badge 
                    variant="dot" 
                    color="primary"
                    invisible={invisible}>
                        <img
                        src="./Message.png"/>
                    </Badge>
                </Button>
                </Grid>
                
                <Grid item xs={2}>
                <Button
                variant="text"
                classes={{root: 'buttonMenu'}}
                sx={{ 
                minWidth: "35px"}}>
                    <img
                    src="./Settings.png"/>
                    {/* ./Settings1.png */}
                </Button>
                </Grid>
                
                <Grid item xs={2}>
                <IconButton
                sx={{ 
                width: "35px",
                height: "35px",
                border: "none"}}>
                    <img
                    src="./Userpic.png"/>
                </IconButton>
                </Grid>

                <Grid item xs={2}>
                <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                >
                ENG {<ArrowIcon style={{marginLeft:"5px"}}/>}
                </Button>
                    <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}>
                        <MenuItem onClick={handleClose}>RUS</MenuItem>
                        <MenuItem onClick={handleClose}>JPN</MenuItem>
                    </Menu>
                </Grid>
            </Box>
        </Grid>
    )
}