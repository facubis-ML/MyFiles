/**
 * Module dependencies
 */
const React = require('react');
const config = require('nordic/config');
const I18nProvider = require('nordic/i18n/I18nProvider');
const FooView = require('./views/FooView');

const { basePath } = config.ragnar;
/**
 * Render foo
 */
exports.render = function render(req, res) {
  /**
   * View with I18nProvider
   */
  const View = props => (
    <I18nProvider i18n={req.i18n}>
      <FooView {...props} />
    </I18nProvider>
  );

  /**
   * Render View
   */
  res.render(View, {
    baseURL: `${basePath}`,
    staticMarkup: false,
    type: req.query.modal === 'true' ? 'lite' : 'full',
    layout: {
      active: 'foo',
      title: 'foo View',
    },
  });
};
