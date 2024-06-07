import styled from 'styled-components'

const SwitchToggleStyled = styled.label`
  input[type=checkbox] {
    display: none;
  }

  .switchToggle {
    width: 56px;
    height: 32px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.input};
    position: relative;
    cursor: pointer;
    transition: 0.2s;
  }

  .circle {
    width: 24px;
    height: 24px;
    background: grey;
    border-radius: 100%;
    position: absolute;
    top: 4px;
    left: 4px;
    transition: 0.2s;
    box-shadow: 0 0px 10px 0 #bcbcbc;
  }

  input:checked + .switchToggle .circle {
    background: #fff;
    transform: translateX(100%);
    box-shadow: none;
  }

  input:checked + .switchToggle{
    background: ${({ theme }) => theme.colors.blue.action};
  }
`

type Props = {
  checked: boolean,
  onChange: (e: Evt<'input'>) => void
}

export const SwitchToggle = ({ checked, onChange }: Props) => {

  return (
    <SwitchToggleStyled>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <div className='switchToggle'>
        <div className="circle"></div>
      </div>
    </SwitchToggleStyled>
  )
}