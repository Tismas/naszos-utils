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

[numbers/clamp.ts:9](https://github.com/Tismas/naszos-utils/blob/5086318d62b92a321f809958417cda9a8c766a3f/src/numbers/clamp.ts#L9)
