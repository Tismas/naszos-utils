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

[numbers/clamp.ts:9](https://github.com/Tismas/naszos-utils/blob/9a71c5a0416cc049a4f69cbeb82604980d2e32bf/src/numbers/clamp.ts#L9)
