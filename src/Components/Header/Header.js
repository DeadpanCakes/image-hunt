import "./Header.css";
import TargetListing from "./TargetListing";
import Timer from "./Timer";

const Header = (props) => {
  const { targetsFound, targetPool, isGameOver } = props;
  return (
    <header>
      <ul className="targetList">
        {targetPool
          ? targetPool.map((target) => {
              return (
                <TargetListing
                  key={target.id}
                  target={target}
                  targetIsFound={targetsFound.includes(target.id)}
                />
              );
            })
          : null}
      </ul>
      <Timer isGameOver={isGameOver} />
    </header>
  );
};

export default Header;
