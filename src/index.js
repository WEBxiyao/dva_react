import dva from 'dva';
import {createBrowserHistory as createHistory} from 'history'
import './index.css';



// 1. Initialize
const app = dva({
    history: createHistory(),
  });

// 2. Plugins
// app.use({});

// 3. Model
// 这个写法是单独的每个去引用
// app.model(require('./models/example').default);
// 用这个去替代这个是遍历所有的让他自己去引用
require("./models").default.forEach(key =>app.model(key.default));

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
