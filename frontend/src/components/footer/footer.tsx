import './footer.css';
import { FOOTER_TEXT, SOCIAL_MEDIA } from '../../constants';
import MediaComponent from './media-component';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='info'>
        {FOOTER_TEXT}
      </div>
      <div className='social-media'>
        {SOCIAL_MEDIA.map((item) => <MediaComponent name={item.name} key={item.id} title={item.title} href={item.href}/>)}
      </div>
    </footer>
  );
}
