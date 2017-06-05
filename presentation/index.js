// Import React
import React from 'react';

// Import Spectacle Core tags
import * as Tags from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Import prismjs
import 'prismjs';
import 'prismjs/components/prism-jsx';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');
require('prismjs/themes/prism-tomorrow.css');
require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/css/font-awesome.css');
require('./style.css');

// http://paletton.com/#uid=13n0u0kobpudpS7l8AYpAdhuX4D
const theme = createTheme(
  {
    primary: '#011317',
    secondary: '#87D2E4',
    tertiary: '#3F9BB0',
    quartenary: '#216C7E'
  },
  {
    primary: 'Montserrat',
    secondary: 'Verdana'
  },
);

// patch the default text color on some components
theme.screen.components.code.color = theme.screen.colors.secondary;
theme.screen.components.quote.color = theme.screen.colors.secondary;
theme.screen.components.heading.h3.color = theme.screen.colors.secondary;
theme.screen.components.heading.h4.color = theme.screen.colors.secondary;
theme.screen.components.heading.h5.color = theme.screen.colors.secondary;
theme.screen.components.heading.h6.color = theme.screen.colors.secondary;
theme.screen.components.text.color = theme.screen.colors.secondary;

// patch code pane default font size and padding
theme.screen.components.codePane.pre.fontSize = theme.screen.components.code.fontSize;
theme.screen.components.codePane.pre.padding = '10px';

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
        { MarkdownSlides(require('./test.md')) }
        {/*<Slide transition={['zoom']} bgColor='primary'>
          <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
            Spectacle Boilerplate
          </Heading>
          <Text margin='10px 0 0' textColor='tertiary' size={1} fit bold>
            open the presentation/index.js file to get started
          </Text>
        </Slide>*/}
        {/*<Slide transition={['fade']} bgColor='tertiary'>
          <Heading size={6} textColor='primary' caps>Typography</Heading>
          <Heading size={1} textColor='secondary'>Heading 1</Heading>
          <Heading size={2} textColor='secondary'>Heading 2</Heading>
          <Heading size={3} textColor='secondary'>Heading 3</Heading>
          <Heading size={4} textColor='secondary'>Heading 4</Heading>
          <Heading size={5} textColor='secondary'>Heading 5</Heading>
          <Text size={6} textColor='secondary'>Standard text</Text>
        </Slide>*/}
        {/*<Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
          <Heading size={6} textColor='secondary' caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>*/}
        {/*<Slide transition={['fade']} bgColor='secondary' textColor='primary'>
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>*/}
      </Deck>
    );
  }
}
