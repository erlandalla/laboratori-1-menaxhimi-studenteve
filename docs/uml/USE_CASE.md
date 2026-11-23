
# Diagrami UML – Rastet e Përdorimit

## Seminar–Laboratori 2

**Projekti:** Menaxhimi i Studentëve

**Lënda:** Inxhinieri Programesh

**Versioni:** 1.0

## 1. Qëllimi

Diagrami Use Case paraqet funksionalitetet
e sistemit nga këndvështrimi i përdoruesit.

Ai është ndërtuar mbi kërkesat e
dokumentuara në SRS.md.

## 2. Aktori

### Përdoruesi

Përdoruesi ndërvepron me aplikacionin
për menaxhimin e studentëve.

Në versionin aktual nuk ekzistojnë
role të ndara ose autentikim.

## 3. Rastet e përdorimit

### UC-01 – Regjistro studentin

Përdoruesi shkruan emrin e studentit.

Sistemi kontrollon vlefshmërinë
dhe dublikatat.

Nëse emri është i vlefshëm,
studenti regjistrohet.

### UC-02 – Shiko listën

Përdoruesi shikon studentët
e regjistruar në aplikacion.

### UC-03 – Kërko studentin

Përdoruesi shkruan tekstin e kërkimit.

Sistemi filtron listën sipas emrit.

### UC-04 – Modifiko studentin

Përdoruesi zgjedh një student
dhe ndryshon emrin e tij.

Sistemi kontrollon emrin e ri
përpara se ta ruajë.

### UC-05 – Fshi studentin

Përdoruesi zgjedh butonin Fshi.

Studenti hiqet nga lista
dhe nga të dhënat e ruajtura.

### UC-06 – Shiko numrin total

Sistemi shfaq numrin total
të studentëve të regjistruar.

### UC-07 – Valido emrin dhe dublikatat

Sistemi kontrollon:

- Gjatësinë e emrit
- Karakteret e lejuara
- Ekzistencën e emrit në listë

Ky rast përdorimi përfshihet
nga UC-01 dhe UC-04.

## 4. Marrëdhëniet UML

Association:
Lidh aktorin me rastet kryesore
të përdorimit.

Include:
UC-01 përfshin UC-07.

UC-04 përfshin UC-07.

## 5. Ruajtja e të dhënave

Pas regjistrimit, modifikimit
ose fshirjes, aplikacioni
përditëson localStorage.

Ky është një proces i brendshëm
i implementimit aktual.

## 6. Skedarët e diagramit

- diagrami-rasteve-te-perdorimit.drawio
- diagrami-rasteve-te-perdorimit.png

## 7. Përfundim

Diagrami dokumenton funksionalitetet
e versionit aktual të aplikacionit.

Ai shërben si bazë për modelimin
e proceseve dhe strukturës së sistemit
në diagramet e ardhshme UML.
