import { useState } from "react";
import styled from "styled-components";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { authFailure, authStart, authSuccess } from "../redux/userRedux";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
    background-color: white;
    padding: 20px;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;  

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    padding: 10px;
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

const Register = () => {
    const dispatch = useDispatch();
    const [error , setError] = useState(false);
    const [userData, setuserData] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        confirm_password: "",
    });

    const handleChange = (e) => {
        setuserData(
            {
                ...userData, [e.target.name]: e.target.value 
            }
        );
    };

   const handleSubmit = async (e) => {
    e.preventDefault();
    if (userData.password !== userData.confirm_password){
        setError(true);
    }else{
    try {
        dispatch(authStart())
        const res = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
        await setDoc(doc(db, "users", res.user.uid),{
            ...userData, 
        });
        dispatch(authSuccess(res.user));
    } catch (error) {
        dispatch(authFailure(error));
    }
    }
   };

  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input name="first_name"  onChange={handleChange} placeholder="first name"/>
                <Input name="last_name" onChange={handleChange} placeholder="last name"/>
                <Input name="username" onChange={handleChange} placeholder="username"/>
                <Input name="email" onChange={handleChange} placeholder="email"/>
                <Input name="password" onChange={handleChange} placeholder="password"/>
                {error && (<Agreement>Confirm Password is not equal to Password</Agreement>)};
                <Input name="confirm_password" onChange={handleChange} placeholder="confirm password"/>
                <Agreement>
                    By creating an account, I consent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button onClick={handleSubmit}>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register