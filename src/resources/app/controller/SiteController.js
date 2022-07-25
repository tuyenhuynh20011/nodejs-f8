class SiteController {
  // get
  index(req, res) {
    res.render('home');
  }
  //[GET] /search/:slug
  search(req, res) {
    res.send('search');
  }
}

module.exports = new SiteController();
