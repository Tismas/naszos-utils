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

[numbers/animate.ts:16](https://github.com/Tismas/naszos-utils/blob/17b33842abc2ec4b3d89cd93065f656880e196df/src/numbers/animate.ts#L16)
