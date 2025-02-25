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

<a href="https://github.com/c-harding/angular-renaissance-talk" class="underline opacity-75 text-sm" target="_blank">Folien-Quelle</a>

---
title: Was ist Angular?
layout: two-cols
---

<v-clicks at="+0" depth="2">

- Ein TypeScript-basiertes Web-**Framework**
- Batteries-Included / Bereit für Enterprise™
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
Here is another comment.
-->

---
title: Reaktivität
layout: chapter
---

---
src: ./pages/signals-demo.md
---

<!--
- Modernes Angular basiert sich stark auf Signals
- Für die React- und Vue-Entwickler unter euch: „`ref`“
- Sie repräsentieren die Einheit von Reactivität
-->

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
  value="https://c-harding.github.io/angular-renaissance-talk"
  :color="{light: '#00000000', dark: '#FFFFFFFF'}"
  caption="Folien"
/>
