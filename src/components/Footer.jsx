import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";

export default function Footer(){
    const Text = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #FFFFFF;`

    return(
        <>
            <Box
            sx={{
            width: "100%",
            // height: {lg:"278px", xs: "100%"},
            background: "#000000",
            display: {xs: "block", md: "flex"},
            mt: "174px"}}>

                <Grid container justifyContent="center" alignItems="center" columns={9} spacing={2}
                sx={{ml: {xs: "7%", lg: "15%"}}}>
                <Grid item xs={9} md={4} lg={3}>
                <Box 
                sx={{
                // ml:{xs: "30%", lg: 20}, 
                pt: "50px",
                width: "100%"}}>
                    <img
                    src={"./LogoWhite.png"}
                    alt="IMAGINE"
                    style={{width: "176px", height: "26px"}}/>
                    <Text style={{marginTop: "60px"}}>Contract offer</Text>
                    <Text>Card payment rules</Text>
                </Box>
                </Grid>
                

                <Grid item xs={9} md={4} lg={4}>
                <Box sx={{
                    // ml:{xs: "30%",md: 0},
                    width: "100%"}}>
                    <Text style={{marginTop: "60px"}}>
                        imagine.com
                    </Text>
                    <Text>info@imagine.com</Text>
                    <Text style={{marginTop: "60px"}}>
                        © IMAGINE 2021.  All rights Reserved
                    </Text>
                </Box>
                </Grid>

                <Grid item xs={9} md={4} lg={2}>
                    <Box sx={{display: "flex", 
                    // ml:{xs: "30%", md: 20},
                    mt: "60px",
                    width: "100%"}}>
                        <img
                        src={"./Facebook.png"}
                        alt="Facebook"
                        style={{width: "22px", 
                        height: "22px",
                        marginLeft: "16px"}}/>

                        <Box sx={{
                        background: "center no-repeat url('./Inst.png')",
                        width: "22px", 
                        height:"22px",
                        // placeItems: "center",
                        marginLeft: "16px"}}>
                            <Box sx={{
                            background: "center no-repeat url('./Inst2.png')",
                            width: "13.36px", 
                            height:"13.36px",
                            m: "auto", 
                            mt:"4.3px"}}>
                            <Box
                            style={{width: "5.45px", 
                            height:"5.45px", 
                            paddingTop: "8px",
                            marginLeft: "3.7px",
                            background: "center no-repeat url('./Inst2.png')", }}/>
                        </Box>
                    </Box>

                        <img
                        src={"./WhatsApp.png"}
                        alt="WhatsApp"
                        style={{width: "22px", 
                        height:"22px",
                        marginLeft: "16px"}}/>
                    </Box>
                </Grid>
                </Grid>

        </Box>
        <Box sx={{width: "100%", height: "150px", background: "#000000",}}/>
    </>
    )
}