import * as React from 'react'
import { expect, test } from 'vitest'

import { extractForNative } from './lib/extract'

process.env.TAMAGUI_TARGET = 'native'
process.env.IS_STATIC = ''

window['React'] = React

test('basic extraction', async () => {
  const output = await extractForNative(`
    import { YStack } from 'tamagui'
    export function Test() {
      return (
        <YStack backgroundColor="red" />
      )
    }
  `)
  const code = output?.code ?? ''
  expect(code).toMatchSnapshot()
})

test('theme value extraction should work when no theme variables used', async () => {
  // here we override default "$color" so it should flatten totally
  // actually since we do unstyled: false and it expands to $color it acceses it
  // were not smart enough yet to detect its later overriden :/
  // that could be a perf optimization, but also have work to improve flattening soon anyway
  const output = await extractForNative(`
    import { Paragraph } from 'tamagui'
    export function Test() {
      return (
        <Paragraph color="red">hello world</Paragraph>
      )
    }
  `)
  const code = output?.code ?? ''
  expect(code).toMatchSnapshot()
})

test('theme value extraction should NOT work when theme variables used', async () => {
  // here we DO NOT override default "$color" so it WONT flatten
  const output = await extractForNative(`
    import { Paragraph } from 'tamagui'
    export function Test() {
      return (
        <Paragraph>hello world</Paragraph>
      )
    }
  `)
  const code = output?.code ?? ''
  expect(code).toMatchSnapshot()
})

test('basic conditional extraction', async () => {
  const output = await extractForNative(`
    import { YStack } from 'tamagui'
    export function Test() {
      return (
        <>
          <YStack backgroundColor={x ? 'red' : 'blue'} />
          <YStack {...x && { backgroundColor: 'red' }} />
        </>
      )
    }
  `)
  const code = output?.code ?? ''
  expect(code).toMatchSnapshot()
})

test('flat transform props', async () => {
  const output = await extractForNative(`
    import { YStack } from 'tamagui'
    export function Test(isLoading) {
      return (
        <YStack
          scale={isLoading ? 1 : 2}
          x={10}
          y={20}
          rotate="10deg"
        />
      )
    }
  `)
  const code = output?.code ?? ''
  expect(code).toMatchSnapshot()
})

test('handles style order merge properly', async () => {
  const output = await extractForNative(`
    import { YStack } from 'tamagui'
    export function Test(props) {
      return (
        <YStack
          scale={props.isLoading ? 1 : 2}
          x={10}
          {...props}
          rotate="10deg"
        />
      )
    }
  `)
  const code = output?.code ?? ''
  expect(code).toMatchSnapshot()
})

test(`normalize ternaries flips the conditional properly`, async () => {
  const inputCode = `
  import { Stack } from 'tamagui'
  export function Test(props) {
    return (
      <Stack marginBottom={props !== 123 ? 12 : 0} />
    )
  }
`
  const output = await extractForNative(inputCode)
  const outCode = output?.code ?? ''
  expect(outCode).toContain(`props === 123 ? _sheet["1"] : _sheet["2"]`)
  expect(outCode).toMatchSnapshot()
})
