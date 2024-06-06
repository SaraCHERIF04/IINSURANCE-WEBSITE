import { FunctionComponent } from "react";
import styles from "./Root.module.css";

const Root: FunctionComponent = () => {
  return (
    <form className={styles.root}>
      <main className={styles.inscriptionBannerParent}>
        <div className={styles.inscriptionBanner}>
          <div className={styles.inscriptionBnficiezDeContainer}>
            <p className={styles.inscription}>INSCRIPTION</p>
            <p className={styles.bnficiezDeNos}>
              Bénéficiez de nos services d'assurance en créant votre compte en
              ligne
            </p>
          </div>
        </div>
        <section className={styles.emailContainer}>
          <div className={styles.tripleEmail}>
            <div className={styles.doubleEmail}>
              <div className={styles.inputformControl}>
                <input
                  className={styles.email}
                  placeholder="Civilization"
                  type="text"
                />
              </div>
              <div className={styles.inputformControl1}>
                <input
                  className={styles.email1}
                  placeholder="Nom*"
                  type="text"
                />
              </div>
            </div>
            <div className={styles.inputformControl2}>
              <input
                className={styles.email2}
                placeholder=" prenom* "
                type="text"
              />
            </div>
          </div>
        </section>
        <div className={styles.nestedInput}>
          <div className={styles.inputformControl3}>
            <input
              className={styles.email3}
              placeholder=" E-mail* "
              type="text"
            />
          </div>
        </div>
        <div className={styles.nestedInput1}>
          <div className={styles.inputformControl4}>
            <input
              className={styles.email4}
              placeholder=" Numero de  Telephone* "
              type="text"
            />
          </div>
        </div>
        <div className={styles.inputformControl5}>
          <input
            className={styles.email5}
            placeholder=" Adresse* "
            type="text"
          />
        </div>
        <div className={styles.inputformControl6}>
          <input className={styles.email6} placeholder="WILAYA" type="text" />
        </div>
        <div className={styles.sixthEmailField}>
          <div className={styles.inputformControl7}>
            <input
              className={styles.email7}
              placeholder="Commune"
              type="text"
            />
          </div>
        </div>
      </main>
      <button className={styles.inputformControl8}>
        <div className={styles.email8}>Create an Account</div>
      </button>
    </form>
  );
};

export default Root;
