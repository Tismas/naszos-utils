<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [@naszos/utils](#naszosutils)
  - [Classes](#classes)
  - [Functions](#functions)
- [Classes](#classes-1)
  - [Class: Vector2](#class-vector2)
    - [Constructors](#constructors)
    - [Properties](#properties)
    - [Accessors](#accessors)
    - [Methods](#methods)
- [Functions](#functions-1)
  - [Function: clamp()](#function-clamp)
    - [Parameters](#parameters)
    - [Returns](#returns)
    - [Defined in](#defined-in)
  - [Function: clampLeft()](#function-clampleft)
    - [Parameters](#parameters-1)
    - [Returns](#returns-1)
    - [Defined in](#defined-in-1)
  - [Function: clampRight()](#function-clampright)
    - [Parameters](#parameters-2)
    - [Returns](#returns-2)
    - [Defined in](#defined-in-2)
  - [Function: lerp()](#function-lerp)
    - [Parameters](#parameters-3)
    - [Returns](#returns-3)
    - [Defined in](#defined-in-3)
  - [Function: randomFloat()](#function-randomfloat)
    - [Parameters](#parameters-4)
    - [Returns](#returns-4)
    - [Defined in](#defined-in-4)
  - [Function: randomInt()](#function-randomint)
    - [Parameters](#parameters-5)
    - [Returns](#returns-5)
    - [Defined in](#defined-in-5)
  - [Function: range()](#function-range)
    - [Parameters](#parameters-6)
    - [Returns](#returns-6)
    - [Defined in](#defined-in-6)
  - [Classes](#classes-2)
  - [Functions](#functions-2)
- [Classes](#classes-3)
    - [Constructors](#constructors-1)
    - [Properties](#properties-1)
    - [Accessors](#accessors-1)
    - [Methods](#methods-1)
- [Functions](#functions-3)
    - [Parameters](#parameters-7)
    - [Returns](#returns-7)
    - [Defined in](#defined-in-7)
    - [Parameters](#parameters-8)
    - [Returns](#returns-8)
    - [Defined in](#defined-in-8)
    - [Parameters](#parameters-9)
    - [Returns](#returns-9)
    - [Defined in](#defined-in-9)
    - [Parameters](#parameters-10)
    - [Returns](#returns-10)
    - [Defined in](#defined-in-10)
    - [Parameters](#parameters-11)
    - [Returns](#returns-11)
    - [Defined in](#defined-in-11)
    - [Parameters](#parameters-12)
    - [Returns](#returns-12)
    - [Defined in](#defined-in-12)
    - [Parameters](#parameters-13)
    - [Returns](#returns-13)
    - [Defined in](#defined-in-13)
  - [Classes](#classes-4)
  - [Functions](#functions-4)
- [Classes](#classes-5)
    - [Constructors](#constructors-2)
    - [Properties](#properties-2)
    - [Accessors](#accessors-2)
    - [Methods](#methods-2)
- [Functions](#functions-5)
    - [Parameters](#parameters-14)
    - [Returns](#returns-14)
    - [Defined in](#defined-in-14)
    - [Parameters](#parameters-15)
    - [Returns](#returns-15)
    - [Defined in](#defined-in-15)
    - [Parameters](#parameters-16)
    - [Returns](#returns-16)
    - [Defined in](#defined-in-16)
    - [Parameters](#parameters-17)
    - [Returns](#returns-17)
    - [Defined in](#defined-in-17)
    - [Parameters](#parameters-18)
    - [Returns](#returns-18)
    - [Defined in](#defined-in-18)
    - [Parameters](#parameters-19)
    - [Returns](#returns-19)
    - [Defined in](#defined-in-19)
    - [Parameters](#parameters-20)
    - [Returns](#returns-20)
    - [Defined in](#defined-in-20)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<a name="readmemd"></a>

**@naszos/utils** • **Docs**

---

# @naszos/utils

## Classes

- [Vector2](#classesvector2md)

## Functions

- [clamp](#functionsclampmd)
- [clampLeft](#functionsclampleftmd)
- [clampRight](#functionsclamprightmd)
- [lerp](#functionslerpmd)
- [randomFloat](#functionsrandomfloatmd)
- [randomInt](#functionsrandomintmd)
- [range](#functionsrangemd)

# Classes

<a name="classesvector2md"></a>

[**@naszos/utils**](#readmemd) • **Docs**

---

[@naszos/utils](#readmemd) / Vector2

## Class: Vector2

### Constructors

#### new Vector2()

> **new Vector2**(`x`, `y`): [`Vector2`](#classesvector2md)

##### Parameters

• **x**: `number`

• **y**: `number`

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:7

### Properties

#### x

> **x**: `number`

##### Defined in

vector/Vector2.ts:4

---

#### y

> **y**: `number`

##### Defined in

vector/Vector2.ts:5

### Accessors

#### angle

##### Get Signature

> **get** **angle**(): `number`

###### Returns

`number`

##### Set Signature

> **set** **angle**(`angle`): `void`

###### Parameters

• **angle**: `number`

###### Returns

`void`

##### Defined in

vector/Vector2.ts:22

---

#### length

##### Get Signature

> **get** **length**(): `number`

###### Returns

`number`

##### Set Signature

> **set** **length**(`length`): `void`

###### Parameters

• **length**: `number`

###### Returns

`void`

##### Defined in

vector/Vector2.ts:12

### Methods

#### abs()

> **abs**(): [`Vector2`](#classesvector2md)

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:83

---

#### add()

> **add**(`v`): [`Vector2`](#classesvector2md)

##### Parameters

• **v**: [`Vector2`](#classesvector2md)

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:51

---

#### angleTo()

> **angleTo**(`v`): `number`

##### Parameters

• **v**: [`Vector2`](#classesvector2md)

##### Returns

`number`

##### Defined in

vector/Vector2.ts:79

---

#### clone()

> **clone**(): [`Vector2`](#classesvector2md)

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:67

---

#### distanceTo()

> **distanceTo**(`v`): `number`

##### Parameters

• **v**: [`Vector2`](#classesvector2md)

##### Returns

`number`

##### Defined in

vector/Vector2.ts:75

---

#### divide()

> **divide**(`value`): [`Vector2`](#classesvector2md)

##### Parameters

• **value**: `number`

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:63

---

#### multiply()

> **multiply**(`value`): [`Vector2`](#classesvector2md)

##### Parameters

• **value**: `number`

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:59

---

#### normalized()

> **normalized**(): [`Vector2`](#classesvector2md)

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:71

---

#### subtract()

> **subtract**(`v`): [`Vector2`](#classesvector2md)

##### Parameters

• **v**: [`Vector2`](#classesvector2md)

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:55

---

#### withAngle()

> **withAngle**(`angle`): [`Vector2`](#classesvector2md)

##### Parameters

• **angle**: `number`

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:38

---

#### withLength()

> **withLength**(`length`): [`Vector2`](#classesvector2md)

##### Parameters

• **length**: `number`

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:32

---

#### withX()

> **withX**(`x`): [`Vector2`](#classesvector2md)

##### Parameters

• **x**: `number`

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:44

---

#### withY()

> **withY**(`y`): [`Vector2`](#classesvector2md)

##### Parameters

• **y**: `number`

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:47

---

#### down()

> `static` **down**(): [`Vector2`](#classesvector2md)

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:105

---

#### left()

> `static` **left**(): [`Vector2`](#classesvector2md)

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:108

---

#### one()

> `static` **one**(): [`Vector2`](#classesvector2md)

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:98

---

#### random()

> `static` **random**(`__namedParameters`, `__namedParameters`): [`Vector2`](#classesvector2md)

##### Parameters

• **\_\_namedParameters**: [`number`, `number`] = `...`

• **\_\_namedParameters**: [`number`, `number`] = `...`

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:87

---

#### right()

> `static` **right**(): [`Vector2`](#classesvector2md)

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:111

---

#### up()

> `static` **up**(): [`Vector2`](#classesvector2md)

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:102

---

#### zero()

> `static` **zero**(): [`Vector2`](#classesvector2md)

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:94

# Functions

<a name="functionsclampmd"></a>

[**@naszos/utils**](#readmemd) • **Docs**

---

[@naszos/utils](#readmemd) / clamp

## Function: clamp()

> **clamp**(`value`, `min`, `max`, `onOutOfBounds`?): `number`

Clamps a value between a minimum and maximum value

### Parameters

• **value**: `number`

Value to be clamped

• **min**: `number`

Minimum value

• **max**: `number`

Maximum value

• **onOutOfBounds?**: `VoidFunction`

Function to be called if value is out of bounds

### Returns

`number`

Clamped value

### Defined in

numbers/clamp.ts:9

<a name="functionsclampleftmd"></a>

[**@naszos/utils**](#readmemd) • **Docs**

---

[@naszos/utils](#readmemd) / clampLeft

## Function: clampLeft()

> **clampLeft**(`value`, `min`, `onOutOfBounds`?): `number`

### Parameters

• **value**: `number`

• **min**: `number`

• **onOutOfBounds?**: `VoidFunction`

### Returns

`number`

### Defined in

numbers/clamp.ts:26

<a name="functionsclamprightmd"></a>

[**@naszos/utils**](#readmemd) • **Docs**

---

[@naszos/utils](#readmemd) / clampRight

## Function: clampRight()

> **clampRight**(`value`, `max`, `onOutOfBounds`?): `number`

### Parameters

• **value**: `number`

• **max**: `number`

• **onOutOfBounds?**: `VoidFunction`

### Returns

`number`

### Defined in

numbers/clamp.ts:34

<a name="functionslerpmd"></a>

[**@naszos/utils**](#readmemd) • **Docs**

---

[@naszos/utils](#readmemd) / lerp

## Function: lerp()

> **lerp**(`start`, `end`, `progress`): `number`

Interpolates between start and end value

### Parameters

• **start**: `number`

Minimum value

• **end**: `number`

Maximum value

• **progress**: `number`

Value from 0 to 1

### Returns

`number`

Interpolated value

### Defined in

numbers/interpolate.ts:8

<a name="functionsrandomfloatmd"></a>

[**@naszos/utils**](#readmemd) • **Docs**

---

[@naszos/utils](#readmemd) / randomFloat

## Function: randomFloat()

> **randomFloat**(`min`, `max`): `number`

Returns random float value from min to max [min,max)

### Parameters

• **min**: `number` = `0`

Minimum value

• **max**: `number` = `1`

Maximum value

### Returns

`number`

Random float value

### Defined in

numbers/random.ts:7

<a name="functionsrandomintmd"></a>

[**@naszos/utils**](#readmemd) • **Docs**

---

[@naszos/utils](#readmemd) / randomInt

## Function: randomInt()

> **randomInt**(`min`, `max`): `number`

Returns random int value from min to max [min,max)

### Parameters

• **min**: `number` = `0`

Minimum value

• **max**: `number` = `1`

Maximum value

### Returns

`number`

Random int value

### Defined in

numbers/random.ts:17

<a name="functionsrangemd"></a>

[**@naszos/utils**](#readmemd) • **Docs**

---

[@naszos/utils](#readmemd) / range

## Function: range()

> **range**(`start`, `end`?, `step`?): `number`[]

Create an array of numbers from start to end-1 (or from 0 to given number -1)

### Parameters

• **start**: `number`

First value if second argument is provided. If that's the only argument it's treated as end param and range starts from 0

• **end?**: `number`

Last value will equal to end-1

• **step?**: `number` = `1`

By how much each value should increase

### Returns

`number`[]

Array of numbers [start, end) where each value increases by step

### Defined in

numbers/range.ts:7

## Classes

- [Vector2](#classesvector2md)

## Functions

- [clamp](#functionsclampmd)
- [clampLeft](#functionsclampleftmd)
- [clampRight](#functionsclamprightmd)
- [lerp](#functionslerpmd)
- [randomFloat](#functionsrandomfloatmd)
- [randomInt](#functionsrandomintmd)
- [range](#functionsrangemd)

# Classes

<a name="classesvector2md"></a>

### Constructors

#### new Vector2()

```ts
new Vector2(x, y): Vector2
```

##### Parameters

• **x**: `number`

• **y**: `number`

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:7

### Properties

#### x

```ts
x: number;
```

##### Defined in

vector/Vector2.ts:4

---

#### y

```ts
y: number;
```

##### Defined in

vector/Vector2.ts:5

### Accessors

#### angle

##### Get Signature

```ts
get angle(): number
```

###### Returns

`number`

##### Set Signature

```ts
set angle(angle): void
```

###### Parameters

• **angle**: `number`

###### Returns

`void`

##### Defined in

vector/Vector2.ts:22

---

#### length

##### Get Signature

```ts
get length(): number
```

###### Returns

`number`

##### Set Signature

```ts
set length(length): void
```

###### Parameters

• **length**: `number`

###### Returns

`void`

##### Defined in

vector/Vector2.ts:12

### Methods

#### abs()

```ts
abs(): Vector2
```

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:83

---

#### add()

```ts
add(v): Vector2
```

##### Parameters

• **v**: [`Vector2`](#classesvector2md)

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:51

---

#### angleTo()

```ts
angleTo(v): number
```

##### Parameters

• **v**: [`Vector2`](#classesvector2md)

##### Returns

`number`

##### Defined in

vector/Vector2.ts:79

---

#### clone()

```ts
clone(): Vector2
```

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:67

---

#### distanceTo()

```ts
distanceTo(v): number
```

##### Parameters

• **v**: [`Vector2`](#classesvector2md)

##### Returns

`number`

##### Defined in

vector/Vector2.ts:75

---

#### divide()

```ts
divide(value): Vector2
```

##### Parameters

• **value**: `number`

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:63

---

#### multiply()

```ts
multiply(value): Vector2
```

##### Parameters

• **value**: `number`

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:59

---

#### normalized()

```ts
normalized(): Vector2
```

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:71

---

#### subtract()

```ts
subtract(v): Vector2
```

##### Parameters

• **v**: [`Vector2`](#classesvector2md)

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:55

---

#### withAngle()

```ts
withAngle(angle): Vector2
```

##### Parameters

• **angle**: `number`

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:38

---

#### withLength()

```ts
withLength(length): Vector2
```

##### Parameters

• **length**: `number`

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:32

---

#### withX()

```ts
withX(x): Vector2
```

##### Parameters

• **x**: `number`

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:44

---

#### withY()

```ts
withY(y): Vector2
```

##### Parameters

• **y**: `number`

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:47

---

#### down()

```ts
static down(): Vector2
```

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:105

---

#### left()

```ts
static left(): Vector2
```

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:108

---

#### one()

```ts
static one(): Vector2
```

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:98

---

#### random()

```ts
static random(__namedParameters, __namedParameters): Vector2
```

##### Parameters

• **\_\_namedParameters**: [`number`, `number`] = `...`

• **\_\_namedParameters**: [`number`, `number`] = `...`

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:87

---

#### right()

```ts
static right(): Vector2
```

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:111

---

#### up()

```ts
static up(): Vector2
```

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:102

---

#### zero()

```ts
static zero(): Vector2
```

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:94

# Functions

<a name="functionsclampmd"></a>

```ts
function clamp(value, min, max, onOutOfBounds?): number;
```

Clamps a value between a minimum and maximum value

### Parameters

• **value**: `number`

Value to be clamped

• **min**: `number`

Minimum value

• **max**: `number`

Maximum value

• **onOutOfBounds?**: `VoidFunction`

Function to be called if value is out of bounds

### Returns

`number`

Clamped value

### Defined in

numbers/clamp.ts:9

<a name="functionsclampleftmd"></a>

```ts
function clampLeft(value, min, onOutOfBounds?): number;
```

### Parameters

• **value**: `number`

• **min**: `number`

• **onOutOfBounds?**: `VoidFunction`

### Returns

`number`

### Defined in

numbers/clamp.ts:26

<a name="functionsclamprightmd"></a>

```ts
function clampRight(value, max, onOutOfBounds?): number;
```

### Parameters

• **value**: `number`

• **max**: `number`

• **onOutOfBounds?**: `VoidFunction`

### Returns

`number`

### Defined in

numbers/clamp.ts:34

<a name="functionslerpmd"></a>

```ts
function lerp(start, end, progress): number;
```

Interpolates between start and end value

### Parameters

• **start**: `number`

Minimum value

• **end**: `number`

Maximum value

• **progress**: `number`

Value from 0 to 1

### Returns

`number`

Interpolated value

### Defined in

numbers/interpolate.ts:8

<a name="functionsrandomfloatmd"></a>

```ts
function randomFloat(min, max): number;
```

Returns random float value from min to max [min,max)

### Parameters

• **min**: `number` = `0`

Minimum value

• **max**: `number` = `1`

Maximum value

### Returns

`number`

Random float value

### Defined in

numbers/random.ts:7

<a name="functionsrandomintmd"></a>

```ts
function randomInt(min, max): number;
```

Returns random int value from min to max [min,max)

### Parameters

• **min**: `number` = `0`

Minimum value

• **max**: `number` = `1`

Maximum value

### Returns

`number`

Random int value

### Defined in

numbers/random.ts:17

<a name="functionsrangemd"></a>

```ts
function range(start, end?, step?): number[];
```

Create an array of numbers from start to end-1 (or from 0 to given number -1)

### Parameters

• **start**: `number`

First value if second argument is provided. If that's the only argument it's treated as end param and range starts from 0

• **end?**: `number`

Last value will equal to end-1

• **step?**: `number` = `1`

By how much each value should increase

### Returns

`number`[]

Array of numbers [start, end) where each value increases by step

### Defined in

numbers/range.ts:7

## Classes

- [Vector2](#classesvector2md)

## Functions

- [clamp](#functionsclampmd)
- [clampLeft](#functionsclampleftmd)
- [clampRight](#functionsclamprightmd)
- [lerp](#functionslerpmd)
- [randomFloat](#functionsrandomfloatmd)
- [randomInt](#functionsrandomintmd)
- [range](#functionsrangemd)

# Classes

<a name="classesvector2md"></a>

### Constructors

#### new Vector2()

```ts
new Vector2(x, y): Vector2
```

##### Parameters

• **x**: `number`

• **y**: `number`

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:7

### Properties

#### x

```ts
x: number;
```

##### Defined in

vector/Vector2.ts:4

***

#### y

```ts
y: number;
```

##### Defined in

vector/Vector2.ts:5

### Accessors

#### angle

##### Get Signature

```ts
get angle(): number
```

###### Returns

`number`

##### Set Signature

```ts
set angle(angle): void
```

###### Parameters

• **angle**: `number`

###### Returns

`void`

##### Defined in

vector/Vector2.ts:22

***

#### length

##### Get Signature

```ts
get length(): number
```

###### Returns

`number`

##### Set Signature

```ts
set length(length): void
```

###### Parameters

• **length**: `number`

###### Returns

`void`

##### Defined in

vector/Vector2.ts:12

### Methods

#### abs()

```ts
abs(): Vector2
```

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:83

***

#### add()

```ts
add(v): Vector2
```

##### Parameters

• **v**: [`Vector2`](#classesvector2md)

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:51

***

#### angleTo()

```ts
angleTo(v): number
```

##### Parameters

• **v**: [`Vector2`](#classesvector2md)

##### Returns

`number`

##### Defined in

vector/Vector2.ts:79

***

#### clone()

```ts
clone(): Vector2
```

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:67

***

#### distanceTo()

```ts
distanceTo(v): number
```

##### Parameters

• **v**: [`Vector2`](#classesvector2md)

##### Returns

`number`

##### Defined in

vector/Vector2.ts:75

***

#### divide()

```ts
divide(value): Vector2
```

##### Parameters

• **value**: `number`

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:63

***

#### multiply()

```ts
multiply(value): Vector2
```

##### Parameters

• **value**: `number`

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:59

***

#### normalized()

```ts
normalized(): Vector2
```

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:71

***

#### subtract()

```ts
subtract(v): Vector2
```

##### Parameters

• **v**: [`Vector2`](#classesvector2md)

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:55

***

#### withAngle()

```ts
withAngle(angle): Vector2
```

##### Parameters

• **angle**: `number`

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:38

***

#### withLength()

```ts
withLength(length): Vector2
```

##### Parameters

• **length**: `number`

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:32

***

#### withX()

```ts
withX(x): Vector2
```

##### Parameters

• **x**: `number`

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:44

***

#### withY()

```ts
withY(y): Vector2
```

##### Parameters

• **y**: `number`

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:47

***

#### down()

```ts
static down(): Vector2
```

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:105

***

#### left()

```ts
static left(): Vector2
```

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:108

***

#### one()

```ts
static one(): Vector2
```

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:98

***

#### random()

```ts
static random(__namedParameters, __namedParameters): Vector2
```

##### Parameters

• **\_\_namedParameters**: [`number`, `number`] = `...`

• **\_\_namedParameters**: [`number`, `number`] = `...`

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:87

***

#### right()

```ts
static right(): Vector2
```

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:111

***

#### up()

```ts
static up(): Vector2
```

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:102

***

#### zero()

```ts
static zero(): Vector2
```

##### Returns

[`Vector2`](#classesvector2md)

##### Defined in

vector/Vector2.ts:94

# Functions

<a name="functionsclampmd"></a>

```ts
function clamp(
   value, 
   min, 
   max, 
   onOutOfBounds?): number
```

Clamps a value between a minimum and maximum value

### Parameters

• **value**: `number`

Value to be clamped

• **min**: `number`

Minimum value

• **max**: `number`

Maximum value

• **onOutOfBounds?**: `VoidFunction`

Function to be called if value is out of bounds

### Returns

`number`

Clamped value

### Defined in

numbers/clamp.ts:9

<a name="functionsclampleftmd"></a>

```ts
function clampLeft(
   value, 
   min, 
   onOutOfBounds?): number
```

### Parameters

• **value**: `number`

• **min**: `number`

• **onOutOfBounds?**: `VoidFunction`

### Returns

`number`

### Defined in

numbers/clamp.ts:26

<a name="functionsclamprightmd"></a>

```ts
function clampRight(
   value, 
   max, 
   onOutOfBounds?): number
```

### Parameters

• **value**: `number`

• **max**: `number`

• **onOutOfBounds?**: `VoidFunction`

### Returns

`number`

### Defined in

numbers/clamp.ts:34

<a name="functionslerpmd"></a>

```ts
function lerp(
   start, 
   end, 
   progress): number
```

Interpolates between start and end value

### Parameters

• **start**: `number`

Minimum value

• **end**: `number`

Maximum value

• **progress**: `number`

Value from 0 to 1

### Returns

`number`

Interpolated value

### Defined in

numbers/interpolate.ts:8

<a name="functionsrandomfloatmd"></a>

```ts
function randomFloat(min, max): number
```

Returns random float value from min to max [min,max)

### Parameters

• **min**: `number` = `0`

Minimum value

• **max**: `number` = `1`

Maximum value

### Returns

`number`

Random float value

### Defined in

numbers/random.ts:7

<a name="functionsrandomintmd"></a>

```ts
function randomInt(min, max): number
```

Returns random int value from min to max [min,max)

### Parameters

• **min**: `number` = `0`

Minimum value

• **max**: `number` = `1`

Maximum value

### Returns

`number`

Random int value

### Defined in

numbers/random.ts:17

<a name="functionsrangemd"></a>

```ts
function range(
   start, 
   end?, 
   step?): number[]
```

Create an array of numbers from start to end-1 (or from 0 to given number -1)

### Parameters

• **start**: `number`

First value if second argument is provided. If that's the only argument it's treated as end param and range starts from 0

• **end?**: `number`

Last value will equal to end-1

• **step?**: `number` = `1`

By how much each value should increase

### Returns

`number`[]

Array of numbers [start, end) where each value increases by step

### Defined in

numbers/range.ts:7

## Classes

- [Vector2](classes/Vector2.md)

## Functions

- [clamp](functions/clamp.md)
- [clampLeft](functions/clampLeft.md)
- [clampRight](functions/clampRight.md)
- [lerp](functions/lerp.md)
- [randomFloat](functions/randomFloat.md)
- [randomInt](functions/randomInt.md)
- [range](functions/range.md)
