import {
    StyledTitle,
    Avatar,
    StyledButton,
    ButtonGroup,
    StyledFormArea,
    colors,
    ExtraText
} from '../components/Styles';

// logo
import Logo from '../assets/logo.png';

// auth & redux
import { connect } from 'react-redux';
import {logoutAdmin} from '../auth/actions/userActions';

// react router 
import { useNavigate } from 'react-router-dom';

const AdminDashboard = ({logoutAdmin, user}) => {
    const navigate = useNavigate();
    return(
        <div>
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                backgroundColor: "transparent",
                width: "100%",
                padding: "15px",
                display: "flex",
                justifyContent: "flex-start",
            }}>
                <Avatar image={Logo} />
            </div>
            <StyledFormArea bg={colors.dark2}>
                <StyledTitle size={65}>
                    Welcome Admin!
                </StyledTitle>

                <ExtraText color={colors.light1}>{user.email}</ExtraText>

                <ButtonGroup>
                    <StyledButton to="/"
                    onClick={() => logoutAdmin(navigate)}
                    >Logout</StyledButton>
                </ButtonGroup>
            </StyledFormArea>
        </div>
    );
}

const mapStateToProps = ({session}) => ({
    user: session.user
})

export default connect(mapStateToProps, {logoutAdmin})(AdminDashboard);