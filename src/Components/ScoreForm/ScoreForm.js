import { useState } from "react";
import { useHistory } from "react-router-dom";
import { addDoc, collection, getFirestore } from "@firebase/firestore";

const ScoreForm = (props) => {
  const { closeFn, panel, time } = props;
  const history = useHistory();
  const [name, setName] = useState("");
  const handleChange = (value) => {
    setName(value);
    console.log(name);
  };
  const handleSubmit = async () => {
    const data = { time, name };
    const newScoreRef = await addDoc(
      collection(getFirestore(), `${panel}LeaderBoard`),
      data
    );
    console.log(`${newScoreRef} added to db`);
    history.push("/");
  };
  return (
    <form>
      <input
        value={name}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      ></input>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        Submit
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          closeFn();
        }}
      >
        Cancel
      </button>
    </form>
  );
};

export default ScoreForm;
