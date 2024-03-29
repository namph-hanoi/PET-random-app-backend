import * as express from 'express';
import * as Middleware from '../middleware/middleware';
import * as Routes from '../../routes';
import { AppDataSource as DBConnection } from '../../config/connection';
/**
 * @constant {express.Application}
 */
const app: express.Application = express();

DBConnection.initialize()
  .then(() => {
      console.log('🚀 Data Source has been initialized!');
  })
  .catch((err) => {
      console.error('💥 Error during Data Source initialization', err);
  });

/**
 * @constructs express.Application Middleware
 */
Middleware.configure(app);

/**
 * @constructs express.Application Routes
 */
Routes.init(app);

/**
 * @constructs express.Application Error Handler
 */
Middleware.initErrorHandler(app);

/**
 * sets port 3000 to default or unless otherwise specified in the environment
 */
app.set('port', process.env.PORT || 3000);

/**
 * sets secret to 'superSecret', otherwise specified in the environment
 */
app.set('secret', process.env.SECRET || 'superSecret');

/**
 * @exports {express.Application}
 */
export default app;
