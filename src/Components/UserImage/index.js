import './styles.css';
import DanielFoto from './assets/daniel-braga-foto.png';

function UserImage() {
    return (
        <div className='user-image-container'>
            <img alt="Daniel Braga Foto" src={DanielFoto}/>
        </div>
    )
}

export default UserImage;