import { useEffect } from "react";
import { useDraw } from "./use-draw";
import { useCanvas } from "./use-canvas";
import { useGlobalState } from "./use-global-state";
import { useMap } from "./use-map";
import styles from './play.module.scss';

export const PlayMap = () => {
    const global = useGlobalState();
    const map = useMap(global);
    
    const {draw } = useDraw(map);
    const {canvasRef} = useCanvas(draw);

    const keypresses = (e: KeyboardEvent) => {
            
        if (e.key === 'ArrowLeft') {
            map.left();
        } else if (e.key === 'ArrowUp') {
            map.up();
        } else if (e.key === 'ArrowRight') {
            map.right();
        } else if (e.key === 'ArrowDown') {
            map.down();
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', keypresses, true);

        return () => {
            document.removeEventListener('keydown', keypresses, true);
        }
    }, [])

    return (
        <div className={styles.page}>
            <canvas id="game" ref={canvasRef}></canvas>
            <div className={styles.sample} />
            <div className={styles.state}>
                Diamonds: { global.diamonds }
            </div>
        </div>
    );
}