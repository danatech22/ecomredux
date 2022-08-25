import { useState } from "react";
import styled from "styled-components"
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth"
import { authFailure, authSuccess, authStart  } from "../redux/userRedux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=800")
      right bottom;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;
    background-color: white;
    padding: 20px;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;  

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`;

const Linka = styled.span``;

const Login = () => {
    const dispatch = useDispatch();
    const [userData, setuserData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setuserData(
            {
                ...userData, [e.target.name]: e.target.value 
            }
        );
    };

    console.log(userData);

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(authStart());
        signInWithEmailAndPassword (auth, userData.email, userData.password)
        .then((userCredential) => {
            const user = userCredential.user;
            dispatch(authSuccess(user));
        })
        .catch((error)=>{
            const errorMessage = error.message;
            dispatch(authFailure(errorMessage));
        });
    }

  return (
    <Container>
    <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
            <Input name="email" onChange={handleChange} placeholder="email"/>
            <Input name="password" onChange={handleChange} placeholder="password"/>
            <Button onClick={handleLogin}>LOG IN</Button>
            <Link to="/register" style={{ textDecoration: 'none' }}>
            <Linka>CREATE A NEW ACCOUNT</Linka>
            </Link>
        </Form>
    </Wrapper>
</Container>
  )
}

export default Login