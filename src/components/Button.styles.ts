import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
    variant: ButtonVariant
}

const buttonVariants = {
    'primary': 'purple',
    'secondary': 'orange',
    'danger': 'red',
    'success': 'green',

}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 50px;

    ${props => {
        return css`
            background: ${buttonVariants[props.variant]}
        `
    }}
`