import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { authLogout, authStart, authFailure } from '../redux/userRedux';


const Container = styled.div`
    height: 60px;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 7;
    background-color: white;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
   
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
    &:focus {
        outline: none;
    }
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`;

const Button = styled.button`
    width: 100%;
    border: none;
    padding: 15px 20px;
    background-color: transparent;
    color: black;
    cursor: pointer;
`;


const Navbar = () => {
    const quantity = useSelector((state)=>state.cart.quantity);
    const dispatch = useDispatch();
    
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(authStart());
        signOut(auth).then(() => {
            dispatch(authLogout())
          }).catch((error) => {
            dispatch(authFailure(error));
          });
    };

  return (
    <Container>
        <Wrapper>
           <Left>
            <Language>EN</Language>
            <SearchContainer>
                <Input type='text'/>
                <SearchIcon style={{ color: "gray", fontSize: "16px" }}/>
            </SearchContainer>
           </Left>
           <Center>
           <Link to="/" style={{ textDecoration: 'none' }}>
            <Logo>dana.</Logo>
           </Link>
           </Center>
           <Right>
           
            <MenuItem>
                <Button onClick={handleLogout}>SIGN OUT</Button>
            </MenuItem>
            <Link to="/cart">
                <MenuItem>
                    <Badge badgeContent={quantity} color="primary">
                    <ShoppingCartOutlinedIcon />
                    </Badge>
                </MenuItem>
            </Link>
           </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar