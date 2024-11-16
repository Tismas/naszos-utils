```ts
function createAnimator(options): () => number
```

## Parameters

• **options**: [`AnimatorOptions`](../interfaces/AnimatorOptions.md) = `{}`

## Returns

`Function`

Tick function which returns a value from minValue to maxValue with every call. If loop is set to true it will go back from maxValue to minValue, otherwise it will reset the value to minValue when reaching maxValue

### Returns

`number`

## Defined in

[numbers/animate.ts:16](https://github.com/Tismas/naszos-utils/blob/4c7f3cf5cc9cb0967eb0ee45a68ceee96b31079a/src/numbers/animate.ts#L16)
