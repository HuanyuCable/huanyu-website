"use client";

import { useState } from "react";
import { CommunicationElvTechnicalIcon, type CommunicationElvIconKind } from "./CommunicationElvTechnicalIcons";
import styles from "./communication-elv.module.css";

export type CommunicationElvFamily = {
  number: string;
  icon: CommunicationElvIconKind;
  title: string;
  modelLabel: string;
  models: string;
  bullets: string[];
  note?: string;
};

function MobileFamilyContent({ family }: { family: CommunicationElvFamily }) {
  return (
    <div className={styles.mobileFamilyContent}>
      <div className={styles.mobileFamilyIcon}><CommunicationElvTechnicalIcon kind={family.icon} /></div>
      <p className={styles.modelLine}><span>{family.modelLabel}</span><strong>{family.models}</strong></p>
      <ul className={styles.familyList}>{family.bullets.map((item) => <li key={item}>{item}</li>)}</ul>
      {family.note && <p className={styles.familyNote}>{family.note}</p>}
    </div>
  );
}

export function CommunicationElvFamilyAccordion({ families }: { families: CommunicationElvFamily[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className={styles.familiesMobile}>
      {families.map((family, index) => {
        const open = openIndex === index;
        const panelId = `communication-family-panel-${index}`;
        return (
          <div className={styles.familyAccordionItem} key={family.number}>
            <button
              type="button"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenIndex(open ? -1 : index)}
            >
              <span>{family.number}</span>
              <strong>{family.title}</strong>
              <span className={styles.expandMark} aria-hidden="true" />
            </button>
            <div id={panelId} className={styles.familyAccordionPanel} hidden={!open}>
              <MobileFamilyContent family={family} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
