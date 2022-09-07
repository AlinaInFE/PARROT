import { Box, CardHeader, Grid, IconButton, Typography } from "@mui/material";

const postsList = [
    {
        pic: "./Artwork.png",
        avatar: "./Artist3.png",
        artistName: "George Dillan",
        picName: "Forest silence"
    },
    {
        pic: "./Artwork (1).png",
        avatar: "./Artist.png",
        artistName: "Peggy Wood",
        picName: "Still life V"
    },
    {
        pic: "./Artwork (2).png",
        avatar: "./Artist1.png",
        artistName: "Alice Gordan",
        picName: "Surrounded"
    },
    {
        pic: "./Artwork (3).png",
        avatar: "./Artist2.png",
        artistName: "Timothy Taylor",
        picName: "Mountain landscape"
    },
] //response example  

export default function CardShow(){
    return(
        <Box sx={{width: "100%",
        mt: {md:"25px", xs: "10px"},
        // ml: "-30px",
        display: {xs:'block', md: 'flex'},}}>
            <Grid container justifyContent="center" alignItems="center" columns={16} spacing={4}>

            {postsList.map((el, i) => {
                return(
                    <Grid item xs={16} md={8} lg={5} xl={4}> 
                    <Box sx={{width: "100%"}}>
                        <Box
                        id={`${el.picName}${el.artistName}${i}`}
                        sx={{
                            // ml:"30px", 
                            width: "330px", 
                            mt:'20px'}}>

                            <Box sx={{width: "100%"}}>
                                <img
                                src={el.pic}
                                alt={el.picName}
                                style={{width: "330px"}}/>
                                <IconButton aria-label="delete"
                                // onClick={() => {"Some behavior"}}
                                sx={{
                                marginTop: "10px", 
                                marginLeft: "-44px",
                                width: "34px",
                                height: "34px",
                                zIndex: "2", 
                                position: "absolute",
                                background: "rgba(184, 184, 184, 0.6)",
                                backdropFilter: "blur(6px)"}}>
                                    <img
                                    style={{width: "16px", zIndex: "2"}}
                                    src={'./Trash.png'}
                                    alt={'Trash'}
                                    />
                                </IconButton>
                            </Box>
                            
                            <CardHeader
                                avatar={
                                    <Box sx={{
                                        background: `center no-repeat url(${el.avatar})`,
                                        width: "38px",
                                        height: "38px" }}/>}

                                title={
                                    <Typography
                                    classes={{root: 'headingFont'}}
                                    sx={{
                                        fontWeight: 500,
                                        fontSize: "18px",
                                        lineHeight: "27px"}}>
                                        {el.artistName}
                                    </Typography>}

                                subheader={
                                    <Typography
                                    classes={{root: 'headingFont'}}
                                    sx={{
                                        fontWeight: 400,
                                        fontSize: "16px",
                                        lineHeight: "24px"}}>
                                        {el.picName}
                                    </Typography>}/>
                        </Box>
                        </Box>
                    </Grid>
                )
            })}
            </Grid>
        </Box>
    )
}