import { breakpointsMedia } from './breakpointMedia';

// eslint-disable-next-line import/prefer-default-export
export function propToStyle(propName) {
  // eslint-disable-next-line consistent-return
  return (props) => {
    const propValue = props[propName];

    if (typeof propValue === 'string' || typeof propValue === 'number') {
      return {
        // textAlign: props.textAlign
        [propName]: propValue,
      };
    }
    if (typeof propValue === 'object') {
      return breakpointsMedia({
        xs: {
          [propName]: propValue.xs,
        },
        sm: {
          [propName]: propValue.sm,
        },
        md: {
          [propName]: propValue.md,
        },
        lg: {
          [propName]: propValue.lg,
        },
        xl: {
          [propName]: propValue.xl,
        },
      });
    }
  };
}
