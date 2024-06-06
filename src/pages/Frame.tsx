import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import styles from "./Frame.module.css";

const Frame: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <FrameComponent1 />
      <div className={styles.inputformControlWrapper}>
        <div className={styles.inputformControl}>
          <input
            className={styles.email}
            placeholder=" Password* "
            type="text"
          />
        </div>
      </div>
      <FrameComponent />
      <h1 className={styles.login}>
        <span className={styles.loginTxt}>
          <p className={styles.login1}>{`login `}</p>
        </span>
      </h1>
    </div>
  );
};

export default Frame;
