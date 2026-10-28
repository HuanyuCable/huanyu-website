# Shielded vs Unshielded Control and Instrumentation Cables: A Buyer's Specification Guide

A project schedule may say **“2 × 1.5 mm² control cable”** or **“one pair, 1.5 mm², shielded”** without explaining the required screen. Should the supplier offer an unshielded multicore cable, an overall foil screen, separately screened pairs or a copper braid?

**Do not choose from the conductor size alone.** Screening depends on circuit function, noise environment, system design, cable construction and the project's technical specification.

This guide helps buyers identify the missing information before asking their engineers or suppliers for a final cable design.

## 1. What does a screen or shield do?

In many control, signal and instrumentation systems, a metallic **screen** (also called a **shield**) is incorporated to support electromagnetic-interference management. It can help reduce interference coupling in a correctly designed and installed system.

A screen is **not** a universal guarantee that a signal will be interference-free. Performance depends on screen material and construction, cable routing, termination, bonding, operating frequencies and the equipment installation.

An **unshielded (unscreened) cable** has no designated metallic electromagnetic screen. This does not mean it is low quality; it means the final installation and project design must determine whether screening is necessary.

## 2. Four common screen configurations

| Construction | What it describes | Buyer checks |
| --- | --- | --- |
| **Unscreened / unshielded** | No designated screen layer | Is a screen actually required by the project's electrical/noise design? |
| **Overall screen** | A screen encloses the assembled core or pair group | Screen material, coverage, drain wire, connection requirements |
| **Individual pair screen** | A screen surrounds a designated pair; in multipair cables, pairs can be screened separately | Pair count, pair twisting, drain/termination arrangement, whether another overall screen is required |
| **Individual + overall screen** | Individual screens plus an additional overall screen | Both screen constructions, isolation/termination scheme, overall diameter |

“Overall” and “individual” describe **location and grouping**. “Foil” and “braid” describe **screen construction/material**. They are different dimensions of the specification, so a cable can have individual foil screens and an overall braid, for example, where the project requires it.

## 3. Foil versus braid: what changes?

### Foil screen

A foil screen commonly uses a metal/polymer laminated tape. It can provide near-continuous geometric coverage and is frequently used for screening individual pairs or an overall core group. A drain wire may be incorporated for connection, depending on the design.

**Ask for:** metal/polymer material, specified overlap or shielding performance, drain-wire arrangement (if used), operating/flexing requirements and the approved termination method. “100% foil coverage” is a geometric description, **not a promise of 100% electromagnetic interference rejection**.

### Braided screen

A braid screen is formed from interlaced metallic wires, commonly bare or tinned copper in suitable applications. It can provide a robust metallic screening structure, although effective performance depends on braid coverage and other design conditions.

**Ask for:** braid material, specified optical coverage or verified shielding-performance measure, flexibility, connection and environmental requirements. A quoted braid percentage alone does not specify the complete electromagnetic performance.

There is no universal rule that foil is always better or braid is always better. Relevant interference frequencies, grounding, repeated movement, cost and installation constraints determine suitability.

## 4. Screen versus armour versus medium-voltage metallic screen

These names are sometimes confused because all can involve metallic materials.

| Layer | Usual engineering purpose | Not automatically a substitute for |
| --- | --- | --- |
| Control/instrumentation screen | Electromagnetic-interference and signal-integrity design | An armour layer specified for mechanical protection |
| Steel wire/tape armour | Mechanical protection in the cable's installation environment | A designated signal screen with required performance |
| Medium-voltage metallic screen | Part of a designed MV insulation/screening system with electrical and fault-related functions | The screening design of low-voltage instrument pairs |

**Buyer rule:** do not replace a specified individual-pair screen with armour simply because both contain metal. Likewise, do not infer that a control cable is shielded just because the supplier describes an armoured version.

## 5. Core, pair and triad are not interchangeable

An enquiry reading **“1 × 2 × 1.5 mm²”** *may* refer to one pair of conductors, depending on the schedule's notation. A **2 × 1.5 mm²** cable may simply be a two-core cable; neither notation alone proves pair twisting, lay length, individual screens or application.

**Special case: a single pair.** If a cable contains only one pair, a screen around that pair may physically enclose the complete conductor group. Calling it an “individual pair screen” versus an “overall screen” may not distinguish two genuinely different designs. The approved construction drawing and required termination method are more reliable than the label alone.

If the circuit uses instrumentation signals, confirm:

1. **Core or pair arrangement**: 2C, 1P, multiple pairs or triads?
2. **Nominal conductor size and class**: 1.5 mm² is not the entire product designation.
3. **Rated voltage**: what is the exact required rating?
4. **Screen**: none, overall only, individual only, or individual plus overall?
5. **Screen material**: foil, braid or other specified construction?
6. **Outer protection**: PVC or LSZH, and whether additional armour is required?
7. **Circuit use**: analogue instrument, digital signal, control circuit or other defined function?
8. **Standard/project specification**: which document determines acceptance?

## 6. Which installations may need special screening review?

A shielding review becomes particularly important around variable-frequency drives, industrial motors, control cabinets, plant instrumentation, long signal runs and installations where low-level signal cables are routed near power circuits. However, **the presence of a motor or drive does not, by itself, determine one universal cable construction**.

System engineers should review electromagnetic compatibility, cable separation, earthing/bonding arrangements, termination and equipment manufacturer requirements. The cable supplier can help match an approved drawing or project specification to a manufacturable cable.

## 7. How to read an unfamiliar cable model code

Chinese model designations, national cable codes and project shorthand frequently encode some construction details. But **a familiar-looking suffix must not be the sole basis for approving a cable**.

For instance, a supplier may suggest a Chinese instrument/control cable designation in response to a two-core or one-pair enquiry. Treat that as a **proposed construction**, not as evidence that the customer's original model includes exactly the same screen, insulation, sheath, conductor class or fire performance.

Compare the **datasheet cross-section, bill of materials, standard and test evidence** with the buyer's requirements before approving a substitution.

## 8. When the buyer does not know whether screening is required

Do not force an unsupported yes/no assumption. A practical enquiry may be handled in two stages:

**Stage 1 — Minimum questions**

- What is the circuit or equipment application?
- Does the original schedule or datasheet explicitly describe the **presence, position and material** of a screen (for example, “individual pair foil screen” or “overall copper braid”)? Abbreviations such as **IS**, **OS**, and **IOS** are *not universal*. In particular, **IS** can be used in different contexts, including screen nomenclature and intrinsically safe systems. Do not infer a screen construction or safety approval from the letters alone; expand every abbreviation using the original project or manufacturer document.
- Can the project engineer share a cross-sectional drawing, existing datasheet or specification section?

**Stage 2 — Clarified offer**

Where appropriate, the supplier may describe **alternative constructions** for review, explicitly marking them **Option A — Unscreened** and **Option B — Screened**, with the technical differences, pricing scope and documents attached. **No alternative should be portrayed as approved or equivalent without written engineering acceptance.**

## 9. Procurement comparison: avoid quotation mismatches

| RFQ field | Example of a clear answer |
| --- | --- |
| Application | Fixed-installation instrumentation signal circuit |
| Configuration | 1 pair (2 conductors, 1.5 mm² each; confirm notation with engineer) |
| Conductor | Copper, class to confirm |
| Rated voltage | [project specification] |
| Insulation / sheath | [specified materials] |
| Screen grouping | Individual pair / overall / both / none |
| Screen construction | Aluminium/polyester foil + drain wire, or specified alternative |
| Armour | None / STA / SWA / other as expressly specified |
| Fire performance | Exact flame, smoke, halogen or fire-resistance test criteria |
| Standard and evidence | Applicable product specification, drawing, reports and approvals |
| Quantity and destination | [metres by item, country, delivery requirement] |

The answer “shielded” without a screen description may still leave meaningful design differences unresolved.

## 10. Message a buyer can send to the engineering team

> We are preparing the RFQ for the control/instrumentation cable. The current schedule gives the conductor size but does not fully confirm the screening construction. Please advise whether the cable should be unscreened, overall-screened, individually pair-screened or both. If screened, please confirm foil/braid material, drain wire, pair configuration, termination/bonding requirements, rated voltage, sheath/armour and applicable project standard. A datasheet or cross-sectional drawing would be sufficient for preliminary review.

## Frequently asked questions

**Is shielded the same as armoured?**  
No. Screens and armour primarily serve different engineering purposes, although a cable design can include both.

**Is a foil screen always 100% effective?**  
No. Geometric foil coverage is not the same as complete elimination of electromagnetic interference. Cable and system design, installation and termination matter.

**Is an individual pair screen always better than an overall screen?**  
Not universally. These configurations address different circuit and interference-control objectives. Engineering requirements determine which is necessary.

**Do all control cables require shielding?**  
No. Required screening depends on the application and engineering specification.

**What if the project only states a model code?**  
Ask for the standard or datasheet behind the code. Verify the conductor, core/pair arrangement, screen, sheath, armour and performance before declaring an equivalent.

---

## Related Huanyu Cable pages

- [Control & Instrumentation Cables](https://www.huanyucable.com/products/control-instrumentation-cables)
- [LSZH vs Flame-Retardant vs Fire-Resistant Cable](https://www.huanyucable.com/resources/lszh-vs-flame-retardant-vs-fire-resistant-cable)
- [Cable Procurement Strategy](https://www.huanyucable.com/resources/cable-procurement-strategy)
- [Send Your Cable Requirements](https://www.huanyucable.com/contact)


### Standards & Official References

- [BS EN 50288-7:2005 — Instrumentation and control cable sectional specification (BSI; check applicability to the specified cable)](https://knowledge.bsigroup.com/products/multi-element-metallic-cables-used-in-analogue-and-digital-communication-and-control-sectional-specification-for-instrumentation-and-control-cables)
- [BS EN 50288-1:2013 — Multi-element metallic cable generic specification (BSI; read with the applicable sectional specification)](https://knowledge.bsigroup.com/products/multi-element-metallic-cables-used-in-analogue-and-digital-communication-and-control-generic-specification)
- [IEC 60228:2023 — Conductors of insulated cables (conductor requirements where applicable)](https://webstore.iec.ch/en/publication/71891)

### Technical Construction Examples

- [Belden — Foil and braid shielding in cable construction (manufacturer technical explanation)](https://www.belden.com/blog/7-layers-of-copper-cable-construction-why-each-layer-matters)
- [Prysmian — Individual and overall screens in an instrumentation cable catalogue (manufacturer construction example)](https://asean.prysmian.com/sites/asean.prysmian.com/files/media/documents/241218%20-%20Prysmian%20I%26C%20Cables_S.pdf)
