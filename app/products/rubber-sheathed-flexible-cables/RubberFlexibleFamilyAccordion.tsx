"use client";

import { useState } from "react";
import styles from "./rubber-flexible.module.css";

export type RubberFlexibleFamily = {
  designation: string;
  name: string;
  chinaType: string;
  voltage: string;
  body: string;
};

export function RubberFlexibleFamilyAccordion({ families }: { families: RubberFlexibleFamily[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className={styles.familiesMobile}>
      {families.map((family, index) => {
        const open = openIndex === index;
        const panelId = `rubber-family-panel-${index}`;
        return (
          <div className={styles.familyAccordionItem} key={family.designation}>
            <button
              type="button"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenIndex(open ? -1 : index)}
            >
              <span className={styles.mobileDesignation}>{family.designation}</span>
              <strong>{family.name}</strong>
              <span className={styles.mobileMetadata}>China type reference: {family.chinaType} · {family.voltage}</span>
              <span className={styles.expandMark} aria-hidden="true" />
            </button>
            <div id={panelId} className={styles.familyAccordionPanel} hidden={!open}>
              <p>{family.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
