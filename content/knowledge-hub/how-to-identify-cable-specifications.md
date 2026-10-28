# How to Identify a Cable Specification When You Only Have a Size, Marking or Photo

A supplier receives an enquiry: **“Please quote 10mm cable.”** Is it a building wire, low-voltage power cable, solar cable or flexible equipment cable? Does the buyer want copper or aluminium? Is it armoured, screened, flame-retardant or low-smoke halogen-free?

The answer is that **there is not enough information to identify the product**. That does not mean the quotation process must stop. A practical buyer can work from the information already available and ask the engineering team for a short list of missing details.

This guide is for project buyers, distributors and EPC procurement teams who do not always receive complete cable schedules. It focuses on **identifying what the requested cable actually is**; for quotation comparison, packing and delivery decisions, use a separate procurement guide.

## 1. First check what the dimension actually refers to

Three expressions may look similar but mean very different things:

- **10 mm²**: normally indicates the **nominal** conductor cross-sectional area in metric cable sizing, not the measured outside diameter or an exact physical copper area. Its application depends on the cable standard.
- **10 mm conductor diameter**: a physical linear measurement; it does not automatically translate into the same nominal product size or class.
- **10 mm cable outer diameter**: describes the approximate finished cable diameter; it cannot establish the conductor area.

Ask the person who created the original schedule whether **mm²**, **mm** or **AWG** was intended. Do not silently convert one into another.

IEC 60228:2023 specifies nominal metric conductor areas and associated requirements **for the cable types whose product standards invoke it**; it does not cover every type of electrical conductor. The nominal area alone does not specify a complete cable, allowable current or installation suitability. Do not make a universal ampacity claim from a size chart.

## 2. The same 10 mm² can belong to different cable families

| Incomplete request | Possible family | Key question before quoting |
| --- | --- | --- |
| 1 × 10 mm² PVC wire | Building/installation wire | What voltage designation, conductor class and standard? |
| 4 × 10 mm² XLPE cable | Multicore low-voltage power cable | Copper or aluminium? Armour? Sheath? Voltage? |
| 4 × 10 mm² SWA cable | Armoured power cable | Exact insulating materials, metallic armour and applicable standard? |
| 1 × 10 mm² solar DC cable | PV-system cable | Which solar-cable designation, voltage and standard? |
| 2 × 10 mm² flexible cable | Equipment or industrial flexible cable | Fixed or moving application? Required flexibility and sheath? |

These are **possibilities**, not automatic translations of the original enquiry.

## 3. Read core count and conductor size separately

In many metric cable schedules, **4 × 10 mm²** indicates four conductors, each with a nominal area of 10 mm². This is a common interpretation, **not a substitute for the project notation key**. It does not by itself identify:

- whether one conductor is intended for protective earth or neutral;
- conductor material and class;
- rated voltage;
- insulation, inner covering, outer sheath, screen or armour;
- colour identification or project standards.

Expressions such as **3 × 95 mm²**, **5 × 10 mm²**, and **1 × 2 × 1.5 mm²** should be checked against the drawing and supplier's datasheet. In particular, some instrumentation schedules distinguish **cores**, **pairs** and **triads**. A pair-based description must not be quoted as a simple multicore cable without review.

## 4. Eight parameters that identify most cable RFQs

| Parameter | Examples of what to confirm | Why it matters |
| --- | --- | --- |
| **1. Purpose** | Building wiring, power distribution, instrument signal, solar DC, equipment motion | Establishes the likely cable family |
| **2. Voltage** | 450/750 V, 0.6/1 kV, 6/10 kV, other project rating | Determines insulation system and product standards |
| **3. Conductor** | Copper/aluminium; nominal mm² or AWG; specified class | Affects construction and applicable requirements |
| **4. Configuration** | Single core, multicore, pair or triad | Determines electrical and physical arrangement |
| **5. Insulation and sheath** | PVC, XLPE, specified LSZH compound, elastomer | Affects construction and application; not itself a complete fire rating |
| **6. Metallic layers** | No screen; screen type; STA/SWA or alternative armour | Screening and mechanical protection have different functions |
| **7. Performance** | Fire propagation, circuit integrity, smoke, UV, oil, flexibility | Requires defined tests or operating conditions |
| **8. Standard and documentation** | Exact standard/edition; project specification; tests/certificates | Establishes what is being supplied and verified |

A buyer should also confirm **quantity, required continuous drum length, destination and target delivery period** before seeking a commercially comparable offer.

## 5. What a cable marking can tell you — and what it cannot

A sheath marking may contain a manufacturer name, product designation, voltage, conductor size, standard, batch identification or metre marking. However, **the permitted/required marking and the meaning of each field depend on the product standard and project specification**. A photograph may show only part of the marking, which can be insufficient or even misleading.

For example, an expression like:

`0.6/1 kV — 4 × 10 mm² — Cu/XLPE/PVC`

indicates a useful starting point: voltage class, four nominal conductor areas and a shorthand for materials. It still does not confirm conductor class, armour status, fire-performance testing, approved product drawing or all relevant documentation. Abbreviations must be checked against the manufacturer's datasheet.

A photograph can help establish likely construction, but it does not prove a conductor's material grade, electrical performance, certification or standard edition.

## 6. Don't confuse conductor class with flexible-cable suitability

Conductor construction and complete-cable mechanical performance are separate issues. A Class 5 flexible conductor does not, by itself, prove that the complete cable is suitable for repeated drag-chain movement or dynamic robotics.

Ask whether the installation is **fixed**, **occasionally moved**, or subject to **continuous movement**, then specify any required motion performance and bending conditions.

## 7. Don't translate national cable model codes by guesswork

Chinese, European, British, North American and Russian-language designations may describe similar intended uses while differing in technical requirements.

A Chinese **YJV** designation, an IEC-based construction description, a British specification and a North American wire type should **not be declared equivalent** merely because a nominal cross-sectional area and voltage appear similar. Even nominally similar constructions can differ in installation permissions and testing requirements.

A safe comparison needs a side-by-side check of conductor class, insulation materials, sheath, metallic layers, voltage, dimensions, relevant tests and acceptance conditions.

If the original model code is unclear, request the **original datasheet or standard clause** rather than forcing a translation into a familiar domestic model.

### Before converting a brief enquiry into a quotation

**Confirmed / proposed / unknown** should be displayed as three different statuses. A supplier can prepare a **budgetary or conditional offer** for a proposed construction, but the buyer must not mistake that offer for engineering-approved equivalence or a final specification. If the client has no drawing, begin with the application and voltage rather than inventing a cable designation.

## 8. Three common incomplete requests, rewritten

### Case A: “10 mm electrical cable”

**What we know:** only an approximate size expression.  
**Ask first:** Is it a building wire or a complete sheathed power cable? Is the “10” mm² or outer diameter? What is the voltage and installation environment?

### Case B: “4 × 95 armoured cable”

**What we know:** the buyer likely means a four-core armoured cable with a conductor size indicated as “95”, but the unit is missing and even the core-count interpretation needs confirmation.  
**Ask first:** Does “95” mean 95 mm² per core? Copper or aluminium? Voltage? XLPE/PVC or other compound? Which armour construction and standard? Underground, tray or another installation?

### Case C: “1 × 2 × 1.5 shielded cable”

**What we know:** the description may refer to a pair-based control or instrumentation construction.  
**Ask first:** Does “1 × 2” mean a single twisted pair in the original schedule, or simply two individual cores? With only one pair, “individual” versus “overall” screening can depend on how the manufacturer defines the assembled units. Ask for a drawing, screen construction, voltage, conductor class, application and project standard.

**Procurement tip:** when the engineering team has not answered a question, write **“to be confirmed”**, not an assumed value.

## 9. An RFQ checklist your engineering team can complete

- **Function:** What equipment or system will the cable connect?
- **Electrical:** What voltage and conductor size are required?
- **Construction:** How many cores, pairs or triads? Copper or aluminium? What insulation and outer sheath?
- **Protection:** Is screening, armour, water blocking, a protective conductor (PE) or a fire-performance requirement specified?
- **Standard:** What product standard, edition, drawings and tests apply?
- **Installation:** Fixed or moving? Indoors, outdoors, underground, exposed to sunlight, oil or moisture?
- **Commercial:** What lengths, quantities, packing and destination are required?

### A short message for your engineering team

> We received a cable quotation request but only have the size/model description. Please provide the existing datasheet or cable schedule, and confirm rated voltage, number of cores or pairs, conductor material and class, insulation/sheath, screen/armour requirements, installation environment, and the relevant product standard. Unknown values can be marked “to be confirmed.”

## 10. Clear sample RFQ format

| RFQ item | Example — illustrative only |
| --- | --- |
| Use | Fixed-installation low-voltage power circuit |
| Voltage | 0.6/1 kV |
| Cores and section | 4 × 10 mm² |
| Conductor | Copper, class to be confirmed |
| Insulation / sheath | XLPE / PVC |
| Screen | None specified; engineering to confirm |
| Armour | To be confirmed (an unarmoured option may be considered for engineering review) |
| Standard | IEC 60502-1, edition to be confirmed |
| Quantity | [metres] |
| Destination | [country and delivery location] |
| Documentation | Datasheet and project-defined test/certificate requirements |

The example illustrates clear communication, not product approval or a guaranteed technical recommendation.

## Frequently asked questions

**Does “10mm cable” mean 10 mm²?**  
Not necessarily. Ask whether the number refers to nominal conductor section, conductor diameter or overall diameter.

**Can I request an ampacity figure using only mm²?**  
Not reliably. Current-carrying capacity depends on the complete cable construction, installation method, conductor material, temperature limits, grouping, ambient conditions and applicable design rules. The supplier should identify the assumptions behind any ampacity figure.

**Does 4 × 10 mm² tell the supplier whether the cable is armoured?**  
No. Armour is a separate construction requirement.

**Is LSZH the same as fire-resistant?**  
No. Low-smoke/halogen-related material performance is distinct from maintaining circuit integrity under fire-test conditions.

**Can I send a photo if I do not have a datasheet?**  
Yes. Marking and construction photos can support initial identification, but final quotations should clearly identify which parameters are confirmed and which remain open.

---

## Related Huanyu Cable pages

- [Building Wire Size Guide](https://www.huanyucable.com/resources/building-wire-size-guide)
- [AWG to mm² Building Wire Guide](https://www.huanyucable.com/resources/awg-to-mm2-building-wire-guide)
- [Low-Voltage XLPE Cables](https://www.huanyucable.com/products/low-voltage-xlpe-power-cables)
- [Low-Voltage Armoured Power Cables](https://www.huanyucable.com/products/low-voltage-armoured-power-cables)
- [Control & Instrumentation Cables](https://www.huanyucable.com/products/control-instrumentation-cables)
- [Send Partial or Complete Requirements](https://www.huanyucable.com/contact)


### References

- [IEC 60228:2023 — Conductors of insulated cables](https://webstore.iec.ch/en/publication/71891)
- [IEC 60502-1:2021 — Power cables, Part 1](https://webstore.iec.ch/en/publication/64963)
- [IEC 60502-2:2014 + AMD1:2024, with July 2026 correction — Power cables, Part 2](https://webstore.iec.ch/en/publication/95394)
- [IEC 62930:2017 — Cables for photovoltaic systems](https://webstore.iec.ch/en/publication/28067)
