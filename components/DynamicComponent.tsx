import Placeholder from './Placeholder';
import Text from './Text';

const Components: any = {
  text: Text,
};

const DynamicComponent = ({ blok }: any) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component];
    return <Component blok={blok} />;
  }
  return <Placeholder componentName={blok.component} />;
};

export default DynamicComponent;
