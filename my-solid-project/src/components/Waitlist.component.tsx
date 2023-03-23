import {Component, For} from "solid-js";
import {List, ListItem, ListItemText} from "@suid/material";

export const WaitlistComponent: Component = (props: any) => {
    return (
        <>
            <List sx={{width: 300}} subheader='Waiting List'>
                <For each={props.list} fallback={<div>Nobody waiting :) </div>}>
                    {(item) => {
                        return <ListItem disablePadding><ListItemText primary={item}></ListItemText></ListItem>
                    }}
                </For>
            </List>

        </>
    )
}