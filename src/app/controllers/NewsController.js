
class NewsController {
    // [GET] /news/index
    index(req,res) {
        res.render('news');
    };
    // [GET] /news/:slug
    show(req, res) {
        res.render('home');
    };
};

export default NewsController = new NewsController;

