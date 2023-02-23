const Head = (
    <div style={{ width: "60px", height: "60px", borderRadius: "100%", background: "white", position: "absolute", top: "50px", right: "-25px" }}/>
)

const Body = (
    <div style={{ width: "10px", height: "100px", background: "white", position: "absolute", top: "110px", right: 0 }}/>
)

const Right_Arm = (
    <div style={{ width: "80px", height: "10px", background: "white", position: "absolute", top: "130px", right: "-80px", rotate: "-30deg", transformOrigin: "left bottom" }}/>
)

const Left_Arm = (
    <div style={{ width: "80px", height: "10px", background: "white", position: "absolute", top: "130px", right: "10px", rotate: "30deg", transformOrigin: "right bottom" }}/>
)

const Right_Leg = (
    <div style={{ width: "80px", height: "10px", background: "white", position: "absolute", top: "200px", right: "-70px", rotate: "40deg", transformOrigin: "left bottom" }}/>
)

const Left_Leg = (
    <div style={{ width: "80px", height: "10px", background: "white", position: "absolute", top: "250px", right: "-15px", rotate: "-40deg", transformOrigin: "left bottom" }}/>
)

const bodyParts = [ Head, Body, Right_Arm, Left_Arm, Right_Leg, Left_Leg ];

type HangmanDrawingProps = {
    numberOfGuesses: number
}

function HangmanDrawing({ numberOfGuesses } : HangmanDrawingProps ) {
    return (
        <div style={{ position: "relative"}}>
            {bodyParts.slice(0, numberOfGuesses)}
            <div style={{ height: "50px", width: "10px", background: "white", position: "absolute", top: 0, right: 0 }}/>
            <div style={{ height: "10px", width: "200px", background: "white", marginLeft: "120px" }}/>
            <div style={{ height: "400px", width: "10px", background: "white", marginLeft: "120px" }}/>
            <div style={{ height: "10px", width: "250px", background: "white" }}/>

        </div>
    )
}

export default HangmanDrawing;