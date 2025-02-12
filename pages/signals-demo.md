---
title: Signals
layout: two-cols
right-style:
  --slidev-code-font-size: 16px
---

<v-clicks at="+0">

- Modernes Angular basiert sich stark auf Signals
- Für die React- und Vue-Entwickler unter euch: „`ref`“
- Die kleinste Einheit von Reactivität

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

const greeting = signal("Hello");
```

```ts
import { signal }
  from "@angular/core";

const greeting = signal("Hello");
greeting(); //=> Hello
```

```ts {3-4}
import { signal }
  from "@angular/core";

const greeting: WritableSignal<string>
               = signal("Hello");
greeting(); //=> Hello
```

```ts {3-8}
import { signal }
  from "@angular/core";

const greeting = signal("Hello");
greeting(); //=> Hello

greeting.set("Hi");
greeting(); //=> Hi
```

```ts {none}
import { signal }
  from "@angular/core";

const greeting = signal("Hello");
```

```ts {1-2,6-}
import { signal, computed }
  from "@angular/core";

const greeting = signal("Hello");

const greetingLength = computed(() =>
  greeting().length
);
greetingLength(); //=> 5
```
```ts {4,7}
import { signal, computed }
  from "@angular/core";

const greeting: WritableSignal<string>
               = signal("Hello");

const greetingLength: Signal<number>
                     = computed(() =>
  greeting().length
);
greetingLength(); //=> 5
```

```ts {6-|6-}
import { signal, computed }
  from "@angular/core";

const greeting = signal("Hello");

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
