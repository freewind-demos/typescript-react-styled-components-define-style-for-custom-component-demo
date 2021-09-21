import React from 'react'

import styled from 'styled-components';
import {Button} from './Button';

const StyledButton = styled(Button)`
  font-size: 50px;
  color: red;
`

export default function Hello() {
  return <div>
    <div>
      <Button text={'Button'}/>
    </div>
    <div>
      <StyledButton text={'StyledButton'}/>
    </div>
  </div>
}
