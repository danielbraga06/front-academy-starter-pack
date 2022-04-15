import Card from "../../../../Components/Card";
import UserImage from "../../../../Components/UserImage";
import Heading from "../../../../Components/Heading";
import Text from "../../../../Components/Text";
import SocialMedia from "../../../../Components/SocialMedia";
import Pin from "../../../../Components/Icons/Pin";

import "./styles.css";
import Email from "../../../../Components/Icons/Email";
import Phone from "../../../../Components/Icons/Phone";

function UserProfile() {
  return (
        <Card>
          <div className="user-profile-container">
          <div className="user-profile-container__left__user-image">
            <UserImage />
          </div>

          <div className="user-profile-container__left__content">
            <Heading fontSize={30}>Daniel Braga</Heading>

            <Heading color="#5DB9FA" fontSize={20} fontWeight={400}>
              Junior, 6 meses de experiência
            </Heading>

            <p>
              <Text>
                Trabalho como desenvolvedor há pouco tempo e estou procurando
                obter conhecimento e experiências para poder ir subindo de
                nível, meu foco é Front-End nível Jr 
                no momento.
              </Text>
            </p>

            <div className="user-info-container">
              <div className="user-info__item">
                <div className="user-info__item__icon">
                  <Pin/>
                </div>
                <Text color="#ACACAC">Rio de Janeiro, RJ - Brasil</Text>
              </div>

              <div className="user-info__item">
              <div className="user-info__item__icon">
                <Email />
              </div>
                <Text color="#ACACAC">contatocdanielbraga@gmail.com</Text>
              </div>

              <div className="user-info__item">
              <div className="user-info__item__icon">
                <Phone />
              </div>
                <Text color="#ACACAC">+55 21 99066-2859</Text>
              </div>
            </div>

            <SocialMedia />
            </div>
          </div>
        </Card>
  );
}

export default UserProfile;
