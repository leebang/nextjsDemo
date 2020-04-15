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


export default function Index() {
    const router = useRouter()
    const [rValue, setRValue] = useState(0)
    const [gValue, setGValue] = useState(0)
    const [bValue, setBValue] = useState(0)
    const [theHex, setTheHex] = useState(() => {
        router.query.hex ?
        router.query.hex : 
        "FFFFFF"

    })
    const [theColor, setTheColor] = useState()


    const theStyle = {
        height: "105vh", 
        width: "100vw",
        background: theColor,
        
    }

    const inputStyle = {
        textAlign: "center !important",
    }

    const inputWrapper = "ui focus input transparent"
    const inputWrapperStyle = {width: "54.5px", right:"23px", textAlign: "center", lineHeight: "1em", background:"rgb(25,25,25,0.2)"}
    const inputWrapperStyleHex = {width: "80px", textAlign: "center", lineHeight: "1em", background:"rgb(25,25,25,0.2)"}
    const boxStyle = {background:"rgb(255,255,255,0.5)", width: "300px", boxShadow: "1px 3px 10px #111111", borderRadius: "5px"}



    const setDefault = () => {
        setRValue("")
        setGValue("")
        setBValue("")
        setTheHex("")

        setTheColor("#FFFFFF")
        
    }

    const setRGB = (str) => {
        const result = HEX2RGB(str)
        setRValue(result[0])
        setGValue(result[1])
        setBValue(result[2])

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
            const result = HEX2RGB(router.query.hex)
            setRValue(result[0])
            setGValue(result[1])
            setBValue(result[2])
    
            setTheHex(router.query.hex)
            setTheColor("#" + router.query.hex)
        } else if (router.query.rgb) {
            const theRGB = (router.query.rgb).split(',')
            setRValue(theRGB[0])
            setGValue(theRGB[1])
            setBValue(theRGB[2])

            const result = rgbToHex(theRGB[0],theRGB[1],theRGB[2])
            
            setTheHex("#" + result)
            setTheColor("#" + result)

        } else {
            setRValue(rValue)
            setGValue(gValue)
            setBValue(bValue)
            setTheHex(theHex)
            setTheColor("#" + theHex)
        }
        


    }, [router.query.hex, router.query.rgb])

    return (
      
      <div style={theStyle}>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
        <Grid rows={3} centered>
        
        <Grid.Row style={{height:"30vh"}}></Grid.Row>

        <Grid style={boxStyle}>
        <Grid.Row columns={1}  width={8} centered >
            <h2>Hex RGB Converter</h2>
        </Grid.Row>

        <Grid.Row columns={1}  width={8} centered>
            <h4>Hex</h4>
            <div class={inputWrapper} style={inputWrapperStyleHex}><input
            style={inputStyle}
            type="text"
            maxLength = "6"
            value = {theHex}
            onChange = {(e) => {
                if (e.target.value) {
                    setRGB(e.target.value)
                } else {
                    setDefault()
                }
            }
            }
            /></div>
            
        </Grid.Row>

        {/* RGB part */}
        <Grid.Row columns={5} centered style={{left:"10px"}} >

            <Grid.Column centered>
                <h4 style={{color:"red"}}>R</h4> 
                {/* {rValue} */}
                {/* <br/> */}
                <div class={inputWrapper} style={inputWrapperStyle}><input 
                style={inputStyle}
                type="text"
                value = {rValue}
                maxLength = "3"
                onChange = {(e) => {
                    if (e.target.value <= 255) {
                        setHEX(e.target.value, gValue, bValue)
                    } else if (e.target.value > 255) {
                        
                    } else {
                        setDefault()
                    }
                }
                
                }
                /></div>
            </Grid.Column>

            <Grid.Column centered>
                <h4 style={{color:"green"} }>G</h4> 
                {/* {gValue} */}
                {/* <br/> */}
                <div class={inputWrapper} style={inputWrapperStyle}><input
                style={inputStyle}
                type="text"
                value = {gValue}
                maxLength = "3"
                onChange = {(e) => {
                    if (e.target.value <= 255) {
                        setHEX(rValue, e.target.value, bValue)
                    } else if (e.target.value > 255) {

                    } else {
                        setDefault()
                    }
                }
                }
                /></div>
            </Grid.Column>

            <Grid.Column centered>
                <h4 style={{color:"blue"}}>B</h4> 
                {/* {bValue} */}
                {/* <br/> */}
                <div class={inputWrapper} style={inputWrapperStyle}><input 
                style={inputStyle}
                type="text"
                value = {bValue}
                maxLength = "3"
                onChange = {(e) => {
                    if (e.target.value <= 255) {
                        setHEX(rValue, gValue, e.target.value)
                    } else if (e.target.value > 255) {
                        
                    } else {
                        setDefault()
                    }
                }
                }
                /></div>
            </Grid.Column>
        </Grid.Row>
    </Grid>
    </Grid>

      </div>
      
    );
  }