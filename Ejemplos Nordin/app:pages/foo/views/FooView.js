/**
 * Module dependencies
 */
const React = require('react');
const PropTypes = require('prop-types');
const Head = require('react-declarative-head');
const Script = require('nordic/script');
const Page = require('nordic/page');
const injectI18n = require('nordic/i18n/injectI18n');

const Card = require('@andes/card');

/**
 * FooView Component
 */
const FooView = ({ i18n, layout }) => {
  const state = { i18n, layout };

  return (
    <Page name="foo" state={state}>
      <Head>
        <title>{layout.title}</title>
      </Head>

      <Card>
        <Card.CardHeader>
          <h2>{layout.title}</h2>
        </Card.CardHeader>
      </Card>

    </Page>
  );
};

FooView.propTypes = {
  i18n: PropTypes.func.isRequired,
  layout: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
};

/**
 * Inject i18n context as props into FooView.
 */
module.exports = injectI18n(FooView);
