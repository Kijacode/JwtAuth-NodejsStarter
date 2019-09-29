const router = express.Router();
const verify =  require("../db/verifyToken");

router.get('/',verify, (req, res) => {

     res.json({posts:{title :'my first posts',descrimination:"random data should not be accessed easily"},});

});