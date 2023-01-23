import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faShapes, faSliders, faArrowRightFromBracket, faCircleUser, } from '@fortawesome/free-solid-svg-icons';
import { faWindowRestore, faBell, faBookmark, faUser, } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom'

const Bar = styled.div`
    display:flex;
    position: fixed;
    flex-direction: column;
    justify-content: space-between;
    top:0;
    left:0;
    width: 100px;
    height: 100vh;
    background-color: white;
    gap: 10px;
    font-size: 40px;
    padding: 10px;
    box-sizing: border-box;
    color: ${props => props.theme.inActiveColor};
    text-align: center;
    
    .top,.bottom {
        display: flex;
        flex-direction: column;
        gap: 40px;
        svg:hover {
            color: ${props => props.theme.themeColor};
            cursor: pointer;
        }
    }
    .logo {
        font-size: 50px;
        margin-bottom: 20px;
        color: ${props => props.theme.logoColor};
    }
    .profile {
        color: ${props => props.theme.logoColor};
    }
`

export default function NavBar(){
    return(
        <Bar>
            <div className="top">
                <Link to="/">
                    <FontAwesomeIcon className="logo" icon={faBookOpen} />
                </Link>
                <FontAwesomeIcon icon={faWindowRestore} />
                <FontAwesomeIcon icon={faBell} />
                <FontAwesomeIcon icon={faBookmark} />
                <FontAwesomeIcon icon={faUser} />
                <FontAwesomeIcon icon={faSliders} />
            </div>
            <div className="bottom">
                <FontAwesomeIcon className="profile" icon={faCircleUser} />
                <Link to="/login">
                    <FontAwesomeIcon icon={faArrowRightFromBracket} />
                </Link>
            </div>
        </Bar>
    )
}