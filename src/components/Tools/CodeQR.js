import QRCode from "react-qr-code";

const CodeQR = (props) => {

    const size = props.size ? props.size : 128;
    const bgColor = props.color ? props.color : "#000";
    const fgColor = props.backgroundColor ? props.backgroundColor : "#fff";
    const level = props.level ? props.level : "M"; // ('L' 'M' 'Q' 'H')
    const title = props.title ? props.title : "";

    //console.log(size, bgColor, fgColor, level, title, props.value)

    return (
        <>
            <QRCode value={ props.value } title={ title } size={ size } bgColor={ bgColor } fgColor={ fgColor } level={ level } />
        </>
    )
}

export default CodeQR;