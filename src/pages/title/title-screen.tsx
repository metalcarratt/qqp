import { useTitle } from "./use-title";
import styles from './title.module.scss';
import { GoToPageFn, Page } from "../use-nav";

type Props = {
  goToPage: GoToPageFn
}

export const TitleScreen = ({goToPage}: Props) => {
    const title = useTitle();

  return (
    <div className={styles.titleScreen}>
      <h1>QQP</h1>
      <p>{title}</p>
      <button onClick={() => goToPage(Page.PlayScreen)}>Play</button>
      <button>Create</button>
    </div>
  )
}