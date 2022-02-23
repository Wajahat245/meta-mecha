import React from 'react'
import bgImg from '../../Images/background.png'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../../Components/Header/Header'
import InfoBox from '../../Components/InfoBox/InfoBox'
import Section2 from '../../Components/Section 2/Section2'
function Layout() {
    return (
        <div style={{
            backgroundImage: `url(${bgImg})`
        }}>
            <Container>
                <Header />
                <InfoBox />
                <Section2 />
                <Section2 />    
            </Container>
        </div>


    )
}

export default Layout