---
# You can also start simply with 'default'
theme: qaware
color: blue
# some information about your slides (markdown enabled)
title: Angular Renaissance
author: Charlie Harding · QAware GmbH
authorUrl: qaware.de
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: # enable MDC Syntax: https://sli.dev/features/mdc

mdc: true
---

Ein Blick in die moderne Welt von Angular

::footer::

Charlie Harding
<SmartLink to="charlie.harding@qaware.de"/>

::footerRight::

<a href="https://github.com/c-harding/angular-renaissance-talk/tree/codineers" class="underline opacity-75 text-sm" target="_blank">Folien-Quelle</a>

---
title: Wer bin ich?
layout: two-cols
rightClass: flex
---

**Charlie Harding**  
Senior Software Engineer  
bei QAware GmbH, München

<v-click>

Frontend-begeistert

</v-click>
<v-click>

Angular-Entwickler

</v-click>

::right::

<img src="./img/cha.jpeg"  class="rounded-full w-70 mx-auto" />

---
title: Was ist Angular?
layout: two-cols
---

<v-clicks at="+0" depth="2">

- Ein TypeScript-basiertes Web-**Framework**
- Batteries-Included / Bereit für Enterprise™
  - Router
  - HTTP-Client
  - Services
  - Dependency-Injection

</v-clicks>

::right::

<v-click>

```angular-ts {all|2|3-5|7-9|all}
@Component({
  selector: "demo-greeter",
  template: `
    <b>Hello {{ name() }}!</b>
  `,
})
export class GreeterComponent {
  name = input<string>();
}
```

</v-click>

<!--
[click:5] Wie sieht das Ganze jetzt aus?

[click] Hier eine Beispiels-Komponente, die einen Namen anzeigt.

[click] Sie besteht aus
- einen Selector,
- [click] ein HTML-Template,
- [click] und eine TypeScript-Klasse.
-->

---
title: Reaktivität
layout: chapter
---

<!--
Reaktivität bedeutet, dass Änderungen im Datenmodell automatisch die Benutzeroberfläche aktualisieren. Zuerst schauen wir uns an, wie wir den Datenmodell speichern.
-->

---
src: ./pages/signals-demo.md
---

---
src: ./pages/signals-component.md
---

---
src: ./pages/history-inputs.md
---

---
src: ./pages/change-detection.md
---

---
src: ./pages/services.md
---

---
layout: chapter
title: Zusammenfassung
---

---
title: Zusammenfassung
---

<v-clicks at="0">

- Angular hat jetzt effizientere Reactivität

- Angular hat jetzt effizientere Change-Detection

- Angular hat Dependency-Injection für bessere Skalierbarkeit und Separation of Concerns

</v-clicks>

---
layout: chapter
title: Q & A
---

---
layout: end
---

Charlie Harding

<EndLink to="charlie.harding@qaware.de" />

::right::

<div max-w-max>

<EndLink to="linkedin.com/company/qaware-gmbh"><bxl-linkedin /></EndLink>
<EndLink to="github.com/qaware"><bxl-github /></EndLink>

<hr my-2 />

<EndLink to="linkedin.com/in/charlie-harding"><bxl-linkedin /></EndLink>
<EndLink to="github.com/c-harding"><bxl-github /></EndLink>

</div>

::middle::

<QrCode
  value="https://c-harding.github.io/angular-renaissance-talk/codineers"
  :color="{light: '#00000000', dark: '#FFFFFFFF'}"
  caption="Folien"
/>
