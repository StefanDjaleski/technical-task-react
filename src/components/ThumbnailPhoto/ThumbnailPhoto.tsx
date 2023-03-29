import { useLocation, useNavigate } from 'react-router-dom';
import { ADDED_TO_FAVORITES } from '../../constants/constants';
import { addFavorite } from '../../utils/storage';
import './ThumbnailPhoto.scss';

interface Props {
  src: string;
  id?: string;
}

function ThumbnailPhoto({ src, id }: Props): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();
  const path: string = location.pathname;

  const addPhotoToFavorites = (): void => {
    addFavorite(src);
    alert(ADDED_TO_FAVORITES);
  };

  const openFullPhoto = (): void => {
    navigate(`/photos/${id}`);
  };

  const actionHandler = (): void => {
    switch (path) {
      case '/':
        return addPhotoToFavorites();
      case '/favorites':
        return openFullPhoto();
      default:
        return;
    }
  };

  return (
    <div className="photo-wrapper" onClick={() => actionHandler()}>
      <img src={src} />
    </div>
  );
}

export default ThumbnailPhoto;
