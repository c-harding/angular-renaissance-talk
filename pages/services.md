---
title: Services
layout: chapter
---

Angular ist bereit für Enterprise

---
title: Services
inner-split: 50
---

<v-clicks>

- Klassen, die Funktionalität enthalten.
- Lassen sich injecten:
  - in Komponenten
  - in anderen Services
- Können _stateful_ sein
- Testing: einfach zu mocken

</v-clicks>

::right::

````md magic-move {at: 1}
```angular-ts {|2,8-13|1-3,13|5-6}
@Injectable({ providedIn: 'root' })
class UserService {
  backendService = inject(BackendService);

  currentUserId =
    signal<string | undefined>();

  async fetchUserInfo() {
    const id = this.currentUserId();
    if (!id) return undefined;
    this.backendService.fetchUser(id);
  }
}
```
````

---
title: Provider-Scopes
inner-split: 50
right:
  image: "/images/tabs.png"
  class: bg-contain
---

```angular-ts
@Injectable({ providedIn: 'root' })
```

bedeutet, dass der Service global ist.

Manchmal ist das aber nicht gewollt:

- Eine Instanz des Services pro virtuellen Tab
- Eine separate Instanz eines normalerweise globalen Services in einem Modal

---
title: Provider-Scopes
inner-split: 50
---

<v-clicks at="0">

- Komponenten können Services für sich und ihre Unterkomponenten providen.
- Services ohne `providedIn: "root"` müssen explizit provided werden.
- Naming-Konvention:
  - `Service` werden global provided,
  - `Provider` nicht.

</v-clicks>

::right::

````md magic-move {at: 1}
```ts
@Component({
  template: `···`,
  providers: [MyService],
})
class ModalComponent {}

@Injectable({ providedIn: "root" })
class MyService {}
```

```ts
@Component({
  template: `···`,
  providers: [MyService],
})
class ModalComponent {}

@Injectable()
class MyService {}
```

```ts
@Component({
  template: `···`,
  providers: [MyProvider],
})
class ModalComponent {}

@Injectable()
class MyProvider {}
```
````

---
title: Injection-Tokens
inner-split: 50
---

<v-clicks at="0" depth="2">

- Nicht nur Injectables lassen sich injecten
- `@Injectable()` ermöglicht eine Abkürzung<span v-click.hide=2>:</span>
- Man kann auch andere Klassen injecten
  - Bspw. zum Testen
- Und auch andere Werte

</v-clicks>
<v-click at="10">

- Saubere Trennung zwischen Schnittstelle und Implementierung

</v-click>

::right::

````md magic-move { at: 1 }
<!-- prettier-ignore-start -->
```ts {|2-4}
@Component({
  providers: [
    ClientApi,
  ],
})
```

```ts {3-4}
@Component({
  providers: [
    { provide: ClientApi,
      useValue: new ClientApi('demo-app') },
  ],
})
```

```ts {5-6}
@Component({
  providers: [
    { provide: ClientApi,
      useValue: new ClientApi('demo-app') },
    { provide: Location,
      useValue: location },
  ],
})
```

```ts {5-6}
@Component({
  providers: [
    { provide: ClientApi,
      useValue: new ClientApi('demo-app') },
    { provide: colorToken,
      useValue: 'light' },
  ],
})
```

```ts
type Color = "light" | "dark";

export const colorToken =
  new InjectionToken<Color>("colorToken");
```

```ts
export const colorToken =
  new InjectionToken<Color>("colorToken");

const colorTheme = inject(colorToken);
```

```ts
export const colorToken =
  new InjectionToken<Color>("colorToken");

const colorTheme: Color
                 = inject(colorToken);
```

```ts
export const colorToken =
  new InjectionToken<Color>("colorToken");

const colorTheme: Color | null
                 = inject(colorToken, {
                     optional: true
                   });
```

```ts
const location: Location
                = inject(Location);
```
<!-- prettier-ignore-end -->
````

<!--
[click] Man kann Injectable-Klassen direkt in der Providers-Array auflisten.

[click] Man kann auch andere Klassen providen. Dafür muss man aber explizit die Klasse initialisieren.

[click] Das hilft sehr bei der Testbarkeit.
Wenn man Browser-APIs wie `Location` injecten lässt, kann man sie sehr einfach in den Tests mocken.

[click] Nicht nur Klassen, sondern beliebige Werte können injected werden.

Wie geht das technisch? Was ist
-->

---
title: "Blick in die Vergangenheit: Dependency Injection"
class: font-serif
inner-split: 50
---

<v-clicks at="0">

- `inject` als Funktion ist relativ neu
- Vorher hat Injection nur im Constructor stattgefunden
- Weniger typesafe
- Die Syntax mit Parameter-Decorators war nur experimental

</v-clicks>

::right::

````md magic-move {at: 1}
<!-- prettier-ignore-start -->
```ts
@Component({})
class MyComponent {
  private myService = inject(MyService);
}
```

```ts {3-5}
@Component({})
class MyComponent {
  constructor(
    private myService: MyService
  ) {}
}
```

```ts {4-5|4}
@Component({})
class MyComponent {
  constructor(
    @Inject(Location)
    private location: Location
  ) {}
}
```
<!-- prettier-ignore-end -->
````

---
title: "Use-Case: Hooks"
inner-split: 50
---

<v-clicks at="0">

- `inject` in anderen Funktionen wrappen
- Ein Muster, das Hooks aus der Vue-/React-Welt ähnelt
- Komponenten-spezifische Logik und Lifecycle

</v-clicks>

::right::

<v-click at=1>

````md magic-move {at: 2}
```ts
function useI18n() {
  const i18nService = inject(I18nService);
  return i18n.use();
}
```

```ts
function useI18n() {
  const i18nService = inject(I18nService);
  return i18n.use();
}

@Component({})
class MyComponent {
  i18n = useI18n();
}
```
````

</v-click>
