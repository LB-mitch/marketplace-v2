import { styled } from 'stitches.config'

export const Anchor = styled('a', {
  cursor: 'pointer',
  fontFamily: '$body',
  fontSize: 16,
  $$focusColor: '$colors$gray12',
  '&:focus-visible': {
    color: '$gray12',
    outline: 'none',
    boxShadow: '0 0 0 2px $$focusColor',
  },
  variants: {
    color: {
      primary: {
        color: '$primary11',
        '&:hover': {
          color: '$primary10',
        },
      },
      gray: {
        color: '$gray11',
        '&:hover': {
          color: '$primary11',
        },
      },
    },
    weight: {
      heavy: {
        fontWeight: 700,
      },
      medium: {
        fontWeight: 500,
      },
    },
  },
  defaultVariants: {
    color: 'gray',
    weight: 'heavy',
  },
})