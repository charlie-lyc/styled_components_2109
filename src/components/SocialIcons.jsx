import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { StyledSocialIcons } from './styles/SocialIcons.styled'


export default function SocialIcons() {
    return (
        <>
            {/* 
            <div>
                <h1>Social Icons</h1>
            </div> 
            */}
            
            <StyledSocialIcons>
                <li>
                    <a href='https://twitter.com'>
                    <FaTwitter />
                    </a>
                </li>
                <li>
                    <a href='https://facebook.com'>
                    <FaFacebook />
                    </a>
                </li>
                <li>
                    <a href='https://linkedin.com'>
                    <FaLinkedin />
                    </a>
                </li>
            </StyledSocialIcons>
        </>
    )
}