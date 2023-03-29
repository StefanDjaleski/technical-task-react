import { NOT_FOUND } from '../../constants/constants';
import './404.scss';

function NotFound(): JSX.Element {
  return <div className="not-found">{NOT_FOUND}</div>;
}

export default NotFound;
