import React from 'react';

import { View, Text } from 'react-native';

import styled, { css } from '@emotion/native'

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
`

const Description = styled.Text({
  color: 'hotpink'
})

const Image = styled.Image`
  padding: 40px;
`

const emotionLogo = 'https://cdn.rawgit.com/emotion-js/emotion/main/emotion.png'


/* eslint-disable-next-line */
export interface BaseProps {}

export function Base(props: BaseProps) {
  return (
    <Container
    style={css`
      border-radius: 10px;
    `}
  >
    <Description style={{ fontSize: 45, fontWeight: 'bold' }}>
      Emotion Primitives
    </Description>
    <Image
      source={{
        uri: emotionLogo,
        height: 150,
        width: 150
      }}
    />
  </Container>
  );
}

export default Base;
