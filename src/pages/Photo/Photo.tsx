import { useParams } from 'react-router-dom';
import FullPhoto from '../../components/FullPhoto/FullPhoto';
import { FavoriteItem } from '../../interfaces/FavoriteItem';
import { getPhotoFromFavorites } from '../../utils/storage';

function Photo(): JSX.Element {
  const { id } = useParams();
  const photo: FavoriteItem = getPhotoFromFavorites(id as string);

  return <FullPhoto src={photo.url} id={photo.id} />;
}

export default Photo;
