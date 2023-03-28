import './PhotoDetail.scss';

interface Props {
  src: string;
}

function PhotoDetail({ src }: Props): JSX.Element {
  // Single photo component
  // TODO: Adapt it for favorites and single photo component
  return (
    <div className="photo-wrapper">
      <img src={src} />
    </div>
  );
}

export default PhotoDetail;
