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

[numbers/clamp.ts:9](https://github.com/Tismas/naszos-utils/blob/c1ededb0927e11e7aa1a04fa546f95ae3dba72d9/src/numbers/clamp.ts#L9)
