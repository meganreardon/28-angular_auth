'use strict';

module.exports = ['$logProvider', logConfig];

function logConfig($logProvider) {
  $logProvider.debugEnabled(__DEBUG__); // turn on or off // eslint.diable.line
}
