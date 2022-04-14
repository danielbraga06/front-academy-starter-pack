import './styles.css';

import Card from "../../../../Components/Card";
import Heading from '../../../../Components/Heading';

import Html from "./assets/html.png";
import Css from "./assets/css.png";
import JavaScript from "./assets/javascript.png";
import ReactImage from "./assets/react.png";
import Git from "./assets/git.png";

function Technologies() {
    return (
        <Card>
            <div className='technologies-container'>
                <div className='technologies__header'>
                    <Heading fontSize={24}>
                        Tecnologias e frameworks
                    </Heading>
                </div>
                <div className='technologies__content'>
                    <img alt='HTML5' src={Html} width={55} />
                    <img alt='CSS3' src={Css} width={55} />
                    <img alt='JAVASRIPT' src={JavaScript} width={48} />
                    <img alt='REACT' src={ReactImage} width={120} />
                    <img alt='GIT' src={Git} width={50} />
                </div>
            </div>
        </Card>
    )
}

export default Technologies;