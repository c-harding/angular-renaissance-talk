---
title: Signals
inner-split: 50
---

<v-clicks at="+0">

- Modernes Angular basiert sich stark auf Signals
- React- / Vue-Welt: „ref“
- Die kleinste Einheit von Reaktivität

</v-clicks>

<v-click at="7">

- Lassen sich mit `computed` kombinieren

</v-click>
<v-click at="9">

- Readonly

</v-click>
<v-clicks at="10">

- Automatisch aktualisiert
- Memoisiert

</v-clicks>

::right::

<v-click>

````md magic-move
<!-- prettier-ignore-start -->
```ts
import { signal }
  from "@angular/core";

const greeting = signal("Servus");
```

```ts
import { signal }
  from "@angular/core";

const greeting = signal("Servus");
greeting(); //=> Servus
```

```ts {4-5}
import { signal }
  from "@angular/core";

const greeting: WritableSignal<string>
               = signal("Servus");
greeting(); //=> Servus
```

```ts {4-9}
import { signal }
  from "@angular/core";

const greeting = signal("Servus");
greeting(); //=> Servus

greeting.set("Moin");
greeting(); //=> Moin
```

```ts {none}
import { signal }
  from "@angular/core";

const greeting = signal("Servus");
```

```ts {1-2,6-}
import { signal, computed }
  from "@angular/core";

const greeting = signal("Servus");

const greetingLength = computed(() =>
  greeting().length
);
greetingLength(); //=> 6
```
```ts {4,7}
import { signal, computed }
  from "@angular/core";

const greeting: WritableSignal<string>
               = signal("Servus");

const greetingLength: Signal<number>
                     = computed(() =>
  greeting().length
);
greetingLength(); //=> 6
```

```ts {6-|6-}
import { signal, computed }
  from "@angular/core";

const greeting = signal("Servus");

const greetingLength = computed(() =>
  greeting().length
);
greetingLength(); //=> 5

greeting.set("Hi");
greetingLength(); //=> 2
```
<!-- prettier-ignore-end -->
````

</v-click>

<!--
- Modernes Angular basiert sich stark auf Signals
- [click] Für die React- und Vue-Entwickler unter euch: „ref“
- [click] Sie repräsentieren die kleinste Einheit von Reactivität

Lasst uns ein Beispiel anschauen.

- [click] Hier hat man einen Signal, mit dem initialen Wert „Servus“.
- [click] Man kann den Wert auslesen, in dem man den Signal wie eine Funktion aufruft.
- [click] Und wie wird es getyped? Das ist ein Writable-Signal, weil man den Wert auch bearbeiten kann.
- [click] Dafür gibt es eine Set-Methode. Im Gegensatz zu React muss man nicht warten: den neuen Wert ist sofort da.
- [click] Was kann man dann mit den Werten machen? Man kann sie kombinieren, und zwar mit `computed()`.
- [click] Hier ein Beispiel: greetingLength() basiert sich auf den Wert von `greeting()`.
- [click] Im Type sehen wir hier einen Unterschied: dieser Signal ist nicht mehr *writable*.
- [click] Die Abhängigkeiten werden automatisch erfasst, in dem der Wert beim Berechnen gelesen wird. Wenn wir die Abhängigkeit aktualisieren, wird der Computed-Wert auch neu berechnet.
- [click] Es wird auch memoisiert: die Länge wird nicht neu berechnet, wenn der String gleich bleibt.
- Bei einer einfache Länge bringt das nicht so viel, aber wenn man z.B. eine Liste sortieren und filtern müsst, ist das sehr hilfreich für die Performance.
-->
