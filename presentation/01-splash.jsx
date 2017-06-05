import React from 'react';
import * as Tags from 'spectacle';

export default (
  <Tags.Slide bgColor='primary'>
    <Tags.Heading size={ 1 } lineHeight={ 1 } textColor='secondary'>
      <tt>webrx-react</tt>
    </Tags.Heading>
    <Tags.Text textColor='tertiary'>
      monadic development for the web using
    </Tags.Text>
    <Tags.Text textColor='tertiary'>
      <Tags.Code>RxJS</Tags.Code> and <Tags.Code>React</Tags.Code>
    </Tags.Text>
    <Tags.Appear>
      <Tags.BlockQuote>
        <Tags.Quote textSize='2rem'>
          All told, a monad in <Tags.Code>X</Tags.Code> is just a monoid in the category of endofunctors of <Tags.Code>X</Tags.Code>, with product <Tags.Code>×</Tags.Code> replaced by composition of endofunctors and unit set by the identity endofunctor.
        </Tags.Quote>
        <Tags.Cite textAlign='right'>Saunders Mac Lane</Tags.Cite>
        <Tags.Text textAlign='right' textSize='2rem'>
          <Tags.Link textColor='quartenary' href='http://books.google.com/books?id=MXboNPdTv7QC&pg=PA138&lpg=PA138&dq=%22monoid+in+the+category+of+endofunctors%22+mac+lane&source=bl&ots=feQWTkH2Uw&sig=tv-1JwaMOygKGmFE2vM2FhJVS9o&hl=en&ei=5iWsTJCkBIPSsAPQwJ36Aw&sa=X&oi=book_result&ct=result&resnum=1&ved=0CBIQ6AEwAA#v=onepage&q&f=false'>
            Categories for the Working Mathematician
          </Tags.Link>
        </Tags.Text>
      </Tags.BlockQuote>
    </Tags.Appear>
  </Tags.Slide>
);
