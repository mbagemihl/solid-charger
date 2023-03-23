import type {Component} from 'solid-js';
import {createSignal} from "solid-js";

import styles from './App.module.css';
import {WaitlistComponent} from "./components/Waitlist.component";
import {ChargerComponent} from "./components/Charger.component";
import {Stack} from "@suid/material";

const App: Component = () => {
    const [waitlist, setWaitlist] = createSignal(["Thomas", "Stefan", "Dominik", "Jan"])
    const [charger1, setCharger1] = createSignal(null)
    const [charger2, setCharger2] = createSignal(null)
    const [charger3, setCharger3] = createSignal(null)
    return (
        <div class={styles.App}>
            <Stack direction="row" spacing={16}>
                <ChargerComponent name={charger1() || ""}></ChargerComponent>
                <ChargerComponent name={charger2() || ""}></ChargerComponent>
                <ChargerComponent name={charger3() || ""}></ChargerComponent>
                <WaitlistComponent list={waitlist()}></WaitlistComponent>
            </Stack>
        </div>
    );
    const chargerFree = (charger) => {}
};

export default App;
