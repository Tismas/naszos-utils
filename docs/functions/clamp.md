```ts
function clamp(
   value, 
   min, 
   max, 
   onOutOfBounds?): number
```

Clamps a value between a minimum and maximum value

## Parameters

• **value**: `number`

Value to be clamped

• **min**: `number`

Minimum value

• **max**: `number`

Maximum value

• **onOutOfBounds?**: `VoidFunction`

Function to be called if value is out of bounds

## Returns

`number`

Clamped value

## Defined in

[numbers/clamp.ts:9](https://github.com/Tismas/naszos-utils/blob/d1a1eb2a775799ea1a271a00b3a6cade833871d8/src/numbers/clamp.ts#L9)
