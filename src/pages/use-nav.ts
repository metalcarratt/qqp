import { useState } from "react";

export enum Page {
  TitleScreen = "title-screen",
  PlayScreen = "play-screen",
}

export type GoToPageFn = (page: Page) => void;

export const useNav = () => {
  const [page, setPage] = useState<Page>(Page.TitleScreen);

  const goToPage: GoToPageFn = (page) => setPage(page);

  return { page, goToPage };
};
