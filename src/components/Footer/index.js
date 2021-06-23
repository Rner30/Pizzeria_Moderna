import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import {FooterContainer,FooterWrap,SocialMedia,SocialMediaWrap,SocialLogo,SocialIcons,SocialIconLink } from './FooterElements'
export default function Footer() {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">Pizza</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href="/" target="blank" aria-label="Facebook" rel="noopener no referrer">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="blank" aria-label="Instagram" rel="noopener no referrer">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="blank" aria-label="Youtube" rel="noopener no referrer">
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="blank" aria-label="Twitter" rel="noopener no referrer">
                                <FaTwitter/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}
