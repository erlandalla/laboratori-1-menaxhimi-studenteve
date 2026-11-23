
# Diagrami UML i Aktiviteteve

## Seminar–Laboratori 2

**Projekti:** Menaxhimi i Studentëve

**Procesi:** Regjistrimi i studentit

**Versioni:** 1.0

## 1. Qëllimi

Diagrami Activity paraqet rrjedhën e
veprimeve gjatë regjistrimit të një
studenti në aplikacion.

## 2. Fillimi i procesit

Procesi fillon kur përdoruesi shkruan
emrin e studentit dhe klikon
butonin "Shto studentin".

## 3. Normalizimi

Sistemi heq hapësirat e panevojshme
nga emri i futur.

## 4. Validimi

Sistemi kontrollon:

- Emri nuk është bosh.
- Emri ka 3 deri në 60 karaktere.
- Emri përmban karaktere të lejuara.

Nëse emri është i pavlefshëm,
shfaqet një mesazh gabimi.

Përdoruesi mund të korrigjojë emrin
dhe të provojë përsëri.

## 5. Kontrolli i dublikatave

Sistemi kontrollon nëse emri
ekziston tashmë në listë.

Nëse ekziston, regjistrimi refuzohet.

Nëse nuk ekziston, procesi vazhdon.

## 6. Regjistrimi

Emri i studentit shtohet në
strukturën studentet.

## 7. Ruajtja e të dhënave

Sistemi ruan listën e përditësuar
në localStorage.

## 8. Përditësimi i ndërfaqes

Sistemi:

- Përditëson listën e studentëve.
- Përditëson numrin total.
- Pastron formularin.
- Vendos fokusin te fusha e emrit.

## 9. Përfundimi

Procesi përfundon me regjistrimin
e suksesshëm të studentit.

## 10. Kërkesat e lidhura

RF-01 – Regjistrimi

RF-02 – Validimi

RF-03 – Parandalimi i dublikatave

RF-04 – Shfaqja e listës

RF-08 – Numërimi

RF-09 – Ruajtja e të dhënave

RF-10 – Mesazhet informuese

## 11. Skedarët

- diagrami-aktiviteteve-regjistrimi.drawio
- diagrami-aktiviteteve-regjistrimi.png

## 12. Përfundime

Diagrami dokumenton procesin e
regjistrimit dhe rrjedhat alternative
kur të dhënat nuk janë të vlefshme.
