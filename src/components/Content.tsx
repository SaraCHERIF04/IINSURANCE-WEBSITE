import { FunctionComponent } from "react";
import styles from "./Content.module.css";

export type ContentType = {
  className?: string;
};

const Content: FunctionComponent<ContentType> = ({ className = "" }) => {
  return (
    <section className={[styles.content4, className].join(" ")}>
      <div className={styles.content4Inner}>
        <div className={styles.frameParent}>
          <div className={styles.h2FeatureSection1Wrapper}>
            <h1 className={styles.h2FeatureSection1}>Our services</h1>
          </div>
          <p className={styles.paragraph}>
            <span
              className={styles.problemsTryingTo}
            >{`Problems trying to resolve the conflict between `}</span>
            <span
              className={styles.theTwoMajor}
            >{`the two major realms of Classical physics: Newtonian mechanics `}</span>
          </p>
        </div>
      </div>
      <div className={styles.cardItemParent}>
        <div className={styles.cardItem}>
          <div className={styles.mediaBgCover}>
            <img className={styles.post1Icon} alt="" src="/post1@2x.png" />
            <div className={styles.filter}>
              <a
                className={styles.h6}
                href="https://www.saa.dz/fr/offer/cat-nat"
                target="_blank"
              >
                CATASTROPHES NATURELLES
              </a>
              <div className={styles.filterInner}>
                <div className={styles.frameGroup}>
                  <div className={styles.h3Wrapper}>
                    <a className={styles.h3}>
                      Protect your home from natural disasters by subscribing to
                      CAT NAT insurance.
                    </a>
                  </div>
                  <button className={styles.buttonbtnprimaryColorbtnR}>
                    <b className={styles.btnText}>View Project</b>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cardItem1}>
          <div className={styles.mediaBgCover1}>
            <img
              className={styles.pexels107932638205519531Icon}
              alt=""
              src="/pexels10793263820551953-1@2x.png"
            />
            <b className={styles.h61}>Auto Insurance</b>
            <div className={styles.mediaBgCoverInner}>
              <div className={styles.h3Parent}>
                <p className={styles.h31}>
                  Choose your Auto insurance formula that suits your needs and
                  your budget, you can get a quote in just a few clicks
                </p>
                <button className={styles.buttonbtnprimaryColorbtnR1}>
                  <b className={styles.btnText1}>{`info & devis`}</b>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cardItem2}>
          <img className={styles.filterIcon} alt="" src="/filter@2x.png" />
          <div className={styles.h6Wrapper}>
            <b className={styles.h62}> HABITATION</b>
          </div>
          <div className={styles.h3Group}>
            <div className={styles.h32}>
              The SAA Multi-Risk Housing Insurance protects you effectively in
              all circumstances
            </div>
            <button className={styles.buttonbtnprimaryColorbtnR2}>
              <b
                className={styles.btnText2}
              >{`Currency & online subscription`}</b>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.colMd3Parent}>
        <div className={styles.colMd3}>
          <div className={styles.cardItem3}>
            <div className={styles.mediaBgCover2}>
              <img className={styles.post1Icon1} alt="" src="/post1@2x.png" />
              <div className={styles.filter1}>
                <div className={styles.h6Parent}>
                  <b className={styles.h63}>SAFETY BOAT OF PLAISANCE</b>
                  <div className={styles.h3Container}>
                    <div className={styles.h33}>
                      Discover the SAA’s Plaisance insurance that covers you
                      against the risks associated with the use of leisure boats
                    </div>
                  </div>
                </div>
                <div className={styles.buttonbtnprimaryColorbtnRWrapper}>
                  <div className={styles.buttonbtnprimaryColorbtnR3}>
                    <b className={styles.btnText3}>View Project</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.colMd31}>
          <div className={styles.cardItem4}>
            <div className={styles.mediaBgCover3}>
              <img
                className={styles.pexels107932638205519531Icon1}
                alt=""
                src="/pexels10793263820551953-1@2x.png"
              />
              <div className={styles.h6Group}>
                <b className={styles.h64}>
                  CHEF OF FAMILY CIVIL RESPONSIBILITY
                </b>
                <div className={styles.h3Frame}>
                  <div className={styles.h34}>
                    When you or your loved ones cause harm to others, your civil
                    liability is engaged, you can be assisted in the
                    compensation of third parties
                  </div>
                </div>
              </div>
              <div className={styles.buttonbtnprimaryColorbtnRContainer}>
                <div className={styles.buttonbtnprimaryColorbtnR4}>
                  <b className={styles.btnText4}>{`info & devis`}</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.colMd32}>
          <div className={styles.cardItem5}>
            <img className={styles.filterIcon1} alt="" src="/filter@2x.png" />
            <b className={styles.h65}>
              Are you a professional or an enterprise?
            </b>
            <div className={styles.cardItemInner}>
              <div className={styles.frameDiv}>
                <div className={styles.h35}>
                  Go ahead, the SAA will accompany you in your plans for the
                  future. Discover our special offers for you.
                </div>
                <div className={styles.buttonbtnprimaryColorbtnR5}>
                  <b
                    className={styles.btnText5}
                  >{`Currency & online subscription`}</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
