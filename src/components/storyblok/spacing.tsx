import { storyblokEditable } from '@storyblok/react/rsc'

interface SpacingProps {
  blok: {
    space?: string
  }
}

const Spacing = ({ blok }: SpacingProps) => {
  const { space } = blok

  return (
    <div
      {...storyblokEditable(blok)}
      style={{
        height: space ? `${space}px` : '10px',
      }}
    />
  )
}

export default Spacing