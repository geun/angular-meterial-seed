'use strict';

angular.module('plipApiAdminApp')
  .constant('configuration', {
    foo: '@@foo',
    apiEndpoint: '@@apiEndpoint',
    pubnubPublishKey: '@@pubnubPublishKey',
    pubnubSubscribeKey: '@@pubnubSubscribeKey',
    pubnubSecretKey: '@@pubnubSecretKey',
    notificationSocketType: '@@notificationSocketType',
    socketHeartbeatInterval: '@@socketHeartbeatInterval',
    socketHeartbeatTimeout: '@@socketHeartbeatTimeout'
  });
