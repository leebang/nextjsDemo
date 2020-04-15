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
        background: theColor
    }

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
        } else {
            setRValue(rValue)
            setGValue(gValue)
            setBValue(bValue)
            setTheHex(theHex)
        }
        


    }, [router.query.hex])

    return (
      
      <div style={theStyle}>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
        {router.query.hex}


        <Grid rows={3} centered >
        
        <Grid.Row style={{height:"30vh"}}></Grid.Row>

        <Grid>
        <Grid.Row columns={1}  width={8} centered >
            <h2>Hex RGB Converter</h2>
        </Grid.Row>

        <Grid.Row columns={1}  width={8} centered >
        
            <h4>Hex Value </h4>
            {/* {theHex} */}
            {/* <br/> */}
            <div class="ui focus input"><input 
            type="text"
            placeholder = "Enter HEX value"
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
            />
            </div>
        </Grid.Row>

        <Grid.Row columns={5}  centered >
            <Grid.Column textAlign='center'>
                <h4>Red</h4> 
                {/* {rValue} */}
                {/* <br/> */}
                <div class="ui focus input"><input 
                type="text"
                placeholder = "Enter Red value"
                value = {rValue}
                maxLength = "3"
                onChange = {(e) => {
                    if (e.target.value) {
                        setHEX(e.target.value, gValue, bValue)
                    } else {
                        setDefault()
                    }
                }
                }
                /></div>
            </Grid.Column>

            <Grid.Column centered textAlign='center'>
                <h4>Green </h4> 
                {/* {gValue} */}
                {/* <br/> */}
                <div class="ui focus input"><input 
                type="text"
                placeholder = "Enter Green value"
                value = {gValue}
                maxLength = "3"
                onChange = {(e) => {
                    if (e.target.value) {
                        setHEX(rValue, e.target.value, bValue)
                    } else {
                        setDefault()
                    }
                }
                }
                /></div>
            </Grid.Column>

            <Grid.Column centered textAlign='center'>
                <h4>Blue</h4> 
                {/* {bValue} */}
                {/* <br/> */}
                <div class="ui focus input"><input 
                type="text"
                placeholder = "Enter Blue value"
                value = {bValue}
                maxLength = "3"
                onChange = {(e) => {
                    if (e.target.value) {
                        setHEX(rValue, gValue, e.target.value)
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