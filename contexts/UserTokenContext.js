import React from 'react';

// let UserToken = { context: null, init: () => { this.context =  React.createContext(false)}, get: () => { return context },}
let UserTokenContext = React.createContext(false);

export default UserTokenContext;
