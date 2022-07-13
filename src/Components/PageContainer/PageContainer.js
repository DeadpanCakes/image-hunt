import style from "./PageContainer.module.css";

const PageContainer = (props) => {
  const { currPage, incrementPage, decrementPage, lastPage } = props;
  return (
    <div clssName={style.pageContainer}>
      {props.children}
      <div className={style.pageNavContainer}>
        <button
          onClick={decrementPage}
          disabled={currPage <= 1}
          className={style.navBtn}
        >
          Prev
        </button>
        <p>{currPage.toString()}</p>
        <button
          onClick={incrementPage}
          disabled={currPage >= lastPage}
          className={style.navBtn}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PageContainer;
