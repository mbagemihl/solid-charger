import {Component} from "solid-js";
import {Button, Card, CardContent, Chip, Stack} from "@suid/material";

export const ChargerComponent: Component<{ name: string }> = (props) => {

    const finishedCharging = () => {

    }
    return (
        <>
            <Card sx={{width: 450}}>
                <CardContent>
                    <Stack>
                        <svg height='600px' width='400px' version="1" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 48 48"
                             enable-background="new 0 0 48 48">
                            <g fill="#8BC34A">
                                <path
                                    d="M34,44H14c-1.1,0-2-0.9-2-2V8c0-1.1,0.9-2,2-2h20c1.1,0,2,0.9,2,2v34C36,43.1,35.1,44,34,44z"/>
                                <path
                                    d="M28,13h-8c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1h8c0.6,0,1,0.4,1,1v7C29,12.6,28.6,13,28,13z"/>
                            </g>
                            <polygon fill="#FFEB3B" points="30,24 24.5,24 26.7,13 18,26 23.5,26 21.3,37"/>
                        </svg>
                        <Chip label={props.name}></Chip>
                        <Button variant="contained" color="success" onClick={finishedCharging}>Done Charging</Button>
                    </Stack>
                </CardContent>
            </Card>
        </>
    )
}