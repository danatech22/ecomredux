import styled, { keyframes } from "styled-components"
//import "./loading.css"

const RingAnimate = keyframes`
  0% { transform:rotate(0deg); }
  100% { transform:rotate(360deg); }
`;

const LoaderAnimate = keyframes`
  0% { transform:rotate(45deg); }
  100% { transform:rotate(405deg); }
`;

const Container = styled.div`
  background:#262626;
  width: 100vw;
  height: 100vh;
`;

const Ring = styled.div`
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  width:150px;
  height:150px;
  background:transparent;
  border:3px solid  #3c3c3c;
  border-radius:50%;
  text-align:center;
  line-height:150px;
  font-family:sans-serif;
  font-size:40px;
  color: teal;
  letter-spacing:4px;
  text-shadow:0 0 10px teal;
  box-shadow:0 0 20px rgba(0,0,0,.5);

  &:before {
    content:'';
  position:absolute;
  top:-3px;
  left:-3px;
  width:100%;
  height:100%;
  border:3px solid transparent;
  border-top:3px solid teal;
  border-right:3px solid teal;
  border-radius:50%;
  animation: ${RingAnimate} 2s linear infinite;
  }
`;
const Loader = styled.span`
   display:block;
    position:absolute;
    top:calc(50% - 2px);
    left:50%;
    width:50%;
    height:4px;
    background:transparent;
    transform-origin:left;
    animation: ${LoaderAnimate} 2s linear infinite;

    &:before {
      content:'';
      position:absolute;
      width:16px;
      height:16px;
      border-radius:50%;
      background: teal;
      top:-6px;
      right:-8px;
      box-shadow:0 0 20px teal;
    }
`;

const Loading = () => {
  return (
    <Container>
       <Ring>dana.
        <Loader></Loader>
      </Ring>
    </Container>
  )
}

export default Loading