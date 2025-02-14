import { styled } from "../styles"

const Button = styled('button', {
  backgroundColor: '$green500',
  color: '$white',
  border: 0,
  padding: '0 1rem',
  borderRadius: 8,
  height: 50
})

export default function Home() {
  return (
    <Button>Hello World</Button>
  )
}