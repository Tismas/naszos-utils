## Constructors

### new Vector2()

```ts
new Vector2(x, y): Vector2
```

#### Parameters

• **x**: `number`

• **y**: `number`

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[vector/Vector2.ts:7](https://github.com/Tismas/naszos-utils/blob/5086318d62b92a321f809958417cda9a8c766a3f/src/vector/Vector2.ts#L7)

## Properties

### x

```ts
x: number;
```

#### Defined in

[vector/Vector2.ts:4](https://github.com/Tismas/naszos-utils/blob/5086318d62b92a321f809958417cda9a8c766a3f/src/vector/Vector2.ts#L4)

***

### y

```ts
y: number;
```

#### Defined in

[vector/Vector2.ts:5](https://github.com/Tismas/naszos-utils/blob/5086318d62b92a321f809958417cda9a8c766a3f/src/vector/Vector2.ts#L5)

## Accessors

### angle

#### Get Signature

```ts
get angle(): number
```

##### Returns

`number`

#### Set Signature

```ts
set angle(angle): void
```

##### Parameters

• **angle**: `number`

##### Returns

`void`

#### Defined in

[vector/Vector2.ts:22](https://github.com/Tismas/naszos-utils/blob/5086318d62b92a321f809958417cda9a8c766a3f/src/vector/Vector2.ts#L22)

***

### length

#### Get Signature

```ts
get length(): number
```

##### Returns

`number`

#### Set Signature

```ts
set length(length): void
```

##### Parameters

• **length**: `number`

##### Returns

`void`

#### Defined in

[vector/Vector2.ts:12](https://github.com/Tismas/naszos-utils/blob/5086318d62b92a321f809958417cda9a8c766a3f/src/vector/Vector2.ts#L12)

## Methods

### abs()

```ts
abs(): Vector2
```

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[vector/Vector2.ts:83](https://github.com/Tismas/naszos-utils/blob/5086318d62b92a321f809958417cda9a8c766a3f/src/vector/Vector2.ts#L83)

***

### add()

```ts
add(v): Vector2
```

#### Parameters

• **v**: [`Vector2`](Vector2.md)

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[vector/Vector2.ts:51](https://github.com/Tismas/naszos-utils/blob/5086318d62b92a321f809958417cda9a8c766a3f/src/vector/Vector2.ts#L51)

***

### angleTo()

```ts
angleTo(v): number
```

#### Parameters

• **v**: [`Vector2`](Vector2.md)

#### Returns

`number`

#### Defined in

[vector/Vector2.ts:79](https://github.com/Tismas/naszos-utils/blob/5086318d62b92a321f809958417cda9a8c766a3f/src/vector/Vector2.ts#L79)

***

### clone()

```ts
clone(): Vector2
```

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[vector/Vector2.ts:67](https://github.com/Tismas/naszos-utils/blob/5086318d62b92a321f809958417cda9a8c766a3f/src/vector/Vector2.ts#L67)

***

### distanceTo()

```ts
distanceTo(v): number
```

#### Parameters

• **v**: [`Vector2`](Vector2.md)

#### Returns

`number`

#### Defined in

[vector/Vector2.ts:75](https://github.com/Tismas/naszos-utils/blob/5086318d62b92a321f809958417cda9a8c766a3f/src/vector/Vector2.ts#L75)

***

### divide()

```ts
divide(value): Vector2
```

#### Parameters

• **value**: `number`

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[vector/Vector2.ts:63](https://github.com/Tismas/naszos-utils/blob/5086318d62b92a321f809958417cda9a8c766a3f/src/vector/Vector2.ts#L63)

***

### multiply()

```ts
multiply(value): Vector2
```

#### Parameters

• **value**: `number`

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[vector/Vector2.ts:59](https://github.com/Tismas/naszos-utils/blob/5086318d62b92a321f809958417cda9a8c766a3f/src/vector/Vector2.ts#L59)

***

### normalized()

```ts
normalized(): Vector2
```

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[vector/Vector2.ts:71](https://github.com/Tismas/naszos-utils/blob/5086318d62b92a321f809958417cda9a8c766a3f/src/vector/Vector2.ts#L71)

***

### subtract()

```ts
subtract(v): Vector2
```

#### Parameters

• **v**: [`Vector2`](Vector2.md)

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[vector/Vector2.ts:55](https://github.com/Tismas/naszos-utils/blob/5086318d62b92a321f809958417cda9a8c766a3f/src/vector/Vector2.ts#L55)

***

### withAngle()

```ts
withAngle(angle): Vector2
```

#### Parameters

• **angle**: `number`

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[vector/Vector2.ts:38](https://github.com/Tismas/naszos-utils/blob/5086318d62b92a321f809958417cda9a8c766a3f/src/vector/Vector2.ts#L38)

***

### withLength()

```ts
withLength(length): Vector2
```

#### Parameters

• **length**: `number`

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[vector/Vector2.ts:32](https://github.com/Tismas/naszos-utils/blob/5086318d62b92a321f809958417cda9a8c766a3f/src/vector/Vector2.ts#L32)

***

### withX()

```ts
withX(x): Vector2
```

#### Parameters

• **x**: `number`

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[vector/Vector2.ts:44](https://github.com/Tismas/naszos-utils/blob/5086318d62b92a321f809958417cda9a8c766a3f/src/vector/Vector2.ts#L44)

***

### withY()

```ts
withY(y): Vector2
```

#### Parameters

• **y**: `number`

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[vector/Vector2.ts:47](https://github.com/Tismas/naszos-utils/blob/5086318d62b92a321f809958417cda9a8c766a3f/src/vector/Vector2.ts#L47)

***

### down()

```ts
static down(): Vector2
```

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[vector/Vector2.ts:105](https://github.com/Tismas/naszos-utils/blob/5086318d62b92a321f809958417cda9a8c766a3f/src/vector/Vector2.ts#L105)

***

### left()

```ts
static left(): Vector2
```

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[vector/Vector2.ts:108](https://github.com/Tismas/naszos-utils/blob/5086318d62b92a321f809958417cda9a8c766a3f/src/vector/Vector2.ts#L108)

***

### one()

```ts
static one(): Vector2
```

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[vector/Vector2.ts:98](https://github.com/Tismas/naszos-utils/blob/5086318d62b92a321f809958417cda9a8c766a3f/src/vector/Vector2.ts#L98)

***

### random()

```ts
static random(__namedParameters, __namedParameters): Vector2
```

#### Parameters

• **\_\_namedParameters**: [`number`, `number`] = `...`

• **\_\_namedParameters**: [`number`, `number`] = `...`

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[vector/Vector2.ts:87](https://github.com/Tismas/naszos-utils/blob/5086318d62b92a321f809958417cda9a8c766a3f/src/vector/Vector2.ts#L87)

***

### right()

```ts
static right(): Vector2
```

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[vector/Vector2.ts:111](https://github.com/Tismas/naszos-utils/blob/5086318d62b92a321f809958417cda9a8c766a3f/src/vector/Vector2.ts#L111)

***

### up()

```ts
static up(): Vector2
```

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[vector/Vector2.ts:102](https://github.com/Tismas/naszos-utils/blob/5086318d62b92a321f809958417cda9a8c766a3f/src/vector/Vector2.ts#L102)

***

### zero()

```ts
static zero(): Vector2
```

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[vector/Vector2.ts:94](https://github.com/Tismas/naszos-utils/blob/5086318d62b92a321f809958417cda9a8c766a3f/src/vector/Vector2.ts#L94)
