import {loginRequired} from "../controllers/userController";
import {addVille, getVilles} from "../controllers/villeController";

export const villesRoutes = (app) => {
    app.route('/villes')
        .get(getVilles)
        .post(loginRequired, addVille)
}