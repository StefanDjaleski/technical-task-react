import './PhotoDetail.scss';

interface Props {
  src: string;
}

function PhotoDetail({ src }: Props): JSX.Element {
  return (
    <div className="photo-wrapper">
      <img src={src} />
    </div>
  );
}

export default PhotoDetail;
