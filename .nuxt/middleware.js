const middleware = {}

middleware['preventIfAuthenticated'] = require('@/middleware/preventIfAuthenticated.js');
middleware['preventIfAuthenticated'] = middleware['preventIfAuthenticated'].default || middleware['preventIfAuthenticated']

export default middleware
