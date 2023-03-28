import { REMOVE_FAVORITE } from '../../constants/constants';
import { removePhotoFromFavorites } from '../../utils/storage';
import './FullPhoto.scss';

interface Props {
  src: string;
  id: string;
}

function FullPhoto({ src, id }: Props): JSX.Element {
  const removeFavorite = (): void => {
    removePhotoFromFavorites(id);
  };

  return (
    <div className="full-photo">
      <img src={src} />
      <button type="button" onClick={() => removeFavorite()}>
        {REMOVE_FAVORITE}
      </button>
    </div>
  );
}

export default FullPhoto;
