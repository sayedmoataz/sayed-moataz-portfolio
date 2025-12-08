import emailjs from '@emailjs/browser'
import {
    Box,
    Stack,
    Typography,
} from '@mui/material'
import Lottie from "lottie-react"
import { useSnackbar } from 'notistack'
import {
    useContext,
    useState
} from 'react'

import CustomTextField from '../../utils/textfield.js'
import { AppContext } from './../../context/context/context.js'
import { ColorButton } from './../../utils/button.js'
import Textarea from './../../utils/teaxtarea.js'

import data from '../../data/contact.json'
import contactLottie from './../../assets/lotties/contact.json'
import portfolioLottie from './../../assets/lotties/portfolio.json'

const Contact = (props) => {
    const { enqueueSnackbar } = useSnackbar()
    const { state } = useContext(AppContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [portfolio, setPortfolio] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        emailjs.send(data.serviceID, data.templateID, {
            name: name,
            from_email: email,
            message: `${portfolio}\n${message}`,
        }, data.publicKey)
            .then(() => {
                enqueueSnackbar('Message sent successfully! I\'ll get back to you soon.', { variant: 'success' })
                // Clear form
                setName('')
                setEmail('')
                setPortfolio('')
                setMessage('')
            })
            .catch(err => {
                console.error('EmailJS Error:', err)
                enqueueSnackbar(`Failed to send message: ${err.text || err.message}`, { variant: 'error' })
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return <Box data-aos="fade-up" textAlign={"center"} >
        <Typography
            variant="h2"
            gutterBottom
            fontFamily='"Noto Sans", sans-serif'
            sx={{
                color: state.color.light,
                fontWeight: 700,
                fontSize: { xs: 24, sm: 28, md: 32, lg: 36 },
            }}
        >
            {props.title.toUpperCase()}
        </Typography>
        {props.forPortfolio && <Box width={{ xs: "90%", md: "75%" }} mx="auto">
            <Typography
                variant="span"
                fontFamily='"Noto Sans", sans-serif'
                color={state.color.light}
                fontWeight={100}
                sx={{ fontSize: { xs: 14, md: 16 } }}
            >
                {props.phrase}
            </Typography>
        </Box>}
        <Stack
            direction={"row"}
            justifyContent="space-between"
            alignItems={"center"}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            mt={5}
        >
            <Box
                sx={{
                    width: { xs: "100%", md: "55%", xl: "50%" },
                    bgcolor: 'transparent',
                    border: `1px solid ${state.color.primary}`,
                    boxShadow: `0px 0px 5px 1px ${state.color.primary}`,
                    borderRadius: 5,
                    padding: 5,
                }}>
                <form onSubmit={handleSubmit}>
                    <CustomTextField
                        type="text"
                        variant='standard'
                        aria-label="Name"
                        label="Name"
                        name="name"
                        role="textbox"
                        onChange={e => setName(e.target.value)}
                        value={name}
                        fullWidth
                        required
                        sx={{ mb: 2 }} />
                    <CustomTextField
                        type="email"
                        variant='standard'
                        aria-label="Email"
                        label="Email"
                        name="email"
                        role="textbox"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        fullWidth
                        required
                        sx={{ mb: props.forPortfolio ? 2 : 4 }} />
                    {props.forPortfolio && <CustomTextField
                        type="text"
                        variant='standard'
                        aria-label="Phone number"
                        label="Phone number"
                        name="phone_number"
                        role="textbox"
                        onChange={e => setPortfolio(e.target.value)}
                        value={portfolio}
                        fullWidth
                        sx={{ mb: 4 }} />}
                    <Textarea
                        aria-label="message"
                        label="message"
                        name="message"
                        minRows={5}
                        placeholder="Enter your message here..."
                        role="textbox"
                        onChange={e => setMessage(e.target.value)}
                        value={message}
                        required
                        aria-multiline={true}
                        sx={{ minHeight: { xs: 15, md: 25 }, minWidth: "100%" }} />
                    <ColorButton
                        variant="contained"
                        type="submit"
                        size='large'
                        disabled={loading}
                        sx={{ width: { xs: 1, md: 1 / 2 } }}
                    >{loading ? 'Sending...' : 'Submit'}</ColorButton>
                </form>
            </Box>
            <Box
                sx={{
                    width: { xs: "0%", md: "30%", xl: "30%" },
                    height: { xs: "0%", md: "30%", xl: "30%" }
                }}>
                {!props.forPortfolio
                    ? <Lottie
                        loop={true}
                        autoplay={true}
                        animationData={contactLottie}
                        style={{ width: "100%" }}
                    />
                    : <Lottie
                        loop={true}
                        autoplay={true}
                        animationData={portfolioLottie}
                        style={{ width: "100%" }}
                    />
                }
            </Box>
        </Stack>
    </Box >
}

export default Contact