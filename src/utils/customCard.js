import React, { useContext } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActions } from '@mui/material'

import { ColorButton } from './button'
import { AppContext } from '../context/context/context'

const CustomCard = (props) => {
    const { state } = useContext(AppContext)

    return (
        <Card
            sx={{
                width: '100%',
                backgroundColor: '#0000001e',
                borderRadius: "0.8rem",
                boxShadow: { xs: '0px 0px 5px 1px #6286A1', md: '0px 0px 7px 0px #6286A1' },
                '&:hover': {
                    boxShadow: { xs: '0px 0px 5px 2px #368F80', md: '0px 0px 7px 0px #368F80' },
                },
            }}>
            <CardMedia
                component="img"
                width="100%"
                height={250}
                image={props.portfolio.image}
                loading='eager'
                alt={props.portfolio.title}
            />
            <CardContent>
                <Typography
                    variant="h6"
                    gutterBottom
                    fontFamily='"Noto Sans", sans-serif'
                    color={state.color.light}
                    fontWeight={900}>
                    {props.portfolio.title.toUpperCase()}
                </Typography>
                <Typography
                    variant="p"
                    fontFamily='"Noto Sans", sans-serif'
                    fontWeight={100}
                    color={state.color.light}>
                    {props.portfolio.description}
                </Typography>
            </CardContent>
            <CardActions
                sx={{
                    justifyContent: 'flex-end',
                    m: 2
                }} >
                {props.portfolio.url
                    ? <ColorButton
                        href={props.portfolio.url}
                        target='_blank'
                        sx={{
                            width: "fit-content",
                            bgcolor: 'transparent',
                            color: state.color.cold,
                            fontWeight: 700,
                            fontSize: { xs: 16 },
                            "&:hover": {
                                bgcolor: 'transparent',
                                color: state.color.teal
                            },
                            "&:focus": {
                                bgcolor: state.color.teal,
                                color: state.color.light
                            }
                        }}
                    >Preview</ColorButton>
                    : <ColorButton
                        sx={{
                            width: "fit-content",
                            bgcolor: 'transparent',
                            color: state.color.cold,
                            fontWeight: 700,
                            fontSize: { xs: 16 },
                            "&:hover": {
                                bgcolor: 'transparent',
                                color: state.color.light
                            },
                            "&:focus": {
                                bgcolor: state.color.light,
                                color: state.color.dark
                            }
                        }}
                    >Under development</ColorButton>
                }
            </CardActions>
        </Card >
    )
}

export default CustomCard