```ts
function range(
   start, 
   end?, 
   step?): number[]
```

Create an array of numbers from start to end-1 (or from 0 to given number -1)

## Parameters

• **start**: `number`

First value if second argument is provided. If that's the only argument it's treated as end param and range starts from 0

• **end?**: `number`

Last value will equal to end-1

• **step?**: `number` = `1`

By how much each value should increase

## Returns

`number`[]

Array of numbers [start, end) where each value increases by step

## Defined in

[numbers/range.ts:7](https://github.com/Tismas/naszos-utils/blob/4c7f3cf5cc9cb0967eb0ee45a68ceee96b31079a/src/numbers/range.ts#L7)
