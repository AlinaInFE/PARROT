import { Typography, Box, Accordion, AccordionSummary, AccordionDetails, Button, FormControlLabel, Radio, RadioGroup, TextField, InputBase, Grid } from "@mui/material";
import ArrowIcon from "../components/theme/ArrowIcon";
import CardShow from "../components/CardShow";
import Pages from "../components/Pages";


const categoryName = ["Sculpture", "Architecture", "Landscape", "Graphic arts", "Portrait"]

export default function Artworks(){

    return(
        <Box sx={{mt: "100px", 
        ml: {xs: "7%", md: 3},
        width: "100%"}}>
            
            <Grid container justifyContent="center" alignItems="center" columns={13}>
            <Grid item xs={13} md={12}>
            <Typography
            classes={{root: 'headingFont'}}
            sx={{fontSize: "50px",
                lineHeight: "60px",
                width: "100%"}}>
                Artworks
            </Typography>
            </Grid>


            <Grid item xs={13} md={5}>
            <Box sx={{
                display: {md:"flex", xs:"block"}, 
                mt: "85px",
                width: "100%"}}>
                
                <Box>
                <Accordion 
                sx={{width: "258px",
                    }}>
                    <AccordionSummary
                    id="Category"
                    aria-controls="panel1d-content"
                    expandIcon={<ArrowIcon/>}>
                        <Typography
                        classes={{root: 'headingFont'}}
                        sx={{
                            fontWeight: "600",
                            fontSize: "18px",
                            lineHeight: "100%",}}>
                            Category
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>

                        <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="Sculpture"
                        name="Category">
                            {categoryName.map((el, i) => {
                                return(
                                    <FormControlLabel 
                                    value={`${el}`} 
                                    control={<Radio/>}
                                    label={
                                        <Typography
                                        classes={{root: 'headingFont'}}
                                        sx={{
                                            fontSize: "18px",
                                            lineHeight: "27px",
                                            color: "#000000",
                                        }}>
                                            {`${el}`}
                                        </Typography>
                                    }/>
                                )
                            })}
                        </RadioGroup>

                    </AccordionDetails>
                </Accordion>
                </Box>
            

                <Box sx={{ml: {md:"30px", xs:"0"},
            mt: {xs:"30px", md: "0"}}}>
                <Accordion 
                sx={{width: "258px"}}>
                    <AccordionSummary
                    id="Name"
                    expandIcon={<ArrowIcon/>}>
                        <Typography
                        classes={{root: 'headingFont'}}
                        sx={{
                            fontWeight: "600",
                            fontSize: "18px",
                            lineHeight: "100%",}}>
                            Name
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <InputBase
                    id="SearchArt"
                    placeholder="Start type a name"
                    sx={{
                        width: "238px", height:"50px",
                        marginLeft: "-6px",
                        background:'#F6F6F6'}}/>
                    </AccordionDetails>
                </Accordion>
                </Box>
                
            </Box>
            </Grid>

            <Grid item xs={0} md={7}/>

            <Grid item xs={13}>
                <CardShow/>
            </Grid>
            
            <Grid item xs={13}>
                <Pages/>
            </Grid>
            
            </Grid>
        </Box>
    )
}