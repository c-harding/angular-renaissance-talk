---
title: "Blick in die Vergangenheit: vor Signals"
inner-split: 50
page-class: font-serif
style:
  --slidev-code-font-size: 16px
---

<v-clicks at="0" depth="2">

- Vorher waren Inputs nur annotierte Felder
- `required` war nicht typesafe (`!`)
- Abgeleiteter State wurde ständig neu berechnet
- Manuelle Memoisierung (mit einem Input-Setter) war kompliziert
  - besonders mit mehreren Inputs

</v-clicks>

::right::

````md magic-move
<!-- prettier-ignore-start -->

```ts
class MyComponent {
  @Input() name?: string;
}
```

```ts
class MyComponent {
  @Input({ required: true }) name!: string;
}
```

```ts{4-6}
class MyComponent {
  @Input() name?: string;

  get kebabName() {
    return toKebabCase(this.name);
  }
}
```

```ts
class MyComponent {
  #name?: string;
  kebabName?: string;

  @Input() set name(value: string) {
    this.#name = value;
    this.kebabName = toKebabCase(value);
  }
  get name(): string | undefined {
    return this.#name;
  }
}
```
````
