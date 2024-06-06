import { FunctionComponent } from "react";
import styles from "./Frame1.module.css";

const Frame1: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.inscriptionBnficiezDeNosWrapper}>
        <div className={styles.inscriptionBnficiezDeContainer}>
          <p className={styles.inscription}>INSCRIPTION</p>
          <p className={styles.bnficiezDeNos}>
            Bénéficiez de nos services d'assurance en créant votre compte en
            ligne
          </p>
        </div>
      </div>
      <section className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.saisissezVotreAdresseEmailWrapper}>
            <div className={styles.saisissezVotreAdresse}>
              Saisissez votre adresse email
            </div>
          </div>
          <div className={styles.inputformControl}>
            <input
              className={styles.email}
              placeholder=" E-mail* "
              type="text"
            />
          </div>
        </div>
      </section>
      <button className={styles.inputformControl1}>
        <div className={styles.email1}>Envoyer le lien de redifinition</div>
      </button>
    </div>
  );
};

export default Frame1;
