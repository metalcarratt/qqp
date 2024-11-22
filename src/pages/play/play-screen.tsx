import { useEffect } from "react";
import { useDraw } from "./use-draw";
import { useCanvas } from "./use-canvas";
import { useGlobalState } from "./use-global-state";
import { useMap } from "./use-map";
import styles from './play.module.scss';
import { useLevels } from "./levels/use-levels";
import { Game } from "./misc-types";

export const PlayScreen = () => {
    const global = useGlobalState();
    const {level, changeLevelName} = useLevels();
    const changeLevel = (level: string) => {
        changeLevelName(level);
    }
    const game: Game = {
        changeLevel
    };
    const map = useMap(global, level, game);
    
    const {draw } = useDraw(map);
    const {canvasRef} = useCanvas(draw);

    const keypresses = (e: KeyboardEvent) => {
        const k = e.key.toLowerCase();
        if (k === 'a') {
            map.left();
        } else if (k === 'w') {
            map.up();
        } else if (k === 'd') {
            map.right();
        } else if (k === 's') {
            map.down();
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', keypresses, true);

        return () => {
            document.removeEventListener('keydown', keypresses, true);
        }
    }, [keypresses])

    return (
        <div className={styles.page}>
            <canvas id="game" ref={canvasRef}></canvas>
            <div className={styles.sample} />
            <div className={styles.state}>
                Diamonds: { global.diamonds }
                {global.inventory.length ?
                    <div>
                        <h2>Inventory</h2>
                        <ul>
                            {global.inventory.map(i => <li>{i}</li>)}
                        </ul>
                    </div> : <></>
                }
            </div>
            <div className={styles.controls}>
                <table cellSpacing="10">
                    <tr>
                        <td/>
                        <td className={styles.arrow} onClick={() => map.up()}>W</td>
                        <td/>
                    </tr>
                    <tr>
                        <td className={styles.arrow} onClick={() => map.left()}>A</td>
                        <td className={styles.arrow} onClick={() => map.down()}>S</td>
                        <td className={styles.arrow} onClick={() => map.right()}>D</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}