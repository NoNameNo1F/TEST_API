
class SearchController {
    // [GET] /
    index(req,res) {
        res.render('search');
    };

    return(req, res) {
        console.log(req.body);
        res.send('received query');
    };
};

export default SearchController = new SearchController;

