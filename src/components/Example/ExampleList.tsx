import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: " What is the laser classification of the BTMO system?",
        value: " What is the laser classification of the BTMO system?"
    },
    { text: "How many let-off positions does the Carcass Servicer E1GG0650 have?", value: "How many let-off positions does the Carcass Servicer E1GG0650 have?" },
    { text: "What is the max allowed impact energy at MP-Series end positions?", value: " What is the max allowed impact energy at MP-Series end positions?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
