import styled from 'styled-components/native'

export const input = styled.TextInput`
  background-color: #fff;
  margin: 10px;
  padding: 8px 16px;
  border-radius: 16px;
  font-size: 16px;
  flex: auto;
  caret-color: red;
  border: 2px #ff4a4a;
`

export const search = styled.TouchableOpacity`
  margin-right: 10px;
  background-color: #ff4a4a;
  padding: 7px;
  border-radius: 16px;
`

export const div = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 0;
  z-index: 999;
`