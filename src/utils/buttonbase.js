import { ButtonBase } from "@mui/material"
import Lottie from "lottie-react"

const CustomButtonBase = (props) =>
    <ButtonBase
        href={props.href}
        target='_blank'
        sx={{ width: '15%' }}
    >
        <Lottie
            loop={true}
            autoplay={true}
            animationData={props.animationData}
            style={{ width: "100%" }}
            title={props.title}
        />
    </ButtonBase>

export default CustomButtonBase