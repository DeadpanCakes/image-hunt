import style from "./Leaderboard.module.css";
import LeaderListing from "./LeaderListing";
import useLeaderboard from "../../Hooks/useLeaderboard";
import PageContainer from "../PageContainer/PageContainer";
import { useState, useEffect } from "react";

const Leaderboard = (props) => {
  const { panel } = props;
  const [pages, setPages] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const incrementPage = () => setCurrPage((prevPage) => prevPage + 1);
  const decrementPage = () => setCurrPage((prevPage) => prevPage - 1);
  const scores = useLeaderboard(panel);

  useEffect(() => {
    const divideIntoPages = () => {
      let i = 0;
      let j = 0;
      const pages = [[]];
      while (i < scores.length) {
        while (j < 5 && i < scores.length) {
          pages[pages.length - 1].push(scores[i]);
          i++;
          j++;
        }
        if (scores[i]) {
          pages.push([]);
        }
        j = 0;
      }
      return pages;
    };
    if (scores) {
      setPages(divideIntoPages());
    }
  }, [scores]);

  console.log(pages[currPage - 1]);
  return (
    <PageContainer
      pages={pages}
      currPage={currPage}
      incrementPage={incrementPage}
      decrementPage={decrementPage}
      lastPage={pages.length}
    >
      <ul className={style.leaderboard}>
        {pages[currPage - 1]
          ? pages[currPage - 1].map((score) => {
              return (
                <LeaderListing
                  key={score.id}
                  name={score.name}
                  time={score.time}
                />
              );
            })
          : null}
      </ul>
    </PageContainer>
  );
};

export default Leaderboard;
