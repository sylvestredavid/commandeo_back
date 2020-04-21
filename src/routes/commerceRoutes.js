import {
    addCommerce,
    getCommerces,
    updateCommerce,
    getCommerceByVille,
    searchCommerce,
    deleteCommerce,
    getCommerceByUserId
} from '../controllers/commerceController'
import {loginRequired} from '../controllers/userController'

export const commerceRoutes = (app) => {
    app.route('/commerces')
        .get(getCommerces)
        .post(loginRequired, addCommerce)

    app.route('/commerces/:commerceId')
        .put(loginRequired, updateCommerce)
        .delete(loginRequired, deleteCommerce)

    app.route('/commercesByUserId/:userId')
        .get(getCommerceByUserId)

    app.route('/commercesByVille/:ville')
        .get((req, res, next) => {
            console.log(req)
            next()
        }, getCommerceByVille)

    app.route('/searchCommerces')
        .get((req, res, next) => {
            console.log(req.query)
            next()
        }, searchCommerce)
}