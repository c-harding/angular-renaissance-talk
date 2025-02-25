---
title: Change Detection
layout: chapter
---

<div v-click text="xl">

Hauptaufgabe eines Frontend-Frameworks ist zu entscheiden:

### Was muss wann neu gerendert werden? {.text-center}

<!--
Nachdem wir den Zustand gespeichert haben, müssen wir die UI entsprechend aktualisieren.

[click] Das ist ja die Hauptaufgabe jedes UI-Frameworks: Was muss wann neu gerendert werden?
 -->

</div>

---
title: "Blick in die Vergangenheit: Change Detection"
class: font-serif
---

Vorher wurde alles jedes Mal neu gerendert, wenn _etwas passiert ist_.

<v-click>

### Beispiele

</v-click>
<v-clicks>

- Input wurde gesetzt
- Event-Handler wurde ausgelöst
- `setTimeout`-Callback
- Promise
- HTTP-Request

</v-clicks>

<v-click>

Technische Umsetzung: `zone.js` fängt alle `Promise`s, `setTimeout`s usw. ab.

</v-click>

---
title: Modernes Change Detection
articleClass: justify-between
---

Jetzt haben wir ein präziseres Werkzeug: {.!mb-0}

<!-- prettier-ignore-start -->
```js
ChangeDetection.OnPush
```
<!-- prettier-ignore-end -->

<v-click>

#### Auswirkungen {.mt-4}

Nur die betroffenen Komponenten werden neu gerendert:

</v-click>
<v-clicks class="list-plus">

- Genau die Komponente(n) mit geänderten Inputs
- Beim Event: Ziel-Komponente und ihre Vorfahren

</v-clicks>
<v-clicks class="list-minus">

- Aber: nur Objekt-Referenzen werden verglichen
  - Tiefere Änderungen werden nicht berücksichtigt

</v-clicks>

---
title: Modernes Change Detection mit Signals
layout: two-cols
rightStyle:
  --slidev-code-font-size: 16px
---

<v-clicks at="0">

- Besonders für Signals ist `OnPush` gut geeignet.
- Sobald ein im Template referenzierter Signal aktualisiert wird, wird neu gerendert.
- Nicht nur Inputs, sondern auch externe Signals

</v-clicks>

::right::

````md magic-move
<!-- prettier-ignore-start -->

```angular-html {|}
<template>
  <h1>{{ title() }}</h1>
</template>
```

```angular-html
<template>
  <h1>{{ title() }}</h1>

  <p>
    Your ID: {{ userService.userId() }}
  </p>
</template>
```

```angular-html
<template>
  <h1>{{ title() }}</h1>

  <demo-id-display
    [id]="userService.userId()"
  />
</template>
```
<!-- prettier-ignore-end -->
````

---
title: Eine Zukunft ohne zone.js
rightStyle:
  --slidev-code-font-size: 16px
---

::title::

Eine Zukunft ohne `zone.js`

::default::

`zone.js` ist ja relativ groß, kompliziert und verwirrend,  
und erschwert schon das Mocken von Angular.

<v-click at="1">

Deswegen wird es abgeschafft: _zoneless_ ist derzeit experimental.

</v-click>

<v-switch at="1">
<template #2-5>
<div font="serif">

> Vorher wurde alles jedes Mal neu gerendert, wenn _etwas passiert ist_.
>
> <div v-click="3" font="sans">
>
> - Signal wird aktualisiert
>
> </div>
>
> - Input wurde gesetzt
>
> <div v-motion :initial='{"text-decoration": "unset"}' :click-4='{"text-decoration": "line-through"}' class="!*:my-0">
>
> - Event-Handler wurde ausgelöst
> - `setTimeout`-Callback
> - Promise
> - HTTP-Request
>
> Technische Umsetzung: `zone.js` fängt alle `Promise`s, `setTimeout`s usw. ab.
>
> </div>

</div>
</template>
<template #5-7>

> Jetzt wird eine Komponente neu gerendert, wenn _etwas passiert ist_.
>
> - Signal wird aktualisiert
> - Input wurde gesetzt
>
> <v-click at="6">
>
> - `cdRef.markForCheck()`
>
> </v-click>

</template>
</v-switch>

---
title: Signal-Komponenten
layout: two-cols
rightStyle:
  --slidev-code-font-size: 16px
---

<v-clicks at="0">

- Statt `OnPush` werden Sigal-Komponenten kommen
- Hier wird nicht neu gerendert, bis auf Signale
- Nur genau die geänderte Stelle wird dann aktualisiert

</v-clicks>

<v-click at=5>

- Im Moment nur noch ein [RFC](https://github.com/angular/angular/discussions/49682).

</v-click>

::right::

````md magic-move {at: 1}
<!-- prettier-ignore-start -->

```angular-html {||2|4-6|5}
<template>
  <h1>{{ title() }}</h1>

  <demo-id-display
    [id]="userService.userId()"
  />
</template>
```

<!-- prettier-ignore-end -->
````

<!--
[click] 123

[click] 123
-->
