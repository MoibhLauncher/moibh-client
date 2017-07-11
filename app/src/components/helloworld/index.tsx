import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { css, withStyles } from '../../withStyles';
import { IWithStyleProps } from '../../Interfaces/react-with-style';

@withStyles(({ color }) => ({
  title: {
    'color': color.primary,
    'fontSize': '100px',
    'testAlign': 'center',
    'transition': 'color 300ms',
    ':hover': {
      color: color.secondary
    }
  }
}))
export default class Helloworld extends React.Component<IWithStyleProps, undefined> {
  public render() {
    return (
      <div>
        <h1 {...css(this.props.styles.title)}><FormattedMessage {...messages.startProjectHeader} /></h1>
      </div>
    );
  }
}
