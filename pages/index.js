import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Grid } from 'semantic-ui-react'


var helper = function (rgb) { 
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
         hex = "0" + hex;
    }
    return hex;
  };

var rgbToHex = function(r,g,b) {   
    var red = helper(r);
    var green = helper(g);
    var blue = helper(b);
    return red+green+blue;
};


function HEX2RGB (hex) {
    const regexp = /^[0-9a-fA-F]+$/

    if (regexp.test(hex)) {
        "use strict";
        if (hex.charAt(0) === '#') {
            hex = hex.substr(1);
        }
        if ((hex.length < 2) || (hex.length > 6)) {
            return false;
        }
        var values = hex.split(''),
            r,
            g,
            b;
    
        if (hex.length === 2) {
            r = parseInt(values[0].toString() + values[1].toString(), 16);
            g = r;
            b = r;
        } else if (hex.length === 3) {
            r = parseInt(values[0].toString() + values[0].toString(), 16);
            g = parseInt(values[1].toString() + values[1].toString(), 16);
            b = parseInt(values[2].toString() + values[2].toString(), 16);
        } else if (hex.length === 6) {
            r = parseInt(values[0].toString() + values[1].toString(), 16);
            g = parseInt(values[2].toString() + values[3].toString(), 16);
            b = parseInt(values[4].toString() + values[5].toString(), 16);
        } else {
            return false;
        }
        return [r, g, b];
    }


}


export default function Index() {
    const router = useRouter()
    const [rValue, setRValue] = useState(255)
    const [gValue, setGValue] = useState(255)
    const [bValue, setBValue] = useState(255)
    const [theHex, setTheHex] = useState("ffffff")
    const [theColor, setTheColor] = useState()


    const theStyle = {
        height: "100vh", 
        width: "100vw",
        background: theColor
        
    }

    const inputStyle = {
        textAlign: "center !important",
        pattern: "[a-fA-F\d]+"
    }

    const inputWrapper = "ui input transparent hex-selector"
    const inputWrapperRGB = "ui input transparent rgb-selector"
    const inputWrapperStyle = {width: "54.5px", right:"23px", textAlign: "center", lineHeight: "1em", background:"rgb(25,25,25,0.2)", borderRadius: "5px"}
    const inputWrapperStyleHex = {width: "80px", textAlign: "center", lineHeight: "1em", borderRadius: "5px",   transition: "all 0.2s ease-in-out", boxShadow: "0 0 10px -3px black"}
    const boxStyle = {background:"rgb(255,255,255,0.5)", width: "300px", boxShadow: "0 0 10px -3px black", borderRadius: "5px", marginLeft: "auto", marginRight: "auto"}



    const setDefault = () => {
        setRValue("")
        setGValue("")
        setBValue("")
        setTheHex("")

        setTheColor("#FFFFFF")
        
    }

    const setRGB = (str) => {

        const result = HEX2RGB(str)
        if (result) {
            if (result[0] !== "NaN") {
                setRValue(result[0])
            }
            if (result[1] !== "NaN") {
                setGValue(result[1])
            }
            if (result[2] !== "NaN") {
                setBValue(result[2])
            }
        }
        setTheHex(str)
        setTheColor("#"+str)

    }

    const setHEX = (r,g,b) => {
        
        const result = rgbToHex(r,g,b)

        setRValue(r)
        setGValue(g)
        setBValue(b)

        setTheHex(result)
        setTheColor("#"+result)

    }

    useEffect(() => {
        if (router.query.hex) {
            if (router.query.hex.length === 6) {
                const result = HEX2RGB(router.query.hex)
                setRValue(result[0])
                setGValue(result[1])
                setBValue(result[2])
        
                setTheHex(router.query.hex)
                setTheColor("#" + router.query.hex)
            }
        } else if (router.query.rgb) {
            if (router.query.rgb.length <= 11) {
                const theRGB = (router.query.rgb).split(',')
                if (theRGB[0] <= 255 && theRGB[1] <= 255 && theRGB[2] <= 255) {
                    setRValue(theRGB[0])
                    setGValue(theRGB[1])
                    setBValue(theRGB[2])
        
                    const result = rgbToHex(theRGB[0],theRGB[1],theRGB[2])
                    
                    setTheHex(result)
                    setTheColor("#" + result)
                }

            }


        } 
        


    }, [router.query.hex, router.query.rgb])

    return (
        

      <div style={theStyle}>

        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
        <link href="https://fonts.googleapis.com/css?family=Titillium+Web:300,400,700" rel="stylesheet" />
        <style jsx>
        {`.hex-selector {
            background: rgb(255, 255, 255, 0.5);
            width: 80px;
            text-align: center;
            line-height: 1em;
            border-radius: 5px;   
            transition: all 0.2s ease-in-out; 
          }
          .hex-selector:hover {
            box-shadow: 0 0 10px -3px black;
            transition: all 0.2s ease-in-out;
          }
          .rgb-selector {
            background: rgb(255, 255, 255, 0.5);
            width: 54.5px;
            right: 23px;
            text-align: center;
            line-height: 1em;
            border-radius: 5px;   
            transition: all 0.2s ease-in-out; 
          }
          .rgb-selector:hover {
            box-shadow: 0 0 10px -3px black;
            transition: all 0.2s ease-in-out;
        }
        `}
        </style>

            
            <Grid.Row style={{height:"30vh"}}></Grid.Row>

            <Grid style={boxStyle}>
                <Grid.Row columns={1}  width={8} centered >
                    <h2>Hex RGB Converter</h2>
                </Grid.Row>

                <Grid.Row columns={1}  width={8} centered>
                    <h4>HEX</h4>
                    <div className={inputWrapper} ><input
                    style={inputStyle}
                    type="text"
                    maxLength = "6"
                    value = {theHex}
                    onChange = {(e) => {
                        if (e.target.value) {
                            if (e.target.value.length <= 6) {
                                setRGB(e.target.value)
                            } else {
                                setTheHex(e.target.value)
                            }
                        } else {
                            setTheHex(e.target.value)
                        }
                    }
                    }
                    /></div>
                    
                </Grid.Row>

                {/* RGB part */}
                <Grid.Row columns={5} centered style={{left:"10px"}} >

                    <Grid.Column>
                        <h4 style={{color:"red"}}>R</h4> 
                        {/* {rValue} */}
                        {/* <br/> */}
                        <div className={inputWrapperRGB}><input 
                        style={inputStyle}
                        type="text"
                        value = {rValue}
                        maxLength = "3"
                        onChange = {(e) => {
                            if (e.target.value <= 255) {
                                e.target.value = e.target.value.replace(/^0/, "")
                                setHEX(e.target.value, gValue, bValue)
                            } 
                        }
                        
                        }
                        /></div>
                    </Grid.Column>

                    <Grid.Column>
                        <h4 style={{color:"green"} }>G</h4> 
                        {/* {gValue} */}
                        {/* <br/> */}
                        <div className={inputWrapperRGB}><input
                        style={inputStyle}
                        type="text"
                        value = {gValue}
                        maxLength = "3"
                        onChange = {(e) => {
                            if (e.target.value <= 255) {
                                e.target.value = e.target.value.replace(/^0/, "")
                                setHEX(rValue, e.target.value, bValue)
                            }
                        }
                        }
                        /></div>
                    </Grid.Column>

                    <Grid.Column>
                        <h4 style={{color:"blue"}}>B</h4> 
                        {/* {bValue} */}
                        {/* <br/> */}
                        <div className={inputWrapperRGB}><input 
                        style={inputStyle}
                        type="text"
                        value = {bValue}
                        maxLength = "3"
                        onChange = {(e) => {
                            if (e.target.value <= 255) {
                                e.target.value = e.target.value.replace(/^0/, "")
                                setHEX(rValue, gValue, e.target.value)
                            } 
                        }
                        }
                        /></div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>


      </div>
      
    );
  }