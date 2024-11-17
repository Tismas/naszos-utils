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

[numbers/clamp.ts:9](https://github.com/Tismas/naszos-utils/blob/17b33842abc2ec4b3d89cd93065f656880e196df/src/numbers/clamp.ts#L9)
