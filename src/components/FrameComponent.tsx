import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <div className={styles.motDePasseOublierParent}>
        <a className={styles.motDePasse}>Mot de Passe Oublier?</a>
        <div className={styles.inscriptionWrapper}>
          <a className={styles.inscription} target="_blank">
            Inscription
          </a>
        </div>
      </div>
      <div className={styles.inputformControlWrapper}>
        <button className={styles.inputformControl}>
          <input
            className={styles.email}
            placeholder="connection"
            type="text"
          />
        </button>
      </div>
    </section>
  );
};

export default FrameComponent;
