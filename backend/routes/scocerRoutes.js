import {
    addNewPlayer,
    getPlayers,
    getPlayerWithID,
    updatePlayer,
    deletePlayer
} from '../contorllers/playerCountrollers';

const routes = (app) => {
    app.route('/players')
        // GET endpoint
        .get(getPlayers)

        .post(addNewPlayer);
    app.route('/player/:playerId')
        //GET player
        .get(getPlayerWithID)

        .put(updatePlayer)

        .delete(deletePlayer);



}

export default routes;