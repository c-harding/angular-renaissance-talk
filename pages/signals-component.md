---
title: Signals in einer Komponente
layout: two-cols
right-style:
  --slidev-code-font-size: 16px
---

- Auch `input` ist ein Signal

<v-clicks at="1">

- Readonly
- Optional ⇒ kann `undefined` sein
- Es sei denn, man einen Fallback angibt
- Oder: `input.required`

</v-clicks>

<v-clicks at="5">

- Klasse ⇒ `this`

</v-clicks>

::right::

````md magic-move
<!-- prettier-ignore-start -->
```angular-ts
@Component({ ··· })
export class GreeterComponent {
  name = input<string>();
}
```


```angular-ts {3-4|3}
@Component({ ··· })
export class GreeterComponent {
  name: Signal<string | undefined> 
       = input<string>();
}
```


```angular-ts {3-4}
@Component({ ··· })
export class GreeterComponent {
  name: Signal<string> 
       = input<string>("stranger");
}
```


```angular-ts {3-4}
@Component({ ··· })
export class GreeterComponent {
  name: Signal<string> 
       = input.required<string>();
}
```

```angular-ts {5-7|all}
@Component({ ··· })
export class GreeterComponent {
  name = input<string>();
  
  nameLength = computed(() =>
    this.name()?.length
  );
}
```

```angular-ts {2,6|2,6|2,6}
@Component({ 
  selector: "demo-greeter",
  template: ···,
 })
export class GreeterComponent {
  name = input<string>();
}
```
<!-- prettier-ignore-end -->
````

<v-click at="-2">

<hr />

<v-switch>
<template #0>

Template einer anderen Komponente:

</template>
<template #1-3>

Definition einer anderen Komponente:

</template>
</v-switch>

<v-click at="-2">

````md magic-move {at: '+0'}
<!-- prettier-ignore-start -->
```html
<demo-greeter name="Charlie" />
```

```html
<demo-greeter name="Charlie" />
```

```angular-ts
@Component({
  imports: [GreeterComponent],
  template: `
    <demo-greeter name="Charlie" />
  `
})
```

```angular-ts {4}
@Component({
  imports: [GreeterComponent],
  template: `
    <demo-greeter [name]="user().name" />
  `
})
```
<!-- prettier-ignore-end -->
````

</v-click>
</v-click>
