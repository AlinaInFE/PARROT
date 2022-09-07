import { Box, Pagination, Typography } from "@mui/material";


export default function Pages(){
    return(
        <Box
        sx={{
            display: {xs: "block", lg: "flex"},
            ml: {xl:"811px", xs:0}, 
            mt:"105px",
            width: "100%"}}>
            <Pagination 
            defaultPage={1}
            // onClick={(e) => {
            //     func(e.target.value) will provide to function which is'll do request to Back
            // }} 
            color="primary"
            count={74} 
            shape="rounded"/>
            <Typography
            classes={{root: 'headingFont'}}
            sx={{fontSize: "18px",
            color: "#959595", 
            pl:"40px"}}>1-4 of 296 Results</Typography>
        </Box>
    )
}