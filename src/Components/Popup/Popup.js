import style from "./Popup.module.css";

const Popup = (props) => {
  const { closeFn } = props;
  return (
    <div className={style.popup}>
      <div className={style.content}>
        {closeFn ? (
          <button className={style.closeBtn} onClick={closeFn}>
            X
          </button>
        ) : null}
        {props.children}
      </div>
    </div>
  );
};

export default Popup;
