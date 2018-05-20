import React, {Component} from 'react'
import styled from 'react-emotion'
import {connect} from 'react-redux'
import Icon from '@fortawesome/react-fontawesome'
import Slick from 'react-slick'

import Button from '../components/Button'
import SuggestedMeal from '../components/SuggestedMeal'

import landingBackdrop from '../assets/landing-backdrop-2.jpg'
import foodImage from '../assets/brooke-lark-609905-unsplash.jpg'
import salmon from '../assets/salmon.jpg'

const Slider = styled(Slick)`
  .slick-list {
    margin-bottom: 0.5em;
    box-shadow: rgba(0, 0, 0, 0.18) 0px 3px 5.5px 2px;
  }
`

const Screen = styled.div`
  width: 100%;
  min-height: 100vh;
`

const Hero = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 350px;
`

const BackgroundImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;

  background-image: url(${landingBackdrop});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  box-shadow: rgba(0, 0, 0, 0.18) 0px 3px 5.5px 2px;
`

const FadeBackdrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  background: linear-gradient(45deg, #312a6c, #852d91);
  opacity: 0.5;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  z-index: 1;

  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2em 2em;
`

const Text = styled.h1`
  color: white;
  font-size: 2.2em;
  font-family: Maitree, sans-serif;
  text-align: center;
`

const NavSheet = styled.div`
  position: absolute;
  top: 0.5em;
  left: 0;
  z-index: 2;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 0.5em 1.8em;
`

const slickSettings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3500,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const Nav = () => (
  <NavSheet>
    <div>
      <Icon icon="dove" size="2x" color="#fff" />
    </div>

    <div>
      <Icon icon={['far', 'bars']} size="2x" color="#fff" />
    </div>
  </NavSheet>
)

const CourseSlider = ({data}) => (
  <Container>
    <h1>ตารางอาหารแนะนำ</h1>
    <Slider {...slickSettings}>
      {data.map((meal, index) => <SuggestedMeal key={index} {...meal} />)}
    </Slider>
  </Container>
)

const Section = styled.div`
  position: relative;
  z-index: 1;

  color: white;
  background: #e74c3c;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 3px 5.5px 2px;
`

const Heading = styled.h1`
  color: white;
  margin: 0;
`

class Landing extends Component {
  state = {
    meals: [
      {
        title: 'อาหารใต้ต้านเบาหวาน 7 วัน',
        image: salmon,
        desc: `คอนเฟิร์มเจลการันตีดยุก โอวัลตินรันเวย์โพสต์ทาวน์บูติค บร็อคโคลีไอติมโพสต์ วินสเตอริโอโลชั่นฉลุย นิรันดร์สหรัฐ เช็งเม้งสมิติเวชเดอะบอยคอตต์ แบ็กโฮมอยส์เจอไรเซอร์ โฟล์คลามะซีอีโอไทม์ รองรับออกแบบพอเพียงเพนกวิน`,
      },
      {
        title: 'อาหารอีสานลดความดัน 7 วัน',
        image: foodImage,
        desc: `คอนเฟิร์มเจลการันตีดยุก โอวัลตินรันเวย์โพสต์ทาวน์บูติค บร็อคโคลีไอติมโพสต์ วินสเตอริโอโลชั่นฉลุย นิรันดร์สหรัฐ เช็งเม้งสมิติเวชเดอะบอยคอตต์ แบ็กโฮมอยส์เจอไรเซอร์ โฟล์คลามะซีอีโอไทม์ รองรับออกแบบพอเพียงเพนกวิน`,
      },
    ],
  }

  render() {
    return (
      <Screen>
        <Nav />
        <Hero>
          <BackgroundImage />
          <FadeBackdrop />

          <Container style={{alignItems: 'center'}}>
            <Text>
              <strong>ปิ่นโต </strong> <br /> ใส่ใจอาหารของคนวัยเก๋า
            </Text>
            <Button style={{marginTop: '1.1em'}} primary large>
              เลือกดูเมนู
            </Button>
          </Container>
        </Hero>

        <CourseSlider data={this.state.meals} />

        <Section style={{marginTop: '1.1em'}}>
          <Container style={{alignItems: 'center'}}>
            <Heading>จัดตารางอาหารสำหรับคุณ</Heading>
            <p>...</p>
            <Button large outline>
              จัดตารางอาหาร
            </Button>
          </Container>
        </Section>

        <footer style={{marginTop: '1em'}}>Hello, World.</footer>
      </Screen>
    )
  }
}

const mapStateToProps = state => ({})

const enhance = connect(mapStateToProps, {})

export default enhance(Landing)
