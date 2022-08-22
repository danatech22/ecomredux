import styled from "styled-components"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';

const Container = styled.div`
    display: flex;
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.div`
    margin: 20px 0;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.p`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props)=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;    
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 20px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;    
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>dana.</Logo>
            <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Consequuntur voluptatum adipisci, corporis natus molestias ab 
            corrupti suscipit, odit quidem laboriosam animi beatae cum eos 
            ipsam hic distinctio! Corrupti, eaque soluta?
            </Desc>
            <SocialContainer>
                <SocialIcon color="3b5999">
                     <FacebookIcon />
                </SocialIcon>
                <SocialIcon color="e4405f">
                     <InstagramIcon />
                </SocialIcon>
                <SocialIcon color="55acee">
                     <TwitterIcon />
                </SocialIcon>
                <SocialIcon color="e60023">
                     <LinkedInIcon />
                </SocialIcon>
                <SocialIcon color="e4405f">
                     <GitHubIcon />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men's Fashion</ListItem>
                <ListItem>Women's Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Accounts</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>WishLists</ListItem>
                <ListItem>Terms</ListItem>
                <ListItem>Smile</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><RoomIcon style={{marginRight:"10px"}}/>Somewhere between Heaven & Hell</ContactItem>
            <ContactItem><PhoneIcon style={{marginRight:"10px"}}/>0804kasibe</ContactItem>
            <ContactItem><MailOutlinedIcon style={{marginRight:"10px"}}/>contact@dana.dev</ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>
  )
}

export default Footer